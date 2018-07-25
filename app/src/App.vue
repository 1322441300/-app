<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 100%;
  height: 100%;
  position: relative;
}
html {-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;font-size: 40px;min-width: 320px;margin: 0 auto;}
input[type="submit"], input[type="reset"], input[type="button"], input {-webkit-appearance: none;resize: none;}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}
img{width: 100%;height: auto;width: auto\9;-ms-interpolation-mode: bicubic;}

body, div, ul, li, ol, h1, h2, h3, h4, h5, h6, input, textarea, select, p, dl, dt, dd, a, img, button, form, table, th, tr, td, tbody, article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	margin: 0;
	padding: 0;
	border: none;
	list-style: none;
	vertical-align: middle;
	color: #666;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
*{box-sizing: border-box;}
body,html{background: #f2f2f2;width:100%;height: 100%;}
em, i{font-style: normal;}
strong{font-weight: normal;}
.clearfix:after{content: "";display: block;visibility: hidden;height: 0;clear: both;}
.clearfix {zoom: 1;}
a{text-decoration: none;color: #666;-webkit-tap-highlight-color:rgba(0,0,0,0); }
a:hover {text-decoration: none;-webkit-tap-highlight-color:rgba(0,0,0,0); }
ul, ol {list-style: none;}
h1, h2, h3, h4, h5, h6 {font-size: 100%;}
h1{font-size: 20px !important;color: #555 !important;}
img{border: none;}

.wordwrap { word-break: break-all; word-wrap: break-word; }

.omg{overflow: hidden; text-overflow: ellipsis; white-space:nowrap;}

.wrap{ width: 100%; margin: 0 auto; box-sizing: border-box;}
.fa{ font-family: Arial !important;}
.fwb{ font-weight: bold;}
.fl{ float: left;}
.fr{ float: right;}

.c1{ color: #c22 !important;}
.c2{ color: #57b !important;}
.c3{ color: #acf !important;}
.c4{ color: #3c6 !important;}
.c6{ color: #666 !important;}
.c9{ color: #999 !important;}

.pr{ position: relative;}
.pa{ position: absolute;}
.pf{position: fixed;}
</style>
