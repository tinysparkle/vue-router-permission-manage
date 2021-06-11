<template>
  <div>
    <ul v-if="item.children && item.children.length > 0">
      <li>
        <router-link :to="item.link || item.path">{{ item.title }}</router-link>
        <template v-for="(c, i) in item.children">
            <MenuItem :key="i" :item="c"/>
        </template>
      </li>
    </ul>
    <ul v-else>
      <li>
        <router-link :to="item.link || item.path">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    item: Object,
  },
  data() {
      return {
          isActive: false
      }
  }
};
</script>

<style lang="scss" scoped>
.active {
   color:lightslategray;
   border-bottom: 1px solid lightslategrey;
}
</style>