<template>
  <div class="contentBox" id="home">
    <div class="main">
      <!-- nav -->
      <div class="header">
        <div class="homeNavs">
          <van-row gutter="15">
            <van-col span="6">
              <a href="/infoCentreIndex" >资讯中心</a>
          
            </van-col>
            <van-col span="6">
               <a href="/shippingMarket" >航运市场</a>
             
            </van-col>
            <van-col span="6">
              <a href="/policyAnn" >政策公告</a>
            </van-col>
            <van-col span="6">
              <a href="/onlineApplication" >在线应用</a>
            </van-col>
            <van-col span="6">
              <a href="/shippingDev" >航运发展</a>
            </van-col>
            <van-col span="6">
              <a href="/handHelp" >办事指南</a>
            </van-col>
            <van-col span="6">
              <a href="/specificFund" >专项资金</a>
            </van-col>
            <van-col span="6">
              <a href="/yangshan" >洋山频道</a>
            </van-col>
          </van-row>
        </div>
      </div>
      <van-loading color="#1989fa" type="spinner" class="infoDetailLoad" v-if="indexLoading" />
      <div v-if="!indexLoading">
        <!-- 轮播图 -->
        <div class="swipe">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item) in IndexData.jiaodian" :key="item.ID">
              <div class="swipePic">
                <router-link :to="`/infoDetail/${item.ID}`">
                  <img :src="checkImg(item.img)" />
                  <div class="swipeTitle">
                    <span>{{item.post_title}}</span>
                  </div>
                </router-link>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="content">
          <!--今日要闻 -->
          <div class="onlyNews">
            <div class="latestLitle">
              <span>今日要闻</span>
              <!-- <span>
              <router-link to="/">
                <van-icon name="more-o" />
              </router-link>
              </span>-->
            </div>
            <div class="news">
              <ul>
                <li v-for="(item) in IndexData.jryw" :key="item.ID">
                  <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <!--最新应用 -->
          <div class="latestApplication">
            <div class="latestLitle">
              <span>最新应用</span>
              <span>
                <router-link to="/onlineApplication">
                  <van-icon name="more-o" />
                </router-link>
              </span>
            </div>
            <div class="application">
              <van-row gutter="15">
                <van-col span="8" v-for="(item) in IndexData.syyy" :key="item.ID">
                  <div class="onlyPic">
                    <router-link :to="`/appDetail/${item.ID}`">
                      <div class="top">
                        <img :src="checkImg(item.img)" />
                      </div>
                      <div class="bottom">
                        <!--  观看量-----暂弃 -->
                        <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>1ddc11</span>
                        </span>-->
                        <span class="bookmark">
                          <van-icon name="bookmark-o" />
                          <span>{{item.tags}}</span>
                        </span>
                      </div>
                    </router-link>
                  </div>
                </van-col>

                <van-col span="8" v-for="(item) in IndexData.syyy_down" :key="item.ID">
                  <div class="smallPic">
                    <router-link :to="`/appDetail/${item.ID}`">
                      <div class="top">
                        <div class="left">
                          <img :src="checkImg(item.img)" />
                        </div>
                        <span>{{item.post_title}}</span>
                      </div>
                      <div class="bottom">
                        <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>11ewdsd</span>
                        </span>-->
                        <span class="bookmark">
                          <van-icon name="bookmark-o" />
                          <span>{{item.tags}}</span>
                        </span>
                      </div>
                    </router-link>
                  </div>
                </van-col>
              </van-row>
            </div>
          </div>
          <!-- 热门查询 -->
          <div class="hotSearch">
            <div class="latestLitle">
              <span>热门查询</span>
              <span>
                <router-link to="/onlineApplication">
                  <van-icon name="more-o" />
                </router-link>
              </span>
            </div>
            <div class="search">
              <ul>
                <li v-for="(item) in IndexData.sych" :key="item.ID">
                  <div class="smallPic">
                    <div class="top">
                      <router-link :to="`/appDetail/${item.ID}`">
                        <div class="left">
                          <img :src="checkImg(item.img)" />
                        </div>
                        <span>{{item.post_title}}</span>
                      </router-link>
                    </div>
                    <div class="bottom">
                      <span style="margin-right:10px;" class="readNums">
                        <van-icon name="eye-o" />
                        <span>{{item.views}}</span>
                      </span>
                      <span class="bookmark">
                        <van-icon name="bookmark-o" />
                        <span>{{item.tags}}</span>
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 航运指数 -->
          <div class="shipIndex">
            <div class="latestLitle">
              <span>航运指数</span>
              <span>
                <router-link to="/shippingMarket">
                  <van-icon name="more-o" />
                </router-link>
              </span>
            </div>
            <div class="ship">
              <div>
                <div class="onlyPic" v-for="(item) in IndexData.hyzs" :key="item.ID">
                  <router-link :to="`/infoDetail/${item.ID}`">
                    <div class="top">
                      <img :src="checkImg(item.img)" />
                    </div>
                    <div class="bottom">
                      <!-- <span style="margin-right:10px;">
                      <van-icon name="eye-o" />
                      <span>1ddc11</span>
                      </span>-->
                      <span class="bookmark">
                        <van-icon name="bookmark-o" />
                        <span>{{item.post_title}}</span>
                      </span>
                    </div>
                    <div class="shipText">
                      <span>{{item.post_title}}</span>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <!-- 综合交通 -->
          <div class="onlyNews">
            <div class="latestLitle">
              <span>综合交通</span>
              <span>
                <router-link to="/shippingMarket">
                  <van-icon name="more-o" />
                </router-link>
              </span>
            </div>
            <div class="news">
              <ul>
                <li v-for="(item) in IndexData.zhjt" :key="item.ID">
                  <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- 政策公告 -->
          <div class="onlyNews">
            <div class="latestLitle">
              <span>政策公告</span>
              <span>
                <router-link to="/policyAnn">
                  <van-icon name="more-o" />
                </router-link>
              </span>
            </div>
            <div class="news">
              <ul>
                <li v-for="(item) in IndexData.zcgg" :key="item.ID">
                  <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- 建设历程 -->
          <div class="buildProcess">
            <div class="latestLitle">
              <span>建设历程</span>
              <span>
                <router-link to="/shippingDev">
                  <van-icon name="more-o" />
                </router-link>
              </span>
            </div>
            <div class="building">
              <ul>
                <li v-for="(item) in IndexData.jscg" :key="item.ID">
                  <div class="noPic">
                    <router-link :to="`/infoDetail/${item.ID}`">
                      <div class="top">
                        <span>{{item.post_title}}</span>
                      </div>
                      <div class="bottom">
                        <span style="margin-right:10px;" class="readNums">
                          <van-icon name="eye-o" />
                          <span>{{item.views}}</span>
                        </span>
                        <span class="bookmark">
                          <van-icon name="bookmark-o" />
                          <span>{{item.tags}}</span>
                        </span>
                      </div>
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--最热文章 -->
          <div class="hotArticle onlyNews">
            <div class="latestLitle">
              <span>最热文章</span>
            </div>
            <div class="news">
              <ul>
                <li v-for="(item,index) in IndexData.zrwz" :key="item.ID">
                  <router-link :to="`/infoDetail/${item.ID}`">
                    <span>{{index+1}}</span>
                    <span>{{item.post_title}}</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <!--图片新闻 -->
          <div class="onlyPictures picNews">
            <div class="latestLitle">
              <span>图片新闻</span>
              <span>
                <router-link to="/infoCentreIndex">
                  <van-icon name="more-o" />
                </router-link>
              </span>
            </div>
            <div class="picNewsPadding">
              <van-row gutter="10">
                <van-col span="12" v-for="(item) in IndexData.tpxw" :key="item.ID">
                  <router-link :to="`/infoDetail/${item.ID}`">
                    <div class="pictures">
                      <img :src="checkImg(item.img)" />
                    </div>
                  </router-link>
                </van-col>
              </van-row>
            </div>
          </div>
          <!-- 微信扫码 -->
          <div class="wxScan">
            <p>微信扫一扫 快加入我们吧！</p>
            <span>
              <img src="../../assets/img/weixin.jpg" alt />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import vm from "@/assets/js/bus";
import { getHomeInfo } from "../../api/api.js";
import { isImg } from "@/utils/common";
export default {
  name: "home",

  data() {
    return {
      homeNavs: ["资讯中心"],
      IndexData: {},
      indexLoading: true
    };
  },
  created() {
    this.getHomeAll();
  },
  methods: {
    getHomeAll() {
      let data = {};
      getHomeInfo(data).then(resData => {
        this.indexLoading = true;
        this.IndexData = resData.data.data.IndexData;
        this.indexLoading = false;
      });
    },

    // 处理图片异常不显示
    checkImg(val) {
      return isImg(val);
    }
  }
};
</script>
<style lang="less">
#home {
  // 轮播图小圆点的位置
  .van-swipe__indicators {
    bottom: 15px;
  }
}
</style>
<style lang="less" scoped>
#home {
  background: #fafcff;
  font-size: 14px;
  padding-top: 68px;
  padding-bottom: 45px;
  box-sizing: border-box;
  img {
    width: 100%;
  }
  .header {
    position: fixed;
    top: 40px;
    left: 0;
    background: #f5faff;
    z-index: 2;
    .homeNavs {
      padding: 5px 10px;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      overflow: hidden;
      a {
        padding: 2px 0;
        margin-bottom: 5px;
        box-sizing: border-box;
      }
    }
  }
  // 轮播图
  .swipe {
    .van-swipe-item{
      width: 100%;
    }
    margin-bottom: 10px;
    .swipePic {
      width: 100%;
      position: relative;
      .swipeTitle {
        width: 100%;
        min-height: 50px;
        position: absolute;
        top: 0px;
        left: 0;
        padding: 7px 15px;
        color: #fff;
        box-sizing: border-box;
        text-align: left;
        background: rgba(0, 0, 0, 0.25);
      }
      img {
        width: 100%;
        // height: 160px;
      }
    }
  }
  .content {
    padding: 0 10px;

    // 最新应用
    .latestApplication {
      .alignAndBot15;
      .application {
        padding: 5px 0;
        font-size: 12px;
        a {
          display: inline-block;
        }
        .onlyPic {
          height: 105px;
          padding: 10px 0;
          border-bottom: 1px dashed #eee;
          box-sizing: border-box;
          img {
            height: 60px;
          }
        }
        .smallPic {
          height: 100px;
          .picTopBot;
          .top {
            padding-left: 25px;
          }
          .bottom {
            margin-left: 0px;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    // 热门搜索
    .hotSearch {
      .alignAndBot15;
      .search {
        padding: 5px 0;
        font-size: 14px;
        .smallPic {
          .picTopBot;
          .top,
          .bottom {
            padding-left: 50px;
          }
          img {
            width: 25px;
            height: 25px;
          }
        }
      }
    }
    // 建设历程
    .buildProcess {
      .alignAndBot15;
      .building {
        font-size: 14px;
        .noPic {
          .picTopBot;
        }
      }
    }
    // 航运指数
    .shipIndex {
      .alignAndBot15;
      .ship {
        padding: 5px 0;
        font-size: 12px;
        a {
          display: inline-block;
        }
        .onlyPic {
          padding: 10px 0;
          border-bottom: 1px dashed #eee;
          box-sizing: border-box;
          .top {
            text-align: center;
            img {
              width: 95%;
              height: 180px;
            }
          }
          .bottom {
            text-align: center;
          }
          .shipText {
            span {
              display: block;
              padding-top: 10px;
              padding-left: 10px;
              box-sizing: border-box;
              font-size: 14px;
            }
          }
        }
      }
    }
    .onlyPictures {
      .picNewsPadding {
        padding: 5px;
      }
      .pictures {
        margin-bottom: 5px;
        img {
          height: 100px;
        }
      }
    }
    // 微信扫码
    .wxScan {
      .alignAndBot15;
      img {
        width: 20%;
      }
    }
  }
}
</style>