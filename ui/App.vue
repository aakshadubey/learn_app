<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Learn Easy</h1>
    <!-- <HelloWorld msg="LearnEasy"/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import TeamComponent from './components/team.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // TeamComponent
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  // background-image: url("/Users/aakshadubey/Desktop/Learn_app/ui/assets/bg.webp");
}





</style>
