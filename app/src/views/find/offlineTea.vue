<template>
  <div style="width:100%;height:100%;background:#fff;">
    <headPage :isBack="isBack" :title="title"></headPage>
    <p style="height:45px;"></p>
    <ul class="offlineList clearfix">
      <li class="fl" v-for="city in citys" :key="city.id" @click="goCity">{{city}}</li>
    </ul>
  </div>
</template>

<script>
import headPage from '@/components/headPage';

export default {
  data () {
    return {
      isBack: true,
      title: '线下茶馆聊期货',
      citys: ['北京', '上海', '广州', '深圳', '杭州', '无锡', '深圳', '成都', '重庆', '武汉', '天津', '青岛', '宁波', '长沙', '厦门', '南京', '西安', '兰州', '合肥', '郑州']
    }
  },
  components: {
    'headPage': headPage
  },
  methods: {
    goCity () {
      this.$router.push({
        path: 'cityOffline'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.offlineList{
  width: 100%;
  padding:15px 10px;
  font-size: 16px;
  li{
    width:22%;
    margin-left:3%;
    margin-bottom: 15px;
    line-height: 38px;
    height: 40px;
    border-radius: 4px;
    border:1px solid #6e9ceb;
    background-color: #6e9ceb;
    color: #fff;
  }
  li:nth-child(4n+1){
    margin-left: 0;
  }
}
</style>
