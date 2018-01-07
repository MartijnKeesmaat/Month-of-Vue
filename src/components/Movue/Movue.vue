<template lang="html">
  <div>

  <div class="mv-highlight">
    <div class="mv-highlight__image" :style="{ backgroundImage: 'url(' + movue.posterImage + ')' }"></div>
    <div class="mv-highlight__overlay"></div>

    <div class="mv-highlight__top">

      <div class="mv-highlight__meta">
        <div class="mv-highlight__meta__left">
          <p>2013</p>
          <img src="../../assets/media/vector/icons/seperator.svg" alt="" class="mv-highlight__score__icon">
          <p>{{ movue.genres }}</p>
          <img src="../../assets/media/vector/icons/seperator.svg" alt="" class="mv-highlight__score__icon">
          <p>{{ movue.seasons }} seasons</p>
        </div>

        <div class="mv-highlight__score">
          <img src="../../assets/media/vector/icons/fire.svg" alt="" class="mv-highlight__score__icon">
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

      <h1> {{ movue.title }} </h1>

      <div
        @click="onLike"
        class="mv-highlight__fav">
        <img src="../../assets/media/vector/icons/heart.svg" alt="">
        <p>{{ userIsRegistered ? 'Verwijder van favorieten' : 'Voeg toe aan favorieten'}}</p>
      </div>

      <!-- <template v-if="userIsCreator">
        <app-edit-movue-dialog v-if="showEditModal" :movue="movue"></app-edit-movue-dialog>

        <button @click="showEditModal = true" class="mv-highlight__edit">
          <img src="../../assets/media/vector/icons/heart.svg" alt="">
          <p>Edit movue</p>
        </button>

      </template> -->

    </div>


    <div class="mv-highlight__bottom">

      <button class="btn btn--secondary btn--icon">
        <img src="../../assets/media/vector/icons/camera.svg" alt="">
        Watch trailer
      </button>

      <div class="mv-highlight__slider"></div>

    </div>
  </div>

  <div class="mv-quote">
    <h2>Do you think you're the first person I've dealt who woke up with a dead body... ?</h2>
    <div class="mv-quote__right">
      <p>Beroemdheden, supersterren, topatleten, tycoons... allemaal komen ze wel eens in de problemen. Problemen die ze liever niet zelf oplossen. Enter Ray Donovan (Liev Schreiber), L.A.'s professionele fikser. Maar in seizoen 3 gaapt er een kloof tussen Ray en zijn zakenpartners enerzijds - het gevolg van de moord op Kate McPherson.</p>
    </div>
  </div>

  <div class="mv-bg-image" style="backgroundImage: url(https://picsum.photos/2000/600?image=338)">
    <div class="mv-bg-image__gr-top"></div>
    <div class="mv-bg-image__gr-ov"></div>
    <div class="mv-bg-image__gr-bottom"></div>
  </div>

  <div class="mv-split">

    <div class="mv-split__left">
      <div class="mv-similair">
        <h2>Similair shows</h2>


        <div class="mv-similair__cards">
          <article
            class="movue-card movue-card--small"
            style="backgroundImage: url(https://picsum.photos/400/300?image=338)">

            <router-link to="/">
              <section class="movue-card__top">
                Drama
              <span class="movue-card__seperator"></span>
                2 seasons
              </section>

              <section class="movue-card__bottom">
                <h3 class="movue-card__title"> Not Luther </h3>
              </section>
            </router-link>
          </article>

          <article
            class="movue-card movue-card--small"
            style="backgroundImage: url(https://picsum.photos/400/300?image=338)">

            <router-link to="/">
              <section class="movue-card__top">
                Drama
              <span class="movue-card__seperator"></span>
                2 seasons
              </section>

              <section class="movue-card__bottom">
                <h3 class="movue-card__title"> Not Luther </h3>
              </section>
            </router-link>
          </article>
        </div>

      </div>

      <div class="mv-actors">
        <h2>Actors</h2>

        <div class="mv-actors__cards">
          <section class="mv-card--mini">
            <div class="mv-actors__img" style="backgroundImage: url(https://picsum.photos/400/300?image=338)"></div>
            <h4>Owen Wilsen</h4>
            <small>Steven Holt</small>
          </section>

          <section class="mv-card--mini">
            <div class="mv-actors__img" style="backgroundImage: url(https://picsum.photos/400/300?image=338)"></div>
            <h4>Owen Wilsen</h4>
            <small>Steven Holt</small>
          </section>

          <section class="mv-card--mini">
            <div class="mv-actors__img" style="backgroundImage: url(https://picsum.photos/400/300?image=338)"></div>
            <h4>Owen Wilsen</h4>
            <small>Steven Holt</small>
          </section>

          <section class="mv-card--mini">
            <div class="mv-actors__img" style="backgroundImage: url(https://picsum.photos/400/300?image=338)"></div>
            <h4>Owen Wilsen</h4>
            <small>Steven Holt</small>
          </section>

          <section class="mv-card--mini">
            <div class="mv-actors__img" style="backgroundImage: url(https://picsum.photos/400/300?image=338)"></div>
            <h4>Owen Wilsen</h4>
            <small>Steven Holt</small>
          </section>

          <section class="mv-card--mini">
            <div class="mv-actors__img" style="backgroundImage: url(https://picsum.photos/400/300?image=338)"></div>
            <h4>Owen Wilsen</h4>
            <small>Steven Holt</small>
          </section>
        </div>

      </div>

    </div>

    <div class="mv-split__right">

      <div class="mv-reviews">
        <h2>Reviews</h2>

        <article class="mv-review">
          <div class="mv-review__score">
            <div class="mv-highlight__score">
              <img src="../../assets/media/vector/icons/fire.svg" alt="" class="mv-highlight__score__icon">
              <span class="mv-highlight__score__current">8.3</span>
              <div class="mv-highlight__score__seperator">/</div>
              <div class="mv-highlight__score__total">10</div>
            </div>
          </div>
          <div class="mv-review__body">
            While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space. It is those feelings that drive our love of astronomy and our desire to learn more and more about it.
          </div>

          <small class="mv-review__author">
            - Jimmy
          </small>
        </article>

        <article class="mv-review">
          <div class="mv-review__score">
            <div class="mv-highlight__score">
              <img src="../../assets/media/vector/icons/fire.svg" alt="" class="mv-highlight__score__icon">
              <span class="mv-highlight__score__current">7.4</span>
              <div class="mv-highlight__score__seperator">/</div>
              <div class="mv-highlight__score__total">10</div>
            </div>
          </div>
          <div class="mv-review__body">
            While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space. It is those feelings that drive our love of astronomy and our desire to learn more and more about it.
          </div>

          <small class="mv-review__author">
            - Jimmy
          </small>
        </article>

        <article class="mv-review">
          <div class="mv-review__score">
            <div class="mv-highlight__score">
              <img src="../../assets/media/vector/icons/fire.svg" alt="" class="mv-highlight__score__icon">
              <span class="mv-highlight__score__current">6.8</span>
              <div class="mv-highlight__score__seperator">/</div>
              <div class="mv-highlight__score__total">10</div>
            </div>
          </div>
          <div class="mv-review__body">
            While it was just a TV show, that little speech at the beginning of the original Star Trek show really did do a good job of capturing our feelings about space. It is those feelings that drive our love of astronomy and our desire to learn more and more about it.
          </div>

          <small class="mv-review__author">
            - Jimmy
          </small>
        </article>


        <h2>Write a review</h2>

        <form>
          <input type="text" placeholder="Your name">
          <input type="number" placeholder="Score" min="0" max="10">
          <textarea name="name" rows="4" cols="80" placeholder="Your review"></textarea>

          <button type="submit" class="btn btn--secondary">Submit review</button>
        </form>

      </div>

    </div>


  </div>

  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      showEditModal: false
    }
  },
  computed: {
    movue () {
      return this.$store.getters.loadedMovue(this.id)
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAuthenticated) {
        return false
      }
      return this.$store.getters.user.id === this.movue.creatorId
    },
    userIsRegistered () {
        return this.$store.getters.user.registeredMovues.findIndex(movueId => {
          return movueId === this.movue.id
        }) >= 0
      }
  },
  methods: {
    onLike () {
      if (this.userIsRegistered) {
        this.$store.dispatch('unregisterUserFromMovue', this.movue.id)
      } else {
        this.$store.dispatch('registerUserForMovue', this.movue.id)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/2.settings/index-sett.scss';

$wrapper-size: 55px;


/*------------------------------------*\
  #HIGHLIGHT
\*------------------------------------*/

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

  &__edit{
    background: none;
    border: none;
    display: flex;
    align-items: center;

    img{
      margin-right: 10px;
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


/*------------------------------------*\
  #QUOTE
\*------------------------------------*/

.mv-quote{
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  margin-top: 70px;

  h2{
    text-align: right;
    font-size: 4rem;
    max-width: 600px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    &:after{
      content: '';
      display: block;
      width: 35px;
      height: 4px;
      background: #fff;
      margin-top: 15px;
    }
  }

  &__right{
    margin-left: 80px;
    max-width: 490px;
  }
}



/*------------------------------------*\
  #BG IMAGE
\*------------------------------------*/

.mv-bg-image{
  width: 100%;
  height: 400px;
  position: relative;

  &__gr-top{
    background: linear-gradient(rgba(#000, 1), rgba(#000, 0));
    width: 100%;
    height: 30%;
  }

  &__gr-bottom{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(rgba(#000, 0), rgba(#000, 1));
  }

  &__gr-ov{
    background:  rgba(0, 0, 0, 0.77);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
  }
}



/*------------------------------------*\
  #SPLIT
\*------------------------------------*/

.mv-split{
  padding: $wrapper-size;
  display: flex;
  position: relative;
  margin-top: -180px;

  .movue-card--small{
    max-width: 50%;
    width: 50%;
  }

  h2{
    font-family: $font-body;
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
}

.mv-split__left,
.mv-split__right{
  max-width: 50%;
}

.mv-split__right{
  $gap: 50px;
  max-width: calc(50% - #{$gap});
  margin-left: $gap;
}




/*------------------------------------*\
  #SIMILAIR SHOWS
\*------------------------------------*/

.mv-similair{

  &__cards{
    display: flex;
  }
}

.mv-actors{

  &__cards{
    display: flex;
    flex-wrap: wrap;
  }

  &__img{
    height: 150px;
    width: 100px;
    border-radius: 4px;
    margin-bottom: 5px;
  }

  h4{
    font-family: $font-body;
    font-size: 1.8rem;
    margin-bottom: 0;
  }

  small{
    margin: 0;
    position: relative;
    display: block;
    opacity: .45;
    font-size: 1.6rem;
  }
}





/*------------------------------------*\
  #ACTORS
\*------------------------------------*/

.mv-card--mini{
  margin-right: 18px;
  margin-bottom: 20px;

  &:last-child{
    margin-right: 0;
  }
}




/*------------------------------------*\
  #REVIEWS
\*------------------------------------*/

.mv-reviews{

  input,
  textarea{
    background: #1e1d24;
    border: none;
    margin-bottom: 20px;
    border-top: #292832 1px solid;
    color: #fff;
  }
}

.mv-review{
  margin-bottom: 30px;

  &__score{
    margin-bottom: 5px;
  }

  .mv-highlight__score{

  }

  &__body{
    max-width: 450px;
  }

  &__author{
    margin-top: 10px;
    display: block;
    opacity: .45;
    font-size: 1.6rem;
  }
}


</style>
