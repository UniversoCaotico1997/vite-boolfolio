<script>
import NavBar from "./NavBar.vue";
import Jumbotron from "./jumbotron.vue";
export default {
    name: 'AppHeader',
    components: {
        NavBar,
        Jumbotron
    }
}

</script>

<template>

    <NavBar></NavBar>

    <Jumbotron></Jumbotron>

</template>

<style lang="scss" scoped>

</style>