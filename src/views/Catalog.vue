<template>
  <div>
    <NavBar />
    <div>
      <CatalogProducts :products="products" />
      <FooterBar />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/navbar.vue";
import FooterBar from "@/components/footerbar.vue";
import CatalogProducts from "@/components/catalogproducts.vue";
import api from "@/api/api";
export default {
  name: "Categories",
  components: {
    NavBar,
    FooterBar,
    CatalogProducts
  },
  data() {
    return {
      products: [],
      catalogId: ""
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      const id = this.$route.params.id;
      this.products = await api.getCategoriesIdProducts(id);
      console.log(this.products);
    }
  }
};
</script>
