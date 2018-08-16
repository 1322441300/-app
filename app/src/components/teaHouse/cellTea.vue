<template>
  <div class="cellTea">
    <ul class="cellList">
      <li class="cellIn pr clearfix" v-for="cellData in cellDatas" :key="cellData.id" @click="goNext(cellData.titleStatus,cellData.titleName,cellData.id)">
        <div class="leftWrap pa">
          <img :src="cellData.tltleImagePath">
        </div>
        <div class="rightWrap pr">
          <h3 class="omg">{{cellData.titleName}}</h3>
          <div class="concernNum pa">
            关注茶友{{cellData.followNum}}人
          </div>
          <div class="teaStatus teaStatusing pa" v-if="cellData.titleStatus == '1'">
            营业中
          </div>
          <div class="teaStatus teaStatused pa" v-if="cellData.titleStatus == '2'">
            休息中
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
    typeString: String,
    menuId: String,
    cellDatas: Array
  },
  methods: {
    goNext (status, titleName, id) {
      if (status === '1') {
        // console.log('营业中');
        this.$router.push({
          path: 'openStatus',
          query: {
            id: id,
            titleName: titleName
          }
        })
      } else if (status === '2') {
        this.$router.push({
          path: 'closeStatus'
        })
      } else {
        console.log('shenhezhong');
      }
    }
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
            height: 100px;
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
            text-align: left;
          }
          .concernNum{
            font-size: 15px;
            bottom: 12px;
            left: 0;
          }
          .teaStatusing{
            width: 80px;
            height: 38px;
            border-radius: 4px;
            // border:1px solid #6e9ceb;
            background-color: #6e9ceb;
            color: #fff;
            font-size: 16px;
            text-align: center;
            line-height: 36px;
            right: 0;
            bottom:2px;
            animation: top 1s linear infinite;
            @keyframes top{
              0%{background-color: #57b;}
              80%{background-color: #6e9ceb;}
              100%{background-color: #1E8FE0;}
            }
          }
          .teaStatused{
            width: 80px;
            height: 38px;
            border-radius: 4px;
            // border:1px solid #f2f2f2;
            background-color: #f2f2f2;
            color: #666;
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
