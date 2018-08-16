<template>
  <div class="loginWrap pr">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div class="forget pf" @click="goReset">忘记密码？</div>
    <div style="height:45px;"></div>
    <div class="headImg">
      <img src="@/assets/headImg.png">
    </div>
    <div class="login">
      <div class="group pr">
        <img src="@/assets/userName.png" class="pa">
        <input type="number" placeholder="请输入您的手机号" @input="checkPhoneLength" v-model="userPhone">
      </div>
      <div style="height:20px;"></div>
      <div class="group pr">
        <img src="@/assets/pwd.png" class="pa">
        <input type="password" name="password" placeholder="请输入登录密码" maxlength="16" v-model="password">
      </div>
      <div style="height:40px;"></div>
      <div class="loginBtn" @click="doLogin">登录</div>
      <div style="height:40px;"></div>
      <div class="goRegister" @click="goRegister()">没有账号？<em>立即注册></em></div>
    </div>
  </div>
</template>

<script>
import {AjaxUrl} from '../../common/ajax/serverPublic';
import headPage from '@/components/headPage';
import { addCookie, phoneLength, checkPhone } from '@/common/utils/utilsPublic';

import { Toast, Indicator } from 'mint-ui';

export default {
  name: 'login',
  data () {
    return {
      isBack: true,
      title: '登录',
      userPhone: '',
      password: '',
      pathUrl: 'mine',
      currentStatus: ''
    }
  },
  props: {
    // pathUrl: String
  },
  components: {
    'headPage': headPage
  },
  methods: {
    checkPhoneLength: function() {
      let phoneNum = this.userPhone;
      this.userPhone = phoneLength(phoneNum);
    },
    goReset: function() {
      this.$router.push({
        path: 'resetPwd'
      })
    },
    goRegister: function() {
      this.$router.push({
        path: 'register'
      })
    },
    getCurrentPathUrl: function() {
      let currentPathUrl = this.$route.query.pathUrl;
      let currentStatus = this.$route.query.currentStatus;
      // console.log(currentPathUrl);
      if (currentPathUrl) {
        this.pathUrl = currentPathUrl;
        this.currentStatus = currentStatus;
      }
    },
    doLogin: function() {
      let mobileNo = this.userPhone;
      let password = this.password;
      let params = {
        password: password,
        mobileNo: mobileNo
      };
      console.log(this.pathUrl);
      if (!checkPhone(mobileNo)) {
        Toast('请输入正确的手机号', '温馨提示');
        return;
      }

      if (password.length < 6) {
        Toast('请输入至少6位登录密码', '温馨提示');
        return;
      }
      Indicator.open();
      this.$ajax.post(AjaxUrl.loginAPI, params).then((response) => {
        console.log(response);
        if (response.data.respCode === '00') {
          Indicator.close();
          Toast('登录成功', '温馨提示');
          addCookie('userPhone', this.userPhone);
          this.$router.push({
            path: this.pathUrl + '?currentStatus=' + this.currentStatus
          });
        } else {
          Indicator.close();
          Toast(response.data.respDesc, '温馨提示');
        }
      });
    }
  },
  created() {
    this.getCurrentPathUrl();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loginWrap{
  width: 100%;
  height: 100%;
  background:#fff;
  .forget{
    z-index: 999;
    line-height: 44px;
    font-size: 16px;
    right:10px;
    top:0;
    color: #468ff1;
  }
  .headImg{
    padding:30px 0 15px;
    img{
      width:30%;
    }
  }
  .login{
    width: 100%;
    padding:20px 10px;
    // background-color: #fff;
    .group{
      img{
        width: 20px;
        height: 20px;
        left: 8px;
        top: 50%;
        margin-top: -10px;
      }
      input{
        width:100%;
        height: 50px;
        border-bottom:1px solid #ddd;
        font-size: 16px;
        padding-left:36px;
        outline: none;
      }
    }
    .loginBtn{
      width:100%;
      height: 40px;
      font-size: 18px;
      line-height: 40px;
      background-color: #468ff1;
      border-radius:4px;
      color: #fff;
    }
    .goRegister{
      font-size: 16px;
      em{
        color: #468ff1;
      }
    }
  }
}
</style>
