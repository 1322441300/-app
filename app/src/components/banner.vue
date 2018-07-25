<template>
  <div class="swiper-box" rel="swiperBox">
    <swiper :options="swiperOption" class="swiper-container" ref="mySwiper">
      <!-- 轮播项 -->
      <swiper-slide v-for="banner in banners" v-bind:key="banner.id">
          <img :src="banner.path" class="swiper-image">
          <!-- {{banner.banner}} -->
      </swiper-slide>
      <!-- 轮播的小圆点 -->
      <div class="swiper-pagination" slot="pagination">
      </div>
    </swiper>
  </div>
</template>

<script>
// import {AjaxUrl} from '../common/ajax/serverPublic';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'bannerWrap',
  data () {
    return {
      // banners:[],
      // swiperOption:{}
    }
  },
  props: {
    banners: {
      type: Array
    },
    swiperOption: {

    }
  },
  components: {
    swiper: swiper,
    swiperSlide: swiperSlide
  },
  methods: {

  },
  computed: {
    swiper: function() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {

  },
  created() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-box{
  width: 100%;
  height: 180px;
  margin: 0 auto;
  .swiper-container{
    width: 100%;
    height: 100%;
  }
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
