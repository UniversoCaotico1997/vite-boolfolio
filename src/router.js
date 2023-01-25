import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import BlogView from './views/BlogView.vue';
import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';
import SingleProjectView from './views/SingleProjectView.vue';
import WelcomeView from "./views/WelcomeView.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: WelcomeView
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogView
        },
        {
            path: '/blog/:slug',
            name: 'single-project',
            component: SingleProjectView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        }
    ]
});

export { router };