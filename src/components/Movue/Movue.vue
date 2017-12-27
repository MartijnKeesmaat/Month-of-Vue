<template lang="html">
  <div>

    <article
        class="movue"
        :key="movue.id"
        :style="{ backgroundImage: 'url(' + movue.posterImage + ')' }">

        <router-link :to="'/movues/' + movue.id" router>
            <section class="movue__top">
               {{ movue.genres }}
              <span class="movue__seperator"></span>
               {{ movue.seasons }} seasons
            </section>

            <section class="movue__bottom">
              <h3 class="movue__title"> {{ movue.title }} </h3>
            </section>
        </router-link>
    </article>

  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    movue () {
      return this.$store.getters.loadedMovue(this.id)
    }
  }
}
</script>
