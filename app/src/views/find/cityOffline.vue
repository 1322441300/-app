<template>
  <div class="">
    <headPage :isBack="isBack" :title="title"></headPage>
    <p style="height:45px;"></p>
    <div class="offline">
      <p class="">APP新上线，暂无线下茶馆收录</p>
      <p class="">您可以<em class="c2" @click="goSubCity">提交</em>线下茶馆进行收录</p>
    </div>
  </div>
</template>

<script>
import headPage from '@/components/headPage';

export default {
  data () {
    return {
      isBack: true,
      title: '线下茶馆'
    }
  },
  components: {
    'headPage': headPage
  },
  methods: {
    goSubCity () {
      this.$router.push({
        path: 'subCity'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.offline{
  padding: 30px;
  line-height: 30px;
  font-size: 16px;
}
</style>
