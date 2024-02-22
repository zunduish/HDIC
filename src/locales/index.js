import { createI18n } from 'vue-i18n'
import en from '~/locales/en'
import mn from '~/locales/mn'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'mn',
  messages: {
    en,
    mn,
  }
})

