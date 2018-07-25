<template>
  <div class="information pr">
    <ul class="infoTypeList pa">
      <li :class="{'active':currentType == 'all'}" @click="tabChange('all')">所有</li>
      <li :class="{'active':currentType == 'yy'}" @click="tabChange('yy')">原油</li>
      <li :class="{'active':currentType == 'gjs'}" @click="tabChange('gjs')">贵金属</li>
      <li :class="{'active':currentType == 'wh'}" @click="tabChange('wh')">外汇</li>
      <li :class="{'active':currentType == 'xnb'}" @click="tabChange('xnb')">虚拟币</li>
    </ul>
    <ul class="info">
      <li>
        <div class="time">15:50:43</div>
        <div class="infoWrap">
          原保监会副主席魏迎宁：从保障、资金和科技三个方面支持大湾区建设；2018年7月20日，在由中国保险报、中国保险学会主办的“首届粤港澳大湾区保险论坛”上，原中国保监会副主席魏迎宁表示，商业保险在支持服务大湾区建设中拥有服务经济社会全局的战略机遇；
        </div>
      </li>
      <li>
        <div class="time">
          15:50:43
        </div>
        <div class="infoWrap">
          未来保险业支持粤港澳大湾区建设，推动大湾区建设向高质量发展变革，核心在于准确把握保障、资金和科技三个方面
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'information',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App   heheh',
      currentType: 'all'
    }
  },
  methods: {
    tabChange: function (type) {
      // console.log(type);
      this.currentType = type;
      // 获取数据接口
    }
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
