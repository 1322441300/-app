<template>
  <div class="exchangeWrap">
    <div class="topNav pf">
      <!-- selected是你自己定义的一个在data中用于存放当前tab-item的索引值的变量 -->
      <ly-tab v-model="selected" @input="changeSelected" activeColor="#1d98bd">
        <ly-tab-item v-for="(item, index) in tabList" :key="index">
          <em @click="getList(item.futuresType)">{{item.futuresTitle}}</em>
        </ly-tab-item>
      </ly-tab>
    </div>
    <div style="height:50px;"></div>
    <div class="exchangeList">
      <table>
        <thead>
          <tr>
            <td>名称</td>
            <td>最新价</td>
            <td>涨跌</td>
            <td>涨跌幅</td>
          </tr>
        </thead>
        <tbody>
          <tr class="status" :class="exchangeData.status" v-for="exchangeData in exchangeDatas" :key="exchangeData.id">
            <td>{{exchangeData.futuresName}}</td>
            <td :class="exchangeData.changeBg">{{exchangeData.latestPrice}}</td>
            <td>{{exchangeData.change}}</td>
            <td>{{exchangeData.chg}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
'use strict';
import { AjaxUrl } from '@/common/ajax/serverPublic';
import { Indicator } from 'mint-ui';

export default {
  data () {
    return {
      selected: 0,
      tabList: [],
      exchangeDatas: [],
      timer: ''
    }
  },
  methods: {
    getTabList () {
      Indicator.open();
      this.$ajax.post(AjaxUrl.queryFuturesDataTitle).then((response) => {
        if (response.data.respCode === '00') {
          this.tabList = response.data.data;
          Indicator.close();
        }
      });
    },
    changeSelected (id) {
      this.selected = id;
    },
    getList (type) {
      this.exchangeDatas = [];
      clearInterval(this.timer);
      this.timer = null;
      let params = {
        futuresType: type
      }
      Indicator.open();
      this.$ajax.post(AjaxUrl.queryFuturesData, params).then((response) => {
        let data = response.data.data;
        for (let i = 0; i < data.length; i++) {
          data[i].changeBg = 'false';
          if (data[i].change > 0) {
            data[i].status = 'status0';
          } else if (data[i].change === '0') {
            data[i].status = 'status1';
          } else {
            data[i].status = 'status2';
          }
        }
        this.exchangeDatas = data;
        this.timer = setTimeout(() => {
          for (let i = 0; i < this.exchangeDatas.length; i++) {
            this.exchangeDatas[i].changeBg = 'false';
          }
          this.changeData();
        }, 3000);
        Indicator.close();
      });
    },
    changeData () {
      let length = this.exchangeDatas.length;
      let changeList = [];
      let data = this.exchangeDatas;
      for (let i = 0; i < 5; i++) {
        changeList.push(Math.round(Math.random() * (length - 1)));
      }
      // console.log(changeList);
      for (let i = 0; i < changeList.length; i++) {
        data[changeList[i]].changeBg = 'true';
        if (data[changeList[i]].change === '0') {
          data[changeList[i]].change = 2;
          data[changeList[i]].latestPrice = parseFloat(data[changeList[i]].latestPrice) + 2;
          data[changeList[i]].chg = ((data[changeList[i]].change / data[changeList[i]].latestPrice) * 100).toFixed(2) + '%';
          data[changeList[i]].status = 'status0';
        } else if (data[changeList[i]].change > 0) {
          let orignPrice = data[changeList[i]].latestPrice - data[changeList[i]].change;
          data[changeList[i]].change = (data[changeList[i]].change * 1.01).toFixed(2);
          data[changeList[i]].chg = ((data[changeList[i]].change / orignPrice) * 100).toFixed(2) + '%';
          data[changeList[i]].latestPrice = (parseFloat(orignPrice) + parseFloat(data[changeList[i]].change)).toFixed(2);
        } else {
          let orignPrice = data[changeList[i]].latestPrice - data[changeList[i]].change;
          data[changeList[i]].change = (data[changeList[i]].change * 0.98).toFixed(2);
          data[changeList[i]].chg = ((data[changeList[i]].change / orignPrice) * 100).toFixed(2) + '%';
          data[changeList[i]].latestPrice = (parseFloat(orignPrice) + parseFloat(data[changeList[i]].change)).toFixed(2);
        }
      }
      this.timer = setTimeout(() => {
        for (let i = 0; i < this.exchangeDatas.length; i++) {
          this.exchangeDatas[i].changeBg = 'false';
        }
        changeList = [];
        this.changeData();
      }, 3000);
    }
  },
  created () {
    this.getTabList();
    this.getList('1');
    // this.timer = setTimeout(() => {
    //   for (let i = 0; i < this.exchangeDatas.length; i++) {
    //     this.exchangeDatas[i].changeBg = 'false';
    //   }
    //   this.changeData();
    // }, 3000);
  },
  beforeDestroy () {
    clearInterval(this.timer);
    this.timer = null;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .topNav{
    width:100%;
    height: 50px;
    box-shadow:0 0 5px #ccc;
    background-color: #fff;
    left:0;
    top: 0;
    .ly-tab{
      height: 100%;
      .ly-tab-list .ly-tab-item{
        font-size: 15px !important;
      }
      .ly-tab-item-label {
        line-height: 30px !important;
      }
    }
  }
  .exchangeList{
    table{
      width: 100%;
      border-collapse: collapse;
      thead{
        font-size: 18px;
        background-color: #d8ecfe;
        height: 40px;
        line-height: 40px;
      }
      tbody{
        font-size: 16px;
        tr{
          height: 36px;
          line-height: 36px;
          td:first-child{
            color: #333 !important;
          }
        }
        tr.status0{
          td{
            color: #f00;
          }
          td.true{
            color: #fff;
            background-color: #f00;
          }
        }
        tr.status1{
          td{
            color: #333;
          }
          td.true{
            background-color: #fff;
          }
        }
        tr.status2{
          td{
            color: #56a73d;
          }
          td.true{
            color: #fff;
            background-color: #56a73d;
          }
        }
        tr:nth-child(odd){
          background-color:#fff;
        }
        tr:nth-child(even){
          background-color:#eef7ff;
        }
      }
    }
  }
</style>
