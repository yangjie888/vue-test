<template>
  <div>
    <div>
      第二个组件{{tt}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'TwoCom',
  data () {
    return {}
  },
  props: ['tt']
}
</script>
