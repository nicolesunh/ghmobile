<template>
  <div class="contentBox" id="login">
    <!-- 用户已登录成功 -->
    <div class="logined" v-if="isLogin">
      <div class="loginedWel">
        <p @click="goIndex">上海国际航运中心网</p>
        <p>13912392157 已登录</p>
        <p>退出登录</p>
      </div>
    </div>
    <div class="login" v-if="!isLogin">
      <div class="welcome">
        <p>欢迎登录</p>
        <p @click="goIndex">上海国际航运中心网</p>
      </div>
      <!-- 登录表单 -->
      <div class="loginForm">
        <van-cell-group>
          <div class="vidate">
            <van-field v-model.trim="phone" @change="checkPhone" clearable placeholder="手机号" />
            <span v-if="isPhoneErr">{{phoneErr}}</span>
          </div>
          <div class="vidate">
            <!-- type="password" -->
            <van-field v-model.trim="password" @change="checkpsd1" clearable placeholder="密码" />
            <span v-if="isPasswordErr">{{passwordErr}}</span>
          </div>
          <div class="vidate">
            <van-field v-model.trim="validator" clearable placeholder="验证码" />
            <!-- <span v-if="isValidatorErr">{{validatorErr}}</span> -->
          </div>
        </van-cell-group>
        <!-- 验证码 -->
        <div class="validatePic">
          <img :src="captcha_url" @click="changeValidator" alt />
          <span @click="changeValidator">换一张</span>
        </div>
        <!-- 登录按钮 -->
        <div>
          <van-button
            @click="authorizationOnClick('http://192.168.125.139/', baseUrl)"
            type="info"
            style="width:100%;font-size: 16px; background:#0373a5;border: 1PX solid #0373a5; height: 35px;line-height: 35px;border-radius: 5px;"
          >登 录</van-button>
        </div>
        <!-- 忘记密码 注册 -->
        <div class="forget-reg">
          <span @click="goForget">忘记密码?</span>
          <span @click="goRegister">立即注册</span>
        </div>
        <div class="goGHIndex" @click="goIndex">
          <span>
            <img src="../../assets/img/箭头.png" style="width:20px" alt />返回首页
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode      */
let b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance   */
import axios from "@/api/baseApi";
import { throttle, getRequest } from "@/utils/common";
//Notify要在组件内再次import
import { Notify } from "vant";

export default {
  name: "login",
  props: [],
  data() {
    return {
      password: "",
      phone: "",
      validator: "",
      uummloginId: "",
      uummphone: "",
      uummemail: "",
      // 错误信息提示
      phoneErr: "",
      validatorErr: "",
      passwordErr: "6-16位字符(字母/数字/特殊符号，区分大小写)",
      // 错误信息提示元素的显示
      isPhoneErr: false,
      isPasswordErr: true,
      isValidatorErr: false,
      // 验证码
      captcha_url: "",
      // 状态用于判断是管理员登录还是用户登录
      status: "",
      // 记录从哪个页面进入登录页
      fromUrL: "",
      isLogin: false,
      baseUrl: process.env.VUE_APP_BASE_API
    };
  },
  created() {
    this.changeValidator();
    if (localStorage.getItem("isLogined")) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  mounted() {},
  destroyed() {},
  watch: {
    $route(to, from) {
      console.log(to, from, "to, from");
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to, from, "ddddd");

    next(vm => {
      vm.fromUrL = from.fullPath;
    });
  },
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
    goForget() {
      this.$router.push("/forget");
    },
    goIndex() {
      this.$router.push("/");
    },

    // 验证手机号
    checkPhone() {
      if (this.phone == "") {
        this.isPhoneErr = true;
        this.phoneErr = "手机不可为空";
        return false;
      } else {
        if (!/^1[3456789]\d{9}$/.test(this.phone)) {
          this.isPhoneErr = true;
          this.phoneErr = "手机号格式有误";
          return false;
        } else {
          this.isPhoneErr = false;
        }
      }
    },
    checkpsd1() {
      let psd1 = this.password;
      let flagZM = false;
      let flagSZ = false;
      let flagQT = false;
      if (psd1.length < 6 || psd1.length > 12) {
        this.passwordErr = "长度错误";
        return false;
      } else {
        let i = 0;
        for (i = 0; i < psd1.length; i++) {
          if (
            (psd1.charAt(i) >= "A" && psd1.charAt(i) <= "Z") ||
            (psd1.charAt(i) >= "a" && psd1.charAt(i) <= "z")
          ) {
            flagZM = true;
          } else if (psd1.charAt(i) >= "0" && psd1.charAt(i) <= "9") {
            flagSZ = true;
          } else {
            flagQT = true;
          }
        }
        if (!flagZM || !flagSZ || flagQT) {
          this.passwordErr = "密码必须是字母数字的组合";
          return false;
        } else {
          this.isPasswordErr = false;
        }
      }
    },
    //图片验证码
    changeValidator() {
      console.log("changeValidator");

      let time = new Date().getTime();
      this.captcha_url = "http://192.168.125.139/epoa/jcaptcha?t=" + time;
    },
    // 登录
    authorizationOnClick(url, baseUrl) {
      let redir = getRequest();
      // console.log(222, redir);

      // 表单校验
      if (this.phone == "" || this.password == "" || this.validator == "") {
        Notify({
          message: "信息不可为空！",
          duration: 1000,
          background: "#0373a5"
        });
        return false;
      }
      // 有一项不符合校验  return
      if (this.isPhoneErr || this.isPasswordErr) {
        return false;
      }

      // 参数1
      let client_id = "http://www.shisc.net";
      let appCode = "shiscweb";
      let data = {
        generateKeypair: true,
        _: new Date().getTime()
      };
      // oauth登录接口
      axios({
        url: url + "epoa/oauth/encryption",
        method: "get",
        params: data,
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(response => {
        if (response.status == 200) {
          let keys = new jCryptionKeyPair(
            response.data.e,
            response.data.n,
            response.data.maxdigits
          );
          let encryptedUser = encrypt(this.phone, keys);
          let encryptedPassword = encrypt(this.password, keys);
          let encryptedClient = encrypt(client_id, keys);
          let encryptedAppCode = encrypt(appCode, keys);

          console.log("11111", keys);
          // 参数2
          let data2 = {
            id: encryptedUser,
            password: encryptedPassword,
            client_id: encryptedClient,
            app_code: encryptedAppCode,
            yzm: this.validator
          };
          // oauth  AuthAuto接口 获取refresh_token
          axios({
            url: url + "epoa/oauth/AuthAuto",
            method: "get",
            params: data2,
            withCredentials: true,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }).then(res => {
            console.log(res, "res111111111111111111");

            if (res.status == 200) {
              if (res.data.flag == "T") {
                console.log("res.data.flag == ");
                // 参数3
                let data3 = {
                  refresh_token: res.data.refresh_token,
                  client_id: client_id,
                  app_code: appCode
                };
                console.log(
                  data3,
                  "data3data3data3data3data3data3data3data3data3data3"
                );

                // accesstoken接口
                axios({
                  url: url + "epoa/oauth/accesstoken",
                  method: "get",
                  params: data3,
                  withCredentials: true,
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                }).then(res2 => {
                  console.log(res2, "res222222222222");
                  if (res.status == 200) {
                    if (res2.data.flag == "T") {
                      // 参数4
                      let data4 = {
                        username: this.phone,
                        pwd: this.password
                      };
                      axios({
                        url: baseUrl + "/login",
                        method: "post",
                        params: data4,
                        withCredentials: true,
                        headers: {
                          "Content-Type": "application/x-www-form-urlencoded"
                        }
                      }).then(res3 => {
                        if (res3.data.code == 1) {
                          if (redir.redirect_to != undefined) {
                            window.location.href = redir.redirect_to;
                          } else {
                            //存储状态用于判断是管理员登录还是用户登录
                            this.status = res3.data.fund_role;
                            // this.status ="user"
                            // this.status = "admin";
                            localStorage.setItem("status", this.status);
                            // //登录成功后，存储一个状态值(手机号)，用于判断用户是否成功登录以及隐藏显示登录注册页面
                            localStorage.setItem("isLogined", this.phone);
                            //登陆成功，跳往首页
                            setTimeout(this.$router.push("/"), 2000);
                            // this.$router.go(-1);   // 登录成功后，返回上次进入的页面；
                            if (this.fromUrL == "/register") {
                              setTimeout(this.$router.push("/home"), 2000);
                            } else {
                              setTimeout(this.$router.push(this.fromUrL), 2000);
                            }
                          }
                        } else {
                          Notify({
                            message: res3.data.errorInfo,
                            duration: 1000,
                            background: "#0373a5"
                          });

                          return false;
                        }
                      });
                    } else {
                      Notify({
                        message: res2.data.errorInfo,
                        duration: 1000,
                        background: "#0373a5"
                      });
                      return false;
                    }
                  }
                });
              }
            } else {
              Notify({
                message: res.data.errorInfo,
                duration: 1000,
                background: "#0373a5"
              });
              return false;
            }
          });
        }
      });
    }
  }
};
</script>
<style lang='less' scoped>
#login {
  width: 100%;
  min-height: 100%;
  padding: 0 50px;
  // .goIndex{
  //   margin-top: 10px;
  //   text-align: left;
  //   padding-left: 10px;
  //   span {
  //     color: #fff;

  //   }
  // }
  .loginedWel {
    text-align: left;
    color: #fff;
    p {
      font-size: 24px;
      color: #fff;
      margin-bottom: 20px;
      &:nth-child(2) {
        font-size: 16px;
        margin-bottom: 20px;
      }
      &:nth-child(3) {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }
  .van-hairline--top-bottom::after {
    border-width: 0;
  }
  .welcome {
    text-align: left;
    margin-top: 30px;
    margin-bottom: 35px;
    p {
      &:first-child {
        font-size: 24px;
        margin-bottom: 10px;
      }
      &:last-child {
        font-size: 20px;
      }
      color: #fff;
    }
  }
  .van-cell-group {
    background: transparent;
  }
  .van-cell {
    background: #c2e7fa;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    // margin-bottom: 15px;
    padding-left: 15px;
    padding-right: 5px;
    box-sizing: border-box;
    color: #25ade9;
  }
  .van-field__control {
    color: #22aee9;
  }
  .validatePic {
    text-align: center;
    margin-bottom: 20px;
    img {
      height: 30px;
      vertical-align: middle;
    }
    span {
      margin-left: 30px;
      color: #fff;
    }
  }
  .forget-reg {
    margin-top: 10px;
    padding: 0 10px;
    overflow: hidden;
    span {
      color: #fff;
      &:first-child {
        float: left;
      }
      &:last-child {
        float: right;
      }
    }
  }
  .vidate {
    height: 55px;
    span {
      display: inline-block;
      width: 100%;
      font-size: 12px;
      text-align: left;
      padding-left: 15px;
    }
  }
  .goGHIndex {
    margin-top: 5px;
    color: #fff;
    text-align: left;
    padding-left: 10px;
    img {
      vertical-align: sub;
      margin-right: 3px;
    }
  }
}
</style>
