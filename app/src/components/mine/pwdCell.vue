<template>
  <div class="pwdCell">
    <div class="group clearfix pr">
      <em class="pa">手机号码</em>
      <input type="text" :disabled="showOld" class="" :value="userPhone">
    </div>
    <div class="group pr" v-if="showOld">
      <em class="pa">原密码</em>
      <input type="password" class="" v-model="oldPassword" maxlength="16">
    </div>
    <div class="group pr">
      <em class="pa">新密码</em>
      <input type="password" class="" v-model="password" maxlength="16">
    </div>
    <div class="group pr">
      <em class="pa">确认密码</em>
      <input type="password" class="" v-model="confirmPassword" maxlength="16">
    </div>
    <div style="height:10px;"></div>
    <div class="changeWrap">
      <div class="changeBtn" @click="doChange">{{btnWord}}</div>
    </div>
  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui';
import {AjaxUrl} from '../../common/ajax/serverPublic';
import { deleteCookie } from '@/common/utils/utilsPublic';

export default {
  data () {
    return {
      oldPassword: '',
      password: '',
      confirmPassword: ''
    }
  },
  props: {
    showOld: Boolean,
    userPhone: String,
    btnWord: String
  },
  methods: {
    doChange () {
      if (this.showOld === true) {
        // console.log('xiugai');
        if (this.oldPassword.length < 6) {
          Toast('请输入至少6位原登录密码');
          return;
        }
        if (this.password.length < 6) {
          Toast('请设置至少6位新登录密码');
          return;
        }
        if (this.confirmPassword !== this.password) {
          Toast('两次密码输入不一致');
          return;
        }
        Indicator.open();
        let params = {
          mobileNo: this.userPhone,
          oldPassword: this.oldPassword,
          password: this.password,
          confirmPassword: this.confirmPassword
        }
        this.$ajax.post(AjaxUrl.modifyPwd, params).then((response) => {
          // console.log(response);
          Indicator.close();
          if (response.data.respCode === '00') {
            Toast('登录密码修改成功，请重新登录', '温馨提示');
            deleteCookie('userPhone');
            this.$router.push({
              path: 'login',
              query: {
                currentStatus: 'goMine',
                pathUrl: 'mine'
              }
            })
          } else if (response.data.respCode === '20') {
            Toast('原密码与新密码相同', '温馨提示');
          } else {
            Toast('原密码输入有误', '温馨提示');
          }
        });
      }
    }
  },
  created () {
    // this.childData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
</style>
