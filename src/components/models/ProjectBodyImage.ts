import {ProjectBodyPart} from "./ProjectBodyPart.ts";
import {RenderInfo} from "./RenderInfo.ts";
import BodyImageRenderer from "../util/BodyImageRenderer.vue";

export class ProjectBodyImage extends ProjectBodyPart {
    public url: string;
    public altText: string;

    public constructor(url: string, altText: string) {
        super();
        this.url = url;
        this.altText = altText;
    }

    render(): RenderInfo {
        return {
            component: BodyImageRenderer,
            props: {
                url: this.url,
                altText: this.altText
            }
        };
    }
}