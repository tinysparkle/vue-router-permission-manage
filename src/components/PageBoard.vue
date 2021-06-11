<template>
  <div class="page-board">
    <router-view/>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" soped>
.page-board {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 90px 30px 30px 230px;
  background: #eee;
}
</style>