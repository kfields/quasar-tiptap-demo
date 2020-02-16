import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    leftDrawerOpen: {
      get: function () {
        return this.$store.getters.leftDrawerOpen
      },
      set: function (val) {
        this.$store.commit('setLeftDrawerOpen', val)
      }
    },
    ...mapGetters([
      'toolbar',
      'editor'
    ])
  },
  methods: {
    ...mapActions([
      'setLeftDrawerOpen',
      'setToolbar',
      'setEditor'
    ])
  }
}
