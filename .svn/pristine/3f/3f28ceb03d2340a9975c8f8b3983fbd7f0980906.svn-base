
<template>
  <div class="contentBox" id="infoCentreList">
    <div class="main">
      <div class="content">
        <!-- <van-list ref="infoCentreList" v-model="loading" :finished="finished" :immediate-check='false' :offset='0' finished-text="没有更多了" @load="onLoad">
          <div class="list" v-for="item in list" :key="item.ID">
            
          </div>
        </van-list>-->
        <div class="list" v-for="(item,index) in fromInfoCentreIndex[0]" :key="index">
          <router-link :to='`/infoDetail/${item.ID}`'>
            <P>{{item.post_title}}</P>
            <p>{{item.post_content}}</p>
          </router-link>
          <div>
            <!-- 接口暂无 -->
            <!-- <span style="margin-right:10px;font-size: 12px;" class="readNums">
                <van-icon name="eye-o" size="14px" />
                <span>1ddc11</span>
              </span>
              <span style="margin-right:10px;font-size: 12px;" class="bookmark">
                <van-icon name="bookmark-o" size="14px" />
                <span>中国装</span>
            </span>-->
            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
              <van-icon name="calender-o" size="14px" />
              <span>{{item.post_date}}</span>
            </span>
            <span style="margin-right:10px;font-size: 12px;" class="bookmark">
              <van-icon name="bookmark-o" size="14px" />
              <span @click="goURL(item.source_link)">{{item.source}}</span>
            </span>
          </div>
        </div>
        <div class="load" v-if="fromInfoCentreIndex[1]">
          <van-loading size="24px">加载中...</van-loading>
        </div>
        <div class="noMore" v-if="fromInfoCentreIndex[2]">
          <div>没有更多信息了...</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {} from "../api/api.js";
export default {
  name: "infoCentreList",
  props: ["fromInfoCentreIndex"],
  data() {
    return {};
  },
  created() {},
  mounted() {
    //滚动监听事件
    window.addEventListener("scroll", this.menu);
  },
  methods: {
    goDetail() {
      // 传给父组件false--------防止路径跳转到新页面触发srcoll事件，重复触发请求  (可不用传值方法，destroyed周期销毁srcoll事件即可)
      this.$emit("changeExtending", false);

      // 点击跳转防止路径跳转到新页面触发srcoll事件
      this.$router.push("/infoDetail/1");
    },
    goURL(url) {
      location.href = url;
    }
  }
};
</script>
<style lang="less">
</style>
<style lang="less" scoped>
#infoCentreList {
  padding-bottom: 45px;
  box-sizing: border-box;
  .content {
    text-align: left;
    padding: 15px;
    // padding-top: 55px;
    .list {
      margin-bottom: 20px;

      p {
        &:first-child {
          font-size: 16px;
          margin-bottom: 10px;
          color: #000;
        }
        &:nth-child(2) {
          color: #555;
          margin-bottom: 10px;
          // text-indent: 1em;
        }

        // .ellipsis;
        margin-bottom: 5px;
      }
      span {
        color: #999;
      }
    }

    .load,.noMore{
      text-align: center;
    }
  }
}
</style>