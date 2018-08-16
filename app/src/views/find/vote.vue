<template>
  <div>
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <div class="voteWrap">
      <ul class="voteList">
        <li class="clearfix pr" v-for="voteData in voteDatas" :key="voteData.id">
          <div class="ranking pa" v-if="voteData.top < 10">Top{{voteData.top}}</div>
          <div class="ranking pa" v-if="voteData.top > 9">{{voteData.top}}</div>
          <div class="support pa">
            <em>{{voteData.ticket}}</em>
            <div class="supportBtn" @click="doVote(voteData.id)">支持</div>
          </div>
          <p class="content">{{voteData.chatterboxName}}</p>
        </li>
      </ul>
    </div>
    <div style="height:85px;"></div>
    <div class="bottomWrap pf c2" @click="goTopicInfo()">
      没有理想的话题？<br>
      点击自己发一个
    </div>
  </div>
</template>

<script>
import {AjaxUrl} from '../../common/ajax/serverPublic';
import { getCookie } from '@/common/utils/utilsPublic';
import { Toast, Indicator } from 'mint-ui';

import headPage from '@/components/headPage';

export default {
  data () {
    return {
      isBack: true,
      title: '投票啦',
      userPhone: '',
      voteDatas: []
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
    getVoteData () {
      Indicator.open();
      this.$ajax.post(AjaxUrl.getAllChatterbox).then((response) => {
        // console.log(response.data.data);
        let data = response.data.data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].ticket.length > 4) {
            data[i].ticket = (data[i].ticket / 10000).toFixed(2) + '万人';
          } else {
            data[i].ticket = data[i].ticket + '人';
          }
        }
        this.voteDatas = data;
        Indicator.close();
      });
    },
    doVote (id) {
      Indicator.open({
        text: '支持中'
      });
      let params = {
        id: id,
        mobileNo: this.userPhone
      }
      this.$ajax.post(AjaxUrl.voteTicket, params).then((response) => {
        // console.log(response.data.respCode);
        Indicator.close();
        if (response.data.respCode === '00') {
          Toast('支持成功');
          this.getVoteData();
        }
        if (response.data.respCode === '25') {
          Toast('您已经支持过此话题,请不要重复支持哦');
        }
      });
    },
    goTopicInfo () {
      this.$router.push({
        path: 'topicInfo'
      })
    }
  },
  created () {
    this.getUserInfo();
    this.getVoteData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.voteWrap{
  width:100%;
  margin-top: 15px;
  .voteList{
    li{
      padding:40px 10px 15px;
      width: 100%;
      background-color: #fff;
      margin-bottom: 15px;
      .ranking{
        width:60px;
        height:40px;
        line-height: 40px;
        left:10px;
        top:0;
        font-size: 18px;
        background-color: #6e9ceb;
        color: #fff;
        border-radius: 0 0 4px 4px;
      }
      .support{
        width: 70px;
        height:60px;
        font-size: 18px;
        right: 10px;
        bottom: 15px;
        .supportBtn{
          width:70px;
          height:30px;
          background-color: #6e9ceb;
          border-radius: 4px;
          line-height: 30px;
          color: #fff;
        }
        em{
          display: block;
          height: 30px;
          line-height: 30px;
          font-size: 15px;
        }
      }
      .content{
        width: 100%;
        padding-right: 80px;
        font-size: 16px;
        text-align: justify;
        line-height: 30px;
      }
    }
  }
}
.bottomWrap{
  width: 100%;
  left: 0;
  bottom: 0;
  height: 80px;
  padding:15px;
  background-color: #fff;
  font-size: 18px;
  line-height: 25px;
}
</style>
