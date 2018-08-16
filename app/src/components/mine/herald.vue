<template>
  <div class="heraldWrap">
    <ul class="heraldList">
      <li class="clearfix pr" v-for="item in items" :key="item.id">
        <div class="paWrap pa">预<br>告</div>
        <div class="teaName omg"><em class="c9">茶馆名称：</em>{{item.name}}</div>
        <div class="teaTime omg"><em class="c9">开业时间：</em>{{item.effectiveTime}}</div>
        <div class="status pa" v-if="isShowYY">
          <p v-if="item.subscribeStatus == 0" v-on:click="childclick(item.subscribeStatus, item.id)">预约</p>
          <p v-if="item.subscribeStatus == 1" v-on:click="childclick(item.subscribeStatus, item.id)" style="background:#fff;color: #6e9ceb;">已预约</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // items: []
    }
  },
  props: {
    userPhone: String,
    items: Array,
    isShowYY: Boolean
  },
  methods: {
    childclick (status, teaMenuId) {
      this.$emit('herald', status, teaMenuId);
    }
  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.heraldWrap{
  padding-top: 15px;
  .heraldList{
    width: 100%;
    li{
      width: 100%;
      height: 120px;
      padding:15px 70px 15px 60px;
      background-color: #fff;
      margin-bottom: 15px;
      .paWrap{
        height: 120px;
        width: 50px;
        padding: 15px 0;
        line-height: 45px;
        font-size: 22px;
        background-color:#6e9ceb;
        color: #fff;
        left:0;
        top:0;
        text-align: center;
        border-radius: 0 8px 8px 0;
      }
      .paWrap:after{
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        left: 50%;
        top:50%;
        margin:-4px 0 0 -4px;
        position: absolute;
      }
      .teaName,.teaTime{
        font-size: 18px;
        color: #666;
        text-align: left;
        line-height:50px;
      }
      .teaTime{
        font-size: 16px;
        line-height:30px;
      }
      .status{
        width:70px;
        height:40px;
        line-height: 38px;
        font-size: 16px;
        right: 0px;
        top:50%;
        margin-top: -20px;
        p{
          width: 100%;
          height: 100%;
          color: #fff;
          border:1px solid #6e9ceb;
          background-color: #6e9ceb;
          border-radius: 4px 0 0 4px;
          border-right:0;
        }
      }
    }
  }
}
</style>
