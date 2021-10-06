const state = {
  carts: [],
}
const getters = {
  totalCart: state => {
    let total = 0
    state.carts.map(element => {
      total += element.quantity
    });
    return total;
  },
  getCarts: state => state.carts,
  totalMoney: state => {
    let total = 0
    state.carts.map(element => {
      total += element.quantity * element.price
    });
    return total;
  }
}

const actions = {
  addToCart({ commit }, product) {
    commit('ADDTOCART', product)
  },
}

const mutations = {
  ADDTOCART(state, product) {
    let index = state.carts.findIndex(item => item.id === product.id)
    console.log(index)
    if (index === -1) {
      product.quantity = 1
      state.carts.push(product)
    } else {
      state.carts[index].quantity += 1
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}