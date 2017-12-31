import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMovues: [
      // {
      //   title: 'American Horror Story',
      //   genres: 'Action',
      //   seasons: 2,
      //   posterImage: 'https://picsum.photos/400/300?image=338',
      //   highlightImage: 'https://picsum.photos/1600/900?image=338',
      //   highlighted: true
      // },
      // {
      //   title: 'Not American Horror Story',
      //   genres: 'Action',
      //   seasons: 2,
      //   posterImage: 'https://picsum.photos/400/300?image=335',
      //   highlightImage: 'https://picsum.photos/1600/900?image=335',
      //   date: '2017-07-14',
      //   highlighted: false
      // },
      // {
      //   title: 'Yet American Horror Story',
      //   genres: 'Drama',
      //   seasons: 2,
      //   posterImage: 'https://picsum.photos/400/300?image=335',
      //   highlightImage: 'https://picsum.photos/1600/900?image=335',
      //   date: '2017-07-14',
      //   highlighted: false
      // }
    ],
    user: null,
    loading: false
    // error: null
  },
  mutations: {
    setLoadedMovues (state, payload) {
      state.loadedMovues = payload
    },
    createMovue (state, payload) {
      state.loadedMovues.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
    // setLoading (state, payload) {
    //   state.loading = payload
    // }
    // setError (state, payload) {
    //   state.error = payload
    // },
    // clearError (state) {
    //   state.error = null
    // }
  },
  actions: {
    loadMovues ({commit}) {
      // commit('setLoading', true)
      firebase.database().ref('movues').once('value')
        .then((data) => {
          const movues = []
          const obj = data.val()
          for (let key in obj) {
            movues.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              posterImage: obj[key].posterImage,
              genres: obj[key].genres,
              seasons: obj[key].seasons
            })
          }
          commit('setLoadedMovues', movues)
          // commit('setLoading', false)
        })
        .catch((error) => {
          console.log(error)
          // commit('setLoading', true)
        })
    },
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
      firebase.database().ref('movues').push(movue)
        .then((data) => {
          const key = data.key
          commit('createMovue', {
            ...movue,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signUserUp ({commit}, payload) {
      // commit('setLoading', true)
      // commit('clearError', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          // commit('setLoading', false),
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
            // commit('setLoading', false)
          //   commit('setError', error)
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      // commit('setLoading', true)
      // commit('clearError', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          // commit('setLoading', false),
          user => {
            const newUser = {
              id: user.uid,
              registeredMovues: []
            }
            commit('setUser', newUser)
            console.log(newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
    // clearError ({commit}) {
    //   commit('clearError')
    // }
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
    // loading (state) {
    //   return state.loading
    // }
    // error (state) {
    //   return state.error
    // }
  }
})
