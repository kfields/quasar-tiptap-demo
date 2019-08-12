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
  Table,
  TableHeader,
  TableCell,
  TableRow,
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
          new History(),
          new Table({
            resizable: true
          }),
          new TableHeader(),
          new TableCell(),
          new TableRow()
        ],
        content: `
          <h2>
            Tables
          </h2>
          <p>
            Tables come with some useful commands like adding, removing or merging rows and columns. Navigate with <code>tab</code> or arrow keys. Resizing is also supported.
          </p>
          <table>
            <tr>
              <th colspan="3" data-colwidth="100,0,0">Wide header</th>
            </tr>
            <tr>
              <td>One</td>
              <td>Two</td>
              <td>Three</td>
            </tr>
            <tr>
              <td>Four</td>
              <td>Five</td>
              <td>Six</td>
            </tr>
          </table>
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
