<script>
import axios from "axios";
export default {
    components: {
    },
    data() {
        return {
            projects: null,
            base_url_api: 'http://localhost:8000',
            loading: true,
            error: null

        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results);
                    this.projects = response.data.results;
                    this.loading = false;
                })
                .catch(error => {
                    console.error(error);
                    this.error = error.message;
                    this.loading = false;
                })
        }
    },
    mounted() {
        this.getProjects(this.base_url_api + '/api/projects');
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
