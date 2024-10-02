<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar/Navbar.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
