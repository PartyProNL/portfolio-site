import {Project} from "../models/Project.ts";

export class ProjectService {
    private projects: Project[] = [{
            name: "Dokkie",
            slogan: "Split the bill, not your friend group.",
            image: "/img/banner-1.jpg",
        },
        {
            name: "Code Exchange",
            slogan: "Empowering students to help each other.",
            image: "/img/banner-2.jpg",
        },
        {
            name: "Elections",
            slogan: "Accessible insight into election data for everyone.",
            image: "/img/banner-3.jpg",
        }]

    public getProjects(): Project[] {
        return this.projects
    }

    public getProject(id: number): Project | undefined {
        return this.projects[id]
    }
}