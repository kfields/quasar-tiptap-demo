<template>
  <q-page padding>
      <editor-menu-bubble :editor="myeditor">
        <div
          slot-scope="{ commands, isActive, menu }"
          class="menububble"
          :class="{ 'is-active': menu.isActive }"
          :style="`left: ${menu.left}px; bottom: ${menu.bottom}px;`"
        >

          <button
            class="menububble__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <svgicon name="bold" />
          </button>

          <button
            class="menububble__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <svgicon name="italic" />
          </button>

          <button
            class="menububble__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <svgicon name="code" />
          </button>

        </div>
      </editor-menu-bubble>
      <editor-content class="editor__content" :editor="myeditor" />
  </q-page>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import PageMixin from 'src/mixins/page'
import { Editor, EditorContent, EditorMenuBubble } from 'tiptap'
import {
  Blockquote,
  BulletList,
  CodeBlock,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

export default {
  mixins: [ UiMixin, PageMixin ],
  components: {
    EditorContent,
    EditorMenuBubble
  },
  data () {
    return {
      myeditor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Bold(),
          new Code(),
          new Italic(),
          new Link(),
          new Strike(),
          new Underline(),
          new History()
        ],
        content: `
          <h2>
            Menu Bubble
          </h2>
          <p>
            Hey, try to select some text here. There will popup a menu for selecting some inline styles. <em>Remember:</em> you have full control about content and styling of this menu.
          </p>
        `
      })
    }
  },
  beforeDestroy () {
    this.myeditor.destroy()
  }
}
</script>
<style lang="sass">
</style>
