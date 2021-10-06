<template>
  <div>
    <Header />  
    <div>
      <router-view/>
    </div>  
    
  </div>
</template>

<script>
import Header from "@/components/userPage/Header";
import UserApi from "@/servies/user/UserApi";
import AdminApi from "@/servies/admin/AdminApi";
import {mapActions} from 'vuex'
export default {
  components: {
    Header,
  },
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