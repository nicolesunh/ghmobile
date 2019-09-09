<template>
  <div class="contentBox" id="shippingMarket">
    <div class="main">
      <div class="content">
        <van-tabs
          class="tabsIndex"
          background="#fafcff"
          color="#5aa3e8"
          v-model="active"
          :swipeable='true'
          sticky
          :offset-top="38"
          @change="tabChange"
        >
          <van-tab class="index" v-for="(item,index) in tabs" :title="item" :key="index">
            <div class="indexContent" v-if="index===0">
              <van-loading
                color="#1989fa"
                type="spinner"
                class="infoDetailLoad"
                v-if="indexLoading"
              />
              <div v-if="!indexLoading">
                <!--集装箱运输市场 -->
                <div class="shipping">
                  <div class="latestLitle">
                    <span>集装箱运输市场</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in jzxsc" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <div class="shippingNoPic">
                            <div class="newsText">
                              <p>{{item.post_title}}</p>
                              <!-- <span style="margin-right:20px;font-size: 12px;" class="readNums">
                              <van-icon name="eye-o" size="14px" />
                              <span>1ddc11</span>
                            </span>
                            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                              <van-icon name="bookmark-o" size="14px" />
                              <span>中国长江集装</span>
                              </span>-->
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--干散货运输市场 -->
                <div class="shipping">
                  <div class="latestLitle">
                    <span>干散货运输市场</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in gshsc" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <div class="shippingNoPic">
                            <div class="newsText">
                              <p>{{item.post_title}}</p>
                              <!-- <span style="margin-right:20px;font-size: 12px;" class="readNums">
                              <van-icon name="eye-o" size="14px" />
                              <span>1ddc11</span>
                            </span>
                            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                              <van-icon name="bookmark-o" size="14px" />
                              <span>中国长江集装</span>
                              </span>-->
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--油轮运输市场 -->
                <div class="shipping">
                  <div class="latestLitle">
                    <span>油轮运输市场</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in ylsc" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <div class="shippingNoPic">
                            <div class="newsText">
                              <p>{{item.post_title}}</p>
                              <!-- <span style="margin-right:20px;font-size: 12px;" class="readNums">
                              <van-icon name="eye-o" size="14px" />
                              <span>1ddc11</span>
                            </span>
                            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                              <van-icon name="bookmark-o" size="14px" />
                              <span>中国长江集装</span>
                              </span>-->
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--船舶市场-->
                <div class="shipping">
                  <div class="latestLitle">
                    <span>船舶市场</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in ylsc" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <div class="shippingNoPic">
                            <div class="newsText">
                              <p>{{item.post_title}}</p>
                              <!-- <span style="margin-right:20px;font-size: 12px;" class="readNums">
                              <van-icon name="eye-o" size="14px" />
                              <span>1ddc11</span>
                            </span>
                            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                              <van-icon name="bookmark-o" size="14px" />
                              <span>中国长江集装</span>
                              </span>-->
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--港口发展 -->
                <div class="shipping">
                  <div class="latestLitle">
                    <span>港口发展</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in gkfz" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <!-- :class   -->
                          <div class="shippingPic" :class="{havePic:item.pic!=''}">
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
                            <div class="newsPic">
                              <img :src="checkImg(item.pic)" />
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--航运指数 -->
                <div class="shipping">
                  <div class="latestLitle">
                    <span>航运指数</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in hyzs" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <!-- :class   -->
                          <div class="shippingPic" :class="{havePic:item.pic!=''}">
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
                            <div class="newsPic">
                              <img :src="checkImg(item.pic)" />
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--经贸统计-->
                <div class="shipping">
                  <div class="latestLitle">
                    <span>经贸统计</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in jmtj" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <div class="shippingNoPic">
                            <div class="newsText">
                              <p>{{item.post_title}}</p>
                              <!-- <span style="margin-right:20px;font-size: 12px;" class="readNums">
                              <van-icon name="eye-o" size="14px" />
                              <span>1ddc11</span>
                            </span>
                            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                              <van-icon name="bookmark-o" size="14px" />
                              <span>中国长江集装</span>
                              </span>-->
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--水运经济 -->
                <div class="shipping">
                  <div class="latestLitle">
                    <span>水运经济</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in syjj" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <!-- :class   -->
                          <div class="shippingPic" :class="{havePic:item.pic!=''}">
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
                            <div class="newsPic">
                              <img :src="checkImg(item.pic)" />
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--综合交通-->
                <div class="shipping">
                  <div class="latestLitle">
                    <span>综合交通</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in zhjt" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <div class="shippingNoPic">
                            <div class="newsText">
                              <p>{{item.post_title}}</p>
                              <!-- <span style="margin-right:20px;font-size: 12px;" class="readNums">
                              <van-icon name="eye-o" size="14px" />
                              <span>1ddc11</span>
                            </span>
                            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                              <van-icon name="bookmark-o" size="14px" />
                              <span>中国长江集装</span>
                              </span>-->
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
                <!--物流统计-->
                <div class="shipping">
                  <div class="latestLitle">
                    <span>物流统计</span>
                    <span>
                      <!-- <router-link to="/">
                        <van-icon name="more-o" />
                      </router-link> -->
                    </span>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item) in wltj" :key="item.ID">
                        <router-link :to="`/infoDetail/${item.ID}`">
                          <div class="shippingNoPic">
                            <div class="newsText">
                              <p>{{item.post_title}}</p>
                              <!-- <span style="margin-right:20px;font-size: 12px;" class="readNums">
                              <van-icon name="eye-o" size="14px" />
                              <span>1ddc11</span>
                            </span>
                            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                              <van-icon name="bookmark-o" size="14px" />
                              <span>中国长江集装</span>
                              </span>-->
                            </div>
                          </div>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <shipMarketList
              ref="shipMarketList"
              @changeExtending="changeExtending"
              :fromShippingMarket="[list,load,noMore]"
              v-else-if="index!=0"
            ></shipMarketList>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import shipMarketList from "@/components/shipMarketList";
import { isImg } from "@/utils/common";
import {
  getShippingMarket,
  getShippingJZX,
  getShippingGSH,
  getShippingYL,
  getShippingGK,
  getShippingCB,
  getShippingSY,
  getShippingJMTJ,
  getShippingWL,
  getShippingZHJT,
  getShippingZS
} from "../../api/api.js";

export default {
  name: "shippingMarket",
  components: { shipMarketList },
  data() {
    return {
      active: 0,
      tabs: [
        "首页",
        "集装箱",
        "干散货",
        "油轮",
        "港口",
        "船舶",
        "水运",
        "经贸",
        "物流",
        "综合",
        "指数"
      ],
      tabTitle: "",
      page: 1,
      // 列表组件的数据
      list: [],
      // 无更多信息
      noMore: false,
      load: true,
      // 设置一个开关来避免重负请求数据
      isExtending: true,
      shipMarketIndex: {},
      // 每个模块首页loading
      indexLoading: true,
      jzxsc: [],
      gshsc: [],
      ylsc: [],
      cbsc: [],
      gkfz: [],
      hyzs: [],
      jmtj: [],
      syjj: [],
      zhjt: [],
      wltj: []
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
    // 父组件接收false--------防止路径跳转到新页面(详情页)触发srcoll事件，重复触发请求   (可不用传值方法，destroyed周期销毁srcoll事件即可)
    changeExtending(val) {
      this.isExtending = false;
    },
    getHomeAll() {
      let data = {};
      getShippingMarket(data).then(resData => {
        this.indexLoading = true;
        this.shipMarketIndex = resData.data.data;
        this.jzxsc = JSON.parse(this.shipMarketIndex.jzxsc);
        this.indexLoading = false;
        this.gshsc = JSON.parse(this.shipMarketIndex.gshsc);
        this.ylsc = JSON.parse(this.shipMarketIndex.ylsc);
        this.cbsc = JSON.parse(this.shipMarketIndex.cbsc);
        this.gkfz = JSON.parse(this.shipMarketIndex.gkfz);
        this.hyzs = JSON.parse(this.shipMarketIndex.hyzs);
        this.jmtj = JSON.parse(this.shipMarketIndex.jmtj);
        this.syjj = JSON.parse(this.shipMarketIndex.syjj);
        this.zhjt = JSON.parse(this.shipMarketIndex.zhjt);
        this.wltj = JSON.parse(this.shipMarketIndex.wltj);
        console.log(this.gkfz, "this.gkfz");
      });
    },
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
      // if (
      //   that.scroll + window.innerHeight + 20 >=
      //   document.documentElement.offsetHeight
      // ) {
      //   if (that.isExtending) {
      //     that.isExtending = false;
      //     setTimeout(() => {
      //       that.extendGetInfoList();
      //     }, 50);
      //   }
      // }
    },
    getApi() {
      let API = "";
      switch (this.tabTitle) {
        case "集装箱":
          API = getShippingJZX;
          break;
        case "干散货":
          API = getShippingGSH;
          break;
        case "油轮":
          API = getShippingYL;
          break;
        case "港口":
          API = getShippingGK;
          break;
        case "船舶":
          API = getShippingCB;
          break;
        case "水运":
          API = getShippingSY;
          break;
        case "经贸":
          API = getShippingJMTJ;
          break;
        case "物流":
          API = getShippingWL;
          break;
        case "综合":
          API = getShippingZHJT;
          break;
        case "指数":
          API = getShippingZS;
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
.shippingNoPic {
  padding: 5px;
}
#shippingMarket {
  background-color: #fafcff;
  .indexContent {
    padding: 15px;
    padding-bottom: 45px;
    // padding-top: 55px;
    .shipping {
      .alignAndBot15;
      .shippingPic {
        margin-bottom: 10px;
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
