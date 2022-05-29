<template>
  <div id="app">
    <app-nav />
    <app-masthead />
    <app-bottom-drawer />
  </div>
</template>

<script>
import AppBottomDrawer from "./components/AppBottomDrawer.vue";
import AppMasthead from "./components/AppMasthead.vue";
import AppNav from "./components/AppNav.vue";

export default {
  components: {
    AppNav,
    AppMasthead,
    AppBottomDrawer
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Whitney A", "Whitney B";
  font-style: normal;
  font-weight: 400;
}

body {
  margin: 0;
  padding: 0;
  max-width: 100% !important;
  overflow-x: hidden !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

label {
  display: inline-block;
  margin-top: 5px;
}

.ant-row {
  margin-bottom: 20px;
}

@media screen and (max-width: 600px) {
  label {
    font-size: 14px;
  }
}
</style>

<--- "Portofolio"
	Original utility by:
	https://wahyu9kdl.github.io
	https://www.alhikmah.my.id / https://admin.alhikmah.my.id
	https://www.awdev.eu.org / https://devoloper.awdev.eu.org/devoloper.html
	This is the 2nd revision of the modified version by:
	https://wahyu9kdl.medium.com
	
	
	Related Plugin : 
	https://bit.ly/39S49Ue
	https://bit.ly/37Nuan1
	https://bit.ly/3weJFOn
	https://bit.ly/37Nuan1
	https://t.co/HZJoHOSpHC
	https://t.co/I0zjdhpTmJ
	https://t.co/3Gd87uMiGL
	https://bit.ly/3FTl2dh
	https://bit.ly/3NgDUW7
	https://bit.ly/3FTl2dh
	https://bit.ly/3MpQuCr
	https://bit.ly/3LoauUq
	https://bit.ly/3wD01QQ
	--->
