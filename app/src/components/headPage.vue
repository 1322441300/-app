<template>
  <div class="topWrap clearfix pf">
    <div class="goBack pa" @click="$router.back(-1)">
      <img src="@/assets/back.png" class="fl">
    </div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    required: true
  },
  methods: {
    // goBack: function() {
    //   this.$router.back(-1);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .topWrap{
    width: 100%;
    height: 44px;
    padding: 0 10px;
    background-color: #fff;
    text-align: center;
    top:0;
    left: 0;
    .goBack{
      width:44px;
      height: 44px;
      left: 10px;
      top: 0;
      img{
        margin-top: 12px;
        width: 20px;
        height: 20px;
      }
    }
    h1{
      line-height: 44px;
      font-weight: normal;
      font-size:20px;
      color: #444;
    }
  }
</style>
