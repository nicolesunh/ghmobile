import Vue from "vue";
import Router from "vue-router";

const home = () => import("@/pages/home/home"); //首页
const aboutUS = () => import("@/pages/home/aboutUS"); //关于我们
const infoCentreIndex = () => import("@/pages/infoCentre/infoCentreIndex"); //资讯中心
const infoDetail = () => import("@/pages/detail/infoDetail"); //文章详情
const appDetail = () => import("@/pages/detail/appDetail"); //应用详情
const shippingMarket = () => import("@/pages/shippingMarket/shippingMarket"); //航运市场首页
const yangshan = () => import("@/pages/yangshan/yangshan"); //洋山频道
const shouce = () => import("@/pages/yangshan/shouce"); //洋山频道手册详情
const chaxun = () => import("@/pages/yangshan/chaxun"); //洋山频道在线查询详情
const outlink = () => import("@/pages/outlink/outlink"); //底部友情链接
const onlineApplication = () => import("@/pages/onlineApplication/onlineApplication"); //在线应用
const shippingDev = () => import("@/pages/shippingDev/shippingDev"); //航运发展
const policyAnn = () => import("@/pages/policyAnn/policyAnn"); //政策公告
const handHelp = () => import("@/pages/handHelp/handHelp"); //政策公告
const specificFund = () => import("@/pages/specificFund/specificFund"); //专项资金


const error = () => import("@/pages/error/error"); //搜索
const search = () => import("@/pages/search/search"); //搜索
const login = () => import("@/pages/user/login"); //登录
const register = () => import("@/pages/user/register"); //注册
const forget = () => import("@/pages/user/forget"); //忘记密码

Vue.use(Router);

export default new Router({
  // 去除路由#
  mode:'history',
  routes: [
    {
      path: "/login",
      name: "login",
      component: login,
      children: [
       
      ]
    
    },
   
    {
      path: "/mobile",
      name: "home",
      component: home
    },
    {
      path: "/",
      redirect:'/mobile',
      name: "home",
      component: home
    },
    {
      path: "/aboutUS",
      name: "aboutUS",
      component: aboutUS
    },
    {
      path: "/infoCentreIndex",
      name: "infoCentreIndex",
      component: infoCentreIndex
    },
    {
      path: "/infoDetail/:id(\\d+)",
      name: "infoDetail",
      component: infoDetail
    },
    {
      path: "/appDetail/:id(\\d+)",
      name: "appDetail",
      component: appDetail
    },
    {
      path: "/shippingMarket",
      name: "shippingMarket",
      component: shippingMarket
    },
    {
      path: "/policyAnn",
      name: "policyAnn",
      component: policyAnn
    },
    {
      path: "/handHelp",
      name: "handHelp",
      component: handHelp
    },
    {
      path: "/specificFund",
      name: "specificFund",
      component: specificFund
    },
    {
      path: "/yangshan",
      name: "yangshan",
      component: yangshan
    },
    {
      path: "/shouce",
      name: "shouce",
      component: shouce
    },
    {
      path: "/chaxun",
      name: "chaxun",
      component: chaxun
    },
    {
      path: "/outlink",
      name: "outlink",
      component: outlink
    },
    {
      path: "/onlineApplication",
      name: "onlineApplication",
      component: onlineApplication
    },
    {
      path: "/shippingDev",
      name: "shippingDev",
      component: shippingDev
    },
    {
      path: "/search",
      name: "search",
      component: search
    },
   
    {
      path: "/register",
      name: "register",
      component: register
    },
    {
      path: "/forget",
      name: "forget",
      component: forget
    },
    {
      path: "/error",
      name: "error",
      component: error
    },
  ]
});
