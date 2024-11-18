<template>
  <div>
    <!-- Schwarzer Hintergrundbereich -->
    <div class="relative" :style="{ minHeight: `${viewportHeight.value * 3}px`, backgroundColor: 'black' }">
      <!-- Zentrales Bild -->
      <div
        v-show="opacity > 0"
        class="absolute transform"
        :style="{ 
          transform: `translateY(${translateY}px) scale(${scale})`,
          opacity: opacity,
        }"
      >
        <NuxtImg src="/images/GrafikPC_blau.png" alt="Zentrales Bild" />
      </div>
    </div>

    <!-- Weißer Hintergrundbereich -->
    <div class="min-h-[300vh] bg-black"></div>

    <!-- Nächster Inhalt -->
    <div class="relative min-h-[100vh] bg-white">
      <ServusCard />
      <h1 class="text-center text-3xl font-bold">Nächster Inhalt</h1>
    </div>
  </div>
</template>

<script setup>
import { useScroll } from '@vueuse/core';
import { ref, computed, onMounted } from 'vue';

// Scroll-Position erfassen
const { y } = useScroll(window);

const viewportHeight = ref(0); // Höhe des Viewports
const imageHeight = ref(0); // Höhe des Bildes
const imageTopOffset = ref(0); // Position des Bildes relativ zum Dokument

const maxZoom = 5; // Maximales Zoom-Limit
const initialScale = 0.5; // Ausgangsgröße des Bildes

// Viewport-Höhe und Bildinformationen abrufen, sobald die Komponente gemountet ist
onMounted(() => {
  viewportHeight.value = window.innerHeight;

  const imageElement = document.querySelector(".absolute img");
  if (imageElement) {
    const rect = imageElement.getBoundingClientRect();
    imageHeight.value = rect.height;
    imageTopOffset.value = rect.top + window.scrollY;
  }
});

// Offsets für den Animationsbereich berechnen
const startAnimationOffset = computed(() => {
  return imageTopOffset.value + imageHeight.value / 2 - viewportHeight.value / 2;
});

const endAnimationOffset = computed(() => {
  return startAnimationOffset.value + viewportHeight.value * 4; // Animation endet nach 4 Viewport-Höhen
});

// Transformationen und Effekte basierend auf Scroll-Position berechnen
const translateY = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;
  return offsetY > 0 ? offsetY : 0;
});

const scale = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;

  // Stärkerer Zoom am Anfang, langsamer werdend
  const zoomFactor = viewportHeight.value * 2;
  const computedScale = offsetY > 0 ? initialScale + Math.pow(offsetY / zoomFactor, 0.8) : initialScale;

  // Maximaler Zoom, abhängig von der Bildschirmgröße
  const maxZoom = Math.min(5, viewportHeight.value / 100); // Beispiel: Maximaler Zoom von 5 oder 5% der Viewport-Höhe

  return Math.min(computedScale, maxZoom);
});

const opacity = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;
  if (offsetY <= 0) return 1; // Voll sichtbar vor der Animation
  if (offsetY >= viewportHeight.value * 4) return 0; // Unsichtbar nach dem Scrollen
  return 1; // Ausblenden
});
</script>

<style scoped>
/* Übergänge für das Bild */
.absolute img {
  transition: transform 0.1s ease, opacity 0.1s ease;
}
</style>
