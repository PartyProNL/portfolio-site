import {RenderInfo} from "../models/RenderInfo.ts";

export abstract class ProjectBodyPart {
    abstract render(): RenderInfo;
}