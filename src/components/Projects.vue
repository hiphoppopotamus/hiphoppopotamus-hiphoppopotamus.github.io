<template>
    <div id="projects">
        <br>
        <b-table-simple class="table-borderless">
            <b-tr>
                <b-td class="right-description">
                    <p class="right-description">
<!--                        Hello mama bond. This is a fatty doggo. I love dogs. My auntie loves eating dogs.-->
<!--                        I bite at the tongue that eats me! Some kind of animal mechanical cannibal.-->
                    </p>
                </b-td>
                <b-td rowspan="2">
                    <iframe class="right-video" src="https://www.youtube.com/embed/elbYKKMY3HM"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </b-td>
            </b-tr>
            <b-tr>
                <b-td>
                    <p class="right-title">Sneeze</p>
                    <p class="right-subtitle">Dir. Daphne Martinez and Euan Widjaja</p>
                </b-td>
            </b-tr>

            <br>
            <br>

            <b-tr>
                <b-td rowspan="2">
                    <iframe class="left-video" src="https://www.youtube.com/embed/Grb-r-GJyYk"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </b-td>
                <b-td class="left-description">
                    <p class="left-description">
<!--                        Hello mama bond. This is a fatty doggo. I love dogs. My auntie loves eating dogs.-->
<!--                        I bite at the tongue that eats me! Some kind of animal mechanical cannibal.-->
                    </p>
                </b-td>
            </b-tr>
            <b-tr>
                <b-td>
                    <p class="left-title">Birthday Surprise</p>
                    <p class="left-subtitle">Dir. Euan Widjaja</p>
                </b-td>
            </b-tr>
        </b-table-simple>
    </div>
</template>

<script>
    export default {
        name: 'Projects.vue',
    }
</script>

<style scoped>
    #projects {
        margin: 20px 80px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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
        font-family: Futura-CondensedExtraBold, 'Cooper Black Regular', Avenir, Arial, sans-serif;
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
        font-family: FuturaLT-CondExtraBoldObl, 'Cooper Black Regular', Avenir, Arial, sans-serif;
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

</style>
