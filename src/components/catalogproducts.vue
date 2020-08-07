<template>
  <div class="flex flex-col w-full">
    <div class="w-1/4 mt-40">
      <div
        class="w-3/4 bg-white inline-block"
        v-for="product in products"
        :key="product.id"
      >
        <div class="w-full text-gray-700 text-left px-4 py-2 m-4">
          <img
            :src="`https://api.tissini.app${product.images[0].url}`"
            :alt="product.name"
          />
          <span class="font-sans text-base text-black mt-4">{{
            product.name
          }}</span>
          <br />
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
