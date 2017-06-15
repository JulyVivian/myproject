<template>
  <div id="app">
    <div @click="goToPage"><img src="./assets/logo.png"></div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      goToPage () {
        console.log(123)
        this.$router.push('/world')
      }
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
