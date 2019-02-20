/* import Toolbar from 'components/DefaultToolbar'
// This worked to set a default toolbar except when you refresh the page. :(
export default {
  mounted () {
    this.onSwitch()
  },
  beforeRouteUpdate (to, from, next) {
    this.onSwitch()
    next()
  },
  methods: {
    onSwitch () {
      this.setToolbar(Toolbar)
    }
  }
}
*/
