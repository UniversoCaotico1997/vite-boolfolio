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
        // console.log(this.$params.slug);

        const url = this.store.base_url_api + '/api/projects' + this.$params.slug
        axios.get(this.store + '/projects/')
    }
}

</script>

<template>
    <div>
        <h1>
            Ciao
        </h1>
    </div>
</template>

<style>

</style>