<template>
  <div class="openForm">
    <div class="group clearfix">
      <div class="fl">
        茶馆名称
      </div>
      <div class="fr">
        <input type="text" placeholder="请输入茶馆名称" maxlength="10" v-model="teaName">
      </div>
    </div>
    <div style="height:20px;"></div>
    <div class="group clearfix">
      <div class="fl">
        茶馆描述
      </div>
      <div class="fr">
        <input type="text" maxlength="50" placeholder="请输入茶馆描述" v-model="teaDesc">
      </div>
    </div>
    <div style="height:20px;"></div>
    <div class="group clearfix">
      <div class="fl">
        联系方式
      </div>
      <div class="fr">
        <input type="num" @input="checkPhoneLength" placeholder="请输入您的联系方式" v-model="contact">
      </div>
    </div>
    <div style="height:20px;"></div>
    <div class="group clearfix">
      <div class="submitAuditing" @click="doAuditing">
        提交审核
      </div>
    </div>
  </div>
</template>

<script>
import {AjaxUrl} from '../../common/ajax/serverPublic';
import { phoneLength, checkPhone } from '@/common/utils/utilsPublic';

import { Toast, Indicator, MessageBox } from 'mint-ui';

export default {
  data () {
    return {
      teaName: '',
      teaDesc: '',
      contact: ''
    }
  },
  props: {
    menuId: String
  },
  methods: {
    checkPhoneLength () {
      let phone = this.contact;
      this.contact = phoneLength(phone);
    },
    doAuditing: function() {
      if (this.teaName === '') {
        Toast('请输入茶馆名称');
        return;
      }
      if (this.teaDesc === '') {
        Toast('请输入茶馆描述');
        return;
      }
      if (!checkPhone(this.contact)) {
        Toast('请输入正确的手机号码');
        return;
      }
      let params = {
        titleName: this.teaName,
        teaMenuId: this.menuId,
        titleDesc: this.teaDesc,
        mobileNo: this.contact
      }
      this.$ajax.post(AjaxUrl.openRoom, params).then((response) => {
        console.log(response);
        if (response.data.respCode === '00') {
          Indicator.close();
          MessageBox.alert('提交成功!').then(action => {
            this.$router.push({
              path: 'submitSuccess'
            })
          });
        } else {
          Indicator.close();
          Toast(response.data.respDesc, '温馨提示');
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.openForm{
  width: 100%;
  height: 100%;
  padding: 30px 10px;
  background-color: #fff;
  .group{
    width: 100%;
    line-height: 50px;
    font-size: 16px;
    .fl{
      margin-right: 2%;
      width:23%;
      text-align: left;
    }
    .fr{
      width:70%;
      input{
        width:100%;
        height:50px;
        border:1px solid #6e9ceb;
        border-radius: 4px;
        outline: none;
        padding: 0 5px;
      }
    }
    .submitAuditing{
      width: 100%;
      height:50px;
      color: #fff;
      background-color: #468ff1;
      border-radius:4px;
    }
  }
}
</style>
