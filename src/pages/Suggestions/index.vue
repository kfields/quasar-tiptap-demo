<template>
  <q-page padding ref="page">

    <div id="editor" class="editor" ref="editor">
      <editor-content class="editor__content" :editor="myeditor" />
    </div>

    <div class="suggestion-list" v-show="showSuggestions" ref="suggestions">
      <template v-if="hasResults">
        <div
          v-for="(user, index) in filteredUsers"
          :key="user.id"
          class="suggestion-list__item"
          :class="{ 'is-selected': navigatedUserIndex === index }"
          @click="selectUser(user)"
        >
          {{ user.name }}
        </div>
      </template>
      <div v-else class="suggestion-list__item is-empty">
        No users found
      </div>
    </div>

  </q-page>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import PageMixin from 'src/mixins/page'
import Toolbar from './toolbar'

import Fuse from 'fuse.js'
import tippy, { roundArrow } from 'tippy.js'
import { Editor, EditorContent } from 'tiptap'
import {
  HardBreak,
  Heading,
  Mention,
  Code,
  Bold,
  Italic
} from 'tiptap-extensions'

export default {
  mixins: [UiMixin, PageMixin],
  components: {
    EditorContent
  },

  data () {
    return {
      myeditor: new Editor({
        extensions: [
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new Mention({
            // a list of all suggested items
            items: () => [
              { id: 1, name: 'Philipp Kühn' },
              { id: 2, name: 'Hans Pagel' },
              { id: 3, name: 'Kris Siepert' },
              { id: 4, name: 'Justin Schueler' }
            ],
            // is called when a suggestion starts
            onEnter: ({
              items, query, range, command, virtualNode
            }) => {
              this.query = query
              this.filteredUsers = items
              this.suggestionRange = range
              this.renderPopup(virtualNode)
              // we save the command for inserting a selected mention
              // this allows us to call it inside of our custom popup
              // via keyboard navigation and on click
              this.insertMention = command
            },
            // is called when a suggestion has changed
            onChange: ({
              items, query, range, virtualNode
            }) => {
              this.query = query
              this.filteredUsers = items
              this.suggestionRange = range
              this.navigatedUserIndex = 0
              this.renderPopup(virtualNode)
            },
            // is called when a suggestion is cancelled
            onExit: () => {
              // reset all saved values
              this.query = null
              this.filteredUsers = []
              this.suggestionRange = null
              this.navigatedUserIndex = 0
              this.destroyPopup()
            },
            // is called on every keyDown event while a suggestion is active
            onKeyDown: ({ event }) => {
              // pressing up arrow
              if (event.keyCode === 38) {
                this.upHandler()
                return true
              }
              // pressing down arrow
              if (event.keyCode === 40) {
                this.downHandler()
                return true
              }
              // pressing enter
              if (event.keyCode === 13) {
                this.enterHandler()
                return true
              }

              return false
            },
            // is called when a suggestion has changed
            // this function is optional because there is basic filtering built-in
            // you can overwrite it if you prefer your own filtering
            // in this example we use fuse.js with support for fuzzy search
            onFilter: (items, query) => {
              if (!query) {
                return items
              }

              const fuse = new Fuse(items, {
                threshold: 0.2,
                keys: ['name']
              })

              return fuse.search(query)
            }
          }),
          new Code(),
          new Bold(),
          new Italic()
        ],
        content: `
          <h2>
            Suggestions
          </h2>
          <p>
            Sometimes it's useful to <strong>mention</strong> someone. That's a feature we're very used to. Under the hood this technique can also be used for other features likes <strong>hashtags</strong> and <strong>commands</strong> – lets call it <em>suggestions</em>.
          </p>
          <p>
            This is an example how to mention some users like <span data-mention-id="1">Philipp Kühn</span> or <span data-mention-id="2">Hans Pagel</span>. Try to type <code>@</code> and a popup (rendered with tippy.js) will appear. You can navigate with arrow keys through a list of suggestions.
          </p>
        `
      }),
      query: null,
      suggestionRange: null,
      filteredUsers: [],
      navigatedUserIndex: 0,
      insertMention: () => {}
    }
  },

  computed: {

    hasResults () {
      return this.filteredUsers.length
    },

    showSuggestions () {
      return this.query || this.hasResults
    }

  },

  methods: {
    onSwitch () {
      this.setEditor(this.myeditor)
      this.setToolbar(Toolbar)
    },

    // navigate to the previous item
    // if it's the first item, navigate to the last one
    upHandler () {
      this.navigatedUserIndex = ((this.navigatedUserIndex + this.filteredUsers.length) - 1) % this.filteredUsers.length
    },

    // navigate to the next item
    // if it's the last item, navigate to the first one
    downHandler () {
      this.navigatedUserIndex = (this.navigatedUserIndex + 1) % this.filteredUsers.length
    },

    enterHandler () {
      const user = this.filteredUsers[this.navigatedUserIndex]

      if (user) {
        this.selectUser(user)
      }
    },

    // we have to replace our suggestion text with a mention
    // so it's important to pass also the position of your suggestion text
    selectUser (user) {
      this.insertMention({
        range: this.suggestionRange,
        attrs: {
          id: user.id,
          label: user.name
        }
      })
      this.editor.focus()
    },

    // renders a popup with suggestions
    // tiptap provides a virtualNode object for using popper.js (or tippy.js) for popups
    renderPopup (node) {
      if (this.popup) {
        return
      }
      const b = this.$refs.editor.getBoundingClientRect()
      const a = node.getBoundingClientRect()
      const c = {}
      c.top = a.top - b.top
      c.left = a.left - b.left
      c.width = a.width
      c.height = a.height
      console.log(c)

      const element = document.createElement('div')
      element.style.position = 'absolute'
      element.style.left = c.left + 'px'
      element.style.top = c.top + 'px'
      element.style.width = c.width + 'px'
      element.style.height = c.height + 'px'
      this.$refs.editor.appendChild(element)
      this.element = element
      this.popup = tippy(element, {
        boundary: 'viewport',
        content: this.$refs.suggestions,
        trigger: 'mouseenter',
        interactive: true,
        theme: 'material',
        placement: 'top-start',
        inertia: true,
        duration: [400, 200],
        showOnCreate: true,
        arrow: roundArrow /* ,
        lazy: false,
        onCreate (instance) {
          console.log(instance)
          instance.popperInstance.reference = {
            clientWidth: node.clientWidth,
            clientHeight: node.clientHeight,
            getBoundingClientRect: node.getBoundingClientRect
          }
        } */
      })
    },

    destroyPopup () {
      if (this.popup) {
        this.$refs.editor.removeChild(this.element)
        this.popup.destroy()
        this.popup = null
      }
    }

  }
}
</script>

<style lang="scss">
@import "src/css/main";
@import "~tippy.js/dist/tippy.css";
@import "~tippy.js/dist/svg-arrow.css";
@import "~tippy.js/themes/material.css";

.mention {
  background: rgba($color-black, 0.1);
  color: rgba($color-black, 0.6);
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 5px;
  padding: 0.2rem 0.5rem;
  white-space: nowrap;
}

.mention-suggestion {
  color: rgba($color-black, 0.6);
}

.suggestion-list {
  padding: 0.2rem;
  border: 2px solid rgba($color-black, 0.1);
  font-size: 0.8rem;
  font-weight: bold;

  &__no-results {
    padding: 0.2rem 0.5rem;
  }

  &__item {
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    margin-bottom: 0.2rem;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    &.is-selected,
    &:hover {
      background-color: rgba($color-white, 0.2);
    }

    &.is-empty {
      opacity: 0.5;
    }
  }
}

.tippy-tooltip.dark-theme {
  background-color: $color-black;
  padding: 0;
  font-size: 1rem;
  text-align: inherit;
  color: $color-white;
  border-radius: 5px;

  .tippy-backdrop {
    display: none;
  }

  .tippy-roundarrow {
    fill: $color-black;
  }

  .tippy-popper[x-placement^=top] & .tippy-arrow {
    border-top-color: $color-black;
  }

  .tippy-popper[x-placement^=bottom] & .tippy-arrow {
    border-bottom-color: $color-black;
  }

  .tippy-popper[x-placement^=left] & .tippy-arrow {
    border-left-color: $color-black;
  }

  .tippy-popper[x-placement^=right] & .tippy-arrow {
    border-right-color: $color-black;
  }
}
</style>
