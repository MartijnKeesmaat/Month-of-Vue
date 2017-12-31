<template lang="html">
  <div>

    <div class="mv-highlight" v-if="highlightMovue.length > 0">
      <div class="mv-highlight__image" :style="{ backgroundImage: 'url(' + highlightMovue[0].posterImage + ')' }"></div>
      <div class="mv-highlight__overlay"></div>

      <div class="mv-highlight__top">

        <div class="mv-highlight__meta">
          <div class="mv-highlight__meta__left">
            <p>2013</p>
            <img src="../assets/media/vector/icons/seperator.svg" alt="" class="mv-highlight__score__icon">
            <p>{{ highlightMovue[0].genres }}</p>
            <img src="../assets/media/vector/icons/seperator.svg" alt="" class="mv-highlight__score__icon">
            <p>{{ highlightMovue[0].seasons }} seasons</p>
          </div>

          <div class="mv-highlight__score">
            <img src="../assets/media/vector/icons/fire.svg" alt="" class="mv-highlight__score__icon">
            <span class="mv-highlight__score__current">8.3</span>
            <div class="mv-highlight__score__seperator">/</div>
            <div class="mv-highlight__score__total">10</div>
          </div>
        </div>

        <div class="mv-highlight__user">
          <img src="https://avatars1.githubusercontent.com/u/8048514?s=460&v=4" alt="">
          <p>Martijn</p>
          <span>⌃</span>
        </div>

      </div>


      <div class="mv-highlight__middle">

        <h1> {{ highlightMovue.title }} </h1>

        <div class="mv-highlight__fav">
          <img src="../assets/media/vector/icons/heart.svg" alt="">
          <p>Voeg toe aan favorieten</p>
        </div>

      </div>


      <div class="mv-highlight__bottom">

        <button class="btn btn--secondary btn--icon">
          <img src="../assets/media/vector/icons/camera.svg" alt="">
          Watch trailer
        </button>

        <div class="mv-highlight__slider"></div>

      </div>
    </div>







    <div class="mv-overview__wrapper">

      <h2 class="border-title">All movues</h2>

      <div class="movues-container">
        <article
          class="movue-card"
          v-for="movue in movues"
          :key="movue.id"
          :style="{ backgroundImage: 'url(' + movue.posterImage + ')' }">

          <router-link :to="'/movues/' + movue.id" router>
            <section class="movue-card__top">
              {{ movue.genres }}
            <span class="movue-card__seperator"></span>
              {{ movue.seasons }} seasons
            </section>

            <section class="movue-card__bottom">
              <h3 class="movue-card__title"> {{ movue.title }} </h3>
            </section>
          </router-link>
        </article>
      </div>

      <div v-if="actionMovues.length > 0" class="actionsMovues">
        <h2 class="border-title">Action shows</h2>

        <div class="movues-container">
          <article
            class="movue-card"
            v-for="movue in actionMovues"
            :key="movue.id"
            :style="{ backgroundImage: 'url(' + movue.posterImage + ')' }">

            <router-link :to="'/movues/' + movue.id" router>
              <section class="movue-card__top">
                {{ movue.genres }}
              <span class="movue-card__seperator"></span>
                {{ movue.seasons }} seasons
              </section>

              <section class="movue-card__bottom">
                <h3 class="movue-card__title"> {{ movue.title }} </h3>
              </section>
            </router-link>
          </article>
        </div>
      </div>



    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      displayActionMovues: false
    }
  },
  computed: {
    movues () {
      return this.$store.getters.loadedMovues
    },
    actionMovues () {
      var allMovues = this.$store.getters.loadedMovues
      var actionMovues = []

      for (var i = 0; i < allMovues.length; i++) {
        if (allMovues[i].genres === 'Action') {
          actionMovues.push(allMovues[i])
        }
      }
      return actionMovues
    },
    highlightMovue () {
      var allMovues = this.$store.getters.loadedMovues
      var highlightedMovue = []

      for (var i = 0; i < allMovues.length; i++) {
        if (allMovues[i].highlighted === true) {
          highlightedMovue.push(allMovues[i])
        }
      }

      return highlightedMovue;
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

.mv-highlight{
  $wrapper-size: 55px;
  $highlight-size: 550px;

  position: relative;
  width: 100%;
  height: $highlight-size;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__overlay{
    background: linear-gradient(to right, rgba(#000, 0.5), rgba(#000, 0));
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &__image{
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &__top{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-top: $wrapper-size;
    padding-left: $wrapper-size;
    padding-right: $wrapper-size;
  }

  &__meta{

    &__left{
      display: flex;
      align-items: center;

      img{
        margin: 0 5px;
      }

      p{
        margin: 0;
      }
    }
  }

  &__seperator{

  }

  &__score{
    display: flex;
    font-family: $font-header;
    font-size: 2.5rem;
    display: flex;
    align-items: center;

    &__icon{
      margin-right: 5px;
      transform: scale(.9);
    }

    &__current{
      color: $color-main;
    }

    &__seperator{
      font-size: 2rem;
      margin: 0 5px;
    }

    &__total{
      font-size: 1.5rem;
      padding-bottom: 4px;
    }
  }

  &__user{
    display: flex;
    align-items: center;

    img{
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 7px;
    }

    p{
      margin: 0;
      margin-right: 5px;
      font-size: 1.6rem;
    }

    span{
      transform: rotate(180deg);
      margin-bottom: 5px;
    }
  }

  &__middle{
    padding-left: $wrapper-size;

    h1{
      font-size: 6rem;
      max-width: 400px;
    }

    padding-bottom: 30px;
  }

  &__fav{
    display: flex;

    img{
      margin-right: 8px;
      transform: scale(.9);
    }
  }

  &__bottom{
    padding-left: $wrapper-size;
    position: relative;
    margin-bottom: -20px;
  }

  &__cta{

  }

  &__slider{

  }
}








.mv-overview__wrapper{
  padding: 50px;
}

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

.movue-card{
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
