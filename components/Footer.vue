<template>
  <footer class="bg-greenbr text-white py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <!-- Logo und kurze Beschreibung -->
        <div class="flex flex-col items-center justify-center">
  <!-- Logo / Navbar Brand -->
  <NuxtImg
    src="/images/Logo_Navbar_weiß.png"
    alt="Logo"
    class="h-8 object-center"
  />

</div>



        <!-- Social Media Links -->
        <div>
          <h3 class="text-xl font-semibold text-white">Folge uns</h3>
          <div class="flex justify-center space-x-4 mt-4">
            <a href="#" class="hover:text-greengraybr">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M8 12h.01M12 12h.01M16 12h.01M9 16h6M8 20h8m2-14h-1.5M5 6h1.5M12 18v-6M5 6v12h14V6H5z"/>
              </svg>
            </a>
            <a href="#" class="hover:text-greengraybr">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 2.5c2.93 0 5.76 1.18 7.83 3.33A11.66 11.66 0 0123 13.25c0 1.27-.18 2.52-.54 3.7a11.4 11.4 0 01-1.57 3.22 11.8 11.8 0 01-4.29 3.6A12.03 12.03 0 0112 22C8.2 22 4.79 20.29 2.53 17.5a11.88 11.88 0 01-2.2-4.24C.13 11.95.5 10.5.5 10.5s.16-.37.42-.75c.12-.18.24-.36.37-.53A12.03 12.03 0 0112 2.5z"/>
              </svg>
            </a>
            <a href="#" class="hover:text-greengraybr">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M18 2H6c-2 0-4 2-4 4v12c0 2 2 4 4 4h12c2 0 4-2 4-4V6c0-2-2-4-4-4zm0 16H6V6h12v12z"/>
              </svg>
            </a>
          </div>
        </div>


        <!-- Navigation Links -->
        <div>
          <ul class="mt-4 space-y-2">
            <li><a href="#" class="hover:text-greengraybr">Datenschutz</a><a>&nbsp;&nbsp;&nbsp;</a><a href="#" class="hover:text-greengraybr">Impressum</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-8 border-t border-white pt-4 text-center">
        <p class="text-sm">&copy; 2024 Dein Unternehmen. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>
