import Vue from 'vue'
import uView from "uview-ui";
import App from './App'

Vue.config.productionTip = false
Vue.use(uView);

uni.$u.config.unit = 'rpx'


App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
