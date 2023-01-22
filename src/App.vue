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
                    // console.log(response.data.results.data);
                    this.projects = response.data.results;
                    this.loading = false;
                })
                .catch(error => {
                    // console.error(error);
                    this.error = error.message;
                    this.loading = false;
                })
        },
        getImagePath(path) {
            // console.log(path);
            if (path) {
                return this.base_url_api + /storage/ + path
            }
            return '/img/placeholder.jpg'
        },
        nextPage(url) {
            // console.log(url);
            this.getProjects(url)
        },
        prevPage() {
            // console.log(url);
            this.getProjects(url)
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
            <h1>Projects</h1>

            <div v-if="projects">

                <div class="row row-cols-1 row-cols-sm-3 g-4">
                    <div class="col" v-for="project in projects.data">
                        <div class="card">
                            <img class="card-image" :src="getImagePath(project.cover_image)" alt="">
                            <div class="card-body">
                                <h3 class="card-title">
                                    {{ project.title }}
                                </h3>
                                <!-- /.card-title -->
                                <p class="card-text">
                                    {{ project.description }}
                                </p>
                                <!-- /.card-text -->
                                <a href="">Read More</a>
                                <!-- <ul class="list-group list-group-flush">
                                    <li class="list-group-item">{{ project.description }}</li>
                                    <li class="list-group-item">{{ project.description }}</li>
                                </ul> -->
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.cols -->
                </div>
                <!-- /.row -->
                <nav aria-label="Page navigation" class="d-flex justify-content-center mt-3">
                    <ul class="pagination">
                        <li class="page-item" v-if="projects.prev_page_url" @click="nextPage(projects.prev_page_url)">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page">
                            <a class="page-link" href="#">{{ projects.current_page }}</a>
                        </li>
                        <li class="page-item" v-if="projects.next_page_url" @click="nextPage(projects.next_page_url)">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- /.v-if-->
            <div v-else>
                <p>No projects</p>
            </div>
            <!-- /.v-else -->
        </div>
        <!-- /.container -->
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
