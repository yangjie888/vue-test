<template>
  <div>
    <div>
      <hello-world/>
      <el-button type="primary">
        主要按钮2
      </el-button>
      <!-- <two-com :tt='yy'/> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'two',
  data () {
    return {
      yy: 'yangjie'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
