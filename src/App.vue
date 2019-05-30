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

<style lang="scss">
html, body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;

  div#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 40px;
  }
}
</style>