<template>
    <div id="app">
        <mv-sidebar></mv-sidebar>
        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>
import mvSidebar from './components/Sidebar/Sidebar.vue'

export default {
    name: 'app',
    components: {
        mvSidebar
    }
}
</script>

<style lang="scss">
    @import 'styles/2.settings/index-sett.scss';

    main{
        margin-left: 150px;
        padding: 40px;
    }
</style>
