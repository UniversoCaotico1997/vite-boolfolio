import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView';
import BlogView from './views/BlogView';
import AboutView from './views/AboutView';
import ContactsView from './views/ContactsView';


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
            path: '/abut',
            name: 'abut',
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