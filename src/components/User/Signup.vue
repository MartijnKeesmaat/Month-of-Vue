<template lang="html">
  <div>
    <h1>Sign up</h1>
    <form @submit.prevent="onSignup">
      <label for="email">E-mail</label>
      <input v-model="email" type="email" name="email" id="email" placeholder="john@doe.com" required>

      <label for="email">Password</label>
      <input v-model="password" type="password" name="password" id="password" placeholder="fietssleutel" required>

      <!-- <label for="email">Confirm password</label>
      <input v-model="confirmPassword" type="password" name="confirmPassword" id="confirmPassword" placeholder="fietssleutel"> -->

      <br>

      <button type="submit" class="btn">Sign up</button>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
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
    onSignup () {
      this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
    }
  }
}
</script>

<style lang="css">
</style>
