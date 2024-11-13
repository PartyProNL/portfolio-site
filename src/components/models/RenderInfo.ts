import {Component} from "vue";

export interface RenderInfo {
    component: Component;
    props: Record<string, any>;
}