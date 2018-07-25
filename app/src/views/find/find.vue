<template>
  <div class="index">
    <h1>find</h1>
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
import HelloWorld from '@/components/HelloWorld';
import nav from '@/components/nav';
export default{
  name: 'index',
  data () {
    return {
      showPop: false
    }
  },
  components: {
    'HelloWorld': HelloWorld,
    'bottomNav': nav
  },
  methods: {

  }
}
</script>
