<template>
  <div>
  <el-button type="text" @click="show = true">点击打开 Dialog</el-button>
  <alg-com :dialogVisible.sync='show'></alg-com>
  </div>
</template>
<script>
export default {
  name: 'modelThree',
  data () {
    return {
      show: false
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
