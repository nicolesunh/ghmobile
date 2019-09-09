/**
 * Created by Administrator on 2019/10/1.
 */
import * as func from '../function';
export  default{
  setHeaderTitle(states, headerTitle){
        states.headerTitle = headerTitle;
        // 数据存vuex同步存入浏览器
        func.func.set('headerTitle',headerTitle);
    },

    //清除用户名
    /*removeUserName(states){
      states.userName = null;
      func.func.clear('userName');
    },*/


}
