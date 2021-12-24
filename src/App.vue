<template>
  <section id="app" class="flex">
    <nav id="nav" class="space-y-4 bg-gray-900">
      <img src="./assets/coreAPP.png" class="block h-32 w-[42] px-12 mt-4">
      <div class="grid grid-cols-1 w-64 text-skni-blue-500 text-xl font-mono font-extrabold">
        <router-link to="/"><span class="block hover:bg-skni-blue-600 py-4">Home</span></router-link>
        <div class="bg-gray-600 h-0.5 mx-3 text-gray-600 text-sm my-4">Admin</div>
        <router-link to="/members"><span class="block hover:bg-skni-blue-600 py-4">Członkowie</span></router-link>
        <router-link to="/sections"><span class="block hover:bg-skni-blue-600 py-4">Sekcje</span></router-link>
        <router-link to="/projects"><span class="block hover:bg-skni-blue-600 py-4">Projekty</span></router-link>
        <router-link to="/roles"><span class="block hover:bg-skni-blue-600 py-4">Role</span></router-link>
      </div>
    </nav>
    <router-view/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
