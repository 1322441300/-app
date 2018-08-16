<template>
  <div class="nav pf">
    <!-- <h1>{{ msg }}</h1> -->
    <ul class="navList clearfix">
      <li class="fl" :class="{'active':currentStatus == 'goIndex'}" @click="goIndex">
        <img v-show="currentStatus == 'goIndex'" src="@/assets/home-click.png" >
        <img v-show="currentStatus != 'goIndex'" src="@/assets/home.png" >
        <span>茶馆</span>
      </li>
      <li class="fl" :class="{'active':currentStatus == 'goMarket'}" @click="goMarket">
        <img v-show="currentStatus == 'goMarket'" src="@/assets/market-click.png" >
        <img v-show="currentStatus != 'goMarket'" src="@/assets/market.png" >
        <span>市场</span>
      </li>
      <li class="fl" :class="{'active':currentStatus == 'goFind'}" @click="goFind">
        <img v-show="currentStatus == 'goFind'" src="@/assets/find-click.png" >
        <img v-show="currentStatus != 'goFind'" src="@/assets/find.png" >
        <span>发现</span>
      </li>
      <li class="fl" :class="{'active':currentStatus == 'goMine'}" @click="goMine">
        <img v-show="currentStatus == 'goMine'" src="@/assets/mine-click.png" >
        <img v-show="currentStatus != 'goMine'" src="@/assets/mine.png" >
        <span>我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import {AjaxUrl} from '../common/ajax/serverPublic';
import { getCookie } from '@/common/utils/utilsPublic';
export default {
  name: 'bottomNav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App   heheh',
      currentStatus: 'goIndex'
    }
  },
  methods: {
    getCurrentStatus: function() {
      let currentStatus = this.$route.query.currentStatus;
      // console.log(currentStatus);
      if (currentStatus) {
        this.currentStatus = currentStatus;
      }
    },
    goIndex: function () {
      this.$router.push({
        path: 'index',
        query: {
          currentStatus: 'goIndex'
        }
      });
    },
    goMarket: function() {
      this.$router.push({
        path: 'market',
        query: {
          currentStatus: 'goMarket'
        }
      });
    },
    goFind: function() {
      this.$router.push({
        path: 'find',
        query: {
          currentStatus: 'goFind'
        }
      });
    },
    goMine: function() {
      let loginStatus = getCookie().userPhone;
      if (loginStatus) {
        this.$router.push({
          path: 'mine',
          query: {
            currentStatus: 'goMine'
          }
        });
      } else {
        this.$router.push({
          path: 'login',
          query: {
            currentStatus: 'goMine',
            pathUrl: 'mine'
          }
        });
      }
    }
    // get() {
    //   this.$ajax.post(AjaxUrl.test).then((response) => {
    //     console.log(response);
    //   });
    // }
  },
  created() {
    this.getCurrentStatus();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  width: 100%;
  height: 58px;
  border-top: 1px solid #eee;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 5px 0 4px;
  font-size: 15px;
  .navList{
    width: 100%;
    li{
      width:25%;
      color: #999;
      img{
        width: 24px;
        display: block;
        margin:0 auto;
        margin-bottom:5px;
      }
    }
    li.active{
      color: #c22;
    }
  }
  h1 {
    color: red;
  }
}
</style>
