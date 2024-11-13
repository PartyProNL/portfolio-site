import {RenderInfo} from "./RenderInfo.ts";

export type ComponentName = "BodyTextRenderer" | "BodyImageRenderer";

export abstract class ProjectBodyPart {
    abstract render(): RenderInfo;
}