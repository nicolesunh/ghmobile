<template>
  <div class="contentBox" id="forget">
    <div class="register">
      <div class="welcome">
        <p>找回密码</p>
        <p @click="goIndex">上海国际航运中心网</p>
      </div>

      <!-- 重置表单 -->
      <div class="regForm">
        <van-cell-group>
          <div class="vidate">
            <van-field v-model.trim="phone" @change="checkPhone" clearable placeholder="手机号" />
            <span v-if="isPhoneErr">{{phoneErr}}</span>
          </div>
          <div class="vidate">
            <!-- type="password" -->
            <van-field v-model.trim="password" @change="checkpsd1" clearable placeholder="密码" />
            <span v-if="isPasswordShow">6-16位字符(字母/数字/特殊符号，区分大小写)</span>
            <span v-if="isPasswordErr">{{passwordErr}}</span>
          </div>
          <div class="vidate">
            <van-field
              v-model.trim="passwordSure"
              @change="checkpsd2"
              clearable
              placeholder="确认密码"
            />
            <span v-if="isPasswordSureErr">{{passwordSureErr}}</span>
          </div>
          <div class="vidate">
            <van-field v-model.trim="sms" style="width:75%" center clearable placeholder="短信验证码">
              <!--  -->
            </van-field>
            <van-button slot="button" size="small" class="sms" @click="codeStopDBLclickUpdate">发送验证码</van-button>
            <span></span>
          </div>
        </van-cell-group>

        <div>
          <van-button
            @click="updateStopDBLclick"
            type="info"
            style="width:100%; background:#0373a5;border: 1PX solid #0373a5; height: 35px;line-height: 35px;border-radius: 5px;"
          >提交</van-button>
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
import axios from "@/api/baseApi";
import { throttle, b64_md5 } from "@/utils/common";
//Notify要在组件内再次import
import { Notify } from "vant";

export default {
  name: "forget",
  props: [],
  data() {
    return {
      password: "",
      phone: "",
      passwordSure: "",
      sms: "",
      validator: "",
      //   outh接口返回的参数
      uummloginId: "",
      uummphone: "",
      uummemail: "",
      // 错误信息提示
      phoneErr: "",
      passwordSureErr: "",
      passwordErr: "",
      // 错误信息提示元素的显示
      isPhoneErr: false,
      isPasswordErr: false,
      isPasswordShow: true,
      isPasswordSureErr: false,

      baseUrl: process.env.VUE_APP_BASE_API
    };
  },
  created() {},
  mounted() {},
  destroyed() {},
  watch: {},
  methods: {
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
    // 验证密码
    checkpsd1() {
      let psd1 = this.password;
      let flagZM = false;
      let flagSZ = false;
      let flagQT = false;
      if (psd1.length < 6 || psd1.length > 12) {
        this.passwordErr = "长度错误";
        this.isPasswordErr = true;
        this.isPasswordShow = false;
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
          this.isPasswordErr = true;
          this.isPasswordShow = false;
          return false;
        } else {
          // 密码格式输入正确
          this.isPasswordErr = false;
          this.isPasswordShow = false;
          if (this.passwordSure != "") {
            if (this.password != this.passwordSure) {
              this.isPasswordSureErr = true;
              this.passwordSureErr = "两次密码输入不一致";
              return false;
            } else {
              this.isPasswordSureErr = false;
            }
          }
        }
      }
    },

    //验证确认密码
    checkpsd2() {
      if (this.password != this.passwordSure) {
        this.isPasswordSureErr = true;
        this.passwordSureErr = "两次密码输入不一致";
        return false;
      } else {
        this.isPasswordSureErr = false;
      }
    },
    // 获取验证码
    getPhoneCodeOnClick(regType, url) {
      console.log(1111111);
      // 表单校验
      if (this.phone == "" || this.password == "" || this.passwordSure == "") {
        Notify({
          message: "信息不可为空！",
          duration: 1000,
          background: "#0373a5"
        });
        return false;
      }
      // 有一项不符合校验  return
      if (this.isPhoneErr || this.isPasswordErr || this.isPasswordSureErr) {
        console.log(11122);
        return false;
      }

      if (this.password != this.passwordSure) {
        console.log(this.password, this.passwordSure);
        this.isPasswordSureErr = true;
        this.passwordSureErr = "两次密码输入不一致";
        return false;
      } else {
        console.log(22222222222222);
        this.isPasswordSureErr = false;
        console.log(
          this.isPasswordSureErr,
          this.isPasswordErr,
          this.isPhoneErr,
          "this.isPasswordSureErr"
        );
      }

      let phonenum = this.phone;
      let app_code = "SHISC";
      let client_id = "http://www.shisc.net";
      let author_code = "shisc123";
      // regType = 1  为手机号
      if (regType == 1) {
        // 获取用户 access_token 接口（参数：client_id等 ）
        axios({
          url:
            url +
            "epoa/oauth/serverAuthor?client_id=" +
            client_id +
            "&app_code=" +
            app_code +
            "&author_code=" +
            author_code,
          method: "get",
          async: false,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(response => {
          console.log(response, "res1");

          let access_token = "";
          if (response.status === 200) {
            if (response.data.flag == "T") {
              access_token = response.data.access_token;
              // 发送验证码接口
              axios({
                url:
                  url +
                  "newepoauthweb/phoneRegister?client_id=" +
                  client_id +
                  "&access_token=" +
                  access_token +
                  "&phone=" +
                  phonenum +
                  "&regType=1" +
                  "&phoneTemplet=phone",
                method: "get",
                async: false,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              })
                .then(response => {
                  console.log(response, "res2");

                  if (response.status === 200) {
                    if (response.data.flag == "T") {
                      Notify({
                        message: "验证码请求成功",
                        duration: 1000,
                        background: "#0373a5"
                      });
                      // console.log("验证码请求成功");
                    } else {
                      Notify({
                        message: response.data.errorInfo,
                        duration: 1000,
                        background: "#0373a5"
                      });
                    }
                  }
                })
                .catch(err => {
                  // console.log(err);
                });
            }
          } else {
            Notify({
              message: response.statusText,
              duration: 1000,
              background: "#0373a5"
            });
          }
        });
      }
    },
    // 重置
    updateUser(url, baseUrl) {
      //   表单校验
      if (
        this.phone == "" ||
        this.password == "" ||
        this.passwordSure == "" ||
        this.sms == ""
      ) {
        Notify({
          message: "信息不可为空！",
          duration: 1000,
          background: "#0373a5"
        });
        return false;
      }
      if (this.password != this.passwordSure) {
        console.log(this.password, this.passwordSure);
        this.isPasswordSureErr = true;
        this.passwordSureErr = "两次密码输入不一致";
        return false;
      } else {
        this.isPasswordSureErr = false;
      }
      // 有一项不符合校验  return
      if (this.isPhoneErr || this.isPasswordErr || this.isPasswordSureErr) {
        return false;
      }

      // 获取用户 access_token 接口的参数（参数：短信验证码，密码等 ）
      let app_code = "SHISC";
      let client_id = "http://www.shisc.net";
      let author_code = "shisc123";
      let email = "";
      let phonenum = this.phone;
      let captcha = this.sms;
      let pwd = b64_md5(this.password);
      let postdata =
        "phone=" + phonenum + "&verifyCode=" + captcha + "&newPassword=" + pwd;
      // 调serverAuthor接口获取 access_token
      axios({
        url:
          url +
          "epoa/oauth/serverAuthor?client_id=" +
          client_id +
          "&app_code=" +
          app_code +
          "&author_code=" +
          author_code,
        method: "get",
        async: false,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(response => {
        if (response.status === 200) {
          let access_token = "";
          if (response.data.flag == "T") {
            access_token = response.data.access_token;
            //Oauth接口返回用户唯一ID（uummloginId）需要的参数
            postdata =
              postdata +
              "&client_id=" +
              client_id +
              "&access_token=" +
              access_token;
            // 调newepoauthweb/user接口获取uummloginId
            axios({
              url: url + "newepoauthweb/updatePwdByPhone",
              method: "post",
              data: postdata,
              async: false,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }).then(response => {
              if (response.status === 200) {
                if (response.data.flag == "F") {
                  Notify({
                    message: response.data.errorInfo,
                    duration: 1000,
                    background: "#0373a5"
                  });
                  return false;
                } else if (response.data.flag == "T") {
                  Notify({
                    message: "重置成功,即将前往登录页",
                    duration: 1000,
                    background: "#0373a5"
                  });
                  setTimeout(this.$router.push("/login"), 2000);
                }
              } else {
                Notify({
                  message: response.data.message,
                  duration: 1000,
                  background: "#0373a5"
                });
              }
            });
          }
        } else {
          Notify({
            message: response.data.message,
            duration: 1000,
            background: "#0373a5"
          });
          return false;
        }
      });
    },
    // 短信验证按钮的节流
    codeStopDBLclickUpdate: throttle(function() {
      let that = this;
      that.getPhoneCodeOnClick(1, "http://192.168.125.139/");
    }, 1000),
    // 重置按钮的节流
    updateStopDBLclick: throttle(function() {
      this.updateUser("http://192.168.125.139/", this.baseUrl);
    }, 1000)
  }
};
</script>
<style lang='less' scoped>
#forget {
  height: 100%;
  padding: 0 50px;
  position: relative;
  // background: url('../../assets/img/login.jpg');
  .van-hairline--top-bottom::after {
    border-width: 0;
  }
  .welcome {
    text-align: left;
    margin-top: 40px;
    margin-bottom: 40px;
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
    text-align: right;
    margin-bottom: 20px;
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
    position: relative;
    span {
      display: inline-block;
      width: 100%;
      font-size: 12px;
      text-align: left;
      padding-left: 15px;
    }
    .sms {
      position: absolute;
      top: 0;
      right: 0;

      span {
        padding-left: 0;
        padding: 0 5px;
        border-radius: 5px;
      }
    }
  }
  .inputOuter {
    text-align: left;
    margin-bottom: 15px;
    padding-left: 5px;
  }
  .goGHIndex {
    margin-top: 10px;
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
