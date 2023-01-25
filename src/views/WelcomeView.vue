<script>
import Jumbotron from "../components/jumbotron.vue";
export default {
    name: 'WelcomeView',
    components: {
        Jumbotron
    }
}

</script>

<template>
    <div class="container">
        <router-link :to="{ name: 'home' }">
            <div
                class="jumbotron jumbotron-fluid position-absolute top-50 start-50 translate-middle border rounded shadow p-3 mb-5 text-white text-center bg-dark">
                <h1 class="display-4">
                    Welcome In My Space
                </h1>
                <p class="lead">
                    Click For See More
                </p>
            </div>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.container {
    background-image: url(../assets/img/Splash.png);
}
</style>