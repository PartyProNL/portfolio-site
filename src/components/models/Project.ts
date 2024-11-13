import {ProjectBodyPart} from "./ProjectBodyPart.ts";

export type Project = {
    name: string,
    slogan: string,
    image: string,
    backgroundColor: string,
    textColor: string,
    body: ProjectBodyPart[]
}