<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      @click="toggleLeftDrawer"
      aria-label="Menu"
    >
      <q-icon name="menu" />
    </q-btn>
    <editor-menu-bar :editor="editor">
      <div class="menubar" slot-scope="{ commands, isActive }">

        <q-btn
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <svgicon name="bold" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <svgicon name="italic" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <svgicon name="code" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          <svgicon name="paragraph" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          <svgicon name="ul" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          <svgicon name="ol" />
        </q-btn>

        <q-btn
          :class="{ 'is-active': isActive.code_block() }"
          @click="commands.code_block"
        >
          <svgicon name="code" />
        </q-btn>

      </div>
    </editor-menu-bar>
  </q-toolbar>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import { EditorMenuBar } from 'tiptap'
import { mapActions } from 'vuex'
export default {
  name: 'ImagesToolbar',
  mixins: [UiMixin],
  props: [],
  components: {
    EditorMenuBar
  },
  methods: {
    ...mapActions([
      'toggleLeftDrawer'
    ]),
    showImagePrompt (command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    }
  }
}
</script>
