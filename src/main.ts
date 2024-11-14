import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "./components/HomePage.vue";
import ProjectPage from "./components/ProjectPage.vue";
import AboutPage from "./components/AboutPage.vue";

const routes = [
    { path: '/', component: HomePage, meta: { title: "Youri Scheepers" } },
    { path: '/about', component: AboutPage, meta: { title: "About me" } },
    { path: '/project/:id', component: ProjectPage, meta: { title: "Project" } }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, _, next) => {
    const title = to.meta.title as string
    if (title) {
        document.title = title
    }
    next()
})

createApp(App).use(router).mount('#app')
