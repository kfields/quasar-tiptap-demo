<template>
  <q-page padding class="editor">
    <q-checkbox id="editable" left-label v-model="editable" label="editable" />

    <editor-content class="editor__content" :editor="myeditor" />
  </q-page>
</template>

<script>
import { UiMixin, PageMixin } from 'src/mixins'

import { Editor, EditorContent } from 'tiptap'
import {
  HardBreak,
  Heading,
  Bold,
  Code,
  Italic,
  Link
} from 'tiptap-extensions'

export default {
  mixins: [UiMixin, PageMixin],
  components: {
    EditorContent
  },
  data () {
    return {
      myeditor: new Editor({
        editable: false,
        extensions: [
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new Bold(),
          new Code(),
          new Italic(),
          new Link()
        ],
        content: `
          <h2>
            Read-Only
          </h2>
          <p>
            This text is <strong>read-only</strong>. You are not able to edit something. <a href="https://scrumpy.io/">Links to fancy websites</a> are still working.
          </p>
        `
      }),
      editable: false
    }
  },
  watch: {
    editable () {
      this.myeditor.setOptions({
        editable: this.editable
      })
    }
  },
  beforeDestroy () {
    this.editor.destroy()
  }
}
</script>

<style lang="scss">
.checkbox {
  margin-bottom: 1rem;
}
</style>
