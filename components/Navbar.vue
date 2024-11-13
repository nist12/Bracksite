<template>
    <nav id="#startseite" class="bg-greenbr border-b-4 border-white">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo / Navbar Brand -->
        <a href="#startseite">
          <NuxtImg
          src="/images/Logo_Navbar_weiß.png"
           alt="Logo"
          class="h-8 object-contain"
          />
        </a>
  
        <!-- Mobile Hamburger Menu Button -->
        <button 
          @click="isOpen = !isOpen" 
          class="md:hidden text-white focus:outline-none" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
          </svg>
        </button>
  
        <!-- Navbar Links (Desktop) -->
        <div class="hidden md:flex items-center space-x-10">
          <ul class="flex space-x-12">
            <li class="nav-item">
              <a href="#ueber-uns" class="text-white hover:text-greengraybr nav-link">Über uns</a>
            </li>
            <li class="nav-item">
              <a href="#dienstleistungen" class="text-white hover:text-greengraybr nav-link">Dienstleistungen</a>
            </li>
            <li class="nav-item">
              <a href="#portfolio" class="text-white hover:text-greengraybr nav-link">Portfolio</a>
            </li>
            <li class="nav-item">
              <a href="#kontakt" class="text-white hover:text-greengraybr nav-link">Kontakt</a>
            </li>
          </ul>
        </div>
      </div>
  
      <div v-if="isOpen" class="md:hidden border-b border-white"></div>  <!--weißer Strich in der mobilen Variante-->


      <!-- Navbar Links (Mobile) -->
      <div :class="isOpen ? 'block' : 'hidden'" class="md:hidden">
        <ul class="flex flex-col space-y-2 mt-2 pl-4 pb-4">
          <li class="nav-item">
            <a href="#ueber-uns" class="text-white hover:text-greengraybr nav-link">Über uns</a>
          </li>
          <li class="nav-item">
            <a href="#dienstleistungen" class="text-white hover:text-greengraybr nav-link">Dienstleistungen</a>
          </li>
          <li class="nav-item">
            <a href="#portfolio" class="text-white hover:text-greengraybr nav-link">Portfolio</a>
          </li>
          <li class="nav-item">
              <a href="#kontakt" class="text-white hover:text-greengraybr nav-link">Kontakt</a>
            </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const isOpen = ref(false)
  </script>
  
  <style scoped>

  </style>
  