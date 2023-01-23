import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import BlogView from './views/BlogView.vue';
import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogView
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