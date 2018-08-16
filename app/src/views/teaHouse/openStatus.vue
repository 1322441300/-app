<template>
  <div>
    <headPage :isBack="isBack" :title="title"></headPage>
    <p style="height:45px;"></p>
    <div class="videoWrap pr">
      <video src="http://www.lanhuazi.top/static/video/one.mp4" autoplay loop="loop" controls="controls" playsinline="true"></video>
    </div>
    <div class="todayTopic clearfix pr">
      <p style="font-size:18px;">今日茶话</p>
      <p class="omg">{{titleName}}</p>
      <div class="followBtn pa" v-if="myFollowStatus === '0'" @click="follow(myFollowStatus)">关注</div>
      <div class="followBtn pa" v-if="myFollowStatus === '1'" @click="follow(myFollowStatus)">已关注</div>
    </div>
    <div class="chatWindow clearfix pf">
      <p style="width:100%;height:52%;"></p>
      <ul class="chatList clearfix pf" id="chatList">
        <li class="otherUsers fl" v-for="weChatInfo in weChatInfos" :key="weChatInfo.id">
          <p class="time">{{weChatInfo.sendTime}}</p>
          <div class="chatContent clearfix pr">
            <span class="userName omg fl">{{weChatInfo.userName}}</span>{{weChatInfo.msg}}
          </div>
        </li>
      </ul>
      <div class="inputWrap pf">
        <input type="text" v-model="msgMyself" maxlength="120">
        <span class="sendBtn pa" @click="sendMsg">发送</span>
      </div>
    </div>
  </div>
</template>

<script>
import headPage from '@/components/headPage';

import { getCookie } from '@/common/utils/utilsPublic';
import {AjaxUrl} from '@/common/ajax/serverPublic';
import { Indicator, Toast } from 'mint-ui';

export default {
  data () {
    return {
      isBack: true,
      title: '',
      userPhone: '',
      userName: '',
      titleInfoId: '',
      myFollowStatus: '',
      titleName: '',
      weChatInfos: [],
      msgMyself: ''
    }
  },
  components: {
    headPage: headPage
  },
  methods: {
    getUserPhone () {
      let userPhone = getCookie().userPhone;
      let userName = getCookie().userName;
      this.userPhone = userPhone;
      this.userName = userName;
    },
    getUrlInfo () {
      let id = this.$route.query.id;
      let title = this.$route.query.titleName;
      this.titleInfoId = id;
      this.title = title;
    },
    follow (status) {
      console.log(status);
      let params = {
        titleInfoId: this.titleInfoId,
        mobileNo: this.userPhone
      }
      Indicator.open();
      if (status === '0') {
        this.$ajax.post(AjaxUrl.follow, params).then((response) => {
          Indicator.close();
          if (response.data.respCode === '00') {
            Toast('关注成功');
            this.getQueryWeChatLog();
          }
        });
      } else {
        this.$ajax.post(AjaxUrl.cancelFollow, params).then((response) => {
          Indicator.close();
          if (response.data.respCode === '00') {
            Toast('取消关注成功');
            this.getQueryWeChatLog();
          }
        });
      }
    },
    getQueryWeChatLog () {
      let params = {
        titleInfoId: this.titleInfoId,
        mobileNo: this.userPhone
      }
      Indicator.open();
      this.$ajax.post(AjaxUrl.queryWeChatLog, params).then((response) => {
        console.log(response.data.data);
        Indicator.close();
        this.titleName = response.data.data.titleName;
        this.myFollowStatus = response.data.data.myFollowStatus;
        this.weChatInfos = response.data.data.weChatInfos;
      });
    },
    sendMsg () {
      if (this.msgMyself === '') {
        return;
      }
      let params = {
        titleInfoId: this.titleInfoId,
        mobileNo: this.userPhone,
        msg: this.msgMyself
      }
      this.$ajax.post(AjaxUrl.sendMsg, params).then((response) => {
        console.log(response);
        if (response.data.respCode === '00') {
          this.getQueryWeChatLog();
          this.msgMyself = '';
        } else {
          Toast('发送失败，请稍后再试', '温馨提示');
        }
      });
    }
  },
  updated () {
    this.$nextTick(function () {
      var div = document.getElementById('chatList');
      div.scrollTop = div.scrollHeight;
    })
  },
  created () {
    this.getUserPhone();
    this.getUrlInfo();
    this.getQueryWeChatLog();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3){
    .chatList{
      top: 44% !important;
    }
  }
  @media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){
    .chatList{
      top: 56% !important;
    }
  }
  .videoWrap{
    width: 100%;
    z-index: 10;
    video{
      width: 100%;
      display: block;
    }
  }
  .todayTopic{
    width: 100%;
    padding: 12px 70px 12px 10px;
    background-color: #fff;
    font-size: 16px;
    z-index: 10;
    p{
      text-align: left;
      line-height: 30px;
    }
    .followBtn{
      width: 66px;
      height: 32px;
      line-height: 30px;
      background-color: #6e9ceb;
      border: 1px solid #6e9ceb;
      border-radius: 4px;
      right:10px;
      top:50%;
      margin-top: -16px;
      color: #fff;
    }
  }
  .chatWindow{
    width: 100%;
    top:0;
    bottom:0;
    left: 0;
    right:0;
    z-index: 0;
    .chatList{
      width: 100%;
      top:52%;
      bottom:50px;
      left:0;
      right:0;
      background-color: #f2f2f2;
      padding: 10px;
      font-size: 15px;
      overflow-y: scroll;
      li{
        width:100%;
        line-height: 26px;
        margin-top:10px;
        font-size: 14px;
        p{
          display: inline-block;
          padding: 5px 8px;
          border-radius: 4px;
          background-color: #e5e5e5;
        }
        .chatContent{
          display: block;
          line-height: 26px;
          margin-top:10px;
          background-color: #fff;
          padding: 10px;
          border-radius:5px;
          text-align: justify;
          .userName{
            height: 26px;
            padding:0 8px;
            background-color: #feb741;
            border-radius: 13px;
            color: #fff;
            margin-right: 5px;
          }
        }
      }
    }
    .inputWrap{
      width: 100%;
      height: 50px;
      padding:8px 68px 8px 10px;
      font-size: 14px;
      background-color: #fff;
      bottom: 0;
      left:0;
      input{
        height:34px;
        width: 100%;
        border-radius: 4px;
        border:1px solid #ddd;
        line-height: 32px;
        padding: 0 10px;
        outline: none;
      }
      .sendBtn{
        width:48px;
        height: 34px;
        line-height: 34px;
        color: #fff;
        border-radius: 4px;
        background-color: #6e9ceb;
        right: 10px;
        top: 50%;
        margin-top: -17px;
      }
    }
  }
</style>
