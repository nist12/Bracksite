<template>
    <section id="startseite" class="py-16 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
      <div class="lg:w-1/2">
        <h1 class="text-4xl font-bold mb-6">Willkommen bei <span class="text-greenbr">Brackets</span></h1>
        <p class="text-lg leading-relaxed p-4 lg:p-0 max-w-2xl mx-auto lg:mx-0">
          Wir sind ein kreatives, junges Team, das sich auf digitale Lösungen spezialisiert hat. Egal, ob Sie eine neue Website, ein Logo oder Icons benötigen – wir bringen Ihre Ideen zum Leben. Unser Fokus liegt auf Benutzerfreundlichkeit und ansprechendem Design. Lassen Sie uns gemeinsam an Ihrem nächsten Projekt arbeiten!
        </p>
      </div>
      <div class="HomePCBild relative lg:w-1/2 mt-8 mr-8 ml-8 lg:mt-0 lg:overflow-hidden">
        <nuxt-img
          src="/images/GrafikPC.png"
          alt="Kreatives Team"
          class="object-cover object-right w-full h-full max-h-96 lg:max-h-full lg:-mr-24"
        />
      </div>
    </section>
  </template>
  
  <style scoped>
  .HomePCBild {
    @media (min-width: 1024px) {
      margin-right: -23rem;
      overflow: hidden;
    }
    @media (max-width: 1024px) {
      margin-right: 0;
      margin-left: 0;
      padding: 0 1.5rem;
    }
  }
  </style>
  