<template>
  <div
    class="h-screen max-w-screen bg-no-repeat bg-fixed"
    style="background-image: url(https://mitienda.moda/img/login-desktop.0a0cacb5.jpg)"
  >
    <div class="flex items-center flex-col w-full">
      <div class="w-56 h-32 px-2 py-4 mt-32">
        <img src="https://mitienda.moda/img/logo.c752bf8f.png" alt="" />
      </div>
      <div class="w-1/4 mt-10 text-center">
        <label
          class="font-sans text-xl text-white text-center font-semibold"
          for="number"
          >Ingrese el número de telefono de tu asesora independiente</label
        >
        <input
          type="text"
          class="w-full h-12 mt-12 px-2 py-4 bg-transparent border-solid border-2 rounded border-white text-4xl text-white font-semibold"
          placeholder="Telefono"
          v-model="phoneNumber"
          @keyup.enter="login()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {},
  data() {
    return {
      phoneNumber: ""
    };
  },
  created() {
    this.paswordLocalStorage();
  },
  methods: {
    login() {
      let phoneAccess = localStorage.getItem("password");
      if (this.phoneNumber == phoneAccess) {
        this.$router.push("/categorias");
      } else {
        console.log("Acceso no autorizado");
      }
    },
    paswordLocalStorage() {
      const phoneLogin = 7865470213;
      localStorage.setItem("password", phoneLogin);
    }
  }
};
</script>
