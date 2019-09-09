<template>
  <div>
    <div class="top">
      <span class="logo" @click="($router.go(-1))">
        <van-icon name="arrow-left" size="16px" />
      </span>
      <span class="title">{{HeaderTopTitle}}</span>
      <span class="search" @click="goSearch">
        <van-icon name="search" size="18px" />
      </span>
    </div>
  </div>
</template>
<script>
import vm from "@/assets/js/bus";
export default {
  name: "HeaderTop",
  props: ["fromHome"],
  data() {
    return {
      HeaderTopTitle: "上海国际航运中心"
    };
  },
  created() {
    let url = this.$route.path;
    this.getTopTitle(url);
  },
  mounted() {},
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      let url = to.path;
      this.getTopTitle(url);
    }
  },
  methods: {
    goSearch() {
      this.$router.push("/search");
    },
    // 根据路由获取头部标题
    getTopTitle(url) {
      switch (url) {
        case "/infoCentreIndex":
          this.HeaderTopTitle = "资讯中心";
          break;
        case "/shippingMarket":
          this.HeaderTopTitle = "航运市场";
          break;
        case "/policyAnn":
          this.HeaderTopTitle = "政策公告";
          break;
        case "/onlineApplication":
          this.HeaderTopTitle = "在线应用";
          break;
        case "/shippingDev":
          this.HeaderTopTitle = "航运发展";
          break;
        case "/handHelp":
          this.HeaderTopTitle = "办事指南";
          break;
        case "/yangshan":
          this.HeaderTopTitle = "洋山频道";
          break;
        case "/shouce":
          this.HeaderTopTitle = "洋山手册";
        case "/specificFund":
          this.HeaderTopTitle = "专项资金";
          break;
        case "/outlink":
          this.HeaderTopTitle = "友情链接";
          break;
        case "/aboutUS":
          this.HeaderTopTitle = "关于我们";
          break;
        default:
          this.HeaderTopTitle = "上海国际航运中心";
      }
      return this.HeaderTopTitle;
    }
  }
};
</script>
<style lang='less' scoped>
.top {
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  background: #5aa3e8;
  color: #ffffff;
  .logo {
    float: left;
    padding-top: 5px;
    margin-left: 0px;
    font-size: 14px;
    height: auto;
    box-sizing: border-box;
  }
  .title {
    font-size: 18px;
  }
  .search {
    height: auto;
    float: right;
    height: 37px;
    padding-top: 5px;
    box-sizing: border-box;
  }
}
</style>


