import axios from './baseApi.js'

let baseUrl=process.env.VUE_APP_BASE_API


// ------------------------------------------------------------------------


// 网站首页
export function getHomeInfo(data) {
  return axios({
    url: baseUrl+'/',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}


// 资讯中心------------------------------------------------------------------------

// 资讯中心首页
export function getInfoCentreIndex(data) {
  return axios({
    url: baseUrl+'/zxzx',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}

//  上海模块接口
export function getInfoCentreSH(data) {
  return axios({
    url: baseUrl+'/zxzx_sh',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 资讯中心 国内模块接口
export function getInfoCentreGN(data) {
  return axios({
    url: baseUrl+'/zxzx_gn',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 资讯中心 国际模块接口
export function getInfoCentreGJ(data) {
  return axios({
    url: baseUrl+'/zxzx_gj',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 资讯中心 航运模块接口
export function getInfoCentreHY(data) {
  return axios({
    url: baseUrl+'/zxzx_hy',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 资讯中心 经贸模块接口
export function getInfoCentreJM(data) {
  return axios({
    url: baseUrl+'/zxzx_jm',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 资讯中心 口岸模块接口
export function getInfoCentreKA(data) {
  return axios({
    url: baseUrl+'/zxzx_kan',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 资讯中心 科技模块接口
export function getInfoCentreKJ(data) {
  return axios({
    url: baseUrl+'/zxzx_kj',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 资讯中心 服务模块接口
export function getInfoCentreFW(data) {
  return axios({
    url: baseUrl+'/zxzx_fw',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 资讯中心 政策模块接口
export function getInfoCentreZC(data) {
  return axios({
    url: baseUrl+'/zxzx_zc',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 资讯中心 观察模块接口
export function getInfoCentreGC(data) {
  return axios({
    url: baseUrl+'/zxzx_gc',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 资讯中心 观察模块接口
export function getInfoCentreBK(data) {
  return axios({
    url: baseUrl+'/zxzx_bk',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}


//  航运市场------------------------------------------------------------------------

// 首页
export function getShippingMarket(data) {
  return axios({
    url: baseUrl+'/hysc_index',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}

// 集装箱市场
export function getShippingJZX(data) {
  return axios({
    url: baseUrl+'/hysc_jzxsc',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 干散货
export function getShippingGSH(data) {
  return axios({
    url: baseUrl+'/hysc_gshsc',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 油轮
export function getShippingYL(data) {
  return axios({
    url: baseUrl+'/hysc_ylsc',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 港口
export function getShippingGK(data) {
  return axios({
    url: baseUrl+'/hysc_gkfz',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 船舶
export function getShippingCB(data) {
  return axios({
    url: baseUrl+'/hysc_cbsc',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 水运
export function getShippingSY(data) {
  return axios({
    url: baseUrl+'/hysc_syjj',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 经贸
export function getShippingJMTJ(data) {
  return axios({
    url: baseUrl+'/hysc_jmtj',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 物流
export function getShippingWL(data) {
  return axios({
    url: baseUrl+'/hysc_wltj',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 综合
export function getShippingZHJT(data) {
  return axios({
    url: baseUrl+'/hysc_zhjt',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 指数
export function getShippingZS(data) {
  return axios({
    url: baseUrl+'/hysc_hyzs',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}



//  在线应用------------------------------------------------------------------------

// 首页
export function getOnlineApp(data) {
  return axios({
    url: baseUrl+'/zxyy',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 企业应用
export function getAppQYYY(data) {
  return axios({
    url: baseUrl+'/qyyy',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 信息查询
export function getAppXXCX(data) {
  return axios({
    url: baseUrl+'/xxcx',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 信息查询
export function getAppYYGG(data) {
  return axios({
    url: baseUrl+'/yygg',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}

//  政策公告------------------------------------------------------------------------

// 政策
export function getPolicyAnnZC(data) {
  return axios({
    url: baseUrl+'/zxzx_zc',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}


//  航运发展------------------------------------------------------------------------

// 首页
export function getShippingDev(data) {
  return axios({
    url: baseUrl+'/hyfz_index',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 建设动态
export function getShippingDevJSDT(data) {
  return axios({
    url: baseUrl+'/hyfz_hyzxdt',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 建设历程
export function getShippingDevJSLC(data) {
  return axios({
    url: baseUrl+'/hyfz_jscg',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
// 政策支持
export function getShippingDevZCZC(data) {
  return axios({
    url: baseUrl+'/hyfz_zczc',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}



//文章详情接口 ----------------------------------------------------------------------------------
export function getInfoDetail(id) {
  return axios({
    url: baseUrl+'/detail/'+id,
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
//应用详情接口 ----------------------------------------------------------------------------------
export function getAppDetail(id) {
  return axios({
    url: baseUrl+'/yy_detail/'+id,
    method: 'get',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}
//搜索 ----------------------------------------------------------------------------------
export function getSearch(data) {
  return axios({
    url: baseUrl+'/search_list',
    method: 'post',
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}