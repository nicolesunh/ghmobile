<template>
  <div class="contentBox" id="shippingDev">
    <div class="main">
      <div class="content">
        <van-tabs
          class="tabsIndex"
          background="#fafcff"
          color="#5aa3e8"
          v-model="active"
          swipeable
          sticky
          :offset-top="38"
          @change="tabChange"
        >
          <van-tab class="index" v-for="(item,index) in tabs" :title="item" :key="index">
            <div class="indexContent" v-if="index===0">
              <!-- 顶部5张图片 -->
              <div class="picFive">
                <ul>
                  <li>
                    <img src="../../assets/img/centbuildimg1.jpg" alt />
                  </li>
                  <li>
                    <img src="../../assets/img/centbuildimg2.jpg" alt />
                  </li>
                  <li>
                    <img src="../../assets/img/centbuildimg3.jpg" alt />
                  </li>
                  <li>
                    <img src="../../assets/img/centbuildimg4.jpg" alt />
                  </li>
                  <li>
                    <img src="../../assets/img/centbuildimg5.jpg" alt />
                  </li>
                </ul>
              </div>
              <van-loading
                color="#1989fa"
                type="spinner"
                class="infoDetailLoad"
                v-if="indexLoading"
              />
              <div v-if="!indexLoading">
                <!-- 政策支持 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>政策支持</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in shippingDevIndex.zczc" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 建设历程 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>建设历程</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in shippingDevIndex.jslc" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                  <div class="zxjsban">
                    <img src="../../assets/img/zxjsban.jpg" alt />
                  </div>
                </div>
                <!-- 建设动态 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>建设动态</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="dynamic">
                    <Timeline>
                      <TimelineItem v-for="(item) in jsdt" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <p class="time">{{item.post_date}}</p>
                          <p class="content">{{item.post_excerpt}}</p>
                        </router-link>
                      </TimelineItem>
                    </Timeline>
                  </div>
                </div>
                <!-- 支持单位 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>支持单位</span>
                  </div>
                  <div class="support">
                    <ul>
                      <li>
                        <a href="http://www.jt.sh.cn/export/">
                          <img src="../../assets/img/11.jpg" alt />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.shanghaiairport.com/">
                          <img src="../../assets/img/100.jpg" alt />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.shjjw.gov.cn/gb/node2/index.html">
                          <img src="../../assets/img/22.jpg" alt />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.shport.gov.cn/shkaq/">
                          <img src="../../assets/img/33.jpg" alt />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.shzhg.gov.cn/">
                          <img src="../../assets/img/44.jpg" alt />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.china-shftz.gov.cn/Homepage.aspx">
                          <img src="../../assets/img/55.jpg" alt />
                        </a>
                      </li>
                      <li>
                        <a href="http://sh.spb.gov.cn/">
                          <img src="../../assets/img/66.jpg" alt />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.portshanghai.com.cn/jtwbs/webpages/index.jsp">
                          <img src="../../assets/img/99.jpg" alt />
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.eport.sh.cn/cms/site/index/index.action;jsessionid=CF309F8DE1D08C8DA5C5150B93CB43F4"
                        >
                          <img src="../../assets/img/77.jpg" alt />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.sse.net.cn/home">
                          <img src="../../assets/img/101.jpg" alt />
                        </a>
                      </li>
                      <li>
                        <a href="http://www.sisi-smu.org/">
                          <img src="../../assets/img/102.jpg" alt />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="shippngDynamic" v-if="index==1">
              <div class="dynamic">
                <Timeline>
                  <TimelineItem v-for="(item,index) in list" :key="index">
                    <router-link :to="`/infoDetail/${item.ID}`">
                      <p class="time">{{item.post_date}}</p>
                      <p class="content">{{item.post_title}}</p>
                    </router-link>
                  </TimelineItem>
                </Timeline>
              </div>
              <div class="load" v-if="load">
                <van-loading size="24px">加载中...</van-loading>
              </div>
              <div class="noMore" v-if="noMore">
                <span>没有更多信息了...</span>
              </div>
            </div>
            <infoCentreList :fromInfoCentreIndex="[list,load,noMore]" v-if="index==2||index==3"></infoCentreList>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
// import shipMarketList from "@/components/shipMarketList";
import infoCentreList from "@/components/infoCentreList";
import {
  getShippingDev,
  getShippingDevJSDT,
  getShippingDevJSLC,
  getShippingDevZCZC
} from "../../api/api.js";
export default {
  name: "shippingDev",
  components: { infoCentreList },
  data() {
    return {
      active: 0,
      tabIndex: 0,
      tabs: ["首页", "建设动态", "建设历程", "政策支持"],
      tabTitle: "",
      page: 1,
      // 列表组件的数据
      list: [],
      // 无更多信息
      noMore: false,
      load: true,
      // 设置一个开关来避免重负请求数据
      isExtending: true,
      shippingDevIndex: {},
      // 每个模块首页loading
      indexLoading: true,
      jsdt: []
    };
  },
  created() {
    this.getHomeAll();
  },
  mounted() {},
  //销毁该事件 防止离开此页面时仍触发srcoll事件，重复触发请求
  destroyed() {
    window.removeEventListener("scroll", this.menu);
  },
  methods: {
    getHomeAll() {
      let data = {};
      getShippingDev(data).then(resData => {
        this.indexLoading = true;
        this.shippingDevIndex = JSON.parse(resData.data.data);
        this.indexLoading = false;
        this.jsdt = JSON.parse(resData.data.data).jsdt.data;
        this.jsdt.map(item => {
          item.post_date = item.post_date.substr(0, 10);
        });
      });
    },
    tabChange(name, title) {
      // 切换tab时归零 
      this.tabIndex = name;
      this.page = 1;
      this.list = [];
      this.noMore = false;
      this.load = true;
      if (name == 0) {
        window.removeEventListener("scroll", this.menu);
      } else {
        window.addEventListener("scroll", this.menu);
      }

      this.extendGetInfoList();
    },

    //请第一页及其以后的数据
    extendGetInfoList() {
      let that = this;
      let data = { page: that.page };
      let API = that.getApi();
      if (this.tabIndex != 0) {
        API(data)
          .then(resData => {
            that.list = that.list.concat(resData.data.data.data);
            that.isExtending = true;
            that.page++;
            // 当返回列表长度<10 或 无数据返回 则无更多信息
            if (
              resData.data.data.data.length < resData.data.data.per_page ||
              resData.data.data.data === undefined ||
              resData.data.data.data.length == 0
            ) {
              that.isExtending = false;
              this.noMore = true;
              this.load = false;
            }
          })
          .catch(err => {
            that.isExtending = false;
          });
      }
    },
    menu() {
      if (this.page != 1) {
        let that = this;
        that.scroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        let docH =
          document.body.scrollHeight || document.documentElement.scrollHeight;
        let windowH = window.screen.height;
        // console.log(that.scroll,windowH,docH);
        // console.log(that.scroll + windowH);
        if (that.scroll + windowH >= docH && this.isExtending) {
          setTimeout(() => {
            that.extendGetInfoList();
          }, 50);
        }
      }
    },
    getApi() {
      let API = "";
      switch (this.tabIndex) {
        case 1:
          API = getShippingDevJSDT;
          break;
        case 2:
          API = getShippingDevJSLC;
          break;
        case 3:
          API = getShippingDevZCZC;
          break;
      }
      return API;
    }
  }
};
</script>
<style lang="less">
</style>
<style lang="less" scoped>
#shippingDev {
  background-color: #fafcff;
  .indexContent {
    padding: 15px;
    padding-bottom: 45px;
    // padding-top: 55px;
    .picFive {
      margin-bottom: 10px;
      ul {
        overflow: hidden;
        li {
          float: left;
          margin-left: 8px;

          img {
            width: 60px;
            height: 55px;
          }
        }
      }
    }
    .zxjsban {
      img {
        width: 100%;
      }
    }

    .support {
      padding: 5px;
      ul {
        overflow: hidden;
        li {
          width: 49%;
          float: left;
          margin-bottom: 10px;
          &:nth-child(2n) {
            float: right;
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .dynamic {
    padding: 5px;
    .time,
    .content {
      font-size: 14px;
      margin-bottom: 5px;
      text-align: left;
    }
  }
  .shippngDynamic {
    padding: 15px;
    padding-bottom: 45px;
  }
}
</style>
