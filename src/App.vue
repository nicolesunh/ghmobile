<template>
  <div id="app" :class="{backgroundColor:loginColor}">
    <div class="app-header" v-if="isSearch">
      <HeaderTop :fromHome="title"></HeaderTop>
    </div>
    <div id="container">
      <router-view ></router-view>
    </div>
    <div class="app-footer" v-if="isSearch">
      <FooterBottom></FooterBottom>
    </div>
  </div>
</template>
<script>
import HeaderTop from "@/components/HeaderTop.vue";
import FooterBottom from "@/components/FooterBottom.vue";
export default {
  name: "app",
  data() {
    return {
      isSearch: false,
      loginColor:false,
      title:"11"
    };
  },
  components: {
    HeaderTop,
    FooterBottom
  },
  methods:{
    getHeaderTopTitle(data){
      this.title=data
    }
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    // 搜索页隐藏头部底部
    $route(to, from) {
      //
      let url = to.path;
      switch (url) {
        case "/search":
          this.isSearch = false;
          this.loginColor = false;
          break;
        case "/login":
          this.isSearch = false;
          this.loginColor = true;
          break;
        case "/register":
          this.isSearch = false;
          this.loginColor = true;
          break;
        case "/forget":
          this.isSearch = false;
          this.loginColor = true;
          break;
        default:
          this.isSearch = true;
          this.loginColor = false;
      }
    }
  }
};
</script>
<style lang="less">
body,
html {
  width: 100%;
  height: 100%;
  background-color: #fafcff;
}
.backgroundColor{
   background: url('./assets/img/login.jpg') no-repeat;
   background-size: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  padding: 0;
  // padding-top: 41px;
  // padding-bottom: 41px;
  box-sizing: border-box;
 
  background-color: #fafcff;
  font-size: 14px;
  
  
}
#container{
   width: 100%;
   min-height: 100%; 
   padding-top: 41px;
  padding-bottom: 41px;
   background-size: 100%;
    box-sizing: border-box;
}

// .backgroundPic{
//   background: url('./assets/img/login.jpg');
// }
</style>
