<template>
  <div>
    <!-- Schwarzer Hintergrundbereich -->
    <div class="relative min-h-[100vh] bg-black">
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
    <div class="min-h-[200vh] bg-black"></div>

    <!-- Nächster Inhalt -->
    <div class="relative min-h-[100vh] bg-white">
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

const maxZoom = 10; // Maximales Zoom-Limit
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
  return startAnimationOffset.value + viewportHeight.value * 2; // Animation endet nach 2 Viewport-Höhen
});

// Transformationen und Effekte basierend auf Scroll-Position berechnen
const translateY = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;
  return offsetY > 0 ? offsetY : 0;
});

const scale = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;
  const computedScale = offsetY > 0 ? initialScale + offsetY / 300 : initialScale;
  return Math.min(computedScale, maxZoom);
});

const opacity = computed(() => {
  const offsetY = y.value - startAnimationOffset.value;
  if (offsetY <= 0) return 1; // Voll sichtbar vor der Animation
  if (offsetY >= viewportHeight.value) return 0; // Unsichtbar nach dem Scrollen
  return 1 ; //Ausblenden
});
</script>

<style scoped>
/* Übergänge für das Bild */
.absolute img {
  transition: transform 0.1s ease, opacity 0.1s ease;
}
</style>
