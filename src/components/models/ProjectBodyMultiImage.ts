import {ProjectBodyPart} from "./ProjectBodyPart.ts";
import {RenderInfo} from "./RenderInfo.ts";

export class ProjectBodyMultiImage extends ProjectBodyPart {
    public urls: string[];
    public altText: string;

    public constructor(urls: string[], altText: string) {
        super();
        this.urls = urls;
        this.altText = altText;
    }

    render(): RenderInfo {
        return {
            component: "BodyMultiImageRenderer",
            props: {
                urls: this.urls,
                altText: this.altText
            }
        };
    }
}