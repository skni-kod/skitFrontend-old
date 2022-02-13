<template>
  <div
    id="nav"
    class="w-60 h-full shadow-md bg-gray-800 px-4 absolute pt-4"
    v-if="true"
  >
    <ul class="relative">
      <li class="relative mb-2">
        <img id="Logo" src="@/assets/coreapplogo.png" class="filter -hue-rotate-90"/>
      </li>
      <li class="relative">
        <router-link to="/" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-skni-blue-700 transition duration-300 ease-in-out"
          >
            Wyloguj
          </a>
        </router-link>
      </li>
      <li class="relative">
        <router-link to="/" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-skni-blue-700 transition duration-300 ease-in-out"
          >
            Moje dane
          </a>
        </router-link>
      </li>
      <li class="relative">
        <div class="bg-gray-600 w-48 h-0.5 rounded-full mt-2 mb-4 text-sm text-gray-600 text-center">
          Admin
        </div>
      </li>
       <li class="relative">
        <router-link to="/admin" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-skni-blue-700 transition duration-300 ease-in-out"
          >
            Ostatnie Modyfikacje
          </a>
        </router-link>
      </li>
      <li class="relative">
        <router-link to="/" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-skni-blue-700 transition duration-300 ease-in-out"
          >
            Członkowie
          </a>
        </router-link>
      </li>
      <li class="relative">
        <router-link to="/" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-skni-blue-700 transition duration-300 ease-in-out"
          >
            Sekcje
          </a>
        </router-link>
      </li>
      <li class="relative">
        <router-link to="/" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-skni-blue-700 transition duration-300 ease-in-out"
          >
            Projekty
          </a>
        </router-link>
      </li>
      <li class="relative">
        <router-link to="/" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-skni-blue-700 transition duration-300 ease-in-out"
          >
            Role
          </a>
        </router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    toggleNavBar: Boolean,
  },
  setNavBar() {
    if (this.$route.query === {}) this.$emit("update:toggleNavBar", true);
  },
  data() {
    console.log(this.toggleNavBar);
  },
});
</script>
