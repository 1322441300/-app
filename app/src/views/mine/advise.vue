<template>
  <div class="adviseWrap">
    <headPage :isBack="isBack" :title="title"></headPage>
    <p style="height:45px;"></p>
    <div class="advise">
      <div class="group pr" style="padding-left:80px;">
        <em class="pa">联系方式</em>
        <input type="num" placeholder="请输入您的联系方式" v-model="contact" @input="checkPhoneLength">
      </div>
      <p style="height:20px;"></p>
      <div class="group pr" style="height:140px;">
        <p style="line-height:40px;">反馈内容</p>
        <textarea name="name" v-model="advise" maxlength="120"></textarea>
      </div>
      <p style="height:30px;"></p>
      <div class="submmit" @click="doSubmmit">提交</div>
    </div>
  </div>
</template>

<script>
import headPage from '@/components/headPage';

import {AjaxUrl} from '../../common/ajax/serverPublic';
import { phoneLength, checkPhone } from '@/common/utils/utilsPublic';
import { Toast, Indicator, MessageBox } from 'mint-ui';

export default {
  data () {
    return {
      isBack: true,
      title: '意见反馈',
      contact: '',
      advise: ''
    }
  },
  components: {
    'headPage': headPage
  },
  methods: {
    checkPhoneLength () {
      let phone = this.contact;
      this.contact = phoneLength(phone);
    },
    doSubmmit () {
      if (!checkPhone(this.contact)) {
        Toast('请输入正确的手机号');
        return;
      }
      if (this.advise.length < 15) {
        Toast('请输入至少15字的反馈意见');
        return;
      }
      let params = {
        mobileNo: this.contact,
        msg: this.advise
      }
      Indicator.open();
      this.$ajax.post(AjaxUrl.feedback, params).then((response) => {
        console.log(response);
        if (response.data.respCode === '00') {
          Indicator.close();
          MessageBox.alert('提交成功!').then(action => {
            this.$router.push({
              path: 'mine?currentStatus=goMine'
            });
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
.adviseWrap{
  width: 100%;
  height: 100%;
  padding:15px 10px;
  background-color: #fff;
  .advise{
    width: 100%;
    font-size: 16px;
    .group{
      height: 40px;
      text-align: left;
      em{
        line-height: 40px;
        left: 0;
        top: 0;
      }
      input{
        width: 100%;
        height: 40px;
        border-radius: 4px;
        border:1px solid #ddd;
        padding: 0 10px;
        outline: none;
      }
      textarea{
        width: 100%;
        height: 100px;
        border-radius: 4px;
        border: 1px solid #ddd;
        resize:none;
        outline:none;
        display: block;
        padding:10px;
      }
    }
    .submmit{
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-radius: 4px;
      color:#fff;
      background-color: #6e9ceb;
    }
  }
}
</style>
