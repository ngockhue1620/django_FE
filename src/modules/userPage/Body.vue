<template>
  <div>    
    <div class="content">
      <div class="left-content">
        <h3>Categories</h3>
        <div class="list-group">
          <button
            v-for="category in categories"
            :key="category.id"
            type="button"
            class="list-group-item list-group-item-action active cate"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
      <div class="right-content">
        <div
          class="card card-product"
          v-for="product in products"
          :key="product.id"
          style="width: 18rem"
        >
          <img
            class="card-img-top image-card"
            :src="'http://127.0.0.1:8000' + product.image"
            alt="Card image cap"
          />
          <div class="card-body product-info">
            <p class="card-text">
              {{ product.name }}
            </p>
            <p class="card-text">{{ product.price }} VND</p>

            <button type="button" class="btn btn-outline-info" @click="addToCart(product)">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserApi from "@/servies/user/UserApi";
import AdminApi from "@/servies/admin/AdminApi";
import {mapActions} from 'vuex'
export default {  
  data() {
    return {
      categories: [],
      products: [],
      selected: -1,
    };
  },
  created() {
    this.getProducts();
    this.getCategories();
  },
  computed: {
    
  },
  methods: {
    ...mapActions(['addToCart']),
    async getProducts() {
      UserApi.getProducts((response) => {
        this.products = response;
      });
    },
    async getCategories() {
      AdminApi.getcategory((response) => {
        this.categories = response;
      });
    },
  },
};
</script>

<style scope>
.content {
  display: flex;
  flex-direction: row;
}
.left-content {
  margin: 1rem;
  width: 30%;
}
.right-content {
  margin: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
}
.card-product {
  width: 30%;
  margin: 2%;
}
.product-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
.cate {
  margin: 5px ;
}
.image-card {
  height: 300px;
  
}
</style>