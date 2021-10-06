<template>
  <div class="main-cart">
    <div class="cart-left">
      <div class="card" style="width: 18rem" v-if="detail.name">
        <img
          class="card-img-top product-image-detail"
          :src="'http://127.0.0.1:8000' + detail.image"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            {{ detail.name }}
          </p>
          <p class="card-text">
            {{ detail.price }}
          </p>
          <p class="card-text">
            {{ detail.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="cart-right" v-if="getCarts.length >0">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <CartItem
            v-for="(product, index) in getCarts"
            :key="index"
            :product="product"
            :index="index"
            :updateDetail="updateDetail"
          />
        </tbody>
      </table>
      <p class="total-money">Total Money: {{totalMoney}}</p>
      <button class="btn btn-primary" @click="payment">Payment</button>
    </div>
    <div v-else  class="cart-right">
      <h1>Your cart is null</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "@/modules/userPage/CartItem";
export default {
  data() {
    return {
      detail: {},
    };
  },
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(["getCarts", "totalMoney", "checkLogin"]),
  },
  methods: {
    updateDetail(product) {
      this.detail = product;
    },
    payment(){
      if(this.checkLogin){
        //
      }
      else {
        alert("you must login ")
      }
    }
  },
};
</script>

<style scope>
.main-cart {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.cart-left {
  width: 30%;
}
.cart-right {
  width: 70%;
}
.product-image {
  width: 50px;
  height: 50px;
}
.product-image-detail {
  height: 250px;
}
.total-money {
  align-self: flex-end;
}
</style>