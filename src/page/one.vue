<template>
  <div>
    <div>组件111一一一</div>
    {{user}}
    <button @click="changUser">按钮测试</button>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'one',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['changUser']),
    tt () {
      console.log()
    }
  }
}
</script>
