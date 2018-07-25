<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// import {AjaxUrl} from '../common/ajax/serverPublic';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App   heheh'
    };
  }
  // },
  // methods: {
  //   get() {
  //     this.$ajax.post(AjaxUrl.test).then((response) => {
  //       console.log(response);
  //     });
  //   }
  // },
  // created() {
  //   this.get();
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  h1 {
    color: red;
  }
}
</style>
