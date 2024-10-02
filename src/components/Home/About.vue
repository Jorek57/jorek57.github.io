<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:ml-auto lg:pl-4 lg:pt-4">
          <div id="focus" class="lg:max-w-lg">
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ t('focus.maintitle') }}</h2>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-bold text-gray-900">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                  {{t(feature.name)}}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{t(feature.description)}}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="flex items-start justify-end lg:order-first">
          <img :src="picture" alt="" class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" width="2432" height="1442" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/20/solid';
import { useI18n } from 'vue-i18n';
import picture from '@/assets/BJJ.jpeg';
const { t } = useI18n();
const features = [
  {
    name: 'focus.title1',
    description: 'focus.text1',
    icon: PlusIcon,
  },
  {
    name: 'focus.title2',
    description: 'focus.text2',
    icon: PlusIcon,
  },
  {
    name: 'focus.title3',
    description: 'focus.text3',
    icon: PlusIcon,
  },
];
</script>
