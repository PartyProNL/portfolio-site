import {ProjectBodyPart} from "../project-body/ProjectBodyPart.ts";

export type Project = {
    id: string,
    name: string,
    slogan: string,
    image: string,
    backgroundColor: string,
    textColor: string,
    labels: string[],
    body: ProjectBodyPart[]
}