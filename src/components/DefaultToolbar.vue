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

    <div id="toolbar">
    </div>

    <q-toolbar-title>
      Quasar Tiptap Demo
    </q-toolbar-title>
  </q-toolbar>
</template>

<script>
import UiMixin from 'src/mixins/ui'
import { mapActions } from 'vuex'
export default {
  name: 'DefaultToolbar',
  mixins: [
    UiMixin
  ],
  props: [],
  methods: {
    ...mapActions([
      'toggleLeftDrawer'
    ])
  }
}
</script>
