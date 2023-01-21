<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    components: {
    },
    data() {
        return {
            projects: null,
            baseUrlApi: 'http://localhost:8000'

        }
    },
    method: {
        getProjetcs() {

        }
    },
    mounted() {
        this.getProjetcs();
    }
}
</script>

<template>
    <section class="vue-home">
        <div class="container">

        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
