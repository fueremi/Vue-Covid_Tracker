import { createStore } from 'vuex'

export default createStore({
  state: {
    data: []
  },
  mutations: {
    SET_DATA: (state, payload) => {
      state.data = payload
    }
  },
  actions: {
    fetchData: ({commit}) => {
      fetch('https://api.covid19api.com/summary')
        .then(res => res.json())
        .then(res => commit('SET_DATA', res))
    }
  },
  getters: {
    getDataCovid19: state => {
      return state.data
    }
  }
})
