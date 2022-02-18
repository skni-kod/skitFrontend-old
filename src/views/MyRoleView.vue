/* eslint-disable prettier/prettier */
<template>
  <div
    id="MyRoleBG"
    class="flex bg-gray-300 dark:bg-gray-700 min-h-screen min-w-full items-center justify-center"
  >
    <div
      id="RoleDisplay"
      class="flex flex-col bg-gray-300 border-2 border-gray-200 dark:bg-gray-600 dark:border-gray-500 shadow-md rounded-3xl min-h-32 px-56 py-16 ml-72 mt-8 mr-12 mb-8 gap-y-8 relative items-center justify-center"
    >
      <strong class="text-gray-800 dark:text-gray-300 text-3xl font-bold">
        Witaj na platformie CoreApp
      </strong>
      <strong class="text-gray-800 dark:text-gray-300 text-xl font-bold"
        >Twoja rola to: {{ currentRoleWord }}</strong
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let currentRoleWord = "Ser";
let currentRoleNumber: number;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getRoleBasedOnNumber = computed(() => {
  if (currentRoleNumber === 0) {
    currentRoleWord = "User";
  } else if (currentRoleNumber === 1) {
    currentRoleWord = "Mod";
  } else if (currentRoleNumber === 2) {
    currentRoleWord = "Admin";
  }
  return currentRoleWord;
});
</script>
