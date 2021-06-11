<template>
  <div class="side-bar">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
    </ul>
    <template v-for="(item, index) in $store.state.userRouters">
      <MenuItem :key="index" :item="item"></MenuItem>
    </template>
  </div>
</template>

<script>
import MenuItem from './MenuItem.vue'
export default {
  name: 'SideBar',
  components: {
    MenuItem
  }
}
</script>

<style lang="scss" soped>
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  padding-top: 90px;
  background-color:#ddd;
  color: #000;
  z-index: 1;
  ul {
    padding: 0 20px;
    li {
      line-height: 30px;
      font-size: 20px;
    }
  }
}
</style>