<template>
    <div class="">
      <headPage :isBack="isBack" :title="title"></headPage>
      <div style="height:45px;"></div>
      <div class="findFriend">
        <p>很遗憾！</p>
        <p>距离您十公里内还没有茶友呢</p>
      </div>
    </div>
</template>

<script>
import headPage from '@/components/headPage';

export default {
  data () {
    return {
      isBack: true,
      title: ''
    }
  },
  components: {
    'headPage': headPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.findFriend{
  width: 100%;
  font-size: 18px;
  padding: 30px 0;
  line-height: 40px;
}
</style>
