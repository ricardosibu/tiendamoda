<template>
  <div class="flex flex-col w-full">
    <div
      class="flex flex-wrap content-center"
      v-for="section in sections"
      :key="section.id"
    >
      <div class="w-2/6">
        <div class="w-full">
          <img
            :src="`https://api.tissini.app${section.image}`"
            :alt="section.name"
          />
        </div>
      </div>
      <div class="w-1/4 mt-40">
        <div
          class="w-1/2 bg-white inline-block"
          v-for="product in section.products"
          :key="product.id"
        >
          <div class="w-full text-gray-700 text-left px-4 py-2 m-4">
            <img
              :src="`https://api.tissini.app${product.image.url}`"
              :alt="product.name"
            />
            <span class="font-sans text-base text-black mt-4">{{
              product.name
            }}</span
            ><br />
            <span class="font-sans text-base text-gray-500 uppercase">{{
              product.categories.category
            }}</span>
            <br />
            <span class="font-sans text-lg text-pink-600 font-semibold"
              >${{ product.price }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["sections"],
  data() {
    return {};
  },
  created() {}
};
</script>
