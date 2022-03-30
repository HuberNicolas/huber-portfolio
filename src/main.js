import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import './index.css'
import Home from "./views/Home.vue";
import CV from "./views/CV.vue";
import Me from "./views/Me.vue";
import Skills from "./views/Skills.vue";
import BucketList from "./views/BucketList.vue";
import Contact from "./views/Contact.vue";
import Tailwind from "./views/Tailwind.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/cv', name: 'CV', component: CV},
        {path: '/me', name: 'Me', component: Me},
        {path: '/skills', name: 'Skills', component: Skills},
        {path: '/bucket-list', name: 'BucketList', component: BucketList},
        {path: '/contact', name: 'Contact', component: Contact},
        {path: '/tailwind', name: 'tailwind', component: Tailwind},
    ]
})

createApp(App)
    .use(router)
    .mount('#app')