import {RenderInfo} from "./RenderInfo.ts";

export type ComponentName = "BodyTextRenderer" | "BodyImageRenderer" | "BodyMultiImageRenderer";

export abstract class ProjectBodyPart {
    abstract render(): RenderInfo;
}