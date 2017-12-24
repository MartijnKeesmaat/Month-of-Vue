<template>
    <aside class="main-nav">
        <div class="main-nav__inner">
            <img class="logo" src="../../assets/media/vector/logo.svg" alt="">
            <nav>
                <router-link
                    v-for="link in menuItems"
                    class="main-nav__link"
                    router
                    :to="link.link">
                    {{ link.title }}
                </router-link>
            </nav>
        </div>
    </aside>
</template>

<script>
    export default {
        data () {
            return {
                menuItems: [
                    { title: 'Overview', link: '/'},
                    { title: 'Sign in', link: '/signin'}
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/2.settings/index-sett.scss';

    .main-nav{
        background: #fff;
        min-width: 150px;
        height: 100vh;
        display: flex;
        justify-content: center;
        padding-top: 30px;

        .logo{
            height: 25px;
        }

        nav{
            margin-top: 100px;
        }

        &__inner{
            width: 80px;
        }

        &__link{
            display: block;
            text-decoration: none;
            color: initial;
            margin-top: 10px;
            transition: $transition1;

            &:hover{
                color: $color-main;
            }

            &--active{
                color: $color-main;
            }
        }
    }
</style>
