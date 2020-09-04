<template>
    <div id="aboutme">
        <br>
        <b-jumbotron>
            <template v-slot:header>
                Hey, it's Euan. <br>
                <p id="subheader">Student | Software Engineer | Filmmaker</p>
            </template>

            <hr class="my-4">

            <p id="description">
                I am a software engineering student in the University of Canterbury
                who enjoys the
                creativity job development software growth film complexities of humanity
                wonderful incomprehensibility of humanity<br>
            </p>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: 'AboutMe.vue',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #home {

    }

    .jumbotron {
        border-radius: 15px;
        margin: 10px 55px;
        background:
            linear-gradient(
                rgba(0, 0, 0, 0.30),
                rgba(0, 0, 0, 0.7)
            ),
            url('../images/abstract-bg.jpg');
        background-size: cover;
        background-position-y: 100%;

        font-family: Futura, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: sandybrown;
        height: auto;
        min-height: 400px;
    }

    .display-3 {
        font-family: 'Cooper Black Regular', Avenir, Helvetica, Arial, sans-serif;
        font-size: 4em;
    }

    #subheader {
        font-family: "FuturaLT-CondExtraBoldObl", 'Cooper Black Regular', Avenir, Arial, sans-serif;

        height: 20%;
        color: sandybrown;
        margin-top: 0.7%;
        font-size: 0.6em;
    }

    #description {
        margin-left: 20%;
        margin-right: 20%;
        margin-bottom: 4.1%;
    }

    .lead {
        margin: 0 20%;
        text-align: center;
    }

    hr {
        height: 10px;
        width: 70%;
        background-color: #0b232d; /* Modern Browsers */
        border-radius: 5px;
    }

    .avatar {
        vertical-align: middle;
        /*width: auto;*/
        /*height: auto;*/
        border-radius: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    ul{
        height: 15vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }

    ul li{
        position: relative;
        display: block;
        color: #666;
        font-size: 30px;
        height: 60px;
        width: 60px;
        background: #171515;
        line-height: 60px;
        border-radius: 50%;
        margin: 0 15px;
        cursor: pointer;
        transition: 0.5s;
    }

    ul li:before{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        height: inherit;
        width: inherit;
        /* background: #d35400; */
        border-radius: 50%;
        transform: scale(.9);
        z-index: -1;
        transition: .5s;
    }

    ul li:nth-child(1):hover{
        color: #2a6cbb;
        box-shadow: 0 0 15px #2867B2;
        text-shadow: 0 0 2px #2867B2;
    }

    ul li:nth-child(1) a {
        color: #2a6cbb;
    }

    ul li:nth-child(2):hover{
        color: #ff1a1a;
        box-shadow: 0 0 10px #ff0000;
        text-shadow: 0 0 2px #ff0000;
    }

    ul li:nth-child(2) a {
        color: #ff1a1a;
    }
</style>
