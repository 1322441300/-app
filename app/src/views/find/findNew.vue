<template>
  <div class="findNew">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <herald :items="items" :isShowYY="isShowYY" v-on:herald="herald"></herald>
  </div>
</template>

<script>
import headPage from '@/components/headPage';
import herald from '@/components/mine/herald';
import {AjaxUrl} from '@/common/ajax/serverPublic';
import { getCookie } from '@/common/utils/utilsPublic';

import { MessageBox, Toast } from 'mint-ui';

export default {
  data () {
    return {
      isBack: true,
      title: '新茶馆预告',
      userPhone: '',
      items: [],
      isShowYY: true
    }
  },
  components: {
    'headPage': headPage,
    'herald': herald
  },
  methods: {
    getUserInfo () {
      let userPhone = getCookie().userPhone;
      this.userPhone = userPhone;
    },
    getItems () {
      let params = {
        mobileNo: this.userPhone
      }
      this.$ajax.post(AjaxUrl.newTeaRoomHerald, params).then((response) => {
        // console.log(response);
        this.items = response.data.data;
      });
    },
    herald (status, teaMenuId) {
      let params = {
        mobileNo: this.userPhone,
        teaMenuId: teaMenuId
      }
      if (status === '0') {
        MessageBox.confirm('确定预约该茶馆？').then(action => {
          this.$ajax.post(AjaxUrl.subscribe, params).then((response) => {
            // console.log(response.data.respCode);
            if (response.data.respCode === '00') {
              Toast('预约成功')
            }
            this.getItems();
          });
        });
      } else {
        MessageBox.confirm('确定取消此茶馆预约？').then(action => {
          this.$ajax.post(AjaxUrl.unsubscribe, params).then((response) => {
            if (response.data.respCode === '00') {
              Toast('取消预约成功')
            }
            this.getItems();
          });
        });
      }
    }
  },
  created () {
    this.getUserInfo();
    this.getItems();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .findNew{
    width: 100%;
  }
</style>
