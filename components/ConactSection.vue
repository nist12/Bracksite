<template>
    <section id="kontakt" class="ml-8 mr-8 py-16 bg-greengraybr">
      <div class="p-4 lg:p-0 container mx-auto text-center">
        <h2 class="text-3xl font-bold mb-8">Kontaktieren Sie <span class="text-greenbr">uns</span></h2>
        <p class="mb-4">Haben Sie Fragen oder möchten Sie mehr über unsere Dienstleistungen erfahren? Wir freuen uns darauf, von Ihnen zu hören!</p>
        <p>E-Mail: <a href="mailto:email@domain.com" class="text-greenbr underline">email@domain.com</a></p>
        <p>Telefon: <a href="tel:+123456789" class="text-greenbr underline">+123 456 789</a></p>
        <p>Adresse: <span class="text-greenbr">Büroadresse</span></p>
  
        <form @submit.prevent="submitForm" class="mt-8 max-w-lg mx-auto bg-white p-8 shadow rounded-lg">
          <p v-if="successMessage" class="text-green-700 bg-green-100 p-4 rounded mb-4">
            {{ successMessage }}
          </p>
          <p v-if="errorMessage" class="text-red-700 bg-red-100 p-4 rounded mb-4">
            {{ errorMessage }}
          </p>
          <div class="mb-4">
            <label for="name" class="block text-left mb-2">Name:</label>
            <input type="text" id="name" v-model="name" class="w-full p-3 border rounded-lg" placeholder="Ihr Name" required>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-left mb-2">E-Mail:</label>
            <input type="email" id="email" v-model="email" class="w-full p-3 border rounded-lg" placeholder="Ihre E-Mail-Adresse" required>
          </div>
          <div class="mb-4">
            <label for="message" class="block text-left mb-2">Nachricht:</label>
            <textarea id="message" v-model="message" rows="5" class="w-full p-3 border rounded-lg" placeholder="Ihre Nachricht" required></textarea>
          </div>
          <button type="submit" class="w-full py-3 bg-greenbr text-white font-bold rounded-lg hover:bg-greenbr">
            Nachricht senden
          </button>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios'; // Axios zur API-Integration
  
  const name = ref('');
  const email = ref('');
  const message = ref('');
  const successMessage = ref('');
  const errorMessage = ref('');
  
  const submitForm = async () => {
    successMessage.value = '';
    errorMessage.value = '';
  
    // Formulardaten validieren
    if (!name.value || !email.value || !message.value) {
      errorMessage.value = 'Bitte füllen Sie alle Felder aus.';
      return;
    }
  
    try {
      // Daten an das Backend senden
      const response = await axios.post('/api/contact', {
        name: name.value,
        email: email.value,
        message: message.value,
      });
  
      // Erfolgsmeldung anzeigen
      if (response.status === 200) {
        successMessage.value = 'Nachricht wurde erfolgreich gesendet!';
        name.value = '';
        email.value = '';
        message.value = '';
      } else {
        throw new Error('Fehler beim Senden der Nachricht.');
      }
    } catch (error) {
      errorMessage.value = 'Beim Senden der Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.';
    }
  };
  </script>
  