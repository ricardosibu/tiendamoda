<template>
  <div>
    <div class="flex justify-start ml-64 w-full">
      <h3 class="text-gray-700 text-lg">PRODUCTOS</h3>
    </div>
    <div class="flex flex-wrap w-3/4 justify-center mt-8 ml-12">
      <div
        class="flex justify-center w-1/3 bg-white ml-40"
        v-for="product in products"
        :key="product.id"
      >
        <div
          class="w-full text-gray-700 text-left px-4 py-2 m-4 border-solid border-gray-700"
        >
          <img
            :src="`https://api.tissini.app${product.images[0].url}`"
            :alt="product.name"
          />
          <button
            class="bg-pink-600 w-32 m-2 px-2 py-2 rounded-full text-white text-base mr-16"
          >
            <box-icon class="" name="cart" color="white"></box-icon> AGREGAR
          </button>
          <span class="font-sans text-lg text-pink-600 font-semibold"
            >${{ product.price }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["products"],
  data() {
    return {};
  },
  created() {}
};
</script>
