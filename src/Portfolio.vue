<template>
  <div id="portfolio">
    <br>
    <NavigationHeader/>
    <Home/>
<!--    <Projects/>-->
  </div>
</template>

<script>
import NavigationHeader from './components/NavigationHeader.vue'
import Home from './components/Home.vue'
// import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    NavigationHeader, Home,
    // Projects
  }
}
</script>

<style>
  /**
   * Smooth scrolling on the whole document
   */
  html {
    height: 100%;
    scroll-padding-top: 100px; /* height of sticky header */
    scroll-behavior: smooth;
  }

  body {
    background: rgb(16,46,60);
    background: linear-gradient(0deg, rgba(250,74,38,1) 0%, rgba(16,46,60,1) 80%);
    background-size: cover;
  }

  @font-face {
    font-family: 'Cooper Black Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Cooper Black Regular'), url('fonts/cooper-black/COOPBL.woff') format('woff');
  }

  @font-face {
    font-family: 'FuturaLT-CondExtraBoldObl';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-CondExtraBoldObl'), url('fonts/futura/FuturaLT-CondExtraBoldObl.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-Bold';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-Bold'), url('fonts/futura/FuturaLT-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-BoldOblique';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-BoldOblique'), url('fonts/futura/FuturaLT-BoldOblique.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-Book';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-Book'), url('fonts/futura/FuturaLT-Book.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-BookOblique';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-BookOblique'), url('fonts/futura/FuturaLT-BookOblique.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-Heavy';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-Heavy'), url('fonts/futura/FuturaLT-Heavy.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-HeavyOblique';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-HeavyOblique'), url('fonts/futura/FuturaLT-HeavyOblique.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-Light';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-Light'), url('fonts/futura/FuturaLT-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-LightOblique';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-LightOblique'), url('fonts/futura/FuturaLT-LightOblique.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-Oblique';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-Oblique'), url('fonts/futura/FuturaLT-Oblique.ttf') format('truetype');
  }
</style>
