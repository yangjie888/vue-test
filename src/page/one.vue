<template>
  <div>
    <div>组件一一一</div>
    {{user}}
    <button @click="changUser">按钮</button>
    <div></div>
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
