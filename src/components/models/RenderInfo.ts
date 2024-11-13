import {ComponentName} from "./ProjectBodyPart.ts";

export interface RenderInfo {
    component: ComponentName;
    props: Record<string, any>;
}