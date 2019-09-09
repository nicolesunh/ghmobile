<template>
  <div class="contentBox" id="search">
    <!-- 搜索框 -->
    <div class="formSearch">
      <form action="/">
        <van-search
          background="#fff"
          v-model="value"
          placeholder="请输入搜索关键词"
          show-action
          @search="onSearch"
          @cancel="onCancel"
          @clear="onCancel"
          @input="changeValue"
        />
      </form>
    </div>
    <div class="main">
      <!-- 历史记录 -->
      <div class="history" v-if="isShowHistory">
        <div class="historyTop">
          <span>历史搜索</span>
          <span @click="deleteHistory">
            <van-icon size="16px" name="delete" />
          </span>
        </div>
        <div class="historyContent">
          <van-row gutter="20">
            <van-col span="12" v-for="(item,index) in listHistory" :key="index">
              <span @click="onSearch(item)">{{item}}</span>
            </van-col>
          </van-row>
        </div>
      </div>
      <!-- 搜索结果 -->
      <div class="searchRes">
        <ul>
          <li v-for="(item) in searchRes" :key="item._id">
            <router-link :to="`/infoDetail/${item._id}`">
              <div class="post_title" v-html="item.highlight.post_title[0]"></div>
              <div class="post_date">{{timeFormatDate(item._source.post_date)}}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { getSearch } from "../../api/api.js";
import { timeFormat } from "@/utils/common";
export default {
  name: "search",
  props: [],
  data() {
    return {
      value: "",
      infoDetailLoad: false,
      isShowHistory: false,
      listHistory: [],
      searchRes: []
    };
  },
  created() {
    // localStorage有listHistory 则展示历史记录
    if (localStorage.getItem("listHistory")) {
      this.listHistory = JSON.parse(localStorage.getItem("listHistory"));
      // if (this.listHistory) {
      if (this.listHistory.length > 0) {
        this.isShowHistory = true;
        // }
      }
    }
  },
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {
    // 时间格式转换
    timeFormatDate(val) {
      return timeFormat(val);
    },
    onSearch(item) {
      if (item) {
        // 点击历史记录查询
        this.value = item;
        this.isShowHistory = false;
      }
      // 手动输入查询
      if (this.value.trim()) {
        this.history(this.value.trim());
        this.getRes();
      }
    },
    // 取消清空
    onCancel() {
      this.searchRes = [];
      this.isShowHistory = true;
    },
    changeValue() {
      if (this.value.trim() == "") {
        // 手动全部删除  清空结果 展示历史记录
        this.searchRes = [];
        this.isShowHistory = true;
      } else {
        // 手动未全部删除  不展示历史记录
        this.isShowHistory = false;
      }
    },
    // 查询结果
    getRes() {
      let data = { key_word: this.value };
      getSearch(data).then(resData => {
        this.searchRes = resData.data.data.hits.hits;
      });
    },
    // 存入历史记录
    history(val) {
      val = val.trim(); // 清除空格
      if (this.listHistory.length > 0) {
        // 有数据的话 判断
        if (this.listHistory.indexOf(val) !== -1) {
          // 有相同的，先删除 再添加
          this.listHistory.splice(this.listHistory.indexOf(val), 1);
          this.listHistory.unshift(val);
        } else {
          // 没有相同的 添加
          this.listHistory.unshift(val);
        }
      } else {
        // 没有数据 添加
        this.listHistory.unshift(val);
      }
      if (this.listHistory.length > 6) {
        // 保留六个值
        this.listHistory.pop();
      }
      localStorage.setItem("listHistory", JSON.stringify(this.listHistory));
    },
    // 清空历史记录
    deleteHistory() {
      localStorage.removeItem("listHistory");
      this.listHistory = [];
      this.isShowHistory = false;
    }
  }
};
</script>
<style lang='less' scoped>
#search {
  //  background: #f3f3f3;
  min-height: 100px;
  padding-top: 20px;
  // vant input-css
  .van-search__content {
    background-color: #ffffff;
    border: 1px solid #999;
    padding-left: 5px;
  }
  .van-search__action {
    padding: 0 5px;
    margin-left: 10px;
    background-color: #ffffff;
  }
  .formSearch {
    
    padding: 15px;
    // height: 60px;
    width: 100%;
    position: fixed;
    top: 0px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    background-color: #ffffff;
    // background: #fafcff;
    // background: #f3f3f3;
   
  }
  .main {
    background-color: #ffffff;
    height: 100%;
    border-radius: 15px 15px 0 0;
    .history {
      overflow: hidden;
      padding-top: 10px;
      margin-top: 20px;
      .historyTop {
        overflow: hidden;
        color: #999;
        margin-bottom: 10px;
        span {
          &:first-child {
            float: left;
            margin-left: 20px;
            font-size: 16px;
            color: #333;
          }
          &:last-child {
            float: right;
            margin-right: 20px;
            margin-top: 5px;
          }
        }
      }
      .historyContent {
        padding-left: 35px;
        text-align: left;
        color: #666;
        span {
          display: inline-block;
          background: #f9f9f9;
          padding: 3px 10px;
        }
        /deep/.van-col--12 {
          margin-bottom: 10px;

          .ellipsis;
        }
      }
    }
    .searchRes {
      margin-top: 20px;
      /deep/mark {
        background: none;
        color: red;
      }
      ul {
        li {
          width: 95%;
          text-align: left;
          margin-bottom: 3px;
          padding: 3px 0px;
          .post_title {
            margin-bottom: 2px;
            padding-top: 5px;
            padding-left: 20px;
            .ellipsis;
          }
          .post_date {
            font-size: 12px;

            padding-left: 25px;
          }
          a {
          }
        }
      }
    }
  }
}
</style>
