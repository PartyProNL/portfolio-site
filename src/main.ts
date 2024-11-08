import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory} from "vue-router";
import HomePage from "./components/HomePage.vue";
import ProjectPage from "./components/ProjectPage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/project/:id', component: ProjectPage }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
