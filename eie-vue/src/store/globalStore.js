import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    nombre: "Daniel Souchar",
    pelicula: "Oppenheimer",
    libro: "El arte de la guerra",
    musica: "reggaeton",
    estudios: "Desarrollo de aplicaciones web",
    pasatiempo: "Jugar al futbol",
    caracteristicas: {
      c1: "Responsable",
      c2: "Proactivo",
      c3: "Creativo",
    },
    colores: {
      primario: "#fb6f92",
      gradienteSecundario: "#e7c6ff",
      secundario: "#c6e7ff",
    },
  }),
  getters: {},
  actions: {},
});
