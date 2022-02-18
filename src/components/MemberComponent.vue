<template>
  <div id="MemberCompContainer" class="flex flex-col">
    <div
      id="MemberDisplay"
      v-for="stud in students"
      :key="stud.id"
      class="grid grid-cols-2 bg-gray-300 border-2 border-gray-200 dark:bg-gray-600 dark:border-gray-500 shadow-md rounded-3xl min-h-32 px-32 py-16 ml-72 mt-8 mr-12 mb-8 gap-y-8 gap-x-8 relative items-center justify-center"
    >
      <strong class="text-gray-800 dark:text-gray-300 text-2xl font-bold"
        >Id: {{ stud.id }}</strong
      >
      <strong class="text-gray-800 dark:text-gray-300 text-xl font-bold"
        >Indeks: {{ stud.indeks }}</strong
      >
      <strong class="text-gray-800 dark:text-gray-300 text-xl font-bold"
        >Imie: {{ stud.firstName }}</strong
      >
      <strong class="text-gray-800 dark:text-gray-300 text-xl font-bold"
        >Nazwisko: {{ stud.lastName }}</strong
      >
      <strong class="text-gray-800 dark:text-gray-300 text-xl font-bold"
        >Discord: {{ stud.discordName }}</strong
      >
      <strong class="text-gray-800 dark:text-gray-300 text-xl font-bold"
        >Rok: {{ stud.yearOfStudies }}</strong
      >
      <strong class="text-gray-800 dark:text-gray-300 text-xl font-bold"
        >Studia: {{ stud.studiesTag }}</strong
      >
      <strong class="text-gray-800 dark:text-gray-300 text-xl font-bold"
        >Opis: {{ stud.description }}</strong
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref } from "vue";

let students = ref([]);

onMounted(() => {
  axios.get("https://localhost:7063/api/student").then((response) => {
    students.value = response.data;
  });
});
</script>
