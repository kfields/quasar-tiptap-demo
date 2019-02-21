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
        <div class="menubar" slot-scope="{ commands }">
          <button class="menubar__button" @click="commands.mention({ id: 1, label: 'Philipp Kühn' })">
            <svgicon name="mention" />
            <span>Insert Mention</span>
          </button>
        </div>
      </editor-menu-bar>

  </q-toolbar>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import { EditorMenuBar } from 'tiptap'
import { mapActions } from 'vuex'
export default {
  name: 'DefaultToolbar',
  mixins: [ UiMixin ],
  props: [],
  components: {
    EditorMenuBar
  },
  methods: {
    ...mapActions([
      'toggleLeftDrawer'
    ])
  }
}
</script>
