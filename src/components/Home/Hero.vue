<template>
  <div class="bg-gray-900">
    <div class="relative isolate overflow-hidden pt-14">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <img
            :src="logo"
            alt="Description of image"
            class="mx-auto mb-8 rounded-lg w-40 h-40 mb-16"
          />
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">ETCETERA BJJ</h1>
          <p class="mt-6 text-lg leading-8 text-gray-300">{{ $t('hero.line1') }}</p>
          <p class="mt-6 text-lg leading-8 text-gray-300">{{ $t('hero.line2') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from '../../assets/logo-white.svg';
</script>
