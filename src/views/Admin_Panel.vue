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
            <button v-for="button in ShowButtons" :key="button.id" :id='button.id' @click="button.func" class="text-green-400 font-bold border-green-400 border-2 px-12 py-3 rounded-full">{{button.text}}</button>
        </div>
        <div id="div-add" v-else-if="toggle2" class="grid grid-cols-4 justify-center font-mono mx-16 gap-4">
            <button v-for="button in AddButtons" :key="button.id" :id='button.id' class="text-pink-400 font-bold border-pink-400 border-2 px-12 py-3 rounded-full">{{button.text}}</button>
        </div>
        <div id="div-update" v-else-if="toggle3" class="grid grid-cols-4 justify-center font-mono mx-16 gap-4">
            <button v-for="button in UpdateButtons" :key="button.id" :id='button.id' class="text-skni-blue-500 font-bold border-skni-blue-500 border-2 px-12 py-3 rounded-full">{{button.text}}</button>
        </div>
        <div id="div-delete" v-else-if="toggle4" class="grid grid-cols-4 justify-center font-mono mx-16 gap-4">
            <button v-for="button in DeleteButtons" :key="button.id" :id='button.id' class="text-red-400 font-bold border-red-400 border-2 px-12 py-3 rounded-full">{{button.text}}</button>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios, {AxiosResponse} from 'axios';

interface Role {
  id: number;
  title: string;
  description: string;
  students: Array<Student>;
}

interface Student {
  indeks: string;
  firstName: string;
  lastName: string;
  discordName:  string;
  yearOfStudies: number;
  studiesTag: string;
  description: string;
  role: Role;
}

@Component
export default class Admin_Panel extends Vue {
  private async getAll() {
    let result: AxiosResponse = await axios.get('https://localhost:7063/api/student');
    let posts: [Student] = result.data;
    console.log(posts);
    return {}
  }
  
  private data () {
    return {
          toggle1: false,
          toggle2: false,
          toggle3: false,
          toggle4: false,
          ShowButtons:[
              {id:'show-all-students',text:'Wszyscy studenci', func: this.getAll},
              {id:'show-all-students-without-project',text:'Wszyscy studenci bez projektu', func: this.getAll},
              {id:'show-student-per-index',text:'Pojedyncza osoba po indeksie', func: this.getAll},
              {id:'show-all-projects',text:'Wszystkie projekty', func: this.getAll},
              {id:'show-one-project',text:'Pojedynczy projekt', func: this.getAll},
              {id:'show-project-students',text:'Wszyscy studenci z danego projektu', func: this.getAll},
              {id:'show-all-sections',text:'Wszystkie sekcje', func: this.getAll},
              {id:'show-one-section',text:'Pojedyncza sekcja', func: this.getAll},
              {id:'show-all-projects-in-section',text:'Wszystkie projekty z danej sekcji', func: this.getAll},
              {id:'show-all-roles',text:'Wszystkie role', func: this.getAll},
              {id:'show-one-role',text:'Pojedyncza rola', func: this.getAll},
              {id:'show-all-students-with-role',text:'Wszyscy studenci z daną rangą', func: this.getAll}
            ],
          AddButtons:[
              {id:'add-student',text:'Dodanie studenta'},
              {id:'add-project-to-student',text:'Dodanie projektu studentowi'},
              {id:'add-role-to-student',text:'Dodanie roli studentowi'},
              {id:'add-project',text:'Dodanie projektu'},
              {id:'add-section',text:'Dodanie sekcji'},
              {id:'add-role',text:'Dodanie roli'},
            ],
          UpdateButtons:[
              {id:'to-do',text:'TODO'}
            ],
          DeleteButtons:[
              {id:'delete-role-from-student',text:'Usunięcie studentowi roli'},
              {id:'delete-project-from-student',text:'Usunięcie studentowi projektu'},
              {id:'delete-student',text:'Usunięcie studenta'},
              {id:'delete-project',text:'Usunięcie projektu'},
              {id:'delete-section',text:'Usunięcie sekcji'},
              {id:'delete-role',text:'Usunięcie roli'},
            ],
    }
  }
}
</script>

<style scoped>
</style>