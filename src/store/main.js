const state = {
  leftDrawerOpen: false,
  toolbar: null,
  editor: null
}

const getters = {
  leftDrawerOpen: (state) => state.leftDrawerOpen,
  toolbar: (state) => state.toolbar,
  editor: (state) => state.editor
}

const actions = {
  setLeftDrawerOpen: (context, value) => {
    context.commit('setLeftDrawerOpen', value)
  },
  toggleLeftDrawer: ({ commit, state }) => {
    commit('setLeftDrawerOpen', !state.leftDrawerOpen)
  },
  setToolbar: (context, toolbar) => {
    context.commit('setToolbar', toolbar)
  },
  setEditor: (context, editor) => {
    context.commit('setEditor', editor)
  }
}

const mutations = {
  setLeftDrawerOpen: (state, data) => {
    state.leftDrawerOpen = data
  },
  setToolbar: (state, toolbar) => {
    state.toolbar = toolbar
  },
  setEditor: (state, editor) => {
    state.editor = editor
  }
}
export default {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions
}
