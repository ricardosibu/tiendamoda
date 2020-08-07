<template>
  <nav
    class="flex items-center justify-center flex-wrap bg-white-500 p-6 w-full h-32 border-solid border-gray-400"
  >
    <div class="flex mb-4">
      <div class="w-1/2 h-12">
        <router-link to="/categorias"
          ><button
            class="w-20 px-2 py-5 bg-gray-300 text-sm text-gray-500 hover:bg-gray-400 hover:text-pink-600"
          >
            <box-icon name="home" color="#f06292" type="solid"></box-icon
            >Categorias
          </button></router-link
        >
      </div>
      <div class="w-1/2 h-12">
        <router-link to="/catalogo/429"
          ><button
            class="w-20 px-2 py-5 bg-gray-300 text-sm text-gray-500 hover:bg-gray-400 hover:text-pink-600"
          >
            <box-icon name="id-card" color="#f06292" type="solid"></box-icon
            >Catalogo
          </button></router-link
        >
      </div>
      <div class="w-1/2 h-12">
        <router-link to="/carrito"
          ><button
            class="w-20 px-2 py-5 bg-gray-300 text-sm text-gray-500 hover:bg-gray-400 hover:text-pink-600"
          >
            <box-icon name="cart" color="#f06292" type="solid"></box-icon
            >Carrito
          </button></router-link
        >
      </div>
    </div>
  </nav>
</template>
<script>
import "boxicons";
export default {
  props: ["activateCart"],
  data() {
    return {};
  }
};
</script>
