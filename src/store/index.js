import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMovues: [
      {
        title: 'American Horror Story',
        genres: 'Drama',
        seasons: 2,
        posterImage: 'https://picsum.photos/200/300/?random',
        id: 'hgaq3g',
        date: '2017-07-17'
      },
      {
        title: 'Not American Horror Story',
        genres: 'Drama',
        seasons: 2,
        posterImage: 'https://picsum.photos/200/300/?random',
        id: 'aw4eag4g',
        date: '2017-07-14'
      }
    ],
    user: null
  },
  mutations: {
    createMovue (state, payload) {
      state.loadedMovues.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    createMovue ({commit}, payload) {
      const movue = {
        title: payload.title,
        posterImage: payload.posterImage,
        description: payload.description,
        date: payload.date,
        genres: payload.genres,
        seasons: payload.seasons,
        id: 'owgjowiGE30'
      }
      // reach out to fb and store
      commit('createMovue', movue)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMovues: []
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
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
    },
    user (state) {
      return state.user
    }
  }
})
