<template>
    <el-container class="con">
      <el-header>
         <div style="height:50px;float:left;padding-top:3px;cursor:pointer" @click="goHome">
            <img src="../../assets/images/logo.png" height='30px'>
            <span style="fontWeight:bold;fontSize:25px;color:#409EFF">星星后台管理系统</span>
         </div>
         <div style="float:right;height:100%">
          <el-dropdown :hide-on-click="false">
            <div style="width:90px;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space: nowrap">
              <i class="el-icon-user" style="font-size:30px;color:#409EFF;vertical-align: middle;"></i>
              <span>杨杰</span>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>
                <div @click="tuichu">退出</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
import { removeToken } from '@/utils/auth'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  methods: {
    goHome () {
      this.$router.push('/layout')
    },
    setting () {
      this.$router.push('/layout/setting')
    },
    tuichu () {
      removeToken()
      location.reload()
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
