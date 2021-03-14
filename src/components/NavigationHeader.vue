<template>
    <div id="navigation-header">
        <b-navbar id="navbar" fixed="top" toggleable="md" type="dark" variant="onyx-blue">
            <b-navbar-brand :to="{ name: 'home' }">euan widjaja</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item class="anchor" :to="{ name: 'home' }">HOME</b-nav-item>
                    <b-nav-item class="anchor" :to="{ name: 'projects' }">PROJECTS</b-nav-item>
                    <b-nav-item class="anchor"
                                href="https://drive.google.com/file/d/1CN73G2FEJHVxum-soZDC3A--zhzVZ1Ev/view?usp=sharing"
                                target="_blank">RESUME</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'NavigationHeader'
    }
</script>

<style scoped>
    #navigation-header {
        font-family: "FuturaLT-CondensedExtraBold", Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-bottom: 95px;
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
        background-color: rgb(7, 21, 27) !important;
     }
</style>
