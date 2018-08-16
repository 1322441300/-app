<template>
  <div class="submitSuccess">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <p>收到您的申请</p>
    <p>我们会在五个工作日内审核并反馈结果</p>
    <p>请您耐心等待</p>
    <div style="height:45px;"></div>
    <div class="goIndex" @click="goIndex">返回首页</div>
    <div style="height:45px;"></div>
  </div>
</template>

<script>
import headPage from '@/components/headPage';

export default {
  data () {
    return {
      isBack: false,
      title: '提交成功'
    }
  },
  components: {
    headPage: headPage
  },
  methods: {
    goIndex: function() {
      this.$router.push({
        path: 'index'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.submitSuccess{
  width: 100%;
  height: 100%;
  padding:50px 10px 0;
  background-color: #fff;
  font-size: 16px;
  p{
    line-height: 30px;
    padding-bottom:20px;
  }
  .goIndex{
    width:40%;
    height: 50px;
    line-height: 50px;
    background-color: #468ff1;
    border-radius:4px;
    margin:0 auto;
    color: #fff;
  }
}
</style>
