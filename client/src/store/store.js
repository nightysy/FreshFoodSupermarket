import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
//初始化数据
const state = {
  count: 0,
  goodsList:[],
  backbuygoodsList:[],
  searchlist:[],
};
var vuexStore = new Vuex.Store({
  classification:'',
  goodsName:'',
  // goodsList:[],
});
// 使用 export default 封装，让外部可以访问
export default vuexStore;