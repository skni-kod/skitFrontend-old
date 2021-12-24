<template>
  <section id="home" class="flex items-center justify-center bg-white h-screen w-full mt-16 pb-32">
    <div class="grid grid-cols-1 gap-4 bg-skni-blue-800 px-32 py-24 rounded-3xl">
      <input id="username" placeholder="Username" type="text" class="shadow appearance-none border rounded py-2 px-3 w-96 text-gray-800">
      <input id="password" placeholder="Password" type="password" class="shadow appearance-none border rounded py-2 px-3 w-96 text-gray-800">
      <button id="login-btn" class="flex justify-self-end shadow bg-skni-blue-500 hover:bg-white border border-black rounded py-2 px-3 text-black text-xl font-mono font-extrabold">Log In</button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style scoped>
</style>