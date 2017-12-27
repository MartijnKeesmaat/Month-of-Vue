<template lang="html">
  <div>
    <h1>Sign in</h1>
    <form @submit.prevent="onSignin">
      <label for="email">E-mail</label>
      <input v-model="email" type="email" name="email" id="email" placeholder="john@doe.com" required>

      <label for="email">Password</label>
      <input v-model="password" type="password" name="password" id="password" placeholder="fietssleutel" required>

      <br>

      <button type="submit" class="btn">Sign in</button>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    }
  }
}
</script>

<style lang="css">
</style>
