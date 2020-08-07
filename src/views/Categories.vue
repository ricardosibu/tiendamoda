<template>
  <div>
    <NavBar />
    <div>
      <CategoriesProducts :sections="sections" />
      <FooterBar />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/navbar.vue";
import FooterBar from "@/components/footerbar.vue";
import CategoriesProducts from "@/components/categoriesproducts.vue";
import api from "@/api/api";
export default {
  name: "Categories",
  components: {
    NavBar,
    FooterBar,
    CategoriesProducts
  },
  data() {
    return {
      categories: [],
      sections: []
    };
  },
  created() {
    this.getSections();
  },
  methods: {
    async getSections() {
      this.sections = await api.getAllSections();
      console.log(this.sections);
    }
  }
};
</script>
