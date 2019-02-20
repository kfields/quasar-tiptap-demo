<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <div v-bind:is="toolbar" />
    </q-header>

    <left-drawer />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { UiMixin, LayoutMixin } from 'src/mixins'
import LeftDrawer from 'components/LeftDrawer'
export default {
  name: 'MyLayout',
  mixins: [ UiMixin, LayoutMixin ],
  components: {
    LeftDrawer
  },
  data () {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
    this.setLeftDrawerOpen(this.$q.platform.is.desktop)
  }

}
</script>

<style>
</style>
