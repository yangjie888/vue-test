<template>
  <div>
    <el-dialog
      title="新增"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="colseFun">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="colseFun">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'algCom',
  props: ['dialogVisible'],
  data () {
    return {
    }
  },
  methods: {
    colseFun () {
      this.$emit('update:dialogVisible', false)
    }
  }
}
</script>
