<template>
  <div class="contentBox" id="register">
    <div class="register">
      <div class="welcome">
        <p>欢迎注册</p>
        <p @click="goIndex">  上海国际航运中心网</p>
      </div>

      <!-- 注册表单 -->
      <div class="regForm">
        <van-cell-group>
          <div class="vidate">
            <van-field v-model.trim="username" @change="checkName" clearable placeholder="姓名" />
            <span v-if="isUsernameErr">{{usernameErr}}</span>
          </div>
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
            <van-button slot="button" size="small" class="sms" @click="codeStopDBLclick">发送验证码</van-button>
            <span></span>
          </div>
          <!-- <van-field v-model="phone" clearable placeholder="手机号" />
          <van-field v-model="password" clearable type="password" placeholder="密码" />
          <van-field v-model="passwordSure" clearable placeholder="确认密码" />

          <van-field v-model="sms" center clearable placeholder="短信验证码">
            <van-button slot="button" size="small">发送验证码</van-button>
          </van-field>-->
        </van-cell-group>
        <div class="inputOuter">
          <input
            type="checkbox"
            id="autologin"
            name="autologin"
            class="sux-remember"
            v-model="checked"
          />
          <label class="autologin" for="autologin" id="autologin">我已阅读并接受</label>
          <a
            href="javascript:;"
            class="ydxy"
            style="color:#2d6dc1;font-size:14px"
            @click="(isProtocol=true,checked=true)"
          >《上海国际航运中心网服务使用协议》</a>
        </div>

        <div>
          <van-button
            @click="registeStopDBLclick"
            type="info"
            style="width:100%; background:#0373a5;border: 1PX solid #0373a5; height: 35px;line-height: 35px;border-radius: 5px;"
          >立即注册</van-button>
        </div>
        <div class="goGHIndex" @click="goIndex">
          <span><img src="../../assets/img/箭头.png" style="width:20px" alt="">返回首页</span>
        </div>
      </div>
    </div>
    <div class="protocol" v-if="isProtocol">
      <div class="sux-fwxy">
        <div class="thickcon">
          <div class="regist-2015">
            <div class="regist-box">
              <p align="center" style="text-align: center; text-indent: 18.0pt">
                <b>
                  <span style="font-size: 12.0pt; font-family: 宋体">上海国际航运中心网服务使用协议</span>
                </b>
              </p>
              <p align="center" style="text-align: center; text-indent: 18.0pt">
                <b>
                  <span lang="EN-US" style="font-size: 12.0pt">&nbsp;</span>
                </b>
              </p>
              <p style="text-indent: 18.0pt">
                <span style="font-size: 9.0pt; font-family: 宋体">欢迎阅读上海国际航运中心网（英文简称</span>
                <span lang="EN-US" style="font-size: 9.0pt">SHISC</span>
                <span style="font-size: 9.0pt; font-family: 宋体">）服务协议（下称</span>
                <span lang="EN-US" style="font-size: 9.0pt">“</span>
                <span style="font-size: 9.0pt; font-family: 宋体">本协议</span>
                <span lang="EN-US" style="font-size: 9.0pt">”</span>
                <span style="font-size: 9.0pt; font-family: 宋体">）。本协议所包含的服务条款适用于本网站为用户提供的各种服务。</span>
              </p>
              <p style="text-indent: 18.0pt">
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >上海国际航运中心网（以下简称“本网站”）是由上海市国际航运中心建设推进工作小组办公室主办，上海亿通国际股份有限公司运营，集权威航运信息发布、高效应用服务和行业互动交流为一体的专业化航运信息门户和公共服务平台。将整合政府监管、公共服务和商业服务类信息和资源，实现航运信息的权威发布、航运信息的有效集聚和航运信息服务。</span>
              </p>
              <p>
                <b>
                  <span lang="EN-US" style="font-size: 9.0pt">
                    1.
                    <span style="font: 7.0pt &quot;Times New Roman&quot;"></span>
                  </span>
                </b>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">特别提示</span>
                </strong>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">1.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本网站主办及运营方同意按照本协议的规定及其不时发布的操作规则提供基于互联网以及移动网的相关服务（以下称</span>
                <span lang="EN-US" style="font-size: 9.0pt">“</span>
                <span style="font-size: 9.0pt; font-family: 宋体">网络服务</span>
                <span lang="EN-US" style="font-size: 9.0pt">”</span>
                <span style="font-size: 9.0pt; font-family: 宋体">），</span>
                <span style="font-size: 9.0pt"></span>
                <span style="font-size: 9.0pt; font-family: 宋体">为获得网络服务，服务使用人（以下称</span>
                <span lang="EN-US" style="font-size: 9.0pt">“</span>
                <span style="font-size: 9.0pt; font-family: 宋体">用户</span>
                <span lang="EN-US" style="font-size: 9.0pt">”</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >）应当同意本协议的全部条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中点击</span>
                <span lang="EN-US" style="font-size: 9.0pt">“</span>
                <span style="font-size: 9.0pt; font-family: 宋体">同意</span>
                <span lang="EN-US" style="font-size: 9.0pt">”</span>
                <span style="font-size: 9.0pt; font-family: 宋体">按</span>
                <span style="font-size: 9.0pt"></span>
                <span style="font-size: 9.0pt; font-family: 宋体">钮即表示用户完全接受本协议项下的全部条款。</span>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">1.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户注册成功后，本网站将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。</span>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">1.3</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户注册成功后，在使用本网站服务的过程中，本网站有权基于用户的操作行为进行非商业性的调查研究。</span>
                <span style="font-size: 9.0pt"></span>
              </p>
              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >2.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">服务内容</span>
                </strong>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">2.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本网站网络服务的具体内容由本网站根据实际情况提供，例如资讯、社区、搜索、评论等。</span>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">2.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本网站提供的部分网络服务（例如数据、文件下载等）为收费的网络服务，用户使用收费网络服务需要向本网站支付一定的费用。对于收费的网络服务，本网站会在用户使用之前给予用户明确的提示，只有用户根据提示确认其愿意支付相关费用，用户才能使用该等收费网络服务。如用户拒绝支付相关费用，则本网站有权不向用户提供该等收费网络服务。</span>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">2.3</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户理解，本网站仅提供相关的网络服务，除此之外与相关网络服务有关的设备（如个人电脑、手机、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行负担。</span>
                <span style="font-size: 9.0pt"></span>
              </p>
              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >3.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">服务变更、中断或终止</span>
                </strong>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">3.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >鉴于网络服务的特殊性，用户同意本网站有权随时变更、中断或终止部分或全部的网络服务（包括收费网络服务及免费网络服务）。如变更、中断或终止的网络服务属于免费网络服务，本网站无需通知用户，也无需对任何用户或任何第三方承担任何责任；如变更、中断或终止的网络服务属于收费网络服务，本网站应当在变更、中断或终止之前事先通知用户，并应向受影响的用户提供等值的替代性的收费网络服务，如用户不愿意接受替代性的收费网络服务，就该用户已经向本网站支付的服务费，本网站应当按照该用户实际使用相应收费网络服务的情况扣除相应服务费之后将剩余的服务费退还给该用户。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">3.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户理解，本网站需要定期或不定期地对提供网络服务的平台（如互联网网站、移动网络等）或相关的设备进行检修或者维护，如因此类情况而造成收费网络服务在合理时间内的中断，本网站无需为此承担任何责任，但本网站应尽可能事先进行通告。</span>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">3.3</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >如发生下列任何一种情形，本网站有权随时中断或终止向用户提供本协议项下的网络服务【该网络服务包括但不限于收费及免费网络服务（其中包括基于广告模式的免费网络服务）】而无需对用户或任何第三方承担任何责任：</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">3.3.1</span>
                <span style="font-size: 9.0pt; font-family: 宋体">用户提供的个人资料不真实；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">3.3.2</span>
                <span style="font-size: 9.0pt; font-family: 宋体">用户违反本协议中规定的使用规则；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">3.3.3</span>
                <span style="font-size: 9.0pt; font-family: 宋体">用户在使用收费网络服务时未按规定向本网站支付相应的服务费。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">3.4</span>
                <span style="font-size: 9.0pt; font-family: 宋体">如用户注册的免费网络服务的帐号在任何连续</span>
                <span lang="EN-US" style="font-size: 9.0pt">180</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >日内未实际使用，或者用户注册的收费网络服务的帐号在其订购的收费网络服务的服务期满之后连续</span>
                <span lang="EN-US" style="font-size: 9.0pt">180</span>
                <span style="font-size: 9.0pt; font-family: 宋体">日内未实际使用，则本网站有权删除该帐号并停止为该用户提供相关的网络服务。</span>
                <span style="font-size: 9.0pt"></span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">3.5</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户注册的免费帐号昵称如存在违反法律法规或国家政策要求，或侵犯任何第三方合法权益的情况，本网站有权收回该账号昵称。</span>
                <span style="font-size: 9.0pt"></span>
              </p>

              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >4.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">使用规则</span>
                </strong>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户在申请使用本网站网络服务时，必须向本网站提供准确的个人资料，如个人资料有任何变动，必须及时更新。</span>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户不应将其帐号、密码转让或出借予他人使用。如用户发现其帐号遭他人非法使用，应立即通知本网站。因黑客行为或用户的保管疏忽导致帐号、密码遭他人非法使用，本网站不承担任何责任。</span>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.3</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户同意本网站有权在提供网络服务过程中以各种方式投放各种商业性广告或其他任何类型的商业信息（包括但不限于在本网站网站的任何页面上投放广告），并且，用户同意接受本网站通过电子邮件或其他方式向用户发送商品促销或其他相关商业信息。</span>
              </p>
              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.4</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >对于用户通过本网站网络服务（包括但不限于社区、新闻、应用评论）上传到本网站网站上可公开获取区域的任何内容，用户同意本网站在全世界范围内具有免费的、永久性的、不可撤销的、非独家的和完全再许可的权利和许可，以使用、复制、修改、改编、出版、翻译、据以创作衍生作品、传播、表演和展示此等内容</span>
                <span style="font-size: 9.0pt"></span>
                <span style="font-size: 9.0pt; font-family: 宋体">（整体或部分），和</span>
                <span lang="EN-US" style="font-size: 9.0pt">/</span>
                <span style="font-size: 9.0pt; font-family: 宋体">或将此等内容编入当前已知的或以后开发的其他任何形式的作品、媒体或技术中。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.6</span>
                <span style="font-size: 9.0pt; font-family: 宋体">用户在使用本网站网络服务过程中，必须遵循以下原则：</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.6.1</span>
                <span style="font-size: 9.0pt; font-family: 宋体">遵守中国有关的法律和法规；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.6.2</span>
                <span style="font-size: 9.0pt; font-family: 宋体">遵守所有与网络服务有关的网络协议、规定和程序；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.6.3</span>
                <span style="font-size: 9.0pt; font-family: 宋体">不得为任何非法目的而使用网络服务系统；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.6.4</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >不得以任何形式使用本网站网络服务侵犯本网站的商业利益，包括并不限于发布非经本网站许可的商业广告；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.6.5</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >不得利用本网站网络服务系统进行任何可能对互联网或移动网正常运转造成不利影响的行为；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.6.6</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >不得利用本网站提供的网络服务上传、展示或传播任何虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.6.7</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >不得侵犯其他任何第三方的专利权、著作权、商标权、名誉权或其他任何合法权益；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.6.8</span>
                <span style="font-size: 9.0pt; font-family: 宋体">不得利用本网站网络服务系统进行任何不利于本网站的行为；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.7</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本网站有权对用户使用本网站网络服务【该网络服务包括但不限于收费及免费网络服务（其中包括基于广告模式的免费网络服务）】的情况进行审查和监督</span>
                <span lang="EN-US" style="font-size: 9.0pt">(</span>
                <span style="font-size: 9.0pt; font-family: 宋体">包括但不限于对用户存储在本网站的内容进行审核</span>
                <span lang="EN-US" style="font-size: 9.0pt">)</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >，如用户在使用网络服务时违反任何上述规定，本网站或其授权的人有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或删除用户张贴的内容等、暂停或终止用户使用网络服务的权利）以减轻用户不当行为造成的影响。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">4.8</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本网站针对某些特定的本网站网络服务的使用通过各种方式（包括但不限于网页公告、电子邮件、短信提醒等）作出的任何声明、通知、警示等内容视为本协议的一部分，用户如使用该等本网站网络服务，视为用户同意该等声明、通知、警示的内容。</span>
              </p>

              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >5.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">社区管理规定</span>
                </strong>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">5.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户注册本网站航运社区账号，制作、发布、传播信息内容的，应当使用真实身份信息，不得以虚假、冒用的居民身份信息、企业注册信息、组织机构代码信息进行注册。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">5.2</span>
                <span style="font-size: 9.0pt; font-family: 宋体">如用户违反前述</span>
                <span lang="EN-US" style="font-size: 9.0pt">5.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >条之约定，依据相关法律、法规及国家政策要求，本网站有权随时中止或终止用户对本网站网络服务的使用且不承担违约责任。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">5.3</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本网站将建立健全用户信息安全管理制度、落实技术安全防控措施。对用户使用本网站网络服务过程中涉及的用户隐私内容加以保护。</span>
              </p>

              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >6.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">知识产权</span>
                </strong>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">6.1</span>
                <span style="font-size: 9.0pt; font-family: 宋体">本网站提供的网络服务中包含的任何文本、图片、图形、音频和</span>
                <span lang="EN-US" style="font-size: 9.0pt">/</span>
                <span style="font-size: 9.0pt; font-family: 宋体">或视频资料均受版权、商标和</span>
                <span lang="EN-US" style="font-size: 9.0pt">/</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >或其它财产所有权法律的保护，未经相关权利人同意，上述资料均不得在任何媒体直接或间接发布、播放、出于播放或发布目的而改写或再发行，或者被用于其他任何商业目的。所有这些资料或资料的任何部分仅可作为私人和非商业用途而保存在某台计算机内。本网站不就由上述资料产生或在传送或递交全部或部分上述资料过程中产生的延误、不准确、错误和遗漏或从中产生或由此产生的任何损害赔偿，以任何形式，向用户或任何第三方负责。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">6.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本网站为提供网络服务而使用的任何软件（包括但不限于软件中所含的任何图象、照片、动画、录像、录音、音乐、文字和附加程序、随附的帮助材料）的一切权利均属于该软件的著作权人，未经该软件的著作权人许可，用户不得对该软件进行反向工程（</span>
                <span lang="EN-US" style="font-size: 9.0pt">reverse engineer</span>
                <span style="font-size: 9.0pt; font-family: 宋体">）、反向编译（</span>
                <span lang="EN-US" style="font-size: 9.0pt">decompile</span>
                <span style="font-size: 9.0pt; font-family: 宋体">）或反汇编（</span>
                <span lang="EN-US" style="font-size: 9.0pt">disassemble</span>
                <span style="font-size: 9.0pt; font-family: 宋体">）。</span>
              </p>

              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >7.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">隐私保护</span>
                </strong>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">7.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >保护用户隐私是本网站的一项基本政策，本网站保证不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在本网站的非公开内容，但下列情况除外：</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">7.1.1</span>
                <span style="font-size: 9.0pt; font-family: 宋体">事先获得用户的明确授权；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">7.1.2</span>
                <span style="font-size: 9.0pt; font-family: 宋体">根据有关的法律法规要求；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">7.1.3</span>
                <span style="font-size: 9.0pt; font-family: 宋体">按照相关政府主管部门的要求；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">7.1.4</span>
                <span style="font-size: 9.0pt; font-family: 宋体">为维护社会公众的利益；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">7.1.5</span>
                <span style="font-size: 9.0pt; font-family: 宋体">为维护本网站的合法权益。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">7.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本网站可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与本网站同等的保护用户隐私的责任，则本网站有权将用户的注册资料等提供给该第三方。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">7.3</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >在不透露单个用户隐私资料的前提下，本网站有权对整个用户数据库进行分析并对用户数据库进行商业利用。</span>
              </p>

              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >8.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">免责声明</span>
                </strong>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">8.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户明确同意其使用本网站网络服务所存在的风险将完全由其自己承担；因其使用本网站网络服务而产生的一切后果也由其自己承担，本网站对用户不承担任何责任。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">8.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本网站不担保网络服务一定能满足用户的要求，也不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作担保。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">8.3</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本网站不保证为向用户提供便利而设置的外部链接的准确性和完整性，同时，对于该等外部链接指向的不由本网站实际控制的任何网页上的内容，本网站不承担任何责任。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">8.4</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >对于因不可抗力或本网站不能控制的原因造成的网络服务中断或其它缺陷，本网站不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">8.5</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户同意，对于本网站向用户提供的下列产品或者服务的质量缺陷本身及其引发的任何损失，本网站无需承担任何责任：</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">8.5.1</span>
                <span style="font-size: 9.0pt; font-family: 宋体">本网站向用户免费提供的各项网络服务；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">8.5.2</span>
                <span style="font-size: 9.0pt; font-family: 宋体">本网站向用户赠送的任何产品或者服务；</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">8.5.3</span>
                <span style="font-size: 9.0pt; font-family: 宋体">本网站向收费网络服务用户附赠的各种产品或者服务。</span>
              </p>

              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >9.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">违约赔偿</span>
                </strong>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">9.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >如因本网站违反有关法律、法规或本协议项下的任何条款而给用户造成损失，本网站同意承担由此造成的损害赔偿责任。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">9.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户同意保障和维护本网站及其他用户的利益，如因用户违反有关法律、法规或本协议项下的任何条款而给本网站或任何其他第三人造成损失，用户同意承担由此造成的损害赔偿责任。</span>
              </p>

              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >10.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">协议修改</span>
                </strong>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">10.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本网站有权随时修改本协议的任何条款，一旦本协议的内容发生变动，本网站将会直接在本网站网站上公布修改之后的协议内容，该公布行为视为本网站已经通知用户修改内容。本网站也可通过其他适当方式向用户提示修改内容。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">10.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >如果不同意本网站对本协议相关条款所做的修改，用户有权停止使用网络服务。如果用户继续使用网络服务，则视为用户接受本网站对本协议相关条款所做的修改。</span>
              </p>

              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >11.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">通知送达</span>
                </strong>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">11.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本协议项下本网站对于用户所有的通知均可通过网页公告、电子邮件、手机短信或常规的信件传送等方式进行；该等通知于发送之日视为已送达收件人。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">11.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >用户对于本网站的通知应当通过本网站对外正式公布的通信地址、传真号码、电子邮件地址等联系信息进行送达。</span>
              </p>

              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >12.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">法律管辖</span>
                </strong>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">12.1</span>
                <span style="font-size: 9.0pt; font-family: 宋体">本协议的订立、执行和解释及争议的解决均应适用中国法律并受中国法院管辖。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">12.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >如双方就本协议内容或其执行发生任何争议，双方应尽量友好协商解决；协商不成时，任何一方均可向本网站所在地的人民法院提起诉讼。</span>
              </p>

              <p>
                <strong>
                  <span
                    lang="EN-US"
                    style="font-size: 9.0pt; font-family: &quot;Calibri&quot;, &quot;sans-serif&quot;"
                  >13.</span>
                </strong>
                <strong>
                  <span style="font-size: 9.0pt; font-family: 宋体">其他规定</span>
                </strong>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">13.1</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >本协议构成双方对本协议之约定事项及其他有关事宜的完整协议，除本协议规定的之外，未赋予本协议各方其他权利。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">13.2</span>
                <span
                  style="font-size: 9.0pt; font-family: 宋体"
                >如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。</span>
              </p>

              <p style=" text-indent: 0cm">
                <span lang="EN-US" style="font-size: 9.0pt">13.3</span>
                <span style="font-size: 9.0pt; font-family: 宋体">本协议中的标题仅为方便而设，在解释本协议时应被忽略。</span>
              </p>
            </div>
            <div class="sux-btnyd">
              <input
                class="sx-btn-log sx-btn-login sux-btn-yd"
                type="button"
                value="我已阅读"
                @click="(isProtocol=false)"
              />
            </div>
          </div>
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
  name: "register",
  props: [],
  data() {
    return {
      username: "",
      password: "",
      phone: "",
      passwordSure: "",
      sms: "",
      validator: "",
      uummloginId: "",
      uummphone: "",
      uummemail: "",
      // 错误信息提示
      phoneErr: "",
      passwordSureErr: "",
      usernameErr: "",
      passwordErr: "6-16位字符(字母/数字/特殊符号，区分大小写)",
      // 错误信息提示元素的显示
      isUsernameErr: false,
      isPhoneErr: false,
      isPasswordErr: true,
      isPasswordSureErr: false,
      // 协议
      isProtocol: false,
      checked: true,

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
    // 验证姓名
    checkName() {
      if (this.username == "") {
        this.isUsernameErr = true;
        this.usernameErr = "姓名不可为空";
        return false;
      } else {
        this.isUsernameErr = false;
        // if (!/^1[3456789]\d{9}$/.test(this.username)) {
        //   this.usernameErr = "仅支持中文";
        //   return false;
        // } else {
        //   this.usernameErr = "";
        // }
      }
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
      // 表单校验
      if (
        this.username == "" ||
        this.phone == "" ||
        this.password == "" ||
        this.passwordSure == ""
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
      if (
        this.isUsernameErr ||
        this.isPhoneErr ||
        this.isPasswordErr ||
        this.isPasswordSureErr
      ) {
        return false;
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
    // 注册
    registerUser(url, baseUrl) {
      // 表单校验
      if (
        this.username == "" ||
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
      if (
        this.isUsernameErr ||
        this.isPhoneErr ||
        this.isPasswordErr ||
        this.isPasswordSureErr
      ) {
        return false;
      }
      if (!this.checked) {
        Notify({
          message: "阅读并接受协议方可注册",
          duration: 1000,
          background: "#0373a5"
        });
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
      let orgCode = "SHISC0001";
      let postdata =
        "phone=" +
        phonenum +
        "&verifyCode=" +
        captcha +
        "&orgCode=" +
        orgCode +
        "&password=" +
        pwd;
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
              "&app_code=" +
              app_code +
              "&access_token=" +
              access_token;
            // 调newepoauthweb/user接口获取uummloginId
            axios({
              url: url + "newepoauthweb/user",
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
                  console.log();
                  return false;
                } else if (response.data.flag == "T") {
                  this.uummloginId = response.data.loginId;
                  this.uummphone = response.data.phone;
                  this.uummemail = response.data.email;
                  let data = {
                    user_login: this.phone,
                    realname: this.username,
                    user_pass: this.password,
                    confirm_pass: this.passwordSure,
                    uummloginId: this.uummloginId
                  };
                  axios({
                    url: baseUrl + "/register",
                    method: "post",
                    params: data,
                    async: false,
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    }
                  }).then(response => {
                    if (response.status === 200) {
                      if (!response.data.code == 1) {
                        Notify({
                          message: response.data.msg,
                          duration: 1000,
                          background: "#0373a5"
                        });
                        return false;
                      } else {
                        Notify({
                          message: "注册成功,即将前往登录页",
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
                      console.log();
                    }
                  });
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
    codeStopDBLclick: throttle(function() {
      this.getPhoneCodeOnClick(1, "http://192.168.125.139/");
    }, 1000),
    // 注册按钮的节流
    registeStopDBLclick: throttle(function() {
      this.registerUser("http://192.168.125.139/", this.baseUrl);
    }, 1000)
  }
};
</script>
<style lang='less' scoped>
#register {
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
  .protocol {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 600px;
    width: 90%;
    overflow: scroll;
    background: #fff;
    padding: 20px;
    text-align: left;
    border-radius: 10px;
    box-shadow: 0 0 10px 6px hsla(0, 0%, 100%, 0.3);
    .sux-btnyd {
      text-align: center;
    }
  }
  .goGHIndex{
    margin-top: 10px;
    color: #fff;
    text-align: left;
    padding-left: 10px;
    img{
      vertical-align: sub;
      margin-right:3px;
    }
  }
}
</style>
