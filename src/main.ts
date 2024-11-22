import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import {createHead} from "@unhead/vue";
import Projects from "./components/pages/Projects.vue";
import Project from "./components/pages/Project.vue";

const routes = [
    { path: '/', component: Projects },
    { path: '/project/:id', component: Project }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const head = createHead()

createApp(App).use(router).use(head).mount('#app')
