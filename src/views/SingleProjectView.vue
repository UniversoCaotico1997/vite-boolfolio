<script>
import axios from "axios";
import { store } from "../store.js";

export default {
    name: 'SingleProjectView',
    data() {
        return {
            project: null,
            loading: true,
            store
        }
    },
    mounted() {
        // console.log(this.$route.params.slug);

        const url = this.store.base_url_api + '/api/projects/' + this.$route.params.slug
        // console.log(url);

        axios
            .get(url)
            .then(response => {
                // console.log(response.data.results);

                if (response.data.success) {
                    this.project = response.data.results
                    this.loading = false
                } else {
                    this.$router.push({ name: 'not-found' })
                }
            }).catch(error => {
                console.log(error)
            })
    }
}

</script>

<template>
    <div class="single_project" v-if="project">
        <img class="img-fluid w-100" :src="store.base_url_api + '/storage/' + project.cover_image" :alt="project.title">
        <div class="container">
            <h2>
                {{ project.title }}
            </h2>
            <div class="content">
                {{ project.description }}
            </div>
        </div>
    </div>
</template>

<style>

</style>