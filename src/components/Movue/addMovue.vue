<template lang="html">
  <div>
    <h1>Add a movue</h1>
    <form @submit.prevent="onCreateMovue">
      <label for="title">Title {{title}}</label>
      <input v-model="title" name="title" type="text" placeholder="Title">

      <label for="image-url">Image url {{ posterImage }}</label>
      <input v-model="posterImage" name="image-url" type="text" placeholder="Image url">

      <img class="previewImage" :src="posterImage" alt="">

      <label for="seaons">Seasons {{ seasons }}</label>
      <input v-model="seasons" type="number" name="seasons" placeholder="0 season">

      <label for="genre">Genre {{ genres }}</label>
      <input v-model="genres" type="text" name="" value="" placeholder="genre">

      <label for="description">Description {{ description }}</label>
      <textarea v-model="description" name="description" type="text" placeholder="Description"></textarea>

      <button type="submit" :disabled="!formIsValid" class="btn">Submit form</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      posterImage: '',
      description: '',
      genres: '',
      seasons: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
      this.posterImage !== '' &&
      this.genres !== '' &&
      this.seasons !== '' &&
      this.description !== ''
    }
  },
  methods: {
    onCreateMovue () {
      if (!this.formIsValid) {
        return
      }
      const movueData = {
        title: this.title,
        posterImage: this.posterImage,
        description: this.description,
        genres: this.genres,
        seasons: this.seasons,
        date: new Date()
      }
      this.$store.dispatch('createMovue', movueData)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  .previewImage{
    max-width: 100%;
    width: 300px;
    height: auto;
  }

</style>
