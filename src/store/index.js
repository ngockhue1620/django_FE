import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import user from '@/store/modules/user' 
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart,
    user,
  }

})
export default store