<template>
  <div class="index">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <div class="findWrap">
      <div class="findNew shadowWrap clearfix pr" @click="goFindNew">
        <img src="@/assets/fx.png" class="">
        <em class="pr">发现新开张茶馆</em>
      </div>
      <div style="height:20px;"></div>
      <div class="middleWrap clearfix" style="width:90%;">
        <div class="shadowWrap fl" @click="goVote">
          <img src="@/assets/tp.png">
          <p>茶话主题投票</p>
          <p>说出你感兴趣</p>
          <p>的话题</p>
        </div>
        <div class="shadowWrap fr" @click="goOffline">
          <img src="@/assets/share.png">
          <p>约茶话期货</p>
          <p>呼朋唤友聊</p>
          <p>期货</p>
        </div>
      </div>
      <div style="height:20px;"></div>
      <div class="nearFriend shadowWrap clearfix pr" @click="goFindFriend">
        <img src="@/assets/fj.png" class="fl pa">
        <em class="pr">附近的茶友<br>结识志同道合的朋友</em>
      </div>
    </div>
    <div style="height:58px;"></div>
    <bottomNav></bottomNav>
  </div>
</template>

<script type="text/javascript">
import headPage from '@/components/headPage';
import nav from '@/components/nav';
import { getCookie, checkPhone } from '@/common/utils/utilsPublic';

export default{
  name: 'index',
  data () {
    return {
      isBack: false,
      title: '发现',
      userPhone: ''
    }
  },
  components: {
    'headPage': headPage,
    'bottomNav': nav
  },
  methods: {
    getUserInfo () {
      let userPhone = getCookie().userPhone;
      this.userPhone = userPhone;
    },
    goFindNew () {
      if (checkPhone(this.userPhone)) {
        this.$router.push({
          path: 'findNew'
        })
      } else {
        this.$router.push({
          path: 'login',
          query: {
            currentStatus: 'goFind',
            pathUrl: 'find'
          }
        })
      }
    },
    goVote () {
      if (checkPhone(this.userPhone)) {
        this.$router.push({
          path: 'vote'
        })
      } else {
        this.$router.push({
          path: 'login',
          query: {
            currentStatus: 'goFind',
            pathUrl: 'find'
          }
        })
      }
    },
    goOffline () {
      if (checkPhone(this.userPhone)) {
        this.$router.push({
          path: 'offlineTea'
        })
      } else {
        this.$router.push({
          path: 'login',
          query: {
            currentStatus: 'goFind',
            pathUrl: 'find'
          }
        })
      }
    },
    goFindFriend () {
      if (checkPhone(this.userPhone)) {
        this.$router.push({
          path: 'findFriend'
        })
      } else {
        this.$router.push({
          path: 'login',
          query: {
            currentStatus: 'goFind',
            pathUrl: 'find'
          }
        })
      }
    }
  },
  created () {
    this.getUserInfo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.index{
  height:100%;
  background-color: #fff;
}
.findWrap{
  width: 100%;
  padding:20px 10px;
  background-color: #fff;
  .findNew{
    width:90%;
    height:90px;
    line-height: 90px;
    font-size: 18px;
    border-radius:10px;
    background-color: #6e9ceb;
    border:2px solid #a7cdff;
    margin:0 auto;
    color: #fff;
    img{
      width:60px;
      top:50%;
      margin-top: -30px;
      left: 50%;
      margin-left: -30px;
      opacity: 0.4;
      position: absolute;
      animation: move 1.5s linear;
      @keyframes move{
        0%{transform: rotateX(-180deg) rotateY(-180deg);opacity: 0.8;}
        100%{transform: rotateX(0deg) rotateY(0deg);opacity: 0.4;}
      }
    }
    em{
      animation: bigger 0.4s linear;
      @keyframes bigger{
        0%{font-size: 12px;}
        100%{font-size: 18px;}
      }
    }
  }
  .middleWrap{
    .fl,.fr{
      width: 48%;
      height: 100%;
      padding: 30px 10px 20px;
      background-color: #6e9ceb;
      border:2px solid #a7cdff;
      border-radius:10px;
      font-size: 16px;
      line-height: 30px;
      p{
        color: #fff;
      }
      img{
        width:60px;
        margin-bottom: 20px;
        animation: scaleout 1.3s infinite ease-in-out;
        @keyframes scaleout {
          0% {
            transform: scale(1.0);
            -webkit-transform: scale(1.0);
            // opacity: 0.6;
          }
          100% {
            transform: scale(1.1);
            -webkit-transform: scale(1.1);
            // opacity: 1.0;
          }
        }
      }
    }
    .fr{

    }
  }
  .nearFriend{
    width:90%;
    height:90px;
    padding: 15px 0;
    line-height: 30px;
    font-size: 18px;
    border-radius:10px;
    background-color: #6e9ceb;
    border:2px solid #a7cdff;
    margin:0 auto;
    color: #fff;
    img{
      width:60px;
      animation: top 1s linear infinite;
      top:50%;
      left:50%;
      opacity: .4;
      @keyframes top{
        0%{width: 40px;margin-top:-20px;margin-left:-20px;}
        50%{width:60px;margin-top:-30px;margin-left:-30px;}
        100%{width: 40px;margin-top:-20px;margin-left:-20px;}
      }
    }
  }
}
</style>
