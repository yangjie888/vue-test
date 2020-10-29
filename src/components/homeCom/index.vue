<template>
  <el-container>
    <el-aside width="200px">
      <aside-com/>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
</el-container>
</template>
<script>
export default {
  name: 'homeCom',
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
</style>
