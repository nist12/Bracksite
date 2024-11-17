<template>
  <div>
    <!-- Schwarzer Hintergrundbereich -->
    <div
      class="relative"
      :style="{ minHeight: `${viewportHeight.value * 3}px`, backgroundColor: 'black' }"
    >
      <!-- Zentrales Bild -->
      <div
        ref="imageElement"
        class="absolute transform"
        :style="{ 
          opacity: opacity.value,
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
import { ref, computed, onMounted } from 'vue';
import { useScroll } from '@vueuse/core';

// Helper-Funktion für Ease-In-Out-Kurve
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Scroll-Position erfassen
const { y } = useScroll(window);

// Refs für die Berechnung der Animation
const viewportHeight = ref(0); // Höhe des Viewports
const imageHeight = ref(0); // Höhe des Bildes
const imageTopOffset = ref(0); // Position des Bildes relativ zum Dokument
const opacity = ref(1); // Transparenz des Bildes

// Animationseinstellungen
const maxZoom = 5; // Maximales Zoom-Limit
const initialScale = 0.5; // Ausgangsgröße des Bildes

// Bild-Element referenzieren
const imageElement = ref(null);

// Viewport-Höhe und Bildinformationen erfassen
onMounted(() => {
  viewportHeight.value = window.innerHeight;

  const img = imageElement.value?.querySelector("img");
  if (img) {
    const rect = img.getBoundingClientRect();
    imageHeight.value = rect.height;
    imageTopOffset.value = rect.top + window.scrollY;
  }

  // Animation starten
  requestAnimationFrame(updateAnimation);
});

// Offsets für den Animationsbereich berechnen
const startAnimationOffset = computed(() => {
  return imageTopOffset.value + imageHeight.value / 2 - viewportHeight.value / 2;
});

const endAnimationOffset = computed(() => {
  return startAnimationOffset.value + viewportHeight.value * 4;
});

// Animation aktualisieren
function updateAnimation() {
  const offsetY = y.value - startAnimationOffset.value;

  // Skalierung berechnen
  const progress = Math.min(Math.max(offsetY / (viewportHeight.value * 4), 0), 1);
  const easedProgress = easeInOutCubic(progress);
  const scale = initialScale + easedProgress * (maxZoom - initialScale);

  // Transparenz berechnen
  opacity.value = 1 - progress;

  // Transform anwenden
  if (imageElement.value) {
    const img = imageElement.value.querySelector("img");
    if (img) {
      img.style.transform = `scale(${scale})`;
    }
  }

  // Nächsten Frame anfordern
  requestAnimationFrame(updateAnimation);
}
</script>

<style scoped>
/* Übergänge für das Bild */
.absolute img {
  transition: transform 0.2s cubic-bezier(0.25, 0.8, 0.5, 1), opacity 0.2s ease;
}
</style>
