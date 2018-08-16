<template>
  <div class="subCityInfo">
    <headPage :isBack="isBack" :title="title"></headPage>
    <p style="height:45px;"></p>
    <div class="cityInfo">
      <div class="group clearfix pr">
        <em class="pa">茶馆名称</em>
        <input type="text" maxlength="10" v-model="teaName" placeholder="请输入茶馆名称">
      </div>
      <div class="group clearfix pr">
        <em class="pa">茶馆地址</em>
        <input type="text" maxlength="50" v-model="teaAdress" placeholder="请输入茶馆地址">
      </div>
      <div class="group clearfix pr">
        <em class="pa">营业范围</em>
        <input type="text" maxlength="50" v-model="teaScope" placeholder="请输入营业范围">
      </div>
      <div class="group clearfix pr">
        <em class="pa">营业时间</em>
        <input type="text" maxlength="20" v-model="teaTime" placeholder="10:00-22:00">
      </div>
      <div class="group clearfix pr">
        <em class="pa">联系方式</em>
        <input type="num" maxlength="20" v-model="contact" @input="checkPhoneLength" placeholder="请输入您的联系方式">
      </div>
      <p style="height:15px;"></p>
      <div class="subBtn" @click="doSub">提交审核</div>
      <p style="height:30px;"></p>
      <p class="notice">
        1.目前仅收录所列地区的线下茶馆，其他城市陆续开放中<br>
        2.基本信息审核通过后，客服会根据您所填写的联系方式进行回访，收集详细资料后进行展示。
      </p>
      <p style="height:15px;"></p>
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
      title: '填写线下茶馆信息',
      teaName: '',
      teaAdress: '',
      teaScope: '',
      teaTime: '',
      contact: ''
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
    doSub () {
      if (this.teaName === '') {
        Toast('请输入茶馆名称');
        return;
      }
      if (this.teaAdress.length < 10) {
        Toast('请输入详细的茶馆地址，不少于10个字');
        return;
      }
      if (this.teaScope === '') {
        Toast('请输入经营范围');
        return;
      }
      if (this.teaTime === '') {
        Toast('请输入经营时间');
        return;
      }
      if (!checkPhone(this.contact)) {
        Toast('请输入正确的联系方式');
        return;
      }
      let params = {
        mobileNo: this.contact,
        teaPath: this.teaAdress,
        teaName: this.teaName,
        scope: this.teaScope,
        openTime: this.teaTime
      }
      Indicator.open();
      this.$ajax.post(AjaxUrl.openOffLineTea, params).then((response) => {
        console.log(response);
        if (response.data.respCode === '00') {
          Indicator.close();
          MessageBox.alert('提交成功!').then(action => {
            this.$router.push({
              path: 'submitSuccess'
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
.subCityInfo{
  width: 100%;
  height: 100%;
  background-color: #fff;
  .cityInfo{
    padding: 15px 10px;
    font-size: 16px;
    background-color: #fff;
    .group{
      width:100%;
      padding-left: 80px;
      height: 40px;
      margin-bottom: 15px;
      em{
        line-height: 40px;
        text-align: left;
        left: 0;
        top: 0;
      }
      input{
        width: 100%;
        height: 40px;
        line-height: 38px;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 0 10px;
        outline: none;
      }
    }
    .subBtn{
      width: 100%;
      height: 40px;
      line-height: 40px;
      border-radius:4px;
      background-color: #6e9ceb;
      color: #fff;
    }
    .notice{
      padding: 10px;
      line-height: 30px;
      text-align: justify;
      border-radius: 4px;
      border: 1px solid #6e9ceb;
    }
  }
}
</style>
