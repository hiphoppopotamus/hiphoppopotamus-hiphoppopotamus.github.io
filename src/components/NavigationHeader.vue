<template>
    <div id="navigation-header">
        <b-navbar id="navbar" fixed="top" toggleable="md" type="dark" variant="onyx-blue">
<!--                  v-b-scrollspy:portfolio="{offset:100}"-->
            <b-navbar-brand href="#">euan widjaja</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item class="anchor" href="#home">HOME</b-nav-item>
<!--                    <b-nav-item class="anchor" href="#projects">PROJECTS</b-nav-item>-->
                    <b-nav-item class="anchor"
                                href="https://drive.google.com/file/d/1GU5R77zHob4qKCG8j8nrHy8eljovrDoR/view?usp=sharing"
                                target="_blank">RESUME</b-nav-item>
<!--                    <b-nav-item class="anchor" href="#aboutme">ABOUT</b-nav-item>-->
<!--                    <b-nav-item class="anchor" href="#projects">CONTACT</b-nav-item>-->
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'NavigationHeader',
        // props: {
        //     msg: String
        // }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #navigation-header {
        font-family: "Futura-CondensedExtraBold", "Gill Sans", Futura, 'Cooper Black Regular', Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .navbar {
        min-height: 85px;
        font-size: 140%;
    }

    .navbar-brand {
        margin-left: 40px;
        font-size: 120%;
    }

    .navbar-nav {
        margin-right: 40px;
    }

    .navbar-toggler {
        margin-right: 40px;
    }

    .bg-onyx-blue {
        background-color: #102e3c !important;
     }

</style>
