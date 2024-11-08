import {Project} from "../models/Project.ts";

export class ProjectService {
    public getProjects(): Project[] {
        return [{
            name: "Dokkie",
            slogan: "Split the bill, not your friend group.",
            image: "/img/banner-1.jpg",
        },
        {
            name: "CodeExchange",
            slogan: "Slogan here.",
            image: "/img/banner-2.jpg",
        }]
    }
}