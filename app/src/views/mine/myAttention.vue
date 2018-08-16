<template>
  <div class="myFllow">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <cellTea :cellDatas="cellDatas"></cellTea>
    <div v-if="showNone" class="showNone">
      暂无关注茶馆
    </div>
  </div>
</template>

<script>
import {AjaxUrl} from '../../common/ajax/serverPublic';
import headPage from '@/components/headPage';
import cellTea from '@/components/teaHouse/cellTea';

export default {
  data () {
    return {
      isBack: true,
      title: '我的关注',
      userPhone: '',
      showNone: false,
      cellDatas: []
    }
  },
  components: {
    headPage: headPage,
    cellTea: cellTea
  },
  methods: {
    getUserPhone: function() {
      let userPhone = this.$route.query.userPhone;
      this.userPhone = userPhone;
    },
    getcellDatas: function() {
      let params = {
        mobileNo: this.userPhone
      }
      this.$ajax.post(AjaxUrl.myFollow, params).then((response) => {
        console.log(response.data);
        let data = response.data.data;
        if (data.length < 1) {
          this.showNone = true;
        }
        this.cellDatas = data;
        // this.userName = response.data.data.userName;
      });
    }
  },
  created () {
    this.getUserPhone();
    this.getcellDatas();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.myFllow{
  width: 100%;
  height: 100%;
  .showNone{
    font-size: 18px;
    padding: 30px 0;
  }
}
</style>
