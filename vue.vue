<template>
  <div class="app">
    <h1>{{ $t('welcome') }}</h1>
    <p>{{ $t('about') }}</p>
    
    <div class="nav">
      <button @click="changeLang('en')">English</button>
      <button @click="changeLang('ru')">Русский</button>
    </div>

    <div class="content">
      <h2>{{ $t('skills') }}</h2>
      <ul>
        <li>Vue.js</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
      </ul>

      <h2>{{ $t('contact') }}</h2>
      <p>Email: example@test.com</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLang = (lang) => {
  locale.value = lang
}
</script>

<style>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
.nav {
  margin: 20px 0;
}
button {
  padding: 8px 16px;
  margin-right: 10px;
  cursor: pointer;
}
</style>