<template>
<aside class="main-nav">
  <div class="main-nav__inner">
    <router-link to="/" router>
      <img class="logo" src="../../assets/media/vector/logo.svg" alt="">
    </router-link>
    <nav>
      <router-link v-for="link in menuItems" class="main-nav__link" router :to="link.link">
        {{ link.title }}
      </router-link>
      <a @click="onLogout" v-if="userIsAuthenticated" class="main-nav__link">Logout</a>
    </nav>
  </div>
</aside>
</template>

<script>
  export default {
    methods: {
      onLogout () {
        this.$store.dispatch('logout')
      }
    },
    computed: {
      menuItems() {
        let menuItems = [{
            title: 'Sign in',
            link: '/signin'
          },
          {
            title: 'Sign up',
            link: '/signup'
          }
        ]
        if (this.userIsAuthenticated) {
          menuItems = [{
              title: 'Overview',
              link: '/'
            },
            {
              title: 'Add movue',
              link: '/addMovue'
            }
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../../styles/2.settings/index-sett.scss';

.main-nav {
    background: #fff;
    min-width: 170px;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    position: fixed;

    .logo {
        height: 25px;
    }

    nav {
        margin-top: 100px;
    }

    &__inner {
        width: 100px;
    }

    &__link {
        display: block;
        text-decoration: none;
        color: initial;
        margin-top: 10px;
        transition: $transition1;
        &:hover {
            color: $color-main;
        }

        &--active {
            color: $color-main;
        }
    }
}
</style>
