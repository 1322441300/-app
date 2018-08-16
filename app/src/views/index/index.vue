<template>
  <div class="index">
    <bannerWrap :banners="banners"></bannerWrap>
    <teaLink></teaLink>
    <div style="height:20px;"></div>
    <information></information>
    <div style="height:15px;"></div>
    <div style="height:58px;"></div>
    <bottomNav></bottomNav>
  </div>
</template>

<script type="text/javascript">
import {AjaxUrl} from '../../common/ajax/serverPublic';

import banner from '@/components/banner';
import teaLink from '@/components/teaLink';
import information from '@/components/information';
import nav from '@/components/nav';

export default{
  name: 'index',
  data () {
    return {
      showPop: false,
      banners: [
        {path: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3701485667,96126389&fm=200&gp=0.jpg'}
      ]
    }
  },
  components: {
    'bannerWrap': banner,
    'teaLink': teaLink,
    'information': information,
    'bottomNav': nav
  },
  methods: {
    getBanners() {
      this.$ajax.post(AjaxUrl.getBanners).then((response) => {
        this.banners = response.data.data;
      });
    }
  },
  created() {
    this.getBanners();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
