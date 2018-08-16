<template>
  <div class="myFllow">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <ul class="userInfo">
      <li class="clearfix">
        <em class="fl">用户名</em>
        <div class="fr">{{userName}}</div>
      </li>
      <li class="clearfix">
        <em class="fl">通讯手机</em>
        <div class="fr">{{userPhone}}</div>
      </li>
    </ul>
    <ul class="userInfo">
      <li class="clearfix pr" @click="goModifyPwd">
        <em class="fl">修改登录密码</em>
        <div class="pa" style="right:0px;top:50%;margin-top:-6.25px;">
          <img src="@/assets/next.png" style="width:7px;height:12.5px;display:block;">
        </div>
      </li>
    </ul>
    <div style="height:20px;"></div>
    <div class="logout c2" @click="doLogout">退出登录</div>
  </div>
</template>

<script>
// import {AjaxUrl} from '../../common/ajax/serverPublic';
import headPage from '@/components/headPage';
import { deleteCookie, hidePhone } from '@/common/utils/utilsPublic';
import { MessageBox } from 'mint-ui';

export default {
  data () {
    return {
      isBack: true,
      title: '账户管理',
      userPhone: '',
      userName: '  '
    }
  },
  components: {
    headPage: headPage
  },
  methods: {
    getUserInfo: function() {
      let userPhone = this.$route.query.userPhone;
      let userName = this.$route.query.userName;
      this.userPhone = hidePhone(userPhone);
      this.userName = userName;
    },
    goModifyPwd () {
      this.$router.push({
        path: 'modifyPwd?userPhone=' + this.userPhone
      })
    },
    doLogout: function() {
      MessageBox.alert('确定退出当前账户？').then(action => {
        deleteCookie('userPhone');
        this.$router.push({
          path: 'index'
        })
      });
    }
  },
  created () {
    this.getUserInfo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.userInfo{
  width: 100%;
  margin-top:20px;
  background-color: #fff;
  padding:0 10px;
  li{
    width: 100%;
    padding:15px 0;
    font-size: 16px;
    border-bottom:1px solid #ddd;
  }
  li:last-child{
    border:0;
  }
}
.logout{
  width: 100%;
  background-color: #fff;
  font-size: 16px;
  padding:15px;
}
</style>
