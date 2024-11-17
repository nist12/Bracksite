<template>
  <div class="relative min-h-[400vh] mt-0 mr-0 ml-0"> <!-- Höhere Höhe für lange Animation -->
    <!-- Hintergrundbild -->
    <NuxtImg src="/images/Hintergrund-neu.png" alt="Hintergrund" class="w-full" />
    
    <!-- Text über dem Bild -->
    <div 
      class="absolute top-24 left-8 sm:left-12 md:left-24 m-4 sm:m-6 md:m-8 space-y-2 sm:space-y-4 text-white font-bold"
      v-motion-slide-left
    >
      <span class="block text-4xl sm:text-6xl lg:text-8xl">Kreativität,</span>
      <span class="block text-4xl sm:text-6xl lg:text-8xl">die</span>
      <span class="block text-4xl sm:text-6xl lg:text-8xl">funktioniert.</span>
    </div>

    <!-- Zentrales Bild --> <!-- Bild wird nur angezeigt, wenn `opacity > 0` -->
    <div
      v-show="opacity > 0"
      class="absolute mx-auto top-[20%] sm:top-[15%] transform -translate-x-1/2"  
      :style="{ 
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: opacity,
      }"
    >
      <NuxtImg src="/images/GrafikPC.png" alt="Zentrales Bild" />
    </div>
  </div>
</template>

<script setup>
import { useScroll } from '@vueuse/core';
import { ref, computed, onMounted } from 'vue';

const { y } = useScroll(window); // Scrollposition erfassen
const viewportHeight = ref(0); // Höhe des Viewports initialisieren

const maxZoom = 10; // Maximales Zoom-Limit (300%)
const initialScale = 0.5; // Ausgangsgröße des Bildes (50%)
const startAnimationOffset = computed(() => viewportHeight.value / 1.5); // Animation startet, wenn Bild die Mitte erreicht war ursprünglich auf /2
const endAnimationOffset = computed(() => viewportHeight.value * 2); // Animation endet weiter unten

// Setze viewportHeight, wenn die Komponente gemountet ist
onMounted(() => {
  viewportHeight.value = window.innerHeight; // Zugriff auf `window.innerHeight` nur im Client
});

// Berechnung der Effekte
const translateY = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;
  return offsetY > 0 ? offsetY : 0; // Bewegung synchron zum Scrollen
});

const scale = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;
  const computedScale = offsetY > 0 ? initialScale + offsetY / 100 : initialScale; // Langsame Zoom-Veränderung
  return Math.min(computedScale, maxZoom); // Maximal auf 300% begrenzen
});

const opacity = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;
  if (offsetY <= 0) return 1; // Voll sichtbar vor der Animation
  if (offsetY >= endAnimationOffset.value - startAnimationOffset.value) return 0; // Unsichtbar nach der Animation
  return 1;// - offsetY / (endAnimationOffset.value - startAnimationOffset.value); // Dynamische Transparenz
});
</script>

<style scoped>
/* Zentrale Bild-Positionierung */
.absolute img {
  transition: transform 0.5s ease, opacity 0.5s ease; /* Übergang für Zoom und Transparenz */
}
</style>
