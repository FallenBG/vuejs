<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Message msg="Welcome to Your Vue.js App"/>
    <Message msg="Welcome asdsade.js App"/>
    <Message msg="WeApp"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Message from './components/Message'

export default {
    name: 'app',
    components: {
        // HelloWorld,
        Message
    },

    data() {
        return {
            // key: value
        }
    },
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
