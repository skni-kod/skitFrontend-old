<template>
  <div>
    <LoginScreen msg="Message" class="bg-gray-300 dark:bg-gray-800" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LoginScreen from "@/components/LoginScreen.vue"; // @ is an alias to /src

@Options({
  components: {
    LoginScreen,
  },
})
export default class Login extends Vue {}
</script>
