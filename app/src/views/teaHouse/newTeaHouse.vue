<template>
  <div class="newTeaHouse">
    <headPage :isBack="isBack" :title="typeString"></headPage>
    <div style="height:45px;"></div>
    <openForm :menuId="menuId"></openForm>
  </div>
</template>

<script>
import headPage from '@/components/headPage';
import openForm from '@/components/teaHouse/openForm';

export default {
  data () {
    return {
      isBack: true,
      typeString: '',
      menuId: ''
    }
  },
  props: {
    // typeString: String
  },
  components: {
    headPage: headPage,
    openForm: openForm
  },
  methods: {
    getUrlInfo: function() {
      let typeString = this.$route.query.typeString;
      let menuId = this.$route.query.menuId;
      this.typeString = '新开' + typeString;
      this.menuId = menuId;
    }
  },
  created() {
    this.getUrlInfo();
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
