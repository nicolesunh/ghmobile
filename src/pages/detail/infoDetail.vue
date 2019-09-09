<template>
  <div class="contentBox" id="infoDetail">
    <div class="main">
      <!-- <div class="header">
        <van-tabs class="tabsIndex" background="#fafcff" color="#5aa3e8" v-model="active">
          <van-tab v-for="(item,index) in tabs" :title="item" :key="index"></van-tab>
        </van-tabs>
      </div>-->
      <van-loading color="#1989fa" type="spinner" class="infoDetailLoad" v-if="infoDetailLoad" />
      <div class="content" v-if="!infoDetailLoad">
        <div class="detailTitle">
          <h4>{{infoDetail.post_title}}</h4>
          <p>
            <span>{{infoDetail.post_date}}</span>
            <span>
              <van-icon name="chat" />
            </span>
            <a :href="infoDetail.source_link">{{infoDetail.source}}</a>
          </p>
        </div>
        <div class="detailContent">
          <div class="detailTop">
            <div class="detailReadNum">
              <span class="readNums">
                <van-icon name="eye-o" />
                {{infoDetail.views}}
              </span>
              <span class="comment">
                <van-icon name="comment-circle-o" />
                {{infoDetail.comment_count}}
              </span>
            </div>
            <!-- 微信分享 暂弃-->
            <div class="topShare">
              <!-- <vshare :vshareConfig="vshareConfig"></vshare> -->
              <!-- <span class="share">
                <img src="../../assets/img/下载.png" alt />
              </span>
              <span class="share">
                <img src="../../assets/img/下载 (1).png" alt />
              </span>
              <span class="share">
                <img src="../../assets/img/下载 (2).png" alt />
              </span>
              <span class="share">
                <img src="../../assets/img/下载 (3).png" alt />
              </span>
              <span class="share">
                <img src="../../assets/img/下载 (4).png" alt />
              </span>-->
            </div>
          </div>
          <div class="detail">
            <div v-html="infoDetail.post_content"></div>
          </div>
          <div class="detailBottom">
            <div class="detailReadNum">
              <span class="bookmark">
                <van-icon name="bookmark-o" />
                {{detailData.tag}}
              </span>
            </div>
            <!-- 微信分享 -->
            <!-- <div class="topShare">
              <span class="share">
                <img src="../../assets/img/下载.png" alt />
              </span>
              <span class="share">
                <img src="../../assets/img/下载 (1).png" alt />
              </span>
              <span class="share">
                <img src="../../assets/img/下载 (2).png" alt />
              </span>
              <span class="share">
                <img src="../../assets/img/下载 (3).png" alt />
              </span>
              <span class="share">
                <img src="../../assets/img/下载 (4).png" alt />
              </span>
            </div>-->
          </div>
        </div>
        <!-- 综合交通 -->
        <div class="onlyNews extendedReading">
          <div class="latestLitle">
            <span>延伸阅读</span>
          </div>
          <div class="news">
            <ul>
              <li v-for="(item) in similar" :key="item.ID">
                <router-link :to="`/infoDetail/${item.ID}`">{{item.post_title}}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//Notify要在组件内再次import
import { Notify } from "vant";
import { getInfoDetail } from "../../api/api.js";
import { isImg } from "@/utils/common";
import wx from "weixin-js-sdk";
export default {
  name: "infoDetail",
  props: [],
  data() {
    return {
      id: 0,
      infoDetail: {},
      similar: [],
      detailData: {},
      infoDetailLoad: true,
      // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      shareURL: "",
      
    };
  },
  created() {
    this.shareURL = location.href;
    let url = location.href;
    this.id = url.split("infoDetail/")[1];
    this.getDetail();
  },
  mounted() {
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log 打出，仅在pc端时才会打印。
      appId: "", // 必填，公众号的唯一标识
      timestamp: "", // 必填，生成签名的时间戳
      nonceStr: "", // 必填，生成签名的随机串
      signature: "", // 必填，签名，见附录1
      jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function() {
      //需在用户可能点击分享按钮前就先调用

      // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
      wx.updateAppMessageShareData({
        title: this.infoDetail.post_title, // 分享标题
        desc: "", // 分享描述
        link: this.shareURL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://www.shisc.net/images/shisc.png", // 分享图标
        success: function() {
          // 设置成功
          Notify({
            message: "分享成功",
            duration: 1000,
            background: "#0373a5"
          });
        }
      });
      // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
      wx.updateTimelineShareData({
        title: this.infoDetail.post_title, // 分享标题
        link: this.shareURL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://www.shisc.net/images/shisc.png", // 分享图标
        success: function() {
          // 设置成功
          Notify({
            message: "分享成功",
            duration: 1000,
            background: "#0373a5"
          });
        }
      });
    });
  },
  destroyed() {},
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      let url = to.path;
      this.id = url.split("infoDetail/")[1];
      this.getDetail()
    }
  },
  methods: {
    getDetail() {
      getInfoDetail(this.id).then(resData => {
        if (resData.data) {
          this.infoDetailLoad = true;
          this.detailData = JSON.parse(resData.data.data);
          this.infoDetail = JSON.parse(resData.data.data).data[0];
          this.similar = JSON.parse(resData.data.data).similar;
          this.infoDetailLoad = false;
        }
      });
    }
  }
};
</script>
<style lang="less">
</style>
<style lang="less" scoped>
#infoDetail {
  padding-bottom: 45px;
  box-sizing: border-box;
  background-color: #fafcff;
  .infoDetailLoad {
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
      padding-bottom: 10px;

      box-sizing: border-box;
      h4 {
        margin-bottom: 8px;
        font-size: 16px;
      }
      p {
        font-size: 12px;
        color: #999;
        span {
          &:first-child {
            margin-right: 15px;
          }
        }

        a {
          display: inline-block;
          color: #999;
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
        /deep/img{
          width: 90%;
          height: 180px;
          
        }
        /deep/table{
          width: 80%!important;
        }
        /deep/p{
          padding: 0;
          margin: 0;
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
}
</style>
