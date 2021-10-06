<template>
  <tr @click="updateDetail(product)">
    <th scope="row">{{ index + 1 }}</th>
    <td>
      <img
        :src="'http://127.0.0.1:8000' + product.image"
        class="product-image"
      />
    </td>
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
    <td><input type="number" v-model="quantity" /></td>
    <td>{{ quantity * product.price }}</td>
  </tr>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    product: Object,
    index: Number,
    updateDetail: Function,
  },
  data(){
    return{
      quantity: this.product.quantity,
    }
  },
  methods: {
    ...mapActions(['addToCart'])
  },
  watch: {
    quantity: function(){
      this.addToCart(this.product)
    }
  }
};
</script>

<style scope>

</style>