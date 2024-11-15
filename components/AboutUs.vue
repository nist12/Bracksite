<template>
    <section id="ueber-uns" class="ml-8 mr-8 py-16 bg-white">
      <div class="container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Über <span class="text-greenbr">Brackets</span></h2>
        <div class="flex flex-col lg:flex-row justify-center items-center gap-8">
          <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <nuxt-img
              src="/images/Bild_niklas.jpg"
              alt="Niklas"
              class="w-full h-80 object-cover"
              width="400"
              height="300"
              lazy
              format="webp"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Niklas</h3>
              <p class="text-lg leading-relaxed">Fachinformatiker für Anwendungsentwicklung,<br>Bachelor-Student in Technischer Informatik</p>
            </div>
          </div>
          <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <nuxt-img
              src="/images/Bild_johanna.jpg"
              alt="Johanna"
              class="w-full h-80 object-cover"
              width="400"
              height="300"
              lazy
              format="webp"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Johanna</h3>
              <p class="text-lg leading-relaxed">Fachinformatikerin für Anwendungsentwicklung,<br>Bachelor-Studentin User Experience Design (UXD)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  