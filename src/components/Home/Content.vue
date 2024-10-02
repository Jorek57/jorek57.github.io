<template>
  <div class="bg-white px-6 py-32 lg:px-8">
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <p id="about" class="text-base font-semibold leading-7 text-indigo-600">{{ $t('content.pretitle') }}</p>
      <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ $t('content.title1') }}</h1>
      <p class="mt-6">{{ $t('content.text1') }}</p>
      <div class="mt-10 max-w-2xl">
        <p>{{ $t('content.text2') }}</p>
        <p>{{ $t('content.text3') }}</p>
        <p class="mt-8">{{ $t('content.text4', { email: email }) }}</p>
        <p class="mt-8">{{ $t('content.text5') }}</p>
        <h2 class="mt-8 text-3xl font-bold tracking-tight text-gray-900">{{ $t('content.title2') }}</h2>
        <p class="mt-6">{{ $t('content.text6') }}</p>
        <p class="mt-10">{{ $t('content.text7') }}</p>
        <p class="mt-10">{{ $t('content.text8') }}</p>
        <p class="mt-10">{{ $t('content.text9') }}</p>
      </div>
      <div class="mt-8 max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">{{ $t('content.title3') }}</h2>
        <p class="mt-6">{{ $t('content.text10') }}</p>
        <p class="mt-6">{{ $t('content.text11') }}</p>
        <p class="mt-8">{{ $t('content.text12') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const email = "info@etcbjj.com";
</script>
