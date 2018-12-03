import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Footers from './components/Footer.vue'
import store from './store'
import QSM from './assets/js/qs.min.js'
import './lib/mui/css/mui.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.px.css';
import './lib/mui/css/icons-extra.css'
import 'vue-ydui/dist/ydui.base.css';
Vue.use(YDUI);
//手指左右组建
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
      threshold: 200 //手指左右滑动距离
 }
//ES6引入模块
import axios from 'axios' 
//相当于const axios=require("axios")
Vue.prototype.axios=axios;
Vue.config.productionTip = false
Vue.component('footers',Footers)
Vue.prototype.islogin = function (){
  var phone=sessionStorage.getItem("phone");
  this.phone=phone;
  console.log(phone)
   if(!phone){
     this.$router.push("/login/login_dl")
   }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
