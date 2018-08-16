<template>
  <div class="">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <div class="closeStatus">
      茶馆休息中
      <p>请营业时间再来哦</p>
    </div>
  </div>
</template>

<script>
import headPage from '@/components/headPage';
export default {
  data () {
    return {
      isBack: true,
      title: '茶馆休息中'
    }
  },
  components: {
    'headPage': headPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.closeStatus{
  padding:30px 0;
  font-size: 18px;
  line-height: 40px;
}
</style>
