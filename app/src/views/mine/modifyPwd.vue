<template>
  <div class="modifyWrap">
    <headPage :isBack="isBack" :title="title"></headPage>
    <div style="height:45px;"></div>
    <pwdCell :showOld="showOld" :userPhone="userPhone" :btnWord="btnWord"></pwdCell>
  </div>
</template>

<script>
import headPage from '@/components/headPage';
// import pwd from '@/components/mine/pwd';
import pwdCell from '@/components/mine/pwdCell';
import { getCookie } from '@/common/utils/utilsPublic';

export default {
  data () {
    return {
      isBack: true,
      title: '修改密码',
      userPhone: '',
      showOld: true,
      btnWord: '修改密码'
    }
  },
  components: {
    'headPage': headPage,
    'pwdCell': pwdCell
  },
  methods: {
    getUserInfo () {
      let userPhone = getCookie().userPhone;
      this.userPhone = userPhone;
    }
  },
  created () {
    this.getUserInfo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modifyWrap{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
