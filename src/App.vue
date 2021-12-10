<template>
  <div id="app" class="bg-gray-900">
    <nav class=" text-skni-blue-500 text-xl font-mono mx-16 pt-8 font-extrabold">
      <router-link to="/"><span class="border-skni-blue-500 border-2 p-3 rounded-full px-8 mx-4">Home</span></router-link>
      <router-link to="/admin-panel"><span class="border-skni-blue-500 border-2 p-3 rounded-full px-8 mx-4">Panel Admina</span></router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 14px;
}

#nav a {
  font-size: 16px;
}

#nav a.router-link-exact-active {
  color: #000000
}
</style>
