import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMovues: [
    ],
    user: null
  },
  mutations: {
    registerUserForMovue (state, payload) {
      const id = payload.id
      if (state.user.registeredMovues.findIndex(movue => movue.id === id) >= 0) {
        return
      }
      state.user.registeredMovues.push(id)
      state.user.fbKeys[id] = payload.fbKey
    },
    unregisterUserFromMovue (state, payload) {
      const registeredMovues = state.user.registeredMovues
      registeredMovues.splice(registeredMovues.findIndex(movue => movue.id === payload), 1)
      Reflect.deleteProperty(state.user.fbKeys, payload)
    },
    setLoadedMovues (state, payload) {
      state.loadedMovues = payload
    },
    createMovue (state, payload) {
      state.loadedMovues.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    registerUserForMovue ({commit, getters}, payload) {
      const user = getters.user
      firebase.database().ref('/users/' + user.id).child('/registrations/')
        .push(payload)
        .then(data => {
          commit('registerUserForMovue', {id: payload, fbKey: data.key})
        })
        .catch(error => {
          console.log(error)
        })
    },
    unregisterUserFromMovue ({commit, getters}, payload) {
      const user = getters.user
      if (!user.fbKeys) {
        return
      }
      const fbKey = user.fbKeys[payload]
      firebase.database().ref('/users/' + user.id + '/registrations/').child(fbKey)
        .remove()
        .then(() => {
          commit('unregisterUserFromMovue', payload)
        })
        .catch(error => {
          console.log(error)
        })
    },
    loadMovues ({commit}) {
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
              seasons: obj[key].seasons,
              creatorId: obj[key].creatorId
            })
          }
          commit('setLoadedMovues', movues)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    createMovue ({commit, getters}, payload) {
      const movue = {
        title: payload.title,
        description: payload.description,
        date: payload.date,
        genres: payload.genres,
        seasons: payload.seasons,
        creatorId: getters.user.id
      }
      let posterImage
      let key
      firebase.database().ref('movues').push(movue)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('movues/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          posterImage = fileData.metadata.downloadURLs[0]
          return firebase.database().ref('movues').child(key).update({posterImage: posterImage})
        })
        .then(() => {
          commit('createMovue', {
            ...movue,
            posterImage: posterImage,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMovues: [],
              fbKeys: {}
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              registeredMovues: [],
              fbKeys: {}
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
    },
    autoSignIn ({commit}, payload) {
      commit('setUser', {
        id: payload.uid,
        registeredMovues: [],
        fbKeys: {}
      })
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
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
