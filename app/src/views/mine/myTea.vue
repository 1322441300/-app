<template>
  <div class="myTeaWrap">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <div class="myTea">
      <p>您还没有成功开业的茶馆</p>
      <p>立即去<span class="c2" @click="goNewTea">申请</span></p>
    </div>
  </div>
</template>

<script>
import headPage from '@/components/headPage';

export default {
  data () {
    return {
      isBack: true,
      title: '我的茶馆'
    }
  },
  components: {
    headPage: headPage
  },
  methods: {
    goNewTea () {
      this.$router.push({
        path: 'newTeaHouse?typeString=茶馆&menuId=1'
      })
    }
  }
}
</script>

<style lang="scss">
.myTeaWrap{
  width: 100%;
  height: 100%;
  background-color: #fff;
  .myTea{
    padding: 50px 0;
    font-size: 18px;
    line-height:40px
  }
}
</style>
