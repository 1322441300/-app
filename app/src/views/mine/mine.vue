<template>
  <div class="index">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <div class="kfWrap pf">
      <a href="tel:13087940947">客服</a>
    </div>
    <div class="headImgWrap pr">
      <div class="headInfo clearfix pr">
        <img src="@/assets/head2.png" class="pr">
        <em class="omg pr">花名：{{userName}}</em>
      </div>
      <div style="height:20px;"></div>
      <img src="@/assets/bg.jpg" class="headBg pa">
    </div>
    <div style="height:20px;"></div>
    <div class="mineList clearfix">
      <div style="height:20px;"></div>
      <div class="topList" @click="goMyHerald">
        <img class="s" src="@/assets/yuyue.png" style="box-shadow:0 0 6px #4fb565;">
        我的预约
      </div>
      <div style="height:20px;"></div>
    </div>
    <div class="mineList clearfix">
      <ul class="pr">
        <li class="fl" style="width:62px;height:160px;padding:30px 0;" @click="goMyAttention">
          <img class="s" src="@/assets/gz.png" style="box-shadow:0 0 6px #ff5c7a;">
          <div style="height:12px;"></div>
          我的<div style="height:5px;"></div>关注
        </li>
        <li class="pa" style="width:160px;height:160px;top:0;left:50%;margin-left:-80px;padding:30px 0;" @click="goMyTea">
          <img class="s" src="@/assets/cg.png" style="width:60px;height:60px;box-shadow:0 0 6px #ffb41e;">
          <div style="height:15px;"></div>
          我的茶馆
        </li>
        <li class="fr" style="width:62px;height:160px;padding:30px 0;" @click="goSetPage">
          <img class="s" src="@/assets/set.png" style="box-shadow:0 0 6px #ff4d4d;">
          <div style="height:12px;"></div>
          账户<div style="height:5px;"></div>管理
        </li>
      </ul>
    </div>
    <div class="mineList clearfix" @click="goAdvise">
      <div style="height:20px;"></div>
      <div class="topList">
        <img class="s" src="@/assets/yjfk.png" style="box-shadow:0 0 6px #fff;">
        意见反馈
      </div>
      <div style="height:20px;"></div>
    </div>
    <div style="height:78px;"></div>
    <bottomNav></bottomNav>
  </div>
</template>

<script type="text/javascript">
import {AjaxUrl} from '../../common/ajax/serverPublic';
import headPage from '@/components/headPage';
import nav from '@/components/nav';

import { getCookie } from '@/common/utils/utilsPublic';

export default{
  name: 'index',
  data () {
    return {
      isBack: false,
      title: '我的',
      userName: '',
      userPhone: ''
    }
  },
  components: {
    'headPage': headPage,
    'bottomNav': nav
  },
  methods: {
    getUserPhone: function() {
      let userPhone = getCookie().userPhone;
      this.userPhone = userPhone;
    },
    getUserInfo: function() {
      // console.log(this.userPhone);
      let params = {
        mobileNo: this.userPhone
      }
      this.$ajax.post(AjaxUrl.getUserInfo, params).then((response) => {
        // console.log(response.data.data.userName);
        this.userName = response.data.data.userName;
      });
    },
    goMyTea: function() {
      this.$router.push({
        path: 'myTea?userPhone=' + this.userPhone
      })
    },
    goMyHerald: function() {
      // console.log('hah');
      this.$router.push({
        path: 'myHerald?userPhone=' + this.userPhone
      })
    },
    goMyAttention: function() {
      // console.log('goMyAttention');
      this.$router.push({
        path: 'myAttention?userPhone=' + this.userPhone
      })
    },
    goSetPage: function () {
      this.$router.push({
        path: 'setPage?userPhone=' + this.userPhone + '&userName=' + this.userName
      })
    },
    goAdvise () {
      this.$router.push({
        path: 'advise?userPhone=' + this.userPhone
      })
    }
  },
  created() {
    this.getUserPhone();
    this.getUserInfo();
  },
  beforeCreate: function() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .kfWrap{
    right:10px;
    top:4px;
    font-size: 16px;
    padding:8px;
    border-radius: 4px;
    border:1px solid #ddd;
    height: 36px;
    z-index:1000;
  }
  .headImgWrap{
    width: 100%;
    padding: 20px 0 0 0;
    img.headBg{
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 0;
    }
    .headInfo{
      width: 100%;
      z-index:10;
      padding:0 30px;
      img{
        display: block;
        width:80px;
        margin:0 auto 10px;
        border-radius:50%;
      }
      em{
        // max-width: 70%;
        font-size: 14px;
        line-height: 18px;
        display: inline-block;
        padding:10px 12px;
        height:40px;
        border-radius:20px;
        margin:0 auto;
        border:1px solid #6e9ceb;
        color: #fff;
      }
    }
  }
  .mineList{
    width: 100%;
    background-color: #fff;
    font-size: 16px;
    .topList{
      width:160px;
      height: 62px;
      border:1px solid #a7cdff;
      background-color: #a7cdff;
      color: #444;
      border-radius:20px;
      padding:10px 0;
      margin: 0 auto;
      img{
        width:40px;
        margin-right:8px;
        border-radius: 20px;
      }
    }
    ul{
      width: 100%;
      height: 160px;
      padding:0 10px;
      li{
        border:1px solid #a7cdff;
        background-color: #a7cdff;
        color: #444;
        border-radius:20px;
        img{
          width:40px;
          height:40px;
          margin: 0 auto;
          border-radius:50%;
          display: block;
          box-shadow: 0 0 6px #ff5c7a;
        }
      }
    }
    .s {
      box-shadow: inset 0 0 4px 2px #fff, inset 0 0 4px 2px #f2f2f2;
      -webkit-transition: all 1s;
      -moz-transition: all 1s;
      transition: all 1s;
      -webkit-animation: bs2 linear 1s 1s infinite, bs2-in 1s;
      -moz-animation: bs2 linear 1s 1s infinite, bs2-in 1s;
      animation: bs2 linear 1s 1s infinite, bs2-in 1s;
    }
    @keyframes bs2 {
      0% {
        box-shadow: inset 0 0 5px 2px #fff, inset 0 0 0 2px #fff, 0 0 0px 0 #fff;
      }
      50% {
        box-shadow: inset 0 0 10px 2px #fff, inset 0 0 10px 2px #fff, 0 0 12px 0 #fff;
      }
      100% {
        box-shadow: inset 0 0 5px 2px #fff, inset0 0 0 5px 2px #fff, 0 0 0px 0 #fff;
      }
    }
  }
</style>
