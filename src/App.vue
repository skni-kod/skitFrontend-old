<template>
  <div id="app" class="bg-main-gray">
    <nav class="flex justify-between items-center ml-48 mr-12">
      
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
