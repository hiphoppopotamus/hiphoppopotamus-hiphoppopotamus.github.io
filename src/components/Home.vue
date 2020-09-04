<template>
    <div id="home">
        <br>
        <b-jumbotron>
            <template v-slot:header>
                Hey, it's Euan<br>
                <p id="subheader">Student | Software Engineer | Filmmaker</p>
            </template>
            <hr class="my-4">
            <p id="description">
                I am a Software Engineering student based in Wellington that values creativity and diversity in the process of development.
                <br> I take pride in my passion to write simple systems and grounded stories that
                <b id="bolded-description">“comfort the afflicted and afflict the comfortable”.</b>
            </p>
            <ul>
                <!--                    <li>-->
                <!--                        <a href="https://www.facebook.com/ewidjajae">-->
                <!--                            <i class="fab fa-facebook-f" href="https://www.facebook.com/ewidjajae"></i>-->
                <!--                        </a>-->
                <!--                    </li>-->
                <!--&lt;!&ndash;                    <li><i class="fab fa-twitter"></i></li>&ndash;&gt;-->
                <!--                    <li>-->
                <!--                        <a href="https://www.instagram.com/ewwwidjaja/">-->
                <!--                            <i class="fab fa-instagram"></i>-->
                <!--                        </a>-->
                <!--                    </li>-->
                <li>
                    <a href="https://github.com/hiphoppopotamus">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="mailto:euanwidjaja@yahoo.co.nz">
                        <i class="far fa-envelope"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/euan-widjaja-092952191/">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #home {
        padding-bottom: 1em;
    }

    .jumbotron {
        border-radius: 15px;
        margin: 60px 55px 25px;
        /*margin: 0 1%;*/
        padding-top: 56px;
        padding-bottom: 56px;
        background:
            linear-gradient(
                rgba(0, 0, 0, 0.30),
                rgba(0, 0, 0, 0.7)
            ),
            url('../images/abstract-bg.jpg');
        background-size: cover;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: sandybrown;
        height: auto;
        min-height: 400px;
    }

    .display-3 {
        margin-top: 0px;
        font-family: 'Cooper Black Regular', Avenir, Helvetica, Arial, sans-serif;
        text-shadow: 5px 5px 2px #102e3c;
        font-size: 4.3em;
    }

    #subheader {
        font-family: "FuturaLT-CondExtraBoldObl", 'Cooper Black Regular', Avenir, Arial, sans-serif;
        text-shadow: 4px 4px 2px #102e3c;
        color: sandybrown;
        margin-top: 0.7%;
        font-size: 0.47em;
    }

    #description {
        text-shadow: 3px 3px 2px #102e3c;
        padding-top: 5px;
        font-family: FuturaLT-Heavy, Helvetica, Arial, sans-serif;
        margin-left: 25%;
        margin-right: 25%;
        font-size: 1.19em;
    }

    #bolded-description {
        font-family: FuturaLT-HeavyOblique, Helvetica, Arial, sans-serif;
        color: floralwhite;
    }

    .lead {
        margin: 0 20%;
        text-align: center;
    }

    hr {
        height: 10px;
        width: 70%;
        /* Set the hr color */
        /*color: #102e3c; !* old IE *!*/
        background-color: #102e3c; /* Modern Browsers */
        /*background-color: rgb(214, 113, 87);*/
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
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
        padding: 0;
        list-style-type: none;
    }

    ul li{
        position: relative;
        display: block;
        color: #6d696d;
        font-size: 30px;
        height: 60px;
        width: 60px;
        background: rgba(3, 8, 22, 0.69);
        line-height: 60px;
        border-radius: 30%;
        margin: 0 15px;
        cursor: pointer;
        transition: 0.5s;
    }

    /*ul li:before{*/
    /*    position: absolute;*/
    /*    content: '';*/
    /*    top: 0;*/
    /*    left: 0;*/
    /*    height: inherit;*/
    /*    width: inherit;*/
    /*    !* background: #d35400; *!*/
    /*    border-radius: 50%;*/
    /*    transform: scale(.9);*/
    /*    z-index: -1;*/
    /*    transition: .5s;*/
    /*}*/

    /*ul li:nth-child(1):hover{*/
    /*    color: #456cba;*/
    /*    box-shadow: 0 0 15px #4267B2;*/
    /*    text-shadow: 0 0 2px #4267B2;*/
    /*}*/

    /*ul li:nth-child(1) a {*/
    /*    color: #456cba;*/
    /*}*/

    /*ul li:nth-child(2):hover{*/
    /*    color: #e23670;*/
    /*    box-shadow: 0 0 15px #E1306C;*/
    /*    text-shadow: 0 0 2px #E1306C;*/
    /*}*/

    /*ul li:nth-child(2) a {*/
    /*    color: #e23670;*/
    /*}*/


    ul li:nth-child(1):hover{
        /*color: darkgrey;*/
        box-shadow: 0px 0px 20px #102e3c;
        /*box-shadow: 0 0 20px darkgrey;*/
        /*text-shadow: 0 0 0 darkgrey;*/
    }

    ul li:nth-child(1) a {
        color: darkgrey;
    }

    ul li:nth-child(2):hover{
        color: #ff0000;
        box-shadow: 0px 0px 20px #102e3c;
        text-shadow: 0 0 0 #ff0000;
    }

    ul li:nth-child(2) a {
        color: #5db6ff;
    }

    ul li:nth-child(3):hover{
        /*color: #2a6cbb;*/
        box-shadow: 0px 0px 20px #102e3c;
        /*box-shadow: 0 0 20px #2867B2;*/
        /*text-shadow: 0 0 0 #2867B2;*/
    }

    ul li:nth-child(3) a {
        color: #2a6cbb;
    }


    ul li:nth-child(4):hover{
        color: #ff0000;
        box-shadow: 0px 0px 20px #102e3c;
        text-shadow: 0 0 0 #ff0000;
    }

    ul li:nth-child(4) a {
        color: #ff0000;
    }
</style>
