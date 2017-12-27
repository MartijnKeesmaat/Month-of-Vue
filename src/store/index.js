import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMovues: [
      {
        title: 'American Horror Story',
        genre: 'Drama',
        seasons: '2 seasons',
        posterImage: 'https://picsum.photos/200/300/?random',
        id: 'hgaq3g',
        date: '2017-07-17',
        user: {
          id: '9h489h9ahgh',
          registeredMovues: ['guh4p8']
        }
      },
      {
        title: 'Not American Horror Story',
        genre: 'Drama',
        seasons: '2 seasons',
        posterImage: 'https://picsum.photos/200/300/?random',
        id: 'aw4eag4g',
        date: '2017-07-14',
        user: {
          id: '3qhher',
          registeredMovues: ['areh4qh']
        }
      }
    ]
  },
  actions: {
    createMovue ({commit}, payload) {
      const movue = {
        title: payload.title,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'owgjowiGE30'
      }
      // reach out to fb and store
      commit('createMovue', movue)
    }
  },
  mutations: {
    createMovue (state, payload) {
      state.loadedMovues.push(payload)
    }
  },
  getters: {
    loadedMovues (state) {
      return state.loadedMovues.sort((movueA, movueB) => {
        return movueA.date > movueB.date
      })
    },
    featuredMovues (state, getters) {
      return getters.loadedMovues.slice(0, 5)
    },
    loadedMovue (state) {
      return (movueId) => {
        return state.loadedMovues.find((movue) => {
          return movue.id === movueId
        })
      }
    }
  }
})
