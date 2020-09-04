<template>
    <div id="home">
        <br>
        <b-jumbotron>
            <template v-slot:header>
                <p id="header">Hey, it's Euan</p>
                <p id="subheader">Student | Software Engineer | Filmmaker</p>
            </template>
            <hr class="my-4">
            <p id="description">
                I am a Software Engineering student based in Wellington that values creativity and diversity in the process of development.
                <br> I take pride in my passion to write simple software and grounded stories that
                <b id="bolded-description">“comfort the afflicted and afflict the comfortable”.</b>
            </p>
            <ul id="avatar-list">
                <li id="github-avatar">
                    <a href="https://github.com/hiphoppopotamus">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li id="mail-avatar">
                    <a href="mailto:euanwidjaja@yahoo.co.nz">
                        <i class="far fa-envelope"></i>
                    </a>
                </li>
                <li id="linkedin-avatar">
                    <a href="https://www.linkedin.com/in/euan-widjaja-092952191/">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li id="youtube-avatar">
                    <a href="https://www.youtube.com/channel/UCR-wVSOXH2e9q8qpJmyMaEA/">
                        <i class="fab fa-youtube"></i>
                    </a>
                </li>
            </ul>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: 'Home.vue',
    }
</script>

<style scoped>
    .jumbotron {
        margin: 0 55px 25px;
        border-radius: 15px;
        min-height: 400px;
        background:
            linear-gradient(
                rgba(0, 0, 0, 0.4),
                rgba(0, 0, 0, 0.76)
            ),
            url('../images/abstract-bg.jpg');
        background-size: cover;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: sandybrown;

    }

    #header {
        margin-bottom: 0.5%;
        font-size: 100%;
        font-family: 'Cooper Black Regular', Avenir, Helvetica, Arial, sans-serif;
        text-shadow: 5px 5px 2px #102e3c;
    }


    #subheader {
        font-size: 47%;
        font-family: "FuturaLT-CondExtraBoldObl", 'Cooper Black Regular', Arial, sans-serif;
        text-shadow: 4px 4px 2px #102e3c;
    }

    #description {
        margin-left: 25%;
        margin-right: 25%;
        font-size: 120%;
        font-family: FuturaLT-Heavy, Helvetica, Arial, sans-serif;
        text-shadow: 3px 3px 2px #102e3c;
    }

    #bolded-description {
        font-family: FuturaLT-HeavyOblique, Helvetica, Arial, sans-serif;
        color: antiquewhite;
    }

    hr {
        height: 10px;
        width: 70%;
        background-color: #0b232d;
        border-radius: 5px;
    }

    #avatar-list {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
        padding: 0;
        list-style-type: none;
    }

    #avatar-list li{
        margin: 0 15px;
        color: #6d696d;
        font-size: 200%;
        height: 60px;
        width: 60px;
        background: rgba(3, 8, 22, 0.69);
        line-height: 60px;
        border-radius: 30%;
        cursor: pointer;
        transition: 1s;
    }

    #avatar-list li:hover{
        box-shadow: 0 0 18px whitesmoke;
    }

    #github-avatar a {
        color: antiquewhite;
    }

    #mail-avatar a {
        color: antiquewhite;
    }

    #linkedin-avatar a {
        color: antiquewhite;
    }

    #youtube-avatar a {
        color: antiquewhite;
    }
</style>
