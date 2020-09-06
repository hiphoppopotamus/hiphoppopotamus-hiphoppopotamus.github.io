<template>
    <div id="projects-component">
        <div>
            <b-jumbotron
                    :class="{ 'project-jumbotron-hovered': !isSoftware }"
                    @mouseover="this.toggleSoftwareHover"
                    @mouseleave="this.toggleSoftwareUnhover">
                <template v-if="isSoftware" v-slot:header>
                    <div class="project-header-unhovered">
                        <h1>software</h1>
                    </div>
                </template>
                <template v-else v-slot:lead>
                    <div class="item"
                         v-for="snippet in softwareSnippets"
                         :key="snippet.id"
                         v-bind:style="{ backgroundImage: 'url(' + require('@/assets/' + snippet.url) + ')' }"
                    >
                    </div>
                </template>
            </b-jumbotron>
        </div>
        <div>
            <b-jumbotron
                    :class="{ 'project-jumbotron-hovered': !isShortFilm }"
                    @mouseover="this.toggleShortFilmHover"
                    @mouseleave="this.toggleShortFilmUnhover">
                <template v-if="isShortFilm" v-slot:header>
                    <div class="project-header-unhovered">
                        <h1>short films</h1>
                    </div>
                </template>
                <template v-else v-slot:lead>
                    <div class="item"
                         v-for="snippet in shortFilmSnippets"
                         :key="snippet.id"
                         v-bind:style="{ backgroundImage: 'url(' + require('@/assets/' + snippet.url) + ')' }"
                    >
                    </div>
                </template>
            </b-jumbotron>
        </div>



        <!--        <b-table-simple class="table-borderless">-->
        <!--            <b-tr>-->
        <!--                <b-td class="right-description">-->
        <!--                    <p class="right-description">-->
        <!--                        &lt;!&ndash;                        Hello mama bond. This is a fatty doggo. I love dogs. My auntie loves eating dogs.&ndash;&gt;-->
        <!--                        &lt;!&ndash;                        I bite at the tongue that eats me! Some kind of animal mechanical cannibal.&ndash;&gt;-->
        <!--                    </p>-->
        <!--                </b-td>-->
        <!--                <b-td rowspan="2">-->
        <!--                    <iframe class="right-video" src="https://www.youtube.com/embed/elbYKKMY3HM"-->
        <!--                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
        <!--                </b-td>-->
        <!--            </b-tr>-->
        <!--            <b-tr>-->
        <!--                <b-td>-->
        <!--                    <p class="right-title">Sneeze</p>-->
        <!--                    <p class="right-subtitle">Dir. Daphne Martinez and Euan Widjaja</p>-->
        <!--                </b-td>-->
        <!--            </b-tr>-->

        <!--            <b-tr>-->
        <!--                <b-td class="right-description">-->
        <!--                    <p class="right-description">-->
        <!--                        Hello mama bond. This is a fatty doggo. I love dogs. My auntie loves eating dogs.-->
        <!--                        I bite at the tongue that eats me! Some kind of animal mechanical cannibal.-->
        <!--                    </p>-->
        <!--                </b-td>-->
        <!--                <b-td rowspan="2">-->
        <!--                    <iframe class="right-video" src="https://www.youtube.com/embed/Grb-r-GJyYk"-->
        <!--                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
        <!--                </b-td>-->
        <!--            </b-tr>-->
        <!--            <b-tr>-->
        <!--                <b-td>-->
        <!--                    <p class="right-title">Birthday Surprise</p>-->
        <!--                    <p class="right-subtitle">Dir. Euan Widjaja</p>-->
        <!--                </b-td>-->
        <!--            </b-tr>-->

        <!--        </b-table-simple>-->
    </div>
</template>

<script>
    export default {
        name: 'ProjectsComponent',

        data() {
            return {
                isSoftware: true,
                isShortFilm: true,
                softwareSnippets: [
                    {
                        id: 1,
                        url: "images/SpaceJamSnippet.png"
                    },
                    {
                        id: 2,
                        url: "images/BecomeASaintSnippet.png"
                    },
                    {
                        id: 3,
                        url: "images/abstract-bg.jpg"
                    }
                ]
                ,
                shortFilmSnippets: [
                    {
                        id: 1,
                        url: "images/SneezeSnippet.png"
                    },
                    {
                        id: 2,
                        url: "images/BirthdaySurpriseSnippet.png"
                    },
                    {
                        id: 3,
                        url: "images/abstract-bg.jpg"
                    }
                ]
                // background-image: url("../assets/images/SpaceJamSnippet.png");

            }
        },

        methods: {

            toggleSoftwareHover() {
                this.isSoftware = false;
            },

            toggleSoftwareUnhover() {
                this.isSoftware = true;
            },

            toggleShortFilmHover() {
                this.isShortFilm = false;
            },

            toggleShortFilmUnhover() {
                this.isShortFilm = true;
            }
        }
    }
</script>

<style scoped>
    #projects-component {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    #project-container {

    }

    .jumbotron {
        text-align: center;
        background: #07151B;
        margin: 0 55px 25px;
        border-radius: 15px;
        border-style: dotted;
        border-color: burlywood;
        min-height: 253px;
        background-size: cover;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: FuturaLT-CondExtraBoldObl, Avenir, Helvetica, Arial, sans-serif;
    }

    .project-jumbotron-hovered {
        padding: 0 0 0 0;
        background:
                linear-gradient(
                        rgba(18, 18, 18, 0.5),
                        rgba(0, 0, 0, 0.76)
                ),
                url('../assets/images/abstract-bg.jpg');
        background-size: cover;
    }

    .display-3 {
        transform: translateY(25%);
        color: #d89351;
        text-shadow: 5px 5px 2px #102e3c;
    }

    .project-display-3-hovered {
    }

    .project-header-unhovered h1 {
        font-size: 90%;
    }

    .project-header-hovered {
    }

    .lead {
        border-radius: 12px;
        border-style: hidden;
        margin: 0;
        height: 247px;
        display: flex;
        width: 100%;
        overflow-x: auto;
    }

    .item {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border: 2px hidden #f00;
        border-radius: 12px;

        /*background-image: url("../assets/images/SneezeSnippet.png");*/
        background-repeat: no-repeat;
        background-size: 100%;

        flex: 0 0 388px;
        text-align: center;
        transition: transform 300ms ease 100ms;
    }








    table {
        table-layout: fixed;
        width: 100%;
        /*border-collapse: separate;*/
        border-spacing: 0 20px;
        color: burlywood;
    }

    iframe {
        width: 560px;
        height: 315px;
        border-radius: 15px;
    }

    .right-description {
        font-family: Futura-CondensedExtraBold, CooperBlack-Regular, Avenir, Arial, sans-serif;
        font-size: 20px;
        height: 20%;
        text-align: right;
        color: #F5F5F5;
        margin-right: 60px;
    }

    .right-title {
        font-family: FuturaLT-HeavyOblique, Avenir, Arial, sans-serif;
        font-size: 50px;
        text-align: right;
        vertical-align: bottom;
        color: #F5F5F5;
        margin-bottom: 0;
        margin-right: 60px;
    }

    .right-subtitle {
        font-family: FuturaLT-Heavy, Avenir, Arial, sans-serif;
        text-align: right;
        color: #F5F5F5;
        margin-top: 0;
        margin-right: 60px;
    }

    .right-video {
        width: 560px;
        float: right;
    }


    .left-description {
        font-family: FuturaLT-CondExtraBoldObl, CooperBlack-Regular, Avenir, Arial, sans-serif;
        font-size: 20px;
        height: 20%;
        text-align: left;
        color: #F5F5F5;
        margin-left: 60px;
    }

    .left-title {
        font-family: FuturaLT-HeavyOblique, Avenir, Arial, sans-serif;
        font-size: 50px;
        text-align: left;
        vertical-align: bottom;
        color: #F5F5F5;
        margin-bottom: 0;
        margin-left: 60px;
    }

    .left-subtitle {
        font-family: FuturaLT-Heavy, Avenir, Arial, sans-serif;
        text-align: left;
        color: #F5F5F5;
        margin-top: 0;
        margin-left: 60px;
    }


    /*#projects-header-container {*/
    /*    margin-top: 159px;*/
    /*    margin-bottom: 100px;*/
    /*}*/
</style>
