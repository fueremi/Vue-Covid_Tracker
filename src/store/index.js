import { createStore } from 'vuex'
import axios from 'axios'

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
    fetchData: async ({commit}) => {
      try {
        const res = await axios.get('https://api.covid19api.com/summary')
        commit('SET_DATA', res)
      } catch (err) {
        console.error(err)
      }
    }
  },
  getters: {
    getDataCovid19: state => {
      return state.data
    }
  }
})
