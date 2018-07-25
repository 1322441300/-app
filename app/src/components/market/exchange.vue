<template>
  <div class="exchangeWrap">
    <div class="topNav pf">
      <!-- selected是你自己定义的一个在data中用于存放当前tab-item的索引值的变量 -->
      <ly-tab v-model="selected" @input="changeSelected" activeColor="#1d98bd">
        <ly-tab-item v-for="(item, index) in tabList" :key="index">
          {{item.itemName}}
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
          <tr class="status status0">
            <td>美元</td>
            <td>1025.36</td>
            <td>20</td>
            <td>0.0223%</td>
          </tr>
          <tr class="status status0">
            <td>美元</td>
            <td>1025.36</td>
            <td>20</td>
            <td>0.02%</td>
          </tr>
          <tr class="status status0">
            <td>美元</td>
            <td>1025.36</td>
            <td>20</td>
            <td>0.02%</td>
          </tr>
          <tr class="status status0">
            <td>美元</td>
            <td>1025.36</td>
            <td>20</td>
            <td>0.02%</td>
          </tr>
          <tr class="status status0">
            <td>美元</td>
            <td>1025.36</td>
            <td>20</td>
            <td>0.02%</td>
          </tr>
          <tr class="status status0">
            <td>美元</td>
            <td>1025.36</td>
            <td>20</td>
            <td>0.02%</td>
          </tr>
          <tr class="status status0">
            <td>美元</td>
            <td>1025.36</td>
            <td>20</td>
            <td>0.02%</td>
          </tr>
          <tr class="status status0">
            <td>美元</td>
            <td>1025.36</td>
            <td>20</td>
            <td>0.02%</td>
          </tr>
          <tr class="status status0">
            <td>美元</td>
            <td>1025.36</td>
            <td>20</td>
            <td>0.02%</td>
          </tr>
          <tr class="status status1">
            <td>美元</td>
            <td>1025.36</td>
            <td>0</td>
            <td>0%</td>
          </tr>
          <tr class="status status1">
            <td>美元</td>
            <td>1025.36</td>
            <td>0</td>
            <td>0%</td>
          </tr>
          <tr class="status status1">
            <td>美元</td>
            <td>1025.36</td>
            <td>0</td>
            <td>0%</td>
          </tr>
          <tr class="status status2">
            <td>美元</td>
            <td>1025.36</td>
            <td>-20</td>
            <td>-0.02%</td>
          </tr>
          <tr class="status status2">
            <td>美元</td>
            <td>1025.36</td>
            <td>-20</td>
            <td>-0.02%</td>
          </tr>
          <tr class="status status2">
            <td>美元</td>
            <td>1025.36</td>
            <td>-20</td>
            <td>-0.02%</td>
          </tr>
          <tr class="status status2">
            <td>美元</td>
            <td>1025.36</td>
            <td>-20</td>
            <td>-0.02%</td>
          </tr>
          <tr class="status status2">
            <td>美元</td>
            <td>1025.36</td>
            <td>-20</td>
            <td>-0.02%</td>
          </tr>
          <tr class="status status2">
            <td>美元</td>
            <td>1025.36</td>
            <td>-20</td>
            <td>-0.02%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import {LyTab} from LyTab;
export default {
  data () {
    return {
      selected: 0,
      tabList: [
        {itemName: '国际外汇'},
        {itemName: '国际黄金'},
        {itemName: '全球指数'},
        {itemName: '前端'},
        {itemName: '后端'},
        {itemName: 'iOS'},
        {itemName: '产品'},
        {itemName: '人工智能'},
        {itemName: '设计'}
      ]
    }
  },
  methods: {
    changeSelected (id) {
      this.selected = id;
      // console.log(id);
    }
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
        }
        tr.status1{
          td{
            color: #333;
          }
        }
        tr.status2{
          td{
            color: #56a73d;
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
