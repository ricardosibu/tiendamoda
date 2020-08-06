<template>
  <div class="home">
    <div
      class="flex content-center w-screen max-h-full sm:w-screen xs:w-screen mx-auto shadow bg-cover py-12 bg-top"
      style="background-image: url(https://mitienda.moda/img/login-desktop.0a0cacb5.jpg)"
    >
      <div class="flex flex-col justify-center w-64 h-auto">
        <div class="w-48 h-32 px-2 py-4">
          <img src="https://mitienda.moda/img/logo.c752bf8f.png" alt="" />
        </div>
        <div class="">
          <label class="font-sans text-lg text-white" for="number"
            >Ingrese el numero de telefono de tu asesora independiente</label
          >
          <input
            type="text"
            class="w-48 h-12 px-2 py-4 bg-transparent border-solid border-2 rounded border-white"
            placeholder="Telefono"
          />
          <button
            class="w-48 h-12 bg-red-300 :hover:bg-red-500"
            @click="login()"
          >
            Ingresar
          </button>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {};
  },
  methods: {
    login() {
      this.$router.push("/categorias");
    }
  }
};
</script>
