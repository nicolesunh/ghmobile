<template>
  <div class="contentBox" id="specificFund">
    <div class="notice">
      <h3>法律依据</h3>
      <p>
        <router-link
          to="/infoDetail/47458"
        >关于印发《上海市调整优化航运集疏运结构项目资金管理实施细则》和《上海市促进现代航运服务业创新资金管理实施细则》的通知</router-link>
      </p>
    </div>
    <div class="subsystem">
      <h3>相关系统</h3>
      <div class="pic">
        <div @click="goPic">
          <img src="../../assets/img/jsy.jpg" alt />
        </div>
        <div @click="goPic">
          <img src="../../assets/img/fwcx.jpg" alt />
        </div>
        <van-popup v-model="show">
          <div class="tip">
            <p>请前往PC端操作该系统</p>
            <span @click="show=false">取消</span>
            <span @click="show=false">确定</span>
          </div>
        </van-popup>
      </div>
    </div>
  </div>
</template>
<script>
//Notify要在组件内再次import
import { Notify } from "vant";
export default {
  name: "specificFund",
  components: {},
  data() {
    return {
      show: false
    };
  },
  created() {},
  mounted() {},

  destroyed() {},
  methods: {
    goPic() {
      this.show = true;
    }
  }
};
</script>
<style lang="less" >
</style>
<style lang="less" scoped>
.van-popup {
  padding: 10px 20px;
  border-radius: 5px;
}
#specificFund {
  padding: 0 10px;
  padding-bottom: 45px;
  box-sizing: border-box;
  background-color: #fafcff;
  .notice {
    text-align: left;
    margin-bottom: 25px;
    h3 {
      height: 40px;
      line-height: 40px;
      margin-top: 10px;
      margin-bottom: 5px;
    }
    p {
      padding-left: 5px;
    }
  }
  .subsystem {
    text-align: left;
    margin-bottom: 10px;
    h3 {
      height: 40px;
      line-height: 40px;
      margin-top: 10px;
      margin-bottom: 5px;
    }
    .pic {
      padding: 5px;
      img {
        width: 100%;
        margin-bottom: 10px;
      }
      .tip {
        p {
          height: 40px;
          line-height: 40px;
          margin-bottom: 10px;
          color: #333;
          border-bottom: 1px solid #eee;
        }
        span {
          width: 55px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #fff;
          background: #0373a5;
          border-radius: 5px;
          float: left;
          &:last-child {
            float: right;
          }
        }
      }
    }
  }
}
</style>
