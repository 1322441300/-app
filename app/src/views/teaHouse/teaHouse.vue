<template>
  <div class="">
    <headPage :title="typeString"></headPage>
    <div style="height:45px;"></div>
    <cell :typeString="typeString"></cell>
    <div style="height:85px;"></div>
    <bottomCom :typeString="typeString"></bottomCom>
  </div>
</template>

<script>
import headPage from '@/components/headPage';
import cell from '@/components/teaHouse/cellTea';
import bottomCom from '@/components/teaHouse/bottomCom';
export default {
  name: 'teaHouse',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App   heheh',
      typeString: ''
    }
  },
  components: {
    'headPage': headPage,
    'cell': cell,
    'bottomCom': bottomCom
  },
  methods: {
    getTypeString: function() {
      let typeString = this.$route.query.typeString;
      // console.log(typeString);
      if (typeString) {
        this.typeString = typeString;
      }
    },
    goMine: function() {
      this.$router.push({
        path: 'mine',
        query: {
          currentStatus: 'goMine'
        }
      });
    }
    // get() {
    //   this.$ajax.post(AjaxUrl.test).then((response) => {
    //     console.log(response);
    //   });
    // }
  },
  created() {
    this.getTypeString();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
