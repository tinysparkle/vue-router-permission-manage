<template>
  <div id="app">
    <MHeader/>
    <SideBar/>
    <PageBoard/>
    <router-view/>
  </div>
</template>

<script>
import MHeader from '@/components/MHead.vue'
import SideBar from '@/components/SideBar.vue';
import PageBoard from '@/components/PageBoard.vue';

import { getUserRouters } from './services'
export default {
  name: 'App',
  components: {
    MHeader,
    SideBar,
    PageBoard
  },
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  overflow: hidden;
}
</style>