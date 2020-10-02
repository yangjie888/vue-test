<template>
    <el-container class="con">
      <el-header>
         <div style="height:50px;float:left;padding-top:3px;cursor:pointer">
            <img src="../../assets/images/logo.png" height='30px'>
            <span style="fontWeight:bold;fontSize:25px;color:#409EFF">星星后台管理系统</span>
         </div>
         <div style="height:100%;float:right;width:90px;overflow:hidden;text-overflow:ellipsis;white-space: nowrap">
          <i class="el-icon-user"
          style="display:inline-block;font-size:30px;color:#409EFF;vertical-align:middle"></i>
          <span>杨杰</span>
         </div>
         <div style="height:100%;float:right">
          <el-link @click="setting" type="primary" :underline="false" icon="el-icon-setting" style="font-size:30px;margin-right:20px">
          </el-link>
         </div>
      </el-header>
      <el-container class="elcon">
        <router-view></router-view>
      </el-container>
      <el-footer>Copyright 1998 - 2020 Tencent. All Rights Reserved</el-footer>
    </el-container>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    setting () {
      this.$router.push('/layout/setting')
    }
  }
}
</script>

<style lang='scss' scoped>
  .con{
    position: relative;
    height: 100%;

  }
  .el-header {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    color: #333;
    line-height: 60px;
    border-bottom:1px solid #ccc;
  }
  .el-footer {
    position: absolute;
    bottom: 0;
    width:100%;
    color: #333;
    text-align: center;
    height: 30px!important;
    line-height: 30px;
    font-size:12px;
    border-top:1px solid #ccc ;
  }
  .elcon{
   position: absolute;
   top:60px;
   bottom:30px;
   width:100%;
  }
</style>
