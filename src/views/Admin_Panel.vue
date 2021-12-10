<template>
  <section id="admin-panel" class="bg-gray-900 h-full text-gray w-full mt-8 pb-96">
    <div id="student-view" class="border-skni-blue-700 border-2 py-8 pb-20 mx-2 rounded-lg min-h-screen">
        <h1 class="text-white text-4xl font-mono font-extrabold mb-16">Edytuj Bazę Danych Członków Koła</h1>
        <div class="flex justify-center space-x-16 font-mono mb-16 mx-32">
            <button id="admin-show" @click="toggle1 = !toggle1; toggle2 = false; toggle3 = false; toggle4 = false" class="text-green-400 font-bold border-green-400 border-2 px-16 py-4 rounded-full">Wyświetl</button>
            <button id="admin-add" @click="toggle2 = !toggle2; toggle1 = false; toggle3 = false; toggle4 = false" class="text-pink-400 font-bold border-pink-400 border-2 px-16 py-4 rounded-full">Dodaj</button>
            <button id="admin-update" @click="toggle3 = !toggle3; toggle2 = false; toggle1 = false; toggle4 = false" class="text-skni-blue-500 font-bold border-skni-blue-500 border-2 px-16 py-4 rounded-full">Aktualizuj</button>
            <button id="admin-delete" @click="toggle4 = !toggle4; toggle2 = false; toggle3 = false; toggle1 = false" class="text-red-400 font-bold border-red-400 border-2 px-16 py-4 rounded-full">Usuń</button>
        </div>
        <div id="div-show" v-if="toggle1" class="grid grid-cols-4 justify-center font-mono mx-16 gap-4">
            <button id="show-all-students" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Wszyscy studenci</button>
            <button id="show-all-students-without-project" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Wszyscy studenci bez projektu</button>
            <button id="show-student-per-index" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Pojedyncza osoba po indeksie</button>
            <button id="show-all-projects" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Wszystkie projekty</button>
            <button id="show-one-project" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Pojedynczy projekt</button>
            <button id="show-project-students" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Wszyscy studenci z danego projektu</button>
            <button id="show-all-sections" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Wszystkie sekcje</button>
            <button id="show-one-section" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Pojedyncza sekcja</button>
            <button id="show-all-projects-in-section" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Wszystkie projekty z danej sekcji</button>
            <button id="show-all-roles" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Wszystkie role</button>
            <button id="show-one-role" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Pojedyncza rola</button>
            <button id="show-all-students-with-role" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">Wszyscy studenci z daną rangą</button>
        </div>
        <div id="div-add" v-else-if="toggle2" class="grid grid-cols-4 justify-center font-mono mx-16 gap-4">
            <button id="add-student" class="text-pink-400 font-bold border-pink-400 border-2 px-12 py-3 rounded-full">Dodanie studenta</button>
            <button id="add-project-to-student" class="text-pink-400 font-bold border-pink-400 border-2 px-12 py-3 rounded-full">Dodanie projektu studentowi</button>
            <button id="add-role-to-student" class="text-pink-400 font-bold border-pink-400 border-2 px-12 py-3 rounded-full">Dodanie roli studentowi</button>
            <button id="add-project" class="text-pink-400 font-bold border-pink-400 border-2 px-12 py-3 rounded-full">Dodanie projektu</button>
            <button id="add-section" class="text-pink-400 font-bold border-pink-400 border-2 px-12 py-3 rounded-full">Dodanie sekcji</button>
            <button id="add-role" class="text-pink-400 font-bold border-pink-400 border-2 px-12 py-3 rounded-full">Dodanie roli</button>
        </div>
        <div id="div-update" v-else-if="toggle3" class="grid grid-cols-4 justify-center font-mono mx-16 gap-4">
            <button id="to-do" class="text-skni-blue-500 font-bold border-skni-blue-500 border-2 px-12 py-3 rounded-full">TODO</button>
        </div>
        <div id="div-delete" v-else-if="toggle4" class="grid grid-cols-4 justify-center font-mono mx-16 gap-4">
            <button id="delete-role-from-student" class="text-red-400 font-bold border-red-400 border-2 px-12 py-3 rounded-full">Usunięcie studentowi roli</button>
            <button id="delete-project-from-student" class="text-red-400 font-bold border-red-400 border-2 px-12 py-3 rounded-full">Usunięcie studentowi projektu</button>
            <button id="delete-student" class="text-red-400 font-bold border-red-400 border-2 px-12 py-3 rounded-full">Usunięcie danego studenta</button>
            <button id="delete-project" class="text-red-400 font-bold border-red-400 border-2 px-12 py-3 rounded-full">Usunięcie danego projektu</button>
            <button id="delete-section" class="text-red-400 font-bold border-red-400 border-2 px-12 py-3 rounded-full">Usunięcie danej sekcji</button>
            <button id="delete-role" class="text-red-400 font-bold border-red-400 border-2 px-12 py-3 rounded-full">Usunięcie danej roli</button>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component ({
  data () {
      return {
          toggle1: false,
          toggle2: false,
          toggle3: false,
          toggle4: false
      }
  }
})
export default class Admin_Panel extends Vue {}
</script>

<style scoped>
</style>