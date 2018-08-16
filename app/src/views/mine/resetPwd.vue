<template>
  <div class="resetWrap">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <div class="pwdCell">
      <div class="group clearfix pr">
        <em class="pa">手机号码</em>
        <input type="num" v-model="userPhone" @input="checkPhoneLength">
      </div>
      <div class="group pr">
        <em class="pa">新密码</em>
        <input type="password" v-model="password" maxlength="16">
      </div>
      <div class="group pr">
        <em class="pa">确认密码</em>
        <input type="password" v-model="confirmPassword" maxlength="16">
      </div>
      <div style="height:10px;"></div>
      <div class="changeWrap">
        <div class="changeBtn" @click="doChange">{{btnWord}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import headPage from '@/components/headPage';
import { getCookie, phoneLength, checkPhone } from '@/common/utils/utilsPublic';
import { Toast, Indicator } from 'mint-ui';
import {AjaxUrl} from '../../common/ajax/serverPublic';

export default {
  data () {
    return {
      isBack: true,
      title: '忘记密码',
      userPhone: '',
      oldPassword: '',
      password: '',
      confirmPassword: '',
      btnWord: '重置密码'
    }
  },
  components: {
    'headPage': headPage
  },
  methods: {
    getUserInfo () {
      let userPhone = getCookie().userPhone;
      this.userPhone = userPhone;
    },
    checkPhoneLength: function() {
      let phoneNum = this.userPhone;
      this.userPhone = phoneLength(phoneNum);
    },
    doChange () {
      if (!checkPhone(this.userPhone)) {
        Toast('请输入正确的手机号', '温馨提示');
        return;
      }
      if (this.password.length < 6) {
        Toast('请设置至少6位登录密码');
        return;
      }
      if (this.confirmPassword !== this.password) {
        Toast('两次密码输入不一致');
        return;
      }
      Indicator.open();
      let params = {
        mobileNo: this.userPhone,
        password: this.password,
        confirmPassword: this.confirmPassword
      }
      this.$ajax.post(AjaxUrl.resetPwd, params).then((response) => {
        // console.log(response);
        Indicator.close();
        if (response.data.respCode === '00') {
          Toast('登录密码重置成功，请重新登录', '温馨提示');
          this.$router.push({
            path: 'login',
            query: {
              currentStatus: 'goMine',
              pathUrl: 'mine'
            }
          })
        } else {
          Toast('手机号尚未注册', '温馨提示');
        }
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
.resetWrap{
  width: 100%;
  height: 100%;
  background-color: #fff;
  .pwdCell{
    width: 100%;
    padding:0 10px;
    margin-top:15px;
    .group{
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      width: 100%;
      padding-left: 80px;
      margin-bottom: 15px;
      em{
        width: 80px;
        height: 40px;
        text-align: left;
        left: 0;
        top:0;
      }
      input{
        width:100%;
        padding:0 10px;
        height:40px;
        border: 1px solid #ddd;
        border-radius:4px;
        outline: none;
      }
    }
    .changeWrap{
      .changeBtn{
        width: 100%;
        height: 40px;
        background-color: #6e9ceb;
        border-radius:4px;
        font-size: 18px;
        color: #fff;
        line-height: 40px;
      }
    }
  }
}
</style>
