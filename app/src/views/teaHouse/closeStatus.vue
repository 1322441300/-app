<template>
  <div class="">
    <headPage :title="typeString"></headPage>
    <div style="height:45px;"></div>
    休息中哈哈哈哈
  </div>
</template>

<script>
import headPage from '@/components/headPage';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App   heheh',
      typeString: ''
    }
  },
  components: {
    'headPage': headPage
  }
}
</script>

<style lang="css">
</style>
