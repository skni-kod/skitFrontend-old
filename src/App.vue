<template>
  <div
    id="nav"
    class="w-60 h-full shadow-md bg-gray-800 px-4 fixed pt-4"
    v-if="toggleNavBar"
  >
    <ul class="relative grid grid-cols-1 gap-y-1">
      <li class="relative mb-2">
        <img
          id="Logo"
          src="@/assets/coreapplogo.png"
          class="filter -hue-rotate-90"
        />
      </li>
      <li class="relative">
        <router-link to="/" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-new-green transition duration-300 ease-in-out"
          >
            Wyloguj
          </a>
        </router-link>
      </li>
      <li class="relative">
        <router-link to="/myrole" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-new-green transition duration-300 ease-in-out"
          >
            Moja rola
          </a>
        </router-link>
      </li>
      <li class="relative">
        <div
          class="bg-gray-600 w-48 h-px rounded-full mt-2 mb-4 text-sm text-gray-600 text-center"
        >
          Moderacja
        </div>
      </li>
      <li class="relative">
        <router-link to="/lastmodified" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-new-green transition duration-300 ease-in-out"
          >
            Ostatnie Modyfikacje
          </a>
        </router-link>
      </li>
      <li class="relative">
        <router-link to="/members" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-new-green transition duration-300 ease-in-out"
          >
            Członkowie
          </a>
        </router-link>
      </li>
      <li class="relative">
        <router-link to="/sections" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-new-green transition duration-300 ease-in-out"
          >
            Sekcje
          </a>
        </router-link>
      </li>
      <li class="relative">
        <router-link to="/projects" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-new-green transition duration-300 ease-in-out"
          >
            Projekty
          </a>
        </router-link>
      </li>
      <li class="relative">
        <router-link to="/roles" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-new-green transition duration-300 ease-in-out"
          >
            Role
          </a>
        </router-link>
      </li>
      <li class="relative">
        <div
          class="bg-gray-600 w-48 h-px mt-2 mb-4 text-sm text-gray-600 text-center"
        >
          Admin
        </div>
      </li>
      <li class="relative">
        <router-link to="/editmoderators" class="font-bold">
          <a
            class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-300 text-ellipsis whitespace-nowrap rounded hover:text-white hover:bg-new-green transition duration-300 ease-in-out"
          >
            Zarządzaj Moderacją
          </a>
        </router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const toggleNavBar = computed(() => {
  return route.name !== "Login";
});
</script>
