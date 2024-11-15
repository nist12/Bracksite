<template>
  <!-- Hauptcontainer für die Service-Kachel -->
  <div
    @click="handleClick" 
    @mouseenter="isDesktop && (isDesktopHover = true)" 
    @mouseleave="isDesktop && (isDesktopHover = false)" 
    :class="{
      'hover-effect bg-greenbr': isActive || isDesktopHover, 
      'group p-6 bg-white shadow rounded-lg transition-colors duration-300 relative min-h-[300px] flex flex-col items-center justify-center': true      
    }"
  >
  <!-- Klick-Event für mobile Geräte, um den Zustand der Kachel zu ändern -->
  <!-- Hover-Effekt auf Desktop-Geräten: setzt isDesktopHover auf true -->
  <!-- Entfernt den Hover-Effekt, wenn die Maus das Element verlässt -->
  <!-- Wendet die Hover-Effekte bei aktiver Kachel oder Hover auf Desktop an -->
  <!-- Basis-Styling der Kachel: Padding, Hintergrundfarbe, Schatten, abgerundete Ecken, Transition-Effekte und flexibles Layout -->
    <!-- Container für das Icon -->
    <div class="relative w-16 h-16 mb-4">
      <!-- Grünes Bild (Nicht-Hover-Ansicht) -->
      <NuxtImg
        :src="`/images/${imageGr}`"
        alt="Service Icon" 
        loading="lazy" 
        class="absolute inset-0 w-full h-full transition-opacity duration-300 group-hover:opacity-0"
       
      />
       <!-- Dynamischer Bildpfad für das grüne Bild -->
        <!-- Alternativtext für das Bild -->
        <!-- Lazy-Loading für bessere Performance -->
         <!-- Bild wird bei Hover unsichtbar durch eine Opacity-Transition -->
      <!-- Weißes Bild (Hover-Ansicht) -->      
      <NuxtImg
        :src="`/images/${imageWh}`"
        alt="Service Icon" 
        loading="lazy" 
        class="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
       <!-- Dynamischer Bildpfad für das weiße Bild -->
       <!-- Alternativtext für das Bild -->
       <!-- Lazy-Loading für bessere Performance -->
       <!-- Bild wird bei Hover sichtbar durch eine Opacity-Transition -->
    </div>

    <!-- Titel des Service (nur in der Nicht-Hover-Ansicht sichtbar) -->
    <h3
      class="text-xl font-bold mb-4 text-black transition-all duration-300 group-hover:hidden h-[60px]"
    ><!-- Versteckt den Titel bei Hover -->
      {{ title }} <!-- Dynamischer Titel des Service -->
    </h3>

    <!-- Beschreibung des Service (nur in der Hover-Ansicht sichtbar) -->
    <p
      class="hidden group-hover:block text-white transition-all duration-300"
      
    ><!-- Zeigt die Beschreibung nur bei Hover an -->
      {{ description }} <!-- Dynamische Beschreibung des Service -->
    </p>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'; // Import der debounce-Funktion, um unnötige Event-Listener-Aufrufe zu vermeiden

export default {
  // Übergabe von Daten an die Komponente über Props
  props: {
    title: String, // Titel der Kachel (z.B. "Webdesign")
    description: String, // Beschreibung der Kachel (z.B. "Gestaltung von Webseiten")
    imageGr: String, // Dateiname des grünen Icons (Nicht-Hover-Zustand)
    imageWh: String, // Dateiname des weißen Icons (Hover-Zustand)
  },
  data() {
    return {
      isActive: false, // Gibt an, ob die Kachel auf mobilen Geräten aktiviert ist (für den Klick-Effekt)
      isDesktopHover: false, // Gibt an, ob die Kachel auf Desktop-Geräten im Hover-Zustand ist
      isDesktop: false, // Gibt an, ob der Benutzer ein Desktop-Gerät verwendet
    };
  },
  mounted() {
    // Medienabfrage zur Erkennung, ob das Gerät ein Desktop (Bildschirmbreite >= 1024px) ist
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    this.isDesktop = mediaQuery.matches; // Setzt den isDesktop-Status basierend auf der Medienabfrage

    // Event-Listener, der bei Änderung der Bildschirmgröße den Desktop-Status aktualisiert
    const handleMediaQueryChange = debounce((e) => {
      this.isDesktop = e.matches; // Aktualisiert den Status, wenn sich die Medienabfrage ändert
    }, 200); // Wartet 200ms, bevor der Status geändert wird (Vermeidet unnötige Aufrufe)

    // Fügt den Event-Listener zur Medienabfrage hinzu
    mediaQuery.addEventListener('change', handleMediaQueryChange);
  },
  methods: {
    // Klick-Handler für mobile Geräte
    handleClick() {
      if (!this.isDesktop) {
        // Nur auf mobilen Geräten erlaubt
        this.isActive = !this.isActive; // Wechselt den aktiven Zustand der Kachel
      }
    },
  },
};
</script>

<style scoped>
/* Hover-Effekt Klasse, die auf die Kachel angewendet wird */
.hover-effect {
  background-color: theme('colors.greenbr'); /* Verweist auf eine Tailwind-Farbvariable */
}

.hover-effect img {
  opacity: 1; /* Setzt die Bildtransparenz auf 1 (sichtbar) */
}

.hover-effect h3 {
  display: none; /* Versteckt den Titel bei Hover */
}

.hover-effect p {
  display: block; /* Zeigt die Beschreibung bei Hover an */
}
</style>
