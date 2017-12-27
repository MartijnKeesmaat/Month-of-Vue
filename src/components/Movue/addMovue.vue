<template lang="html">
  <div>
    <h1>Add a movue</h1>
    <form @submit.prevent="onCreateMovue">
      <label for="title">Title {{title}}</label>
      <input v-model="title" name="title" type="text" placeholder="Title">

      <label for="image-url">Image url {{ imageUrl }}</label>
      <input v-model="imageUrl" name="image-url" type="text" placeholder="Image url">

      <img class="previewImage" :src="imageUrl" alt="">

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
      imageUrl: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
      this.imageUrl !== '' &&
      this.description !== ''
    }
  },
  methods: {
    onCreateMovue () {
      const movueData = {
        title: this.title,
        imageUrl: this.imageUrl,
        description: this.description,
        date: new Date()
      }
      this.$store.dispatch('createMovue', movueData)
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
