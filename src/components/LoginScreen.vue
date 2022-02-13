<template>
  <div
    class="flex justify-center items-center absolute h-screen w-screen gap-x-8"
  >
    <div id="L_LoginScreen" class="relative">
      <img
        alt="Coreapp logo"
        src="../assets/coreapplogo.png"
        class="object-cover w-80 mb-4 filter -hue-rotate-90"
      />
    </div>
    <div
      id="M_LoginScreen"
      class="bg-new-green w-1 h-2/5 rounded-full relative"
    ></div>
    <div
      id="R_LoginScreen"
      class="flex relative px-4 pt-6 pb-8 items-center justify-center gap-x-2"
    >
      <div class="flex flex-col">
        <h1 class="font-bold text-gray-400 dark:text-gray-700 mb-4">
          {{ msg }}
        </h1>
        <div id="UsernamePrompt" class="mb-3 mt-2">
          <input
            class="flex shadow dark:bg-gray-700 border dark:border-gray-900 rounded w-full py-2 px-3 text-gray-800 dark:text-gray-200"
            id="username"
            type="username"
            placeholder="Użytkownik"
          />
        </div>
        <div id="PasswordPrompt" class="">
          <input
            class="flex shadow dark:bg-gray-700 border dark:border-gray-900 rounded w-full py-2 px-3 text-gray-800 dark:text-gray-200"
            id="password"
            type="password"
            placeholder="Hasło"
          />
        </div>
      </div>
      <button
        id="PromptButton"
        class="flex bg-new-green hover:bg-green-900 w-12 rounded h-24 border border-gray-900 shadow mt-12 items-center justify-center transition duration-300 ease-in-out"
      >
        <svg class="h-5 w-5 fill-current text-gray-200">
          <path d="M 0 0 L 20 10 L 0 20 Z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class LoginScreen extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
