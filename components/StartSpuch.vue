<template>
  <div class="min-h-[100vh] bg-black relative tracking-wider">
    <div 
      class="absolute inset-0 flex flex-col items-start justify-center text-bluebr font-bold px-12 sm:px-16 md:px-28 lg:px-32 gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5"
    >
      <!-- Transition für das wechselnde Wort -->
      <transition name="fade" mode="out-in">
        <span 
          v-if="currentWord"
          key="currentWord"
          class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight sm:leading-snug"
        >
          <span v-for="(letter, index) in currentWord" :key="index" class="inline-block letter-animation"
            :style="{ animationDelay: `${index * 200}ms` }"
          >
            {{ letter }}
          </span>
        </span>
      </transition>
      
      <!-- Die statischen Begriffe bleiben -->
      <span 
        class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight sm:leading-snug"
      >
        die
      </span>
      <span 
        class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight sm:leading-snug"
      >
        funktioniert.
      </span>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

// Begriffe
const words = ['Kreativität,', 'Innovation,', 'Klarheit,'];
const currentWord = ref(words[0]); // Erstes Wort direkt setzen

onMounted(() => {
  let currentIndex = 1; // Der nächste Index (das zweite Wort)
  
  const cycleWords = () => {
    currentWord.value = ''; // Wort zurücksetzen, um "Verschwinden"-Effekt zu erzeugen
    setTimeout(() => {
      currentWord.value = words[currentIndex];
      currentIndex = (currentIndex + 1) % words.length; // Zyklisch durch Wörter wechseln
    }, 500); // Verzögerung vor dem Einblenden
  };

  // Starte den Zyklus nach dem initialen Wort
  setInterval(cycleWords, 3000); // Alle 3 Sekunden aktualisieren
});
</script>



<style>
/* Transition für das Ein- und Ausblenden */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animation für Buchstaben */
@keyframes reveal {
  from {
    clip-path: inset(0 100% 0 0); /* Buchstabe unsichtbar */
    opacity: 0;
  }
  to {
    clip-path: inset(0 0 0 0); /* Buchstabe sichtbar */
    opacity: 1;
  }
}

.letter-animation {
  display: inline-block;
  animation: reveal 0.2s ease-out forwards;
  opacity: 0; /* Anfangszustand unsichtbar */
}
</style>

