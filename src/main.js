import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.scss'

import { Dialog, Toast, Button, Tab, Tabs, Field, Cell, CellGroup, Popup, Picker, DatetimePicker, Uploader, Card , List, Lazyload, Swipe, SwipeItem } from 'vant'
import vueCropper from 'vue-cropper'
import _ from "lodash"

Vue.config.productionTip = false

Vue.prototype.$_ = _

Vue.use(Tab).use(Tabs)
Vue.use(Cell).use(CellGroup)
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Button)
Vue.use(Field)
Vue.use(Picker)
Vue.use(DatetimePicker)
Vue.use(Uploader)
Vue.use(Popup)
Vue.use(Card)
Vue.use(List)
Vue.use(vueCropper)
Vue.use(Lazyload, {
  lazyComponent: true
})

Vue.use(Swipe).use(SwipeItem);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
