<template>
  <q-page padding class="editor">
    <editor-content class="editor__content" :editor="myeditor" />
  </q-page>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import PageMixin from 'src/mixins/page'
import Toolbar from './toolbar'

import { Editor, EditorContent } from 'tiptap'
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
    EditorContent
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
            Hiding Menu Bar
          </h2>
          <p>
            Click into this text to see the menu. Click outside and the menu will disappear. It's like magic.
          </p>
        `
      })
    }
  },
  beforeDestroy () {
    this.myeditor.destroy()
  },
  methods: {
    onSwitch () {
      this.setEditor(this.myeditor)
      this.setToolbar(Toolbar)
    }
  }
}
</script>
<style lang="scss">
@import "src/css/main"
</style>
