<template lang="html">
    <div>

        <h2 class="border-title">Your fav movues</h2>

        <div class="movues-container">
            <article
                class="movue"
                v-for="movue in movues"
                :key="movue.id"
                :style="{ backgroundImage: 'url(' + movue.posterImage + ')' }">

                <router-link :to="'/movues/' + movue.id" router>
                    <section class="movue__top">
                       {{ movue.genre }}
                      <span class="movue__seperator"></span>
                       {{ movue.seasons }}
                    </section>

                    <section class="movue__bottom">
                      <h3 class="movue__title"> {{ movue.title }} </h3>
                    </section>
                </router-link>
            </article>
      </div>


    </div>
</template>

<script>
export default {
  computed: {
    movues () {
      return this.$store.getters.loadedMovues
    }
  },
  methods: {
    onLoadMovue (id) {
      this.$router.push('./movues' + id)
    }
  }
}
</script>

<style lang="scss">
@import '../styles/2.settings/index-sett.scss';

.border-title{
    color: #fff;
    font-size: 2.1rem;
    font-family: $font-body;
    font-weight: 600;
    border-bottom: $color-main 1px solid;
    display: inline-block;
    padding-bottom: 4px;
    margin-bottom: 15px;
}

.movues-container{
    display: flex;
    flex-wrap: wrap;
}

.movue{
    max-width: 230px;
    height: 270px;
    background-size: cover;
    color: #fff;
    border-radius: 4px;
    background-position: center;
    margin-right: 30px;
    margin-bottom: 20px;
    transition: $transition1;

    &:hover{
        transform: scale(1.03);
        border-radius: 0;
    }

    &:last-child{
        margin-right: 0;
    }

    a{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        height: 100%;
        color: #fff;
    }

    &__top{
        background: linear-gradient(rgba(#000, 0.4), rgba(#000, 0));
        padding: 15px;
        font-size: 1.7rem;
    }

    &__seperator{
        border-radius: 50%;
        border: 1px solid #fff;
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 5px;
    }

    &__bottom{
        background: linear-gradient(rgba(#000, 0), rgba(#000, .5));
        padding: 15px;
    }

    &__title{
        color: #fff;
        font-size: 2.6rem;
        margin: 0;
        max-width: 120px;
    }
}
</style>
