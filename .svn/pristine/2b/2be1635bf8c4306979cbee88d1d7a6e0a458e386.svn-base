<template>
  <div class="contentBox" id="infoCentre">
    <div class="main">
      <div class="content">
        <van-tabs
          class="tabsIndex"
          background="#fafcff"
          color="#5aa3e8"
          swipeable
          sticky
          :offset-top="38"
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
                <!--最新资讯 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>最新资讯</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.hyyw" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                </div>
                <!--上海 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>上海</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.shanghai" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                </div>
                <!--国内 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>国内</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.guonei" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                </div>
                <!--国际 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>国际</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.guoji" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                </div>
                <!--口岸 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>口岸</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.kouan" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                </div>
                <!--航运 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>航运</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.hangyun" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                </div>
                <!--经贸 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>经贸</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.jingmao" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                </div>
                <!--服务 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>服务</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.service" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                </div>
                <!--政策公告 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>政策公告</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.zcgg" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                </div>
                <!--航运百科 -->
                <div class="onlyNews">
                  <div class="latestLitle">
                    <span>国际</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.hybk" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                        <!-- <a href="#">减肥减肥减肥减肥减肥减肥减肥减肥减肥减肥经济法</a> -->
                      </li>
                    </ul>
                  </div>
                </div>
                <!--图片新闻 -->
                <div class="picNews">
                  <div class="latestLitle">
                    <span>图片新闻</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.tpxw" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <div class="picAndnews">
                            <div class="newsText">
                              <p>{{item.post_title}}</p>
                              <!-- 接口暂无观看量和标签 变量 -->
                              <!-- <span style="margin-right:10px;font-size: 12px;" class="readNums">
                              <van-icon name="eye-o" size="14px" />
                              <span>1ddc11</span>
                            </span>
                            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                              <van-icon name="bookmark-o" size="14px" />
                              <span>中国长江集装</span>
                              </span>-->
                            </div>
                            <div class="newsPic">
                              <img :src="checkImg(item.img)" />
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>

                <!--视频 -->
                <div class="videoList">
                  <div class="latestLitle">
                    <span>视频</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.video" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <div class="infoVideo">
                            <p class="videoTitle">{{item.post_title}}</p>
                            <img :src="checkImg(item.img)" />
                            <div class="play">
                              <img src="../../assets/img/play.png" alt />
                            </div>
                            <!-- 接口暂无观看量和标签 变量 -->
                            <!-- <span style="margin-right:10px;font-size: 12px;" class="readNums">
                              <van-icon name="eye-o" size="14px" />
                              <span>1ddc11</span>
                            </span>
                            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                              <van-icon name="bookmark-o" size="14px" />
                              <span>中国长江集装</span>
                            </span>-->
                          </div>
                        </router-link>
                        <div class="videoContent"></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--今日焦点  接口暂无-->
                <!-- <div class="picNews">
                <div class="latestLitle">
                  <span>今日焦点</span>
                  <span>
                    <a href="#">
                      <van-icon name="more-o" />
                    </a>
                  </span>
                </div>
                <div>
                  <ul>
                    <li>
                      <router-link :to='`/infoDetail/${item.ID}`'>
                        <div class="picAndnews" v-if="true">
                          <div class="newsText">
                            <p>挥洒好傻好熟悉四大法律房间大就能发动机大挥洒好傻好熟悉四大法律房间大就能发动机大</p>
                            <span style="margin-right:10px;font-size: 12px;" class="readNums">
                              <van-icon name="eye-o" size="14px" />
                              <span>1ddc11</span>
                            </span>
                            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                              <van-icon name="bookmark-o" size="14px" />
                              <span>中国长江集装</span>
                            </span>
                          </div>
                          <div class="newsPic">
                            <img src="../../assets/img/检验检疫申报回执查询.png" alt />
                          </div>
                        </div>
                       
                      </router-link>
                    </li>
                  </ul>
                </div>
                </div>-->
                <!--专栏 -->
                <div class="zhuanlan">
                  <div class="latestLitle">
                    <span>专栏</span>
                    <span>
                       <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in InfoCentreIndex.zhuanlan" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <div :class="{havePic:item.img!=undefined,haveNoPic:item.img==undefined}">
                            <div class="newsText">
                              <p>{{item.post_title}}</p>
                              <!-- <span style="margin-right:10px;font-size: 12px;" class="readNums">
                              <van-icon name="eye-o" size="14px" />
                              <span>1ddc11</span>
                            </span>
                            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                              <van-icon name="bookmark-o" size="14px" />
                              <span>中国长江集装</span>
                              </span>-->
                            </div>
                            <div class="newsPic" v-if="item.img!=undefined">
                              <img :src="checkImg(item.img)" />
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--热门 -->
                <div class="hotArticle onlyNews">
                  <div class="latestLitle">
                    <span>热门</span>
                  </div>
                  <div class="news">
                    <ul>
                      <li v-for="(item,index) in InfoCentreIndex.zhuanlan" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <span>{{index+1}}</span>
                          <span>{{item.post_title}}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <infoCentreList
              :fromInfoCentreIndex="[list,load,noMore]"
              @changeExtending="changeExtending"
              v-else-if="index!=0"
            ></infoCentreList>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import infoCentreList from "@/components/infoCentreList";
import { isImg } from "@/utils/common";
import {
  getInfoCentreIndex,
  getInfoCentreSH,
  getInfoCentreGN,
  getInfoCentreGJ,
  getInfoCentreHY,
  getInfoCentreJM,
  getInfoCentreKA,
  getInfoCentreKJ,
  getInfoCentreFW,
  getInfoCentreZC,
  getInfoCentreGC,
  getInfoCentreBK
} from "../../api/api.js";
export default {
  name: "infoCentreIndex",
  components: { infoCentreList },
  data() {
    return {
      tabs: [
        "首页",
        "上海",
        "国内",
        "国际",
        "航运",
        "经贸",
        "口岸",
        "科技",
        "服务",
        "政策",
        "观察",
        "百科"
      ],
      list: [],
      tabTitle: "",
      // 无更多信息
      noMore: false,
      load: true,
      page: 1,
      // 设置一个开关来避免重负请求数据
      isExtending: true,
      InfoCentreIndex: {},
      // 每个模块首页loading
      indexLoading: true
    };
  },
  created() {
    this.getHomeAll();
   

  

  },
  mounted() {},
  // 防止离开此页面时仍触发srcoll事件，重复触发请求
  destroyed() {
    window.removeEventListener("scroll", this.menu);
  },
  methods: {
    // 父组件接收false--------防止路径跳转到新页面(详情页)触发srcoll事件，重复触发请求  (可不用传值方法，destroyed周期销毁srcoll事件即可)
    changeExtending(val) {
      this.isExtending = false;
    },
    getHomeAll() {
      let data = {};
      getInfoCentreIndex(data).then(resData => {
        this.indexLoading = true;
        this.InfoCentreIndex = resData.data.data;
        this.indexLoading = false;
      });
    },
    // 切换tab
    tabChange(name, title) {
      this.tabTitle = title;
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
      if (API != "") {
        API(data)
          .then(resData => {
            that.list = that.list.concat(resData.data.data.data);
            that.isExtending = true;
            that.page++;
            // 当返回列表长度<10 或 无数据返回 则无更多信息
            if (
              resData.data.data.data.length < resData.data.data.data.per_page ||
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
    // scroll
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
    getApi() {
      let API = "";

      switch (this.tabTitle) {
        case "上海":
          API = getInfoCentreSH;
          break;
        case "国内":
          API = getInfoCentreGN;
          break;
        case "国际":
          API = getInfoCentreGJ;
          break;
        case "航运":
          API = getInfoCentreHY;
          break;
        case "经贸":
          API = getInfoCentreJM;
          break;
        case "口岸":
          API = getInfoCentreKA;
          break;
        case "科技":
          API = getInfoCentreKJ;
          break;
        case "服务":
          API = getInfoCentreFW;
          break;
        case "政策":
          API = getInfoCentreZC;
          break;
        case "观察":
          API = getInfoCentreGC;
          break;
        case "百科":
          API = getInfoCentreBK;
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
<style lang="less">
</style>
<style lang="less" scoped>
#infoCentre {
  padding-bottom: 45px;
  box-sizing: border-box;
  background-color: #fafcff;
  .indexContent {
    padding: 15px;
    // padding-top: 55px;
    .zhuanlan,
    .videoList {
      .alignAndBot15;
    }
    // 视频
    .videoList {
      li {
        margin-bottom: 10px;
        padding: 5px;
        .infoVideo {
          position: relative;
          .videoTitle {
            width: 100%;
            min-height: 30px;
            position: absolute;
            top: 0;
            left: 0;
            padding: 7px 5px;
            color: #fff;
            box-sizing: border-box;
            text-align: left;
            background: rgba(0, 0, 0, 0.3);
          }
          .play{
             position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-69%,-40%);
            img{
              width: 52px;
            }
          }
        }
        img {
          width: 100%;
        }
      }
    }
    //  图片新闻
    .newsText {
      p {
        margin-bottom: 5px;
      }
    }
    // 视频
  }
}
</style>
