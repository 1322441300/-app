<template>
  <div class="index">
    <bannerWrap :banners="banners" :swiperOption="swiperOption"></bannerWrap>
    <teaLink></teaLink>
    <div style="height:20px;"></div>
    <information></information>
    <div style="height:15px;"></div>
    <!-- <HelloWorld></HelloWorld> -->
    <div style="height:58px;"></div>
    <bottomNav></bottomNav>
  </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.index {
  h1 {
    color: red;
  }
}
</style>

<script type="text/javascript">
import {AjaxUrl} from '../../common/ajax/serverPublic';
import HelloWorld from '@/components/HelloWorld';
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
        {path: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532347386154&di=5a9e2f8b8a4ec1d7b14304e38191dbbd&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3564877025%2C796183547%26fm%3D214%26gp%3D0.jpg'},
        {path: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3701485667,96126389&fm=200&gp=0.jpg'}
      ],
      swiperOption: {
        direction: 'horizontal',
        loop: true,
        autoplay: true,
        paginationType: 'fraction',
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    'HelloWorld': HelloWorld,
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
    // this.getBanners();
  }
}
</script>
