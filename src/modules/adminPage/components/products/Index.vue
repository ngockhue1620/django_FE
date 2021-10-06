<template>
  <div class="createProduct">
    <form>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Danh Muc</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          v-model="categoryId"
        >
          <option
            v-for="category in categories"
            :value="category.id"
            :key="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Tên Sản Phẩm</label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Giá</label>
        <input
          v-model="price"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Mô tả</label>
        <input
          v-model="description"
          type="text"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Hình ảnh</label>
        <input
          type="file"
          class="form-control"
          ref="files"
          @change="previewFiles"
          multiple
        />
      </div>

      <button type="submit" class="btn btn-primary" @click="createProduct">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import AdminApi from "../../../../servies/admin/AdminApi";
export default {
  data() {
    return {
      categories: [],
      product: {},
      name: "",
      price: 0,
      description: "",
      image: "",
      categoryId: null,
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    previewFiles() {
      this.image = this.$refs.files.files[0]
      console.log(this.image)
      

    },
    
    getCategory() {
      AdminApi.getcategory((response) => (this.categories = response));
    },
    isValid() {
      if (this.name === "") {
        alert("ten san pham kg dc de trong");
        return false;
      } else if (this.price === 0) {
        alert("gia kg dc de trong");
        return false;
      }
      return true;
    },
    createProduct() {
      if (this.isValid()) {
        let formData = new FormData()
        formData.append("name", this.name)
        formData.append("price", parseInt(this.price))
        formData.append("description", this.description)
        formData.append("category", this.categoryId)
        formData.append("image", this.image)
        
        AdminApi.createProduct(
          formData,
          (response) => {
            console.log(response);
            alert("them san pham thanh cong");
          },
          (error) => {
            alert(error);
          }
        );
      }
    },
  },
};
</script>

<style>
.createProduct {
  margin: 80px;
}
</style>