import i18n from "@/i18n";

const Translations = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },

  async switchLanguage(newLocale) {
    Translations.currentLocale = newLocale;
    document.querySelector("html").setAttribute("lang", newLocale);
    localStorage.setItem("user-locale", newLocale);
  },

  isLocaleSupported(locale) {
    return Translations.supportedLocales.includes(locale);
  },

  getUserLocale() {
    const locale = window.navigator.language ||
      window.navigator.userLanguage ||
      Translations.defaultLocale;
    return {
      locale: locale,
      localeNoRegion: locale.split('-')[0]
    }
  },
  
  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("user-locale");
    if(Translations.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return null;
    }
  },

  guessDefaultLocale() {
    const userPersistedLocale = Translations.getPersistedLocale()
    if(userPersistedLocale) {
      return userPersistedLocale;
    }
    const userPreferredLocale = Translations.getUserLocale()
    if (Translations.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }
    if (Translations.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion;
    }
    
    return Translations.defaultLocale;
  },

  get defaultLocale() {
    return import.meta.env.VITE_DEFAULT_LOCALE
  },

  async routeMiddleware(to, _from, next) {
    const paramLocale = to.params.locale;
    if(!Translations.isLocaleSupported(paramLocale)) {
      return next(Translations.guessDefaultLocale());
    }
    await Translations.switchLanguage(paramLocale)
    return next();
  },

  get currentLocale() {
    return i18n.global.locale.value;
  },

  i18nRoute(to) {
    return {
      ...to,
      params: {
        locale: Translations.currentLocale,
        ...to.params
      }
    }
  }
};
export default Translations;
