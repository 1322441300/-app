<template>
  <div class="">
    <headPage :isBack="isBack" :title="typeString"></headPage>
    <div style="height:45px;"></div>
    <cell :typeString="typeString" :cellDatas="cellDatas"></cell>
    <div class="showNone" v-if="showNone">
      暂无开放茶馆<br><em class="c2" @click="openTeaHouse(typeString)">点击开一个</em>
    </div>
    <div style="height:85px;"></div>
    <bottomCom :menuId="menuId" :typeString="typeString"></bottomCom>
  </div>
</template>

<script>
import headPage from '@/components/headPage';
import cell from '@/components/teaHouse/cellTea';
import bottomCom from '@/components/teaHouse/bottomCom';
import { Indicator } from 'mint-ui';

import {AjaxUrl} from '@/common/ajax/serverPublic';

export default {
  name: 'teaHouse',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App   heheh',
      typeString: '',
      menuId: '',
      isBack: true,
      cellDatas: [],
      showNone: false
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
      let menuId = this.$route.query.menuId;
      // console.log(typeString);
      if (typeString) {
        this.typeString = typeString;
        this.menuId = menuId;
      }
    },
    goMine: function() {
      this.$router.push({
        path: 'mine',
        query: {
          currentStatus: 'goMine'
        }
      });
    },
    getData () {
      let params = {
        menuId: this.menuId
      }
      this.$ajax.post(AjaxUrl.getTeaRoom, params).then((response) => {
        console.log(response.data.data);
        let dataLength = response.data.data.length;
        if (dataLength < 1) {
          this.showNone = true;
        }
        this.cellDatas = response.data.data;
        Indicator.close();
      });
    },
    openTeaHouse: function(type) {
      this.$router.push({
        path: 'newTeaHouse',
        query: {
          typeString: type,
          menuId: this.menuId
        }
      });
    }
  },
  created() {
    Indicator.open();
    this.getTypeString();
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.showNone{
  padding: 30px 0;
  font-size: 18px;
  line-height: 40px;
}
</style>
