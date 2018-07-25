<template>
  <div class="newTeaHouse">
    <headPage :title="typeString"></headPage>
    <div style="height:45px;"></div>
    新建茶馆

  </div>
</template>

<script>
import headPage from '@/components/headPage';
export default {
  data () {
    return {
      // typeString:''
      // swiperOption:{}
    }
  },
  props: {
    typeString: String
  },
  components: {
    headPage: headPage
  },
  created() {
    console.log(this.typeString);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .newTeaHouse{
    width: 100%;
    font-size: 18px;
  }
</style>
