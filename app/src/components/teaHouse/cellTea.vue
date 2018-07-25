<template>
  <div class="cellTea">
    <!-- {{typeString}} -->
    <ul class="cellList">
      <li class="cellIn pr clearfix">
        <div class="leftWrap pa">
          <img src="http://img0.imgtn.bdimg.com/it/u=1392397647,998339823&fm=27&gp=0.jpg">
        </div>
        <div class="rightWrap pr">
          <h3 class="omg">星期三茶馆，专聊原油嗨起来哈哈哈</h3>
          <div class="concernNum pa">
            关注茶友139人
          </div>
          <div class="teaStatus pa">
            营业中
          </div>
        </div>
      </li>
      <li class="cellIn pr clearfix">
        <div class="leftWrap pa">
          <img src="http://img0.imgtn.bdimg.com/it/u=1392397647,998339823&fm=27&gp=0.jpg">
        </div>
        <div class="rightWrap pr">
          <h3 class="omg">星期三茶馆，专聊原油嗨起来哈哈哈</h3>
          <div class="concernNum pa">
            关注茶友139人
          </div>
          <div class="teaStatus pa">
            营业中
          </div>
        </div>
      </li>
      <li class="cellIn pr clearfix">
        <div class="leftWrap pa">
          <img src="http://img0.imgtn.bdimg.com/it/u=1392397647,998339823&fm=27&gp=0.jpg">
        </div>
        <div class="rightWrap pr">
          <h3 class="omg">星期三茶馆，专聊原油嗨起来哈哈哈</h3>
          <div class="concernNum pa">
            关注茶友139人
          </div>
          <div class="teaStatus pa">
            营业中
          </div>
        </div>
      </li>
      <li class="cellIn pr clearfix">
        <div class="leftWrap pa">
          <img src="http://img0.imgtn.bdimg.com/it/u=1392397647,998339823&fm=27&gp=0.jpg">
        </div>
        <div class="rightWrap pr">
          <h3 class="omg">星期三茶馆，专聊原油嗨起来哈哈哈</h3>
          <div class="concernNum pa">
            关注茶友139人
          </div>
          <div class="teaStatus pa">
            营业中
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    typeString: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cellTea{
    width: 100%;
    padding-top: 15px;
    .cellList{
      li.cellIn{
        width: 100%;
        height: 120px;
        background-color: #fff;
        padding:10px 10px 10px 125px;
        margin-bottom: 15px;
        .leftWrap{
          width: 100px;
          height: 100%;
          margin-right: 15px;
          left: 10px;
          top: 10px;
          img{
            width: 100px;
            border-radius: 4px;
          }
        }
        .rightWrap{
          width:100%;
          // background-color: pink;
          height: 100%;
          padding:15px 0;
          h3{
            font-size: 18px;
            font-weight: normal;
            line-height: 26px;
          }
          .concernNum{
            font-size: 16px;
            bottom: 12px;
            left: 0;
          }
          .teaStatus{
            width: 80px;
            height: 38px;
            border-radius: 4px;
            border:1px solid #6e9ceb;
            background-color: #6e9ceb;
            color: #fff;
            font-size: 16px;
            text-align: center;
            line-height: 36px;
            right: 0;
            bottom:2px;
          }
        }
      }
    }
  }
</style>
