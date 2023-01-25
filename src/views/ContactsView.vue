<script>
import AppHeader from "../components/AppHeader.vue";
import axios from "axios";
import { store } from "../store.js";
export default {
    name: 'ContactsView',
    components: {
        AppHeader
    },
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
            loading: false,
            errors: {}

        }
    },
    methods: {
        SendForm() {

            this.loading = true

            this.errors = {}

            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            axios.post(`${this.store.base_url_api}/api/contacts`, data)
                .then(response => {
                    console.log(response.data.success);
                    this.success = response.data.success

                    // Svuota l'input dopo l'invio

                    if (this.success) {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    } else {
                        this.errors = response.data.errors
                    }

                    this.loading = false
                })

        }
    }
}

</script>

<template>

    <AppHeader></AppHeader>

    <div class="container">

        <h2 class="text-center text-uppercase my-5">Add Contacts</h2>

        <div v-if="success" class="alert alert-success text-start" role="alert">
            Messaggio inviato con successo!
        </div>

        <form @submit.prevent="SendForm()" class="border shadow p-3 mb-5 bg-body-tertiary rounded">

            <div class="mb-3">
                <label for="" class="form-label">Full Name</label>
                <input type="text" name="" id="" v-model="name" class="form-control" placeholder="Mario Rossi"
                    aria-describedby="fullNameHelper">
                <small id="fullNameHelper" class="text-muted">Add your full name</small>
                <!-- error -->
                <p v-for="(error) in errors.message">
                    {{ error }}
                </p>
            </div>


            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="email" name="" id="" v-model="email" class="form-control"
                    placeholder="mario.rossi@example.com" aria-describedby="emailHelper">
                <small id="emailHelper" class="text-muted">Add your email address</small>
                <!-- error -->
                <p v-for="(error) in errors.message">
                    {{ error }}
                </p>
            </div>


            <div class="mb-3">
                <label for="" class="form-label">Message</label>
                <textarea class="form-control" name="" id="" v-model="message" rows="5"></textarea>
                <!-- error -->
                <p v-for="(error) in errors.message">
                    {{ error }}
                </p>

            </div>

            <button type="submit" class="btn btn-primary" :disabled="loading">
                {{ loading? 'Sending...': 'Contact me' }}
            </button>
        </form>
    </div>

</template>

<style>

</style>