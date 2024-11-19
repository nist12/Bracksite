<template>
  <div>
    <!-- Schwarzer Bereich -->
    <div ref="blackSection" class="relative h-[300vh] bg-black">
      <!-- Zoom-Bild -->
      <img
        ref="zoomImage"
        src="/images/GrafikPC_blau.png"
        alt="Zoom Image"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        :style="imageStyle"
      />
    </div>

    <!-- Weißer Bereich -->
    <div class="h-screen bg-white flex items-center justify-center">
      <h1 class="text-4xl font-bold">Nächster Inhalt</h1>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useIntersectionObserver, useWindowScroll } from "@vueuse/core";

const blackSection = ref(null); // Schwarzer Bereich
const zoomImage = ref(null); // Bild

// Zustand
const isImageVisible = ref(false);
const scale = ref(1);

// Scroll & Animation
const { y: scrollY } = useWindowScroll();

onMounted(() => {
  // Observer, um zu starten, wenn das Bild sichtbar ist
  useIntersectionObserver(
    blackSection,
    ([entry]) => {
      isImageVisible.value = entry.isIntersecting; // Aktiviert, wenn der schwarze Bereich sichtbar ist
    },
    { threshold: 0.5 } // 50 % Sichtbarkeit
  );
});

// Dynamische Stile
const imageStyle = computed(() => {
  const opacity = isImageVisible.value ? 1 : 0;
  const transform = `scale(${scale.value})`;
  return { transform, opacity };
});

// Reagiere auf Scrollen
watchEffect(() => {
  if (!isImageVisible.value) return;

  const blackRect = blackSection.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  const progress = Math.min(1, Math.max(0, (viewportHeight - blackRect.top) / viewportHeight));
  scale.value = 1 + progress * 9; // Zoom von 1 bis maximal 10

  if (progress >= 1) {
    isImageVisible.value = false; // Bild ausblenden, wenn das Ende erreicht ist
  }
});
</script>

<style scoped>
.zoom-image {
  transition: transform 0.1s ease, opacity 0.3s ease;
}
</style>
