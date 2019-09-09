<template>
  <div class="contentBox" id="shipMarketList">
    <div class="main">
      <div class="content">
        <div class="list" v-for="(item,index) in fromShippingMarket[0]" :key="index">
          <router-link :to="`/infoDetail/${item.ID}`">
            <P>{{item.post_title}}</P>
          </router-link>
          <div>
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
        <div class="load" v-if="fromShippingMarket[1]">
          <van-loading size="24px">加载中...</van-loading>
        </div>
        <div class="noMore" v-if="fromShippingMarket[2]">
          <div>没有更多信息了...</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {} from "../api/api.js";
export default {
  name: "shipMarketList",
  props: ["fromShippingMarket"],
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
#shipMarketList {
  padding-bottom: 45px;
  box-sizing: border-box;
  background-color: #fafcff;
  .content {
    text-align: left;
    padding: 15px;
    .list {
      margin-bottom: 10px;

      p {
        // .ellipsis;
        font-size: 16px;
        margin-bottom: 10px;
        color: #000;
      }
      span {
        color: #999;
      }
    }

    .load,
    .noMore {
      text-align: center;
    }
  }
}
</style>