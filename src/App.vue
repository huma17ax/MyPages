<template>
  <div id="app">
    <MyHeader v-bind:style="{height: headerheight + 'px'}"></MyHeader>
    <!--<img alt="Vue logo" src="./assets/logo.png" />-->
    <Animation></Animation>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyHeader from './components/Header.vue'
import Animation from './components/PageSwitchAnimation'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    MyHeader,
    Animation
  },
  data: function () {
    return {
      headerheight: 70
    }
  }
}
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  padding-top: 70px;
  margin-top: 20px;
}
</style>
