import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    productCart: []
  },

  mutations: {
    SET_PRODUCT_CART: (state, payload) => {
      state.productCart = [];
      state.productCart = payload.selected;
    }
  },

  actions: {
    setProductCart({ commit }, payload) {
      commit("SET_PRODUCT_CART", payload);
    }
  },

  getters: {
    getProductCart: state => {
      return state.productCart;
    }
  }
});

export default store;
