import {RenderInfo} from "./RenderInfo.ts";

export abstract class ProjectBodyPart {
    abstract render(): RenderInfo;
}