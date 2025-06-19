import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

// Загружаем переводы
const messages = {
  en: require('./locales/en.json'),
  ru: require('./locales/ru.json')
}

// Создаем экземпляр i18n
const i18n = createI18n({
  locale: 'ru', // Язык по умолчанию
  fallbackLocale: 'en', // Резервный язык
  messages
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')