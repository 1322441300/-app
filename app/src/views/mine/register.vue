<template>
  <div class="registerWrap">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <div class="register">
      <div class="group">
        <input type="number" placeholder="请输入您的手机号" @input="checkPhoneLength" v-model="userPhone">
      </div>
      <div class="group">
        <input type="text" placeholder="请输入用户名" maxlength="10" v-model="userName">
      </div>
      <div class="group">
        <input type="password" placeholder="请设置登录密码" maxlength="16" v-model="password">
      </div>
      <div class="group">
        <input type="password" placeholder="请再次输入登录密码" maxlength="16" v-model="confirmPassword">
      </div>
      <div style="height:20px;"></div>
      <div class="group" style="line-height:20px;">
        <input type="checkbox" :class="{'checked':agreement == 'true'}" name="checkbox" value="true" @click="changeAgree">
        我已阅读并同意期货茶馆<em style="color: #468ff1;" @click="goAgreement">《注册协议》</em>
      </div>
    </div>
    <div style="height:40px;"></div>
    <div class="registerBtn" @click="doRegister">注册</div>
    <div style="height:40px;"></div>
    <div class="goLogin" @click="$router.back(-1)">已有账号？<em>立即登录></em></div>
  </div>
</template>

<script>
import {AjaxUrl} from '../../common/ajax/serverPublic';
import headPage from '@/components/headPage';
import { addCookie, phoneLength, checkPhone } from '@/common/utils/utilsPublic';

// import { Toast, Indicator, MessageBox } from 'mint-ui';
import { Toast, Indicator } from 'mint-ui';

export default {
  name: 'register',
  data () {
    return {
      isBack: true,
      title: '注册',
      userPhone: '',
      userName: '',
      password: '',
      confirmPassword: '',
      agreement: 'true'
    }
  },
  components: {
    'headPage': headPage
  },
  methods: {
    goAgreement () {
      console.log('222');
      this.$router.push({
        path: 'agreement'
      });
    },
    changeAgree: function() {
      if (this.agreement === 'true') {
        this.agreement = 'false';
      } else {
        this.agreement = 'true';
      }
    },
    checkPhoneLength: function() {
      let phoneNum = this.userPhone;
      this.userPhone = phoneLength(phoneNum);
    },
    doRegister: function() {
      let mobileNo = this.userPhone;
      let userName = this.userName;
      let password = this.password;
      let confirmPassword = this.confirmPassword;
      let params = {
        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
        mobileNo: mobileNo
      };
      if (!checkPhone(mobileNo)) {
        Toast('请输入正确的手机号', '温馨提示');
        return;
      }
      if (userName.length < 2) {
        Toast('请输入至少两位用户名', '温馨提示');
        return;
      }
      if (password.length < 6) {
        Toast('请输入至少6位登录密码', '温馨提示');
        return;
      }
      if (confirmPassword === '') {
        Toast('请再次输入登录密码', '温馨提示');
        return;
      }
      if (confirmPassword !== password) {
        Toast('两次密码不一致，请重新输入', '温馨提示');
        return;
      }
      if (this.agreement !== 'true') {
        Toast('请勾选同意注册协议', '温馨提示');
        return;
      }
      Indicator.open();
      this.$ajax.post(AjaxUrl.registerAPI, params).then((response) => {
        console.log(response);
        if (response.data.respCode === '00') {
          Indicator.close();
          Toast('注册成功', '温馨提示');
          addCookie('userPhone', this.userPhone);
          this.$router.push({
            path: 'mine?currentStatus=goMine'
          })
        } else {
          Indicator.close();
          Toast('注册失败：' + response.data.respDesc, '温馨提示');
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.registerWrap{
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding:0 10px;
  .register{
    font-size: 16px;
    .group{
      text-align: left;
      input{
        width: 100%;
        padding:0 8px;
        border-bottom: 1px solid #ddd;
        height: 50px;
        outline: none;
      }
      input[name=checkbox]{
        width:20px;
        height: 20px;
        border:1px solid #ddd;
        border-radius: 10px;
      }
      input.checked{
        background-color: #468ff1;
        position: relative;
        border:1px solid #468ff1;
      }
      input.checked:after{
        width: 8px;
        height: 8px;
        position: absolute;
        content: '';
        border-radius: 4px;
        background-color: #fff;
        left: 50%;
        top: 50%;
        margin: -4px 0 0 -4px;
      }
    }
  }
  .registerBtn{
    width:100%;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    background-color: #468ff1;
    border-radius:4px;
    color: #fff;
  }
  .goLogin{
    font-size: 16px;
    em{
      color: #468ff1;
    }
  }
}
</style>
