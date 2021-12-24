<template>
  <section id="home" class="flex items-center justify-center bg-gradient-to-br from-skni-blue-900 via-skniblue-700 to-skni-blue-500 h-screen w-full pb-32">
    <div class="grid grid-cols-1 gap-4">
      <input id="username" placeholder="Nazwa Użytkownika" type="text" class="shadow appearance-none border rounded py-2 px-3 w-96 text-gray-800">
      <input id="password" placeholder="Hasło" type="password" class="shadow appearance-none border rounded py-2 px-3 w-96 text-gray-800">
      <button id="login-btn" class="flex justify-self-start shadow border border-skni-blue-800 rounded py-2 px-3 hover:bg-skni-blue-500"><span class="text-skni-blue-800 text-xl font-mono font-extrabold">Zaloguj się</span></button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue{}
</script>

<style scoped>
</style>