<template>
  <div class="relative" id="home">
    <div
      aria-hidden="true"
      class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
    >
      <div
        class="blur-[106px] h-56 bg-gradient-to-br from-primary to-gradientSecondary dark:from-blue-700"
      ></div>
      <div
        class="blur-[106px] h-32 bg-gradient-to-r from-primary to-gradientSecondary dark:to-indigo-600"
      ></div>
    </div>
    <Container>
      <div class="relative pt-36 ml-auto">
        <div class="lg:w-2/3 text-center mx-auto">
          <h1
            class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl"
          >
            Hola, Me llamo
            <span class="text-primary dark:text-white">
              {{ store.nombre }}</span
            >
          </h1>
          <p class="mt-8 text-gray-700 dark:text-gray-300">
            Bienvenidos a mi página web, aquí podrás encontrar información sobre
            mi, mis gustos, mis hobbies, mis proyectos y mucho más. asi como
            también podrás contactarme si lo deseas.Te invito a que navegues por
            mi página y conozcas más sobre mi.
          </p>
          <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
            <a
              href="#"
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            >
              <span class="relative text-base font-semibold text-white"
                >Contáctame</span
              >
            </a>
            <a
              href="#"
              class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
            >
              <span
                class="relative text-base font-semibold text-primary dark:text-white"
                >Saber más sobre mi</span
              >
            </a>
          </div>
          <div
            class="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between"
          >
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                {{ store.caracteristicas.c1 }}
              </h6>
              <p class="mt-2 text-gray-500">Somos transparentes</p>
            </div>
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                {{ store.caracteristicas.c2 }}
              </h6>
              <p class="mt-2 text-gray-500">buscamos la excelencia</p>
            </div>
            <div class="text-left">
              <h6 class="text-lg font-semibold text-gray-700 dark:text-white">
                {{ store.caracteristicas.c3 }}
              </h6>
              <p class="mt-2 text-gray-500">Queremos tu felicidad</p>
            </div>
          </div>
        </div>
        <div class="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/microsoft.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/airbnb.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div
            class="p-4 flex grayscale transition duration-200 hover:grayscale-0"
          >
            <img
              src="/images/clients/google.svg"
              class="h-9 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/ge.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div
            class="p-4 flex grayscale transition duration-200 hover:grayscale-0"
          >
            <img
              src="/images/clients/netflix.svg"
              class="h-8 w-auto m-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
          <div class="p-4 grayscale transition duration-200 hover:grayscale-0">
            <img
              src="/images/clients/google-cloud.svg"
              class="h-12 w-auto mx-auto"
              loading="lazy"
              alt="client logo"
              width=""
              height=""
            />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import Container from "./Container.vue";
import { useGlobalStore } from "@/store/globalStore";

const store = useGlobalStore();
</script>
