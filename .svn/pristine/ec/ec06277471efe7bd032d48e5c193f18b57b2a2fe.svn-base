import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 状态管理插件
import Vuex from "vuex";
import store from "./store/index";
import axios from "axios";
// 阿里手淘伸缩布局方案
import "amfe-flexible";
import "./assets/css/global.less";

import BaiduMap from 'vue-baidu-map'
// vant 按需引入
import {
  Popup,
  Sidebar,
  SidebarItem,
  Tab,
  Tabs,
  Icon,
  Swipe,
  SwipeItem,
  Row,
  Col,
  Notify,
  List,
  Loading,
  Grid,
  GridItem,
  image,
  Switch,
  Collapse,
  CollapseItem,
  Search,
  Dialog,
  Button,
  Cell,
  CellGroup,
  Panel,
  Field
} from "vant";
Vue.use(Field);
Vue.use(Panel);
Vue.use(Cell).use(CellGroup);
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Popup);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Tab).use(Tabs);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Row).use(Col);
Vue.use(Icon);
Vue.use(image);
Vue.use(Switch);
Vue.use(Grid).use(GridItem);
Vue.use(Notify);
Vue.use(List);
Vue.use(Loading);
Vue.use(Search);
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: '1E6lCsXIZGd362s4nSzgfiw5nbw5GWh3&services=&t=20190622163250'
});

// iview 按需引入
import {
  Menu,
  Submenu,
  MenuItem,
  MenuGroup,
  Timeline,
  TimelineItem
} from "iview";
import "iview/dist/styles/iview.css";
Vue.component("Menu", Menu);
Vue.component("Submenu", Submenu);
Vue.component("MenuItem", MenuItem);
Vue.component("MenuGroup", MenuGroup);
Vue.component("Timeline", Timeline);
Vue.component("TimelineItem", TimelineItem);

// 使用（状态管理）功能
Vue.use(Vuex);

// axios封装及异常处理   目前后台接口状态码只有200
//定义一个请求拦截器
axios.interceptors.request.use(function(config) {

  //在这里对返回的数据进行处理
  return config;
});
//定义一个响应拦截器
axios.defaults.timeout = 1000 * 90 * 1;
axios.interceptors.response.use(
  data => {
    console.log(data, "baseApiData");
    if (data.status != undefined && data.status != 200) {
      Notify({
        message: "请求失败,请稍后再试",
        duration: 1000,
        background: "#1989fa"
      });
      return data;
    } else {
      return data;
    }
  },
  err => {
    console.log(err.response);

    if (err.response != undefined) {
      Notify({
        message: "抱歉，系统发生错误  " + err.response.statusText,
        duration: 3000,
        type: 'warning'
      });
    }
    return Promise.resolve(err);
  }
);
console.log(process.env.NODE_ENV,'process.env.NODE_ENV');
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");

