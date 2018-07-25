
<template>
  <div class="index">
    <exchange></exchange>
    <div style="height:58px;"></div>
    <bottomNav></bottomNav>
  </div>

</template>

<script type="text/javascript">
import HelloWorld from '@/components/HelloWorld';
import exchange from '@/components/market/exchange';
import nav from '@/components/nav';
export default{
  name: 'market',
  data () {
    return {
      showPop: false
    }
  },
  components: {
    'HelloWorld': HelloWorld,
    'exchange': exchange,
    'bottomNav': nav
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.index {
  h1 {
    color: red;
  }
}
</style>
