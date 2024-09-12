<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Where and when?</h2>
      </div>
      <div class="mx-auto grid grid-cols-2 mt-16">
        <div class="lg:max-w-lg">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Schedule:</h2>
          <div v-for="lesson in lessons" :key="lesson.id" class="relative flex items-center mb-4 space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded-full" :src="lesson.imageUrl" alt="" />
            </div>
            <div class="min-w-0 flex-1">
              <a href="#" class="focus:outline-none">
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">{{ lesson.name }}</p>
                <p class="truncate text-sm text-gray-500">{{ lesson.hour }}</p>
              </a>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 my-4">Location:</h2>
            <div class="flex items-center">
                <component :is="mapIcon" class="h-5 w-5 inline-flex" />
                <span class="ml-2">Ex Animo, Huzur, Menderes Cd. No:4A, 34396 Sarıyer/İstanbul</span>
            </div>
        </div>
        <div class="flex items-start justify-end">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.6343853329295!2d29.003533776200616!3d41.097498571338164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7e2f5a9b931%3A0x22f5e2f338130a73!2sEx%20Animo%20House%20Of%20Movement%20Arts%20%26%20Sports!5e1!3m2!1sfr!2str!4v1726071862156!5m2!1sfr!2str" width="600" height="450" style="border:0;" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/20/solid';
const mapIcon = MapPinIcon;
const lessons = [
  {
    id: 1,
    name: "Gi class",
    hour: "Thursday 18h - 20h",
    imageUrl: "https://www.picsum.photos/200",
  },
  {
    id: 2,
    name: "Gi class",
    hour: "Saturday 14h - 16h",
    imageUrl: "https://www.picsum.photos/200",
  },
];
</script>
