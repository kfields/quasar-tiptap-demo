<template>
  <q-page padding class="editor">
    <editor-content class="editor__content" :editor="myeditor" />
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'
import Toolbar from './toolbar'

import { Editor, EditorContent } from 'tiptap'
import {
  HardBreak,
  Heading,
  Bold,
  Code,
  Italic,
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
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new Bold(),
          new Code(),
          new Italic(),
          new History()
        ],
        content: `
          <h2>
            History
          </h2>
          <p>
            Try to change some content here. With the <code>History</code> extension you are able to undo and redo your changes. You can also use keyboard shortcuts for this (<code>cmd+z</code> and <code>cmd+shift+z</code>).
          </p>
        `
      })
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    onSwitch () {
      this.setEditor(this.myeditor)
      this.setToolbar(Toolbar)
    }
  }
}
</script>
<style lang="sass">
</style>
