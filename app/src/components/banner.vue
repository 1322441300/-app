<template>
  <div class="swiper-box">
    <mt-swipe :auto="3200">
      <mt-swipe-item v-for="banner in banners" :key="banner.id">
        <img :src="banner.path" class="swiper-image">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>

export default {
  name: 'bannerWrap',
  props: {
    banners: {
      type: Array
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.swiper-box{
  width: 100%;
  height: 180px;
  margin: 0 auto;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
