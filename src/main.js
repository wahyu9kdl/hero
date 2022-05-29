import Vue from "vue"
import Antd from "hero"
import App from "./App.vue"
import "hero/dist/antd.less"
import store from "./store"

Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app")
