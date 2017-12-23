<template>
  <div id="app">
      <aside class="main-nav">
          <nav>
              <a class="main-nav__link main-nav__link--active" href="#">Overview</a>
              <a class="main-nav__link" href="#">User</a>
          </nav>
      </aside>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
    .main-nav{
        background: #fff;
    }
</style>

<style src="./assets/styles/base.scss" lang="scss"></style>
