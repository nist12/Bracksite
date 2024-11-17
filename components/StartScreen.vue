<template>
  <div class="relative min-h-[100vh] bg-black">
     <!-- Zentrales Bild mit halbem Bildschirm Abstand -->
     <div
      v-show="opacity > 0"
      class="absolute transform -translate-x-1/2"  
      :style="{ 
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity: opacity,
      }"
    >
      <NuxtImg src="/images/GrafikPC_blau.png" alt="Zentrales Bild" />
    </div>
  </div>
</template>




<style scoped>
/* Zentrale Bild-Positionierung */
.absolute img {
  transition: transform 0.5s ease, opacity 0.5s ease; /* Übergang für Zoom und Transparenz */
}
</style>


<script setup>
import { useScroll } from '@vueuse/core';
import { ref, computed, onMounted } from 'vue';

const { y } = useScroll(window); // Scrollposition erfassen
const viewportHeight = ref(0); // Höhe des Viewports initialisieren
const imageHeight = ref(0); // Höhe des Bildes
const imageTopOffset = ref(0); // Position des Bildes relativ zum Dokument

const maxZoom = 10; // Maximales Zoom-Limit (300%)
const initialScale = 0.5; // Ausgangsgröße des Bildes (50%)

// Setze viewportHeight und ermittel die Bildposition und -höhe, wenn die Komponente gemountet ist
onMounted(() => {
  viewportHeight.value = window.innerHeight; // Zugriff auf `window.innerHeight` nur im Client

  const imageElement = document.querySelector(".absolute img"); // Selektor für das Bild
  if (imageElement) {
    const rect = imageElement.getBoundingClientRect();
    imageHeight.value = rect.height; // Bildhöhe erfassen
    imageTopOffset.value = rect.top + window.scrollY; // Bild-Offset von oben
  }
});

// Scroll-Offsets berechnen
const startAnimationOffset = computed(() => {
  // Bildmitte - Viewport-Mitte
  return imageTopOffset.value + imageHeight.value / 2 - viewportHeight.value / 2;
});

const endAnimationOffset = computed(() => {
  return startAnimationOffset.value + viewportHeight.value * 2; // Animation endet weiter unten
});

// Berechnung der Effekte
const translateY = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;
  return offsetY > 0 ? offsetY : 0; // Bewegung synchron zum Scrollen
});

const scale = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;
  const computedScale = offsetY > 0 ? initialScale + offsetY / 200 : initialScale; // Langsamere Zoom-Veränderung
  return Math.min(computedScale, maxZoom); // Maximal auf 300% begrenzen
});

const opacity = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;
  if (offsetY <= 0) return 1; // Voll sichtbar vor der Animation
  if (offsetY >= endAnimationOffset.value - startAnimationOffset.value) return 0; // Unsichtbar nach der Animation
  return 1; // Dynamische Transparenz
});
</script>

