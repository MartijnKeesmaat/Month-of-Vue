<template lang="html">
  <div style="padding: 40px;">
    <h1>Add a movue</h1>
    <form @submit.prevent="onCreateMovue">
      <label for="title">Title {{title}}</label>
      <input v-model="title" name="title" type="text" placeholder="Title">

      <label for="image-url">Image url</label>
      <button @click="onPickFile" class="btn btn--secondary">Upload image</button>
      <input
      ref="fileInput"
      type="file"
      style="display: none"
      accept="image/*"
      @change="onFilePicked"
      >

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
      seasons: '',
      image: null
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
      if (!this.image) {
        return
      }
      const movueData = {
        title: this.title,
        image: this.image,
        description: this.description,
        genres: this.genres,
        seasons: this.seasons,
        date: new Date()
      }
      this.$store.dispatch('createMovue', movueData)
      this.$router.push('/')
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.posterImage = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>

<style lang="scss">
  .previewImage{
    max-width: 100%;
    width: 300px;
    height: auto;
    display: block;
  }

</style>
