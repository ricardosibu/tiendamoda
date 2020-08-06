<template>
  <div>
    <NavBar />
    <div class="flex content-center">
      <CategoriesProducts :sections="sections" />
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/navbar.vue";
import CategoriesProducts from "@/components/categoriesproducts.vue";
import api from "@/api/api";
export default {
  name: "Categories",
  components: {
    NavBar,
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
