<template>
  <!--Namen für Layouts immer in so vergeben dies-ist-ein-dateiname-->
    <div class="bg-white text-black lg:mt-0">
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
  
    main {
    overflow-x: hidden; /* Kein horizontaler Überlauf im gesamten Hauptcontainer */
    }
  </style>
  