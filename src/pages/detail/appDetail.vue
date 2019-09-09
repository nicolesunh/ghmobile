<template>
  <div class="contentBox" id="appDetail">
    <div class="main">
      <van-loading color="#1989fa" type="spinner" class="appDetailLoad" v-if="appDetailLoad" />
      <div class="content" v-if="!appDetailLoad">
        <div class="detailTitle">
          <a :href="appDetail.app_frame">
            <div class="appPic">
              <div class="left">
                <img :src="checkImg(appDetail.logo)" />
                <div class="enterApp">进入应用</div>
              </div>
              <div class="right">
                <p>{{appDetail.post_title}}</p>
                <p class="bookmark">
                  <van-icon name="bookmark-o" />
                  <span>{{detailData.tag}}</span>
                </p>
                <p>运营单位：{{appDetail.app_dw}}</p>
              </div>
            </div>
          </a>
        </div>
        <div class="detailContent">
          <div class="detail">
            <div v-html="appDetail.post_content"></div>
          </div>
          <div class="detailBottom">
            <div class="detailReadNum">
              <span class="bookmark">
                <van-icon name="bookmark-o" />
                {{detailData.tag}}
              </span>
            </div>
        
          </div>
        </div>
         <!-- 相关应用 -->
          <div class="relactiveApp">
            <div class="latestLitle">
              <span>相关应用</span>
              <span>

              </span>
            </div>
            <div class="search">
              <ul>
                <li v-for="(item) in detailData.sim_data" :key="item.ID">
                  <div class="smallPic">
                    <div class="top">
                      <router-link :to="`/appDetail/${item.ID}`">
                        <div class="left">
                          <img :src="checkImg(item.img)" />
                        </div>
                        <span>{{item.post_title}}</span>
                      </router-link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAppDetail } from "../../api/api.js";
import { isImg } from "@/utils/common";
export default {
  name: "appDetail",
  props: [],
  data() {
    return {
      appDetailLoad: false,
      appDetail: {},
      detailData: {}
    };
  },
  created() {
    let url = location.href;
    this.id = url.split("appDetail/")[1];
    this.getDetail();
  },
  mounted() {},
  destroyed() {},
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      let url = to.path;
      this.id = url.split("appDetail/")[1];
      location.reload();
    }
  },
  methods: {
    getDetail() {
      getAppDetail(this.id).then(resData => {
        this.detailData = JSON.parse(resData.data.data);
        this.appDetail = JSON.parse(resData.data.data).data[0];
      });
    },
     // 处理图片异常不显示
    checkImg(val) {
      return isImg(val);
    },
  }
};
</script>
<style lang='less' scoped>
#appDetail {
  padding-bottom: 45px;
  box-sizing: border-box;
  background-color: #fafcff;
  .appDetailLoad {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .header {
    margin-bottom: 15px;
  }
  .content {
    padding: 5px 10px;
    padding-top: 15px;
    box-sizing: border-box;
    //  图片详情
    .detailTitle {
      min-height: 90px;
      padding: 0 10px;
      padding-bottom: 10px;
      box-sizing: border-box;
      .appPic {
        position: relative;
        padding-left:95px;
        .left {
          img {
            position: absolute;
            top: 0;
            left: 5px;
            width: 60px;
            height: 60px;
          }
          .enterApp {
             position: absolute;
            top: 70px;
            left: 0;
            height: 25px;
            line-height: 25px;
            width: 70px;
            color: #fff;
            background: #5aa3e8;
            border-radius: 3px;
          }
        }
        .right {
          text-align: left;
          p {
            margin-bottom: 10px;
            &:first-child {
              font-size: 16px;
            }
            &:last-child {
              font-size: 12px;
              color: #999;
            }
          }
          .bookmark {
            span {
              font-size: 12px;
            }
          }
        }
      }
    }
    .detailContent {
      padding: 15px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
      .detailTop,
      .detailBottom {
        padding-bottom: 5px;
        box-sizing: border-box;
        overflow: hidden;
        color: #999;
        .detailReadNum {
          float: left;
          margin-left: 10px;
          font-size: 12px;
          span {
            &:first-child {
              margin-right: 10px;
            }
          }
        }
        .topShare {
          float: right;
          margin-right: 10px;
          font-size: 12px;
          span {
            margin-left: 5px;
          }
        }
      }

      .detail {
        text-align: left;
        padding: 5px 5px;
        margin-bottom: 10px;
        box-sizing: border-box;
        line-height: 24px;
        p {
          span {
            a {
              /deep/img {
                width: 90% !important;
              }
            }
          }
        }
      }
    }
    .extendedReading {
      margin-top: 20px;
      text-align: left;
      .latestLitle {
        border-bottom: none;
      }
    }
  }
  .relactiveApp{
    .latestLitle{
      border-bottom:none;
    }
    margin-top: 10px;
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
}
</style>
