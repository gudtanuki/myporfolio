<template>
  <div id="app">
    <global-menu></global-menu>
    <router-view/>
  </div>
</template>

<script>

import GlobalMenu from '@/components/GlobalMenu'

export default {
  name: 'App',
  components: {
    GlobalMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>