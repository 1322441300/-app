<template>
  <div class="topic">
    <headPage :isBack="isBack" :title="title"></headPage>
    <p style="height:45px;"></p>
    <div class="topicInfo">
      <div class="group clearfix pr">
        <em class="pa">话题名称</em>
        <input class="fr" type="text" maxlength="20" placeholder="20字符以内" v-model="topic">
      </div>
      <div class="group clearfix pr">
        <em class="pa">联系方式</em>
        <input class="fr" type="num" @input="checkPhoneLength" v-model="contact">
      </div>
      <p style="height:10px;"></p>
      <div class="subBtn" @click="doSub">提交审核</div>
      <p style="height:45px;"></p>
      <p class="notice">
        <em class="c1">*</em>我们会审核话题与产品的相关性，杜绝无关话题扰乱市场，审核时间为5个工作日以内。请您耐心等待！
      </p>
    </div>
  </div>
</template>

<script>
import headPage from '@/components/headPage';
import { Toast, Indicator } from 'mint-ui';

import { AjaxUrl } from '@/common/ajax/serverPublic';
import { phoneLength, checkPhone } from '@/common/utils/utilsPublic';

export default {
  data () {
    return {
      isBack: true,
      title: '填写话题信息',
      topic: '',
      contact: ''
    }
  },
  components: {
    'headPage': headPage
  },
  methods: {
    checkPhoneLength () {
      let phoneNum = this.contact;
      this.contact = phoneLength(phoneNum);
    },
    doSub () {
      if (this.topic.length < 10) {
        Toast('请输入10-20字的话题名称');
        return;
      }
      if (!checkPhone(this.contact)) {
        Toast('请输入正确的手机号', '温馨提示');
        return;
      }
      let params = {
        chatterboxName: this.topic,
        mobileNo: this.contact
      }
      Indicator.open({
        text: '提交中'
      })
      this.$ajax.post(AjaxUrl.createChatterbox, params).then((response) => {
        // console.log(response.data.respCode);
        Indicator.close();
        if (response.data.respCode === '00') {
          this.$router.push({
            path: 'submitSuccess'
          })
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.topic{
  background-color: #fff;
  width: 100%;
  height: 100%;
  .topicInfo{
    padding:15px 10px;
    .group{
      width: 100%;
      margin-bottom:15px;
      padding-left: 80px;
      font-size: 16px;
      height:40px;
      em{
        text-align: left;
        line-height: 40px;
        left: 0;
        top: 0;
      }
      input{
        width:100%;
        height: 40px;
        border:1px solid #ddd;
        line-height: 38px;
        border-radius: 4px;
        padding: 0 10px;
        outline: none;
      }
    }
    .subBtn{
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: #6e9ceb;
      border-radius: 4px;
      font-size: 18px;
      color: #fff;
    }
    .notice{
      border:1px solid #6e9ceb;
      border-radius: 4px;
      padding:10px;
      text-align: justify;
      font-size: 15px;
      line-height: 26px;
    }
  }
}
</style>
