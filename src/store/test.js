export default {
  namespaced: true,
  state: {
    counter: 0
  },
  mutations: {
    add: (state) => {
      state.counter++
    }
  },
  actions: {
    add: ({
      commit
    }) => {
      return commit('add')
    }
  },
  getters: {
    getCounter(state) {
      return state.counter
    }
  }
}