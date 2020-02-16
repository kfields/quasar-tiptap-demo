<template>
  <q-drawer
    v-model="leftDrawerOpen"
    bordered
    content-class="bg-grey-2"
  >
    <q-list>
      <q-item to="/" exact>
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Basic</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/menu-bubble">
        <q-item-section avatar>
          <q-icon name="chat" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Menu Bubble</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/floating-menu">
        <q-item-section avatar>
          <q-icon name="more" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Floating Menu</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/links">
        <q-item-section avatar>
          <q-icon name="link" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Links</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/images">
        <q-item-section avatar>
          <q-icon name="photo" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Images</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/hiding-menubar">
        <q-item-section avatar>
          <q-icon name="keyboard_hide" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Hiding Menu Bar</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/todo-list">
        <q-item-section avatar>
          <q-icon name="check_box" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Todo List</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/tables">
        <q-item-section avatar>
          <q-icon name="grid_on" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Tables</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/suggestions">
        <q-item-section avatar>
          <q-icon name="alternate_email" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Suggestions</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/markdown-shortcuts">
        <q-item-section avatar>
          <q-icon name="title" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Markdown Shortcuts</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/code-highlighting">
        <q-item-section avatar>
          <q-icon name="code" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Code Highlighting</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/history">
        <q-item-section avatar>
          <q-icon name="history" />
        </q-item-section>
        <q-item-section>
          <q-item-label>History</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/read-only">
        <q-item-section avatar>
          <q-icon name="remove_red_eye" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Read-Only</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/embeds">
        <q-item-section avatar>
          <q-icon name="picture_in_picture" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Embeds</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/placeholder">
        <q-item-section avatar>
          <q-icon name="aspect_ratio" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Placeholder</q-item-label>
        </q-item-section>
      </q-item>
      <q-item to="/export">
        <q-item-section avatar>
          <q-icon name="import_export" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Export HTML or JSON</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </q-drawer>
</template>

<script>
import UiMixin from 'src/mixins/ui'
export default {
  name: 'LeftDrawer',
  mixins: [UiMixin],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  beforeMount () {
  },
  mounted () {
  }
}
</script>

<style>
</style>
