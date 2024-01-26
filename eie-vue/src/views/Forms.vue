<template>
  <div
    class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"
  ></div>
  <!-- component -->
  <div class="max-w-md mx-auto mt-12 p-8 bg-white rounded-md shadow-md">
    <h2 class="text-2xl font-semibold mb-6">
      Introduce tus datos y creamos una pagina web para ti
    </h2>
    <form action="#" method="POST">
      <div class="mb-4">
        <label for="name" class="block text-gray-700 text-sm font-bold mb-2"
          >Tu nombre</label
        >
        <input
          type="text"
          id="name"
          v-model="txtNombre"
          name="name"
          placeholder="Lionel Messi"
          required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
          >Your Email</label
        >
        <input
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
          required
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div class="mb-6">
        <label for="message" class="block text-gray-700 text-sm font-bold mb-2"
          >Your Message</label
        >
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="How can we help you?"
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <button
        @click.prevent="submitForm"
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Crear página web
      </button>
    </form>
  </div>
</template>

<script>
import { useGlobalStore } from "@/store/globalStore";
import { mapWritableState } from "pinia";
export default {
  data() {
    return {
      txtNombre: "",
    };
  },
  methods: {
    submitForm() {
      this.nombre = this.txtNombre;
      this.$router.push("/home");
    },
  },
  computed: {
    ...mapWritableState(useGlobalStore, [
      "nombre",
      "pelicula",
      "libro",
      "musica",
      "estudios",
      "pasatiempo",
      "caracteristicas",
    ]),
  },
};
</script>
