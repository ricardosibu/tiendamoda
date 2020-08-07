<template>
  <nav
    class="flex items-center justify-center flex-wrap bg-white-500 p-6 w-full h-32 border-solid border-gray-400"
  >
    <div class="flexmb-4">
      <div class="w-1/2 h-12 ml-12 mr-12">
        <box-icon name="home" color="#f06292" type="solid"></box-icon>
        <span class="text-base font-medium text-pink-600">Categorias</span>
      </div>
      <div class="w-1/2 h-12">
        <box-icon name="id-card" color="#f06292" type="solid"></box-icon>
        <span class="text-base font-medium text-pink-600">Catalogo</span>
      </div>
      <div class="w-1/2 h-12">
        <box-icon name="cart" color="#f06292" type="solid"></box-icon>
        <span class="text-base font-medium text-pink-600">Carrito</span>
      </div>
    </div>
  </nav>
</template>
<script>
import "boxicons";
export default {};
</script>
