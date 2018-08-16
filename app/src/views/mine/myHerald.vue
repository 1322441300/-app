<template>
  <div class="myHerald">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <herald :userPhone="userPhone" :items="items"></herald>
    <div v-if="showNone" class="showNone">
      暂无预约茶馆
    </div>
  </div>
</template>

<script>
import headPage from '@/components/headPage';
import herald from '@/components/mine/herald';
import {AjaxUrl} from '../../common/ajax/serverPublic';

export default {
  data () {
    return {
      isBack: true,
      title: '我的预约',
      userPhone: '',
      showNone: false,
      items: []
    }
  },
  methods: {
    getUserPhone: function() {
      let userPhone = this.$route.query.userPhone;
      this.userPhone = userPhone;
    },
    getData: function() {
      let params = {
        mobileNo: this.userPhone
      }
      this.$ajax.post(AjaxUrl.myHerald, params).then((response) => {
        if (response.data.data.length < 1) {
          this.showNone = true;
        }
        this.items = response.data.data;
      });
    }
  },
  components: {
    headPage: headPage,
    herald: herald
  },
  created () {
    this.getUserPhone();
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.showNone{
  font-size: 18px;
  padding: 30px 0;
}
</style>
