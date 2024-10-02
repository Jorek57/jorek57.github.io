<template>
  <select @change="switchLanguage">
    <option
      v-for="sLocale in supportedLocales"
      :key="`locale-${sLocale}`"
      :value="sLocale"
      :selected="locale === sLocale"
    >
      {{ $t(`locale.${sLocale}`) }}
    </option>
  </select>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import Translations from "@/i18n/translations";
import { useRouter } from "vue-router";

const { locale } = useI18n();
const router = useRouter();
const supportedLocales = Translations.supportedLocales;

async function switchLanguage(event) {
  const newLocale = event.target.value;
  await Translations.switchLanguage(newLocale);
  try {
    await router.replace({ params: { locale: newLocale } });
  } catch(e) {
    console.log(e);
    router.push("/");
  }
};
</script>
