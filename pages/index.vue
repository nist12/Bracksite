<template>
    <div>
      <NuxtPage />
      <StartScreen />

      <HeroSection />
      <AboutUs />
      <!--<ContactSection />-->



      <div class="font-sans text-gray-800">
      <!-- Kontakt -->
      <section id="kontakt" class="ml-8 mr-8 py-16 bg-greengraybr">
        <div class="p-4 lg:p-0 container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8">Kontaktieren Sie <span class="text-greenbr">uns</span></h2>
          <p class="mb-4">
            Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Wir freuen uns darauf, von Ihnen zu hören!
          </p>
          <p>E-Mail: <a href="mailto:email@domain.com" class="text-greenbr underline">email@domain.com</a></p>
          <p>Telefon: <a href="tel:+123456789" class="text-greenbr underline">+123 456 789</a></p>
          <p>Adresse: <span class="text-greenbr">Büroadresse</span></p>

          <!-- Eingebundene Kontaktformular-Komponente -->
          <!--<KontaktForm />-->
        </div>
      </section>
    </div>
    </div>
  </template>
  
  <script setup>
  // Wenn du kein JavaScript benötigst, kannst du diesen Bereich leer lassen oder entfernen
  </script>
  
  <style>
  /* Dein CSS-Styling */
  </style>
  