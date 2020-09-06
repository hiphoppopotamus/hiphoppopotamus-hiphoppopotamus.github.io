<template>
  <div id="home">
    <NavigationHeader/>
    <Introduction/>
  </div>
</template>

<script>
import NavigationHeader from '../components/NavigationHeader.vue'
import Introduction from '../components/Introduction.vue'

export default {
  name: 'Home',
  components: {
    NavigationHeader, Introduction,
  }
}
</script>

<style>
  html {
    scroll-behavior: smooth;

  }

  body {
    /*background: linear-gradient(0deg, rgb(5, 15, 19) 0%, rgba(11,35,45,1) 80%);*/
    height: 100%;
    margin: 0;
    background: rgb(7, 21, 27) no-repeat fixed;

    /*background: rgb(16,46,60);*/
    /*background: linear-gradient(0deg, rgba(16,46,60,1) 4%, rgba(250,74,38,1) 50%, rgba(16,46,60,1) 94%);*/
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

  #home {

  }

  @font-face {
    font-family: 'CooperBlack-Regular';
    font-style: normal;
    font-weight: normal;
    src: local('CooperBlack-Regular'), url('../assets/fonts/cooper-black/COOPBL.woff') format('woff');
  }

  @font-face {
    font-family: 'FuturaLT-CondExtraBoldObl';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-CondExtraBoldObl'), url('../assets/fonts/futura/FuturaLT-CondExtraBoldObl.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-Bold';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-Bold'), url('../assets/fonts/futura/FuturaLT-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-BoldOblique';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-BoldOblique'), url('../assets/fonts/futura/FuturaLT-BoldOblique.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-Book';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-Book'), url('../assets/fonts/futura/FuturaLT-Book.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-BookOblique';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-BookOblique'), url('../assets/fonts/futura/FuturaLT-BookOblique.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-Heavy';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-Heavy'), url('../assets/fonts/futura/FuturaLT-Heavy.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-HeavyOblique';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-HeavyOblique'), url('../assets/fonts/futura/FuturaLT-HeavyOblique.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-Light';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-Light'), url('../assets/fonts/futura/FuturaLT-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-LightOblique';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-LightOblique'), url('../assets/fonts/futura/FuturaLT-LightOblique.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FuturaLT-Oblique';
    font-style: normal;
    font-weight: normal;
    src: local('FuturaLT-Oblique'), url('../assets/fonts/futura/FuturaLT-Oblique.ttf') format('truetype');
  }

  @font-face {
    font-family: 'ITC-FranklinGothic';
    font-style: normal;
    font-weight: normal;
    src:
            local('ITC-FranklinGothic'),
            url('../assets/fonts/itc-franklin-gothic/ITC-FranklinGothic-DemiCompressed.otf')
            format('opentype');
  }

  @font-face {
    font-family: 'ITC-FranklinGothic';
    font-style: italic;
    font-weight: normal;
    src:
            local('ITC-FranklinGothic'),
            url('../assets/fonts/itc-franklin-gothic/ITC-FranklinGothic-DemiCompressed-Italic.otf')
            format('opentype');
  }
</style>
