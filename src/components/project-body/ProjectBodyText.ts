import {ProjectBodyPart} from "./ProjectBodyPart.ts";
import {RenderInfo} from "../models/RenderInfo.ts";
import BodyTextRenderer from "./render/BodyTextRenderer.vue";

export class ProjectBodyText extends ProjectBodyPart {
    public text: string;

    public constructor(text: string) {
        super();
        this.text = text;
    }

    render(): RenderInfo {
        return {
            component: BodyTextRenderer,
            props: { text: this.text }
        };
    }
}