<template>
  <div class="relative">
    <!-- Hintergrundbild -->
    <NuxtImg src="/images/Hintergrund-neu.png" alt="Hintergrund" class="w-full" />
    
    <!-- Text über dem Bild, jedes Wort in einer neuen Zeile -->
    <div class="absolute top-24 left-24 m-8 space-y-4 text-white text-8xl font-bold">
      <span class="block">Kreativität,</span>
      <span class="block">die</span>
      <span class="block">funktioniert.</span>
    </div>

    <!-- Bild, das über dem Hintergrundbild zentriert ist -->
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/8">
      <NuxtImg src="/images/GrafikPC.png" alt="Zentrales Bild" class="" />
    </div>
  </div>
</template>
