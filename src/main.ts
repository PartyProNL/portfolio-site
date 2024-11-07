import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createMemoryHistory, createRouter} from "vue-router";
import HomePage from "./components/HomePage.vue";

const routes = [
    { path: '/', component: HomePage }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
