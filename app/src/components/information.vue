<template>
  <div class="information pr">
    <ul class="infoTypeList pa">
      <li v-for="infoTab in infoTabs" :key="infoTab.id" :class="{'active':currentType == infoTab.teaNewFlashId}" @click="tabChange(infoTab.teaNewFlashId)">{{infoTab.teaNewFlashTitle}}</li>
    </ul>
    <ul class="info">
      <li v-for="infoData in infoDatas" :key="infoData.id">
        <div class="time">{{infoData.createTime}}</div>
        <div class="infoWrap">
          {{infoData.teaNewFlashContext}}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {AjaxUrl} from '@/common/ajax/serverPublic';
import { Indicator } from 'mint-ui';
export default {
  name: 'information',
  data () {
    return {
      currentType: '0',
      infoTabs: [],
      infoDatas: []
    }
  },
  methods: {
    getTab () {
      this.$ajax.post(AjaxUrl.allNewsTitle).then((response) => {
        // console.log(response.data.data);
        if (response.data.respCode === '00') {
          this.infoTabs = response.data.data;
        }
      });
    },
    tabChange: function (type) {
      this.infoDatas = [];
      this.currentType = type;
      Indicator.open();
      // 获取数据接口
      // newsDetail
      let params = {
        teaNewFlashId: type
      }
      this.$ajax.post(AjaxUrl.newsDetail, params).then((response) => {
        if (response.data.respCode === '00') {
          this.infoDatas = response.data.data;
        }
        Indicator.close();
      });
    }
  },
  created () {
    this.getTab();
    this.tabChange(this.currentType);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .information{
    width: 100%;
    height: 280px;
    background-color: #fff;
    padding:15px 10px 15px 22%;
    font-size: 16px;
    .infoTypeList{
      width: 22%;
      left: 0;
      top: 0;
      padding:20px 0 10px 0;
      background-color: #6e9ceb;
      li{
        height: 40px;
        line-height: 40px;
        margin-bottom:10px;
        color: #fff;
        font-size: 17px;
        margin-left: 10px;
      }
      li.active{
        background-color: #fff;
        color: #6e9ceb;
        position: relative;
        border-radius: 4px 0 0 4px;
      }
      li.active:before{
        content: '';
        width:4px;
        height: 4px;
        position: absolute;
        border-radius:50%;
        background-color: #fff;
        left: -6px;
        top: 50%;
        margin-top: -2px;
        font-weight: bold;
      }
    }
    .info{
      width:100%;
      height: 100%;
      padding-left: 10px;
      overflow-y: scroll;
      text-align: left;
      text-align: justify;
      li{
        border-top: 1px dashed #ccc;
        padding:10px;
        .time{
          font-family: Arial;
          font-size: 14px;
          color: #1d7fcc;
          height: 24px;
          padding: 0 10px;
          border-radius: 12px;
          line-height: 24px;
          margin-bottom: 5px;
          display: inline-block;
          background-color: #d9ecfd;
        }
        .infoWrap{
          line-height: 20px;
        }
      }
      li:first-child{
        padding-top: 0;
        border-top:0;
      }
    }
  }
</style>
