import {Project} from "../models/Project.ts";

export class ProjectService {
    private projects: Project[] = [{
            name: "Dokkie",
            slogan: "Split the bill, not your friend group.",
            image: "/img/banner-1.jpg",
            backgroundColor: "#fcf8e8",
            textColor: "#280003"
        },
        {
            name: "Code Exchange",
            slogan: "Empowering students to help each other.",
            image: "/img/banner-2.jpg",
            backgroundColor: "#D7FDF0",
            textColor: "#171738"
        },
        {
            name: "Elections",
            slogan: "Accessible insight into election data for everyone.",
            image: "/img/banner-3.jpg",
            backgroundColor: "#fcf8e8",
            textColor: "#280003"
        }]

    public getProjects(): Project[] {
        return this.projects
    }

    public getProject(id: number): Project | undefined {
        return this.projects[id]
    }
}