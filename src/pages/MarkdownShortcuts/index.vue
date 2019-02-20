<template>
  <q-page padding class="editor">
    <editor-content class="editor__content" :editor="myeditor" />
  </q-page>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import PageMixin from 'src/mixins/page'

import { Editor, EditorContent } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
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
          new History()
        ],
        content: `
          <h2>
            Markdown Shortcuts
          </h2>
          <p>
            Start a new line and type <code>#</code> followed by a <code>space</code> and you will get an H1 headline.
          </p>
          <p>
            This feature is called <strong>input rules</strong>. There are some of these shortcuts for the most basic nodes enabled by default. Try <code>#, ##, ###, …</code> for headlines, <code>></code> for blockquotes, <code>- or +</code> for bullet lists. And of course you can add your own input rules.
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
<style lang="scss">
@import "src/css/main";
</style>
