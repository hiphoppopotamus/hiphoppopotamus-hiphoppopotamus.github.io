<template>
    <div id="projects-component">
        <div>
            <b-jumbotron
                    @mouseover="isSoftware = false"
                    @mouseleave="isSoftware = true">
                <template v-if="isSoftware" v-slot:header>
                    <div class="project-header-unhovered">
                        <h1>software</h1>
                    </div>
                </template>
                <template v-else v-slot:lead>
                    <a class="item"
                         v-for="snippet in softwareSnippets"
                         :key="snippet.id"
                         v-bind:style="{ backgroundImage: 'url(' + require('@/assets/' + snippet.path) + ')' }"
                         :href="snippet.url" target="_blank"
                    >
                            <div v-if="snippet.id !== 3" class="software-snippet-details">
                                <h1> {{ snippet.name }} </h1>
                                <ul class="skills-list">
                                    <li v-for="skill in snippet.skills" :key="skill">
                                        <h3>
                                            <b-badge pill variant="light" > {{ skill }} </b-badge>
                                        </h3>
                                    </li>
                                </ul>
                            </div>
                            <div v-else class="software-snippet-details">
                                <h1 id="software-more"> {{ snippet.name }} </h1>
                            </div>
                    </a>
                </template>
            </b-jumbotron>
        </div>
        <div>
            <b-jumbotron
                    @mouseover="isShortFilm = false"
                    @mouseleave="isShortFilm = true">
                <template v-if="isShortFilm" v-slot:header>
                    <div class="project-header-unhovered">
                        <h1>short films</h1>
                    </div>
                </template>
                <template v-else v-slot:lead>
                    <a class="item"
                         v-for="snippet in shortFilmSnippets"
                         :key="snippet.id"
                         v-bind:style="{ backgroundImage: 'url(' + require('@/assets/' + snippet.path) + ')' }"
                         :href="snippet.url" target="_blank"
                    >
                        <div class="short-film-snippet-details">
                            <h2 class="short-film-name"> {{ snippet.name }} </h2>
                        </div>
                    </a>
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
                        path: "images/SpaceJamSnippet.png",
                        url: "https://www.youtube.com/watch?v=rwLaeRA3WpI",
                        name: "SPACE JAM",
                        skills: [
                            'Java',
                            'Swing'
                        ]
                    },
                    {
                        id: 2,
                        path: "images/BecomeASaintSnippet.png",
                        url: "https://youtu.be/56L9mZmUjvs",
                        name: "BECOME A SAINT",
                        skills: [
                            'Vue.js',
                            'Node.js',
                            'MySQL'
                        ]
                    },
                    {
                        id: 3,
                        path: "images/abstract-bg.jpg",
                        url: "https://github.com/hiphoppopotamus",
                        name: "MORE PROJECTS"
                    }
                ]
                ,
                shortFilmSnippets: [
                    {
                        id: 1,
                        path: "images/SneezeSnippet.png",
                        url: "https://www.youtube.com/watch?v=elbYKKMY3HM",
                        name: "SNEEZE",
                        director: "Daphne Martinez & Euan Widjaja"
                    },
                    {
                        id: 2,
                        path: "images/BirthdaySurpriseSnippet.png",
                        url: "https://www.youtube.com/watch?v=Grb-r-GJyYk",
                        name: "BIRTHDAY SURPRISE",
                        director: "Euan Widjaja"

                    },
                    {
                        id: 3,
                        path: "images/abstract-bg.jpg",
                        name: "COMING SOON"
                    }
                ]
            }
        },

        methods: {

        }
    }
</script>

<style scoped>
    #projects-component {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .jumbotron {
        margin: 0 auto 20px;
        padding: 0;
        text-align: center;
        background: #07151B;
        border-radius: 15px;
        border-style: dotted;
        border-color: burlywood;
        min-height: 253px;
        background-size: cover;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: FuturaLT-CondExtraBoldObl, Avenir, Helvetica, Arial, sans-serif;
        transition: 0.3s;
        max-width: 1171px;
    }

    .jumbotron:hover {
        padding: 0;
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

    .project-header-unhovered h1 {
        width: 100%;
        line-height: 162px;
        font-size: 90%;
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

        background-repeat: no-repeat;
        background-size: 100%;
        box-shadow:inset 0 0 0 2000px rgba(9, 9, 9, 0.75);

        flex: 0 0 388px;
        text-align: center;
    }

    .software-snippet-details {
        margin-top: 75px;
        color: white;
    }

    .short-film-snippet-details {
        margin-top: 105px;
        color: white;
    }

    .short-film-name {
        margin-top: 50px;

    }

    #software-more {
        margin-top: 100px;
    }

    .skills-list {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin-top: 15px;
        padding: 0;
        list-style-type: none;
    }

    .skills-list li{
        margin: 0 5px;
    }

    .skills-list li:hover{
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
