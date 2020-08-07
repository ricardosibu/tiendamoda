<template>
  <!-- component -->
  <div>
    <NavBar />
    <h3 class="text-pink-600 text-xl font-semibold ml-48 mb-12">
      Productos Añadidos
    </h3>
    <div class="flex justify-center w-3/4 ml-48">
      <div
        class="max-w-md w-full lg:flex"
        v-for="product in getProductCart"
        :key="product.id"
      >
        <img
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          :src="`https://api.tissini.app${product.image}`"
        />
        <div
          class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-8">
            <div class="text-black font-bold text-xl mb-2">
              {{ product.name }}
            </div>
            <p class="text-grey-darker text-base">
              SKU:
            </p>
            <p class="text-grey-darker text-base">
              Talla:
            </p>
            <p class="text-grey-darker text-base">
              Cantidad:
            </p>
            <p class="text-grey-darker text-base">
              Unidad:
            </p>
            <p class="text-pink-600 text-xl font-semibold">
              ${{ product.price }}
            </p>
          </div>
          <div class="flex items-center ml-20 mb-6">
            <div class="w-10 h-10 rounded-full mr-4 bg-blue-600"></div>
            <div class="w-10 h-10 rounded-full mr-4 bg-red-500"></div>
          </div>
        </div>
      </div>
    </div>

    <FooterBar :activateCart="activateCart" />
  </div>
</template>
<script>
import NavBar from "@/components/navbar.vue";
import FooterBar from "@/components/footerbar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    NavBar,
    FooterBar
  },
  data() {
    return {
      activateCart: ""
    };
  },
  computed: {
    ...mapGetters(["getProductCart"])
  },
  methods: {
    showAlarmCart() {
      this.activateCart = this.getProductCart.length;
    }
  }
};
</script>
