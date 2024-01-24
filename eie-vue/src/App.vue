<script setup>
import AppLayout from "./components/layouts/AppLayout.vue";
import HeroSection from "./components/HeroSection.vue";
</script>

<template>
  <AppLayout>
    <main class="space-y-40 mb-40">
      <HeroSection />
      <Features />
      <Stats />
      <Testimonials />
      <CallToAction />
      <Blog />
    </main>
  </AppLayout>
</template>
