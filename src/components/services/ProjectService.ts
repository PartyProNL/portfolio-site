import {Project} from "../models/Project.ts";

export class ProjectService {
    private projects: Project[] = [{
            name: "Dokkie",
            slogan: "Split the bill, not your friend group.",
            image: "/img/banner-1.jpg",
            backgroundColor: "#fcf8e8",
            textColor: "#280003",
            body: "Not many things are as deeply rooted into Dutch culture as sharing the bill. Many people nowadays use apps to help this process, to keep track of all expenses, and to accurately calculate what everyone has to pay. Dokkie does exactly that. It was my first project for my major in Computer Science."
        },
        {
            name: "Code Exchange",
            slogan: "Empowering students to help each other.",
            image: "/img/banner-2.jpg",
            backgroundColor: "#D7FDF0",
            textColor: "#171738",
            body: "Body goes here"
        },
        {
            name: "Elections",
            slogan: "Accessible insight into election data for everyone.",
            image: "/img/banner-3.jpg",
            backgroundColor: "#fcf8e8",
            textColor: "#280003",
            body: "Body goes here"
        }]

    public getProjects(): Project[] {
        return this.projects
    }

    public getProject(id: number): Project | undefined {
        return this.projects[id]
    }
}