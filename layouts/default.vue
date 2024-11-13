<template>
  <!--Namen für Layouts immer in so vergeben dies-ist-ein-dateiname-->
    <div class="bg-gray-900 min-h-screen text-white">
      <!-- Navbar -->
      <!--<Navbar />-->
  
      <!-- Hauptinhalt des Seitenlayouts -->
      <main >
         <NuxtPage />
      </main>
  
      <!-- Footer -->
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'
  </script>
  
  <style scoped>
  /* Hier kannst du das Layout stylen, z.B. Padding, Margins, etc. */
  </style>
  