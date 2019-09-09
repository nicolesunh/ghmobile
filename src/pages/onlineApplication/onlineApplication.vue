<template>
  <div class="contentBox" id="onlineApplication">
    <div class="main">
      <div class="content">
        <van-tabs
          class="tabsIndex"
          background="#fafcff"
          color="#5aa3e8"
          v-model="active"
          swipeable
          :sticky="true"
          :offset-top="38"
          :ellipsis="false"
          @change="tabChange"
        >
          <van-tab v-for="(item,index) in tabs" :title="item" :key="index">
            <div class="indexContent" v-if="index===0">
              <van-loading
                color="#1989fa"
                type="spinner"
                class="infoDetailLoad"
                v-if="indexLoading"
              />
              <div v-if="!indexLoading">
                <!-- 轮播图 -->
                <div class="swipe">
                  <van-swipe :autoplay="3000" indicator-color="white">
                    <van-swipe-item v-for="(item) in logo" :key="item.ID">
                      <div class="swipePic">
                        <router-link :to="`/appDetail/${item.ID}`">
                          <img :src="checkImg(item.img)" alt />
                        </router-link>
                      </div>
                    </van-swipe-item>
                  </van-swipe>
                </div>
                <div class="appContent">
                  <!--最新应用 -->
                  <div class="latestApplication">
                    <div class="latestLitle">
                      <span>最新应用</span>
                      <span>
                        <!-- <router-link to="/">
                          <van-icon name="more-o" />
                        </router-link> -->
                      </span>
                    </div>
                    <div class="application">
                      <van-row gutter="15">
                        <van-col span="8" v-for="(item) in zxyy" :key="item.ID">
                          <div class="onlyPic">
                            <router-link :to="`/appDetail/${item.ID}`">
                              <div class="top">
                                <img
                                  :src="checkImg(item.app_logo)"
                                />
                                <span class="post_title">{{item.post_title}}</span>
                              </div>
                              <div class="bottom">
                                <!--  观看量-----暂弃 -->
                                <!-- <span style="margin-right:10px;">
                                <van-icon name="eye-o" />
                                <span>1ddc11</span>
                                </span>-->
                                <!-- <span class="bookmark">
                                <van-icon name="bookmark-o" />
                                <span>{{item.tags}}</span>
                                </span>-->
                              </div>
                            </router-link>
                          </div>
                        </van-col>
                      </van-row>
                    </div>
                  </div>
                  <!--最新查询 -->
                  <div class="hotSearch">
                    <div class="latestLitle">
                      <span>最新查询</span>
                      <span>
                        <!-- <router-link to="/">
                          <van-icon name="more-o" />
                        </router-link> -->
                      </span>
                    </div>
                    <div class="search">
                      <ul>
                        <li v-for="(item) in zxch" :key="item.ID">
                          <div class="smallPic">
                            <div class="top">
                              <router-link :to="`/appDetail/${item.ID}`">
                                <div class="left">
                                  <img
                                    :src="checkImg(item.app_logo)"
                                  />
                                </div>
                                <!-- <span>{{item.app_logo.indexOf('http')}}</span> -->
                                <span>{{item.post_title}}</span>
                              </router-link>
                            </div>
                            <div class="bottom">
                              <!-- 接口暂无 -->
                              <!-- <span style="margin-right:10px;" class="readNums">
                              <van-icon name="eye-o" />
                              <span>{{item.views}}</span>
                              </span>-->
                              <span class="bookmark" @click="goURL(item.source_link)">
                                <van-icon name="bookmark-o" />
                                <span>{{item.source}}</span>
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <menuList
              v-if="index==1||index==2"
              :fromOnlineApplication="[appData,menuList,load,noMore]"
              @selectMenuItemIndex="selectMenuItemIndex"
            ></menuList>
            <!-- 应用公告 -->
            <shipMarketList
              ref="shipMarketList"
              :fromShippingMarket="[list,load,noMore]"
              v-if="index==3"
            ></shipMarketList>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import menuList from "@/components/menuList";
import shipMarketList from "@/components/shipMarketList";
import { isImg } from "@/utils/common";
import {
  getOnlineApp,
  getAppQYYY,
  getAppXXCX,
  getAppYYGG
} from "../../api/api.js";
export default {
  name: "onlineApplication",
  components: { menuList, shipMarketList },
  data() {
    return {
      active: 0,
      tabIndex: 0,
      selectMenuIndex: 0,
      type: "",
      page: 1,
      // 无更多信息
      noMore: false,
      load: true,
      // 设置一个开关来避免重负请求数据
      isExtending: true,
      tabs: ["首页", "企业应用", "信息查询", "应用公告"],
      tabs1: ["最新应用", "热门应用", "移动", "通关", "物流"],
      logo: [],
      zxyy: [],
      zxch: [],
      // 企业应用  信息查询列表数据
      appData: [],
      // 应用公告列表数据
      list: [],
      // menu数据
      menuList: [],
      AppYYGG: [
        {
          title: "业务分类",
          children: ["通关", "物流", "金融", "资讯", "政务", "移动"]
        },
        {
          title: "用户行业",
          children: [
            "贷主",
            "货代",
            "车队",
            "船公司",
            "报关行",
            "报检行",
            "快件营运人",
            "码头",
            "预录点",
            "堆场",
            "理货",
            "仓储",
            "船代"
          ]
        },
        {
          title: "主题应用",
          children: ["一单两报", "船舶动态", "跨区域通关"]
        }
      ],
      AppXXCX: [
        {
          title: "主题数据",
          children: ["货物", "运输工具", "单证"]
        },
        {
          title: "口岸监管",
          children: ["海关", "检验检疫", "海事", "港区"]
        },
        {
          title: "航运服务",
          children: ["船期航班", "路况交通", "航运市场", "物流资源", "海洋气象"]
        }
      ],
      // 每个模块首页loading
      indexLoading: true
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
    // 接受子组件传来的被点击的menu的name 点击修改接口参数从首页重新加载
    selectMenuItemIndex(val) {
      // 切换menu时重置加载 和 无更多信息 提示的效果
      this.load = true;
      this.noMore = false;

      this.selectMenuIndex = val;
      this.getType();
      this.page = 1;
      this.appData = [];
      this.extendGetInfoList();
    },
    //外部链接
    goURL(url) {
      location.href = url;
    },
    // 首页
    getHomeAll() {
      let data = {};
      getOnlineApp(data).then(resData => {
        this.indexLoading = true;
        this.logo = JSON.parse(resData.data.data.logo);
        this.indexLoading = false;
        this.zxyy = JSON.parse(resData.data.data.zxyy);
        this.zxch = JSON.parse(resData.data.data.zxch);
      });
    },
    // 切换tab触发
    tabChange(name, title) {
      this.page = 1;
      this.type = "";
      this.appData = [];
      this.list = [];
      this.tabIndex = name;
      this.noMore = false;
      this.load = true;
      // 区分企业应用/信息查询  menulist的值
      switch (name) {
        case 1:
          this.menuList = this.AppYYGG;
          break;
        case 2:
          this.menuList = this.AppXXCX;
          break;
      }
      // 加载列表页首屏
      this.extendGetInfoList();
      // 切换tab触发滚动加载数据
      if (name == 0) {
        // 首页不触发
        window.removeEventListener("scroll", this.menu);
      } else {
        window.addEventListener("scroll", this.menu);
      }
    },
    //请第一页及其以后的数据
    extendGetInfoList() {
      let that = this;
      let data = {};
      let API = that.getApi();
      // data参数
      switch (API) {
        case getAppQYYY:
          // 企业应用
          data = { type: that.type, page: that.page };
          break;
        case getAppXXCX:
          //信息查询
          data = { type: that.type, page: that.page };
          break;
        case getAppYYGG:
          // 应用公告
          data = { page: that.page };
          break;
      }

      if (this.tabIndex != 0) {
        API(data)
          .then(resData => {
            switch (this.tabIndex) {
              case 1:
                that.appData = that.appData.concat(resData.data.data.data);
                break;
              case 2:
                that.appData = that.appData.concat(resData.data.data.data);
                break;
              case 3:
                that.list = that.list.concat(resData.data.data.data);
                break;
            }

            that.isExtending = true;
            that.page++;
            // 当返回列表长度<10 或 无数据返回 则无更多信息  即无分页
            if (
              resData.data.data.data.length < 8 &&
              resData.data.data.data.length > 0
            ) {
              // 内容过少 可以一览 无需提示信息
              that.isExtending = false;
              this.noMore = false;
              this.load = false;
            } else if (
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
    // 监听滚动加载数据
    menu() {
      if (this.page != 1) {
        let that = this;
        that.scroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        let docH =
          document.body.scrollHeight || document.documentElement.scrollHeight;
        let windowH = window.screen.height;
        if (that.scroll + windowH >= docH && this.isExtending) {
          setTimeout(() => {
            that.extendGetInfoList();
          }, 50);
        }
      }
    },
    // 根据子组件传的被点击的menu的name 修改接口参数
    getType() {
      let arr = [
        {
          "1-1": "tg",
          "1-2": "wl",
          "1-3": "jr",
          "1-4": "zx",
          "1-5": "zw",
          "1-6": "yd",
          "2-1": "dz",
          "2-2": "hd",
          "2-3": "cd",
          "2-4": "cgs",
          "2-5": "bgh",
          "2-6": "bjh",
          "2-7": "kjyyr",
          "2-8": "mt",
          "2-9": "yld",
          "2-10": "dc",
          "2-11": "lh",
          "2-12": "cc",
          "2-13": "ccd",
          "3-1": "ydlb",
          "3-2": "cbdt",
          "3-3": "kqhg"
        },
        {
          "1-1": "hw",
          "1-2": "ysgj",
          "1-3": "dz",
          "1-4": "zx",

          "2-1": "hg",
          "2-2": "jyjy",
          "2-3": "hs",
          "2-4": "gk",

          "3-1": "cq",
          "3-2": "jt",
          "3-3": "sc",
          "3-4": "cz",
          "3-5": "hy"
        }
      ];

      // this.tabIndex=1 修改企业应用参数   this.tabIndex=2 修改信息查询参数
      switch (this.tabIndex) {
        case 1:
          Object.keys(arr[0]).forEach(e => {
            if (e === this.selectMenuIndex) {
              this.type = arr[0][e];
            }
          });
          break;
        case 2:
          Object.keys(arr[1]).forEach(e => {
            if (e === this.selectMenuIndex) {
              this.type = arr[1][e];
            }
           
          });
          break;
      }
    },
    getApi() {
      let API = "";
      switch (this.tabIndex) {
        case 1:
          API = getAppQYYY;
          break;
        case 2:
          API = getAppXXCX;
          break;
        case 3:
          API = getAppYYGG;
          break;
      }
      return API;
    },
    // 处理图片异常不显示
    checkImg(val) {
      return isImg(val);
    }
  }
};
</script>
<style lang="less" >
</style>
<style lang="less" scoped>
#onlineApplication {
  padding-bottom: 45px;
  box-sizing: border-box;
  background-color: #fafcff;
  .indexContent {
    // padding: 10px 20px;
    padding: 15px;
    padding-top: 15px;
    // padding-top: 55px;
    img {
      width: 100%;
      height: 160px;
    }
    .appContent {
      .alignAndBot15;
      margin-top: 10px;
      .application {
        .alignAndBot15;

        padding-top: 10px;
        .onlyPic {
          height: 120px;
          padding: 10px 0;
          border-bottom: 1px dashed #eee;
          box-sizing: border-box;
          margin-bottom: 10px;
          img {
            width: 100%;
            height: 60px;
          }
          .post_title {
            font-size: 12px;
          }
        }
      }
      // 最新查询
      .hotSearch {
        .alignAndBot15;
        .search {
          padding: 5px 0;
          font-size: 14px;
          .smallPic {
            .picTopBot;
            .top {
              padding-left: 50px;
            }
            img {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }
  }
}
</style>
