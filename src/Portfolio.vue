<template>
  <div id="portfolio">
    <br>
    <NavigationHeader/>
    <Home/>
    <Projects/>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import NavigationHeader from './components/NavigationHeader.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'App',
  components: {
    NavigationHeader, Home, Projects
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

  #portfolio {background: rgb(16,46,60);
    background: linear-gradient(0deg, rgba(16,46,60,1) 4%, rgba(250,74,38,1) 50%, rgba(16,46,60,1) 94%);
    /*background: rgb(16,46,60);*/
    /*background: linear-gradient(0deg, rgba(16,46,60,1) 0%, rgba(253,70,33,1) 52%, rgba(16,46,60,1) 100%);*/
    /*background: rgb(253,70,33);*/
    /*background: radial-gradient(circle, rgba(253,70,33,1) 0%, rgba(16,46,60,1) 86%);*/
    /*background: rgb(254,159,29);*/
    /*background: linear-gradient(*/
    /*        180deg,*/
    /*        rgba(254,159,29,1) 0%,*/
    /*        rgba(253,70,33,1) 32%,*/
    /*        rgba(85,41,51,1) 85%,*/
    /*        rgba(16,46,60,1) 100%);*/
    /*background: rgb(237,223,200);*/
    /*background: linear-gradient(180deg, rgba(237,223,200,1) 0%, rgba(245,185,173,1) 32%, rgba(219,187,194,1) 75%, rgba(211,234,245,1) 100%);*/
    /*background: rgb(252,238,214);*/
    /*background: linear-gradient(180deg, rgba(252,238,214,1) 0%, rgba(251,225,220,1) 32%, rgba(249,225,230,1) 85%, rgba(215,226,231,1) 100%);*/
    /*background: rgb(252,238,214);*/
    /*background: linear-gradient(180deg, rgba(252,238,214,1) 0%, rgba(255,140,118,1) 32%, rgba(241,148,167,1) 85%, rgba(16,46,60,1) 100%);*/
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
