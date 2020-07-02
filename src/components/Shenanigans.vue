<template>
    <div id="shenanigans">
        <br>
        <b-jumbotron>
            <template v-slot:header>
                Taste the Life... <br>
                of a Persian Rug
            </template>

            <template v-slot:lead>
                My name is Euan. I really love Persian Rugs. My name is not a word in the project-level dictionary.
                Every time I see green squiglies under my name, I feel sad. Like whyyyyyyy.
            </template>

            <hr class="my-4">

            <p>
                I'm pretty sure this image is available for reuse and all hahahah pls dont @ me
            </p>
        </b-jumbotron>
    </div>
</template>

<script>
    export default {
        name: 'Shenanigans.vue',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #shenanigans {

    }

    .jumbotron {
        border-radius: 15px;
        margin: 85px 55px 25px;
        /*margin: 0 1%;*/
        padding-top: 85px;
        background:
            linear-gradient(
                rgba(0, 0, 0, 0.30),
                rgba(0, 0, 0, 0.7)
            ),
            url('../images/abstract-bg.jpg');
        background-size: cover;

        font-family: Futura, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: burlywood;
        height: 550px;
        min-height: 400px;
    }

    .display-3 {
        font-family: 'Cooper Black Regular', Avenir, Helvetica, Arial, sans-serif;
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
        border-radius: 5px;
    }
</style>
