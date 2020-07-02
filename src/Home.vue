<template>
  <div id="home">
    <NavigationHeader/>
    <Shenanigans/>
    <Projects/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import NavigationHeader from './components/NavigationHeader.vue'
import Shenanigans from './components/Shenanigans.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    NavigationHeader, Shenanigans, Projects
  }
}
</script>

<style>
  /**
   * Smooth scrolling on the whole document
   */
  html {
    scroll-padding-top: 100px; /* height of sticky header */
    scroll-behavior: smooth;
  }

  #home {
    background-color: floralwhite;
  }

  @font-face {
    font-family: 'Cooper Black Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Cooper Black Regular'), url('fonts/cooper-black/COOPBL.woff') format('woff');
  }
</style>
