<template>
  <div class="bottomWrap pf c2" @click="openTeaHouse(typeString)">
    没有想进的茶馆？<br>
    点击开一个
  </div>
</template>

<script>
export default {
  name: 'teaHouse',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App   heheh'
    }
  },
  props: {
    typeString: String
  },
  methods: {
    openTeaHouse: function(type) {
      console.log(type);
      // 申请开通新茶馆的接口
      this.$router.push({
        path: 'newTeaHouse',
        query: {
          typeString: type
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
