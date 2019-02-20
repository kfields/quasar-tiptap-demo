<template>
  <q-page padding>
    <div class="editor">
      <editor-content class="editor__content" :editor="myeditor" />
    </div>

    <div class="actions">
      <button class="button" @click="clearContent">
        Clear Content
      </button>
      <button class="button" @click="setContent">
        Set Content
      </button>
    </div>

    <div class="export">
      <h3>JSON</h3>
      <pre><code v-html="json"></code></pre>

      <h3>HTML</h3>
      <pre><code>{{ html }}</code></pre>
    </div>
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
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
            Export HTML or JSON
          </h2>
          <p>
            You are able to export your data as <code>HTML</code> or <code>JSON</code>. To pass <code>HTML</code> to the editor use the <code>content</code> slot. To pass <code>JSON</code> to the editor use the <code>doc</code> prop.
          </p>
        `,
        onUpdate: ({ getJSON, getHTML }) => {
          this.json = getJSON()
          this.html = getHTML()
        }
      }),
      json: 'Update content to see changes',
      html: 'Update content to see changes'
    }
  },
  methods: {
    onSwitch () {
      this.setEditor(this.myeditor)
      this.setToolbar(Toolbar)
    },
    clearContent () {
      this.editor.clearContent(true)
      this.editor.focus()
    },
    setContent () {
      // you can pass a json document
      this.editor.setContent({
        type: 'doc',
        content: [{
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'This is some inserted text. 👋'
            }
          ]
        }]
      }, true)

      // HTML string is also supported
      // this.editor.setContent('<p>This is some inserted text. 👋</p>')

      this.editor.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/css/variables";

.actions {
  max-width: 30rem;
  margin: 2rem auto;
}

.export {

  max-width: 30rem;
  margin: 0 auto 2rem auto;

  pre {
    padding: 1rem;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: bold;
    background: rgba($color-black, 0.05);
    color: rgba($color-black, 0.8);
  }

  code {
    display: block;
    white-space: pre-wrap;
  }
}
</style>
