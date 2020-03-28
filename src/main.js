import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import { DatePicker } from "ant-design-vue";
import "ant-design-vue/dist/antd.css"; // or 'ant-design-vue/dist/antd.less'
Vue.use(DatePicker);
Vue.use(Antd);

new Vue({
  render: h => h(App)
}).$mount("#app");
