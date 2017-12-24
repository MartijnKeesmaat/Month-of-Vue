<template>
    <div id="app">
        <mv-sidebar></mv-sidebar>
        <router-view/>
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
</style>
