import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "./components/HomePage.vue";
import ProjectPage from "./components/ProjectPage.vue";
import AboutPage from "./components/AboutPage.vue";
import {createHead} from "@unhead/vue";
import AboutPersonalPage from "./components/AboutPersonalPage.vue";
import AboutProfessionalPage from "./components/AboutProfessionalPage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/about/personal', component: AboutPersonalPage },
    { path: '/about/professional', component: AboutProfessionalPage },
    { path: '/project/:id', component: ProjectPage },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const head = createHead()

createApp(App).use(router).use(head).mount('#app')
