import {Project} from "../models/Project.ts";
import {ProjectBodyText} from "../models/ProjectBodyText.ts";
import {ProjectBodyImage} from "../models/ProjectBodyImage.ts";

export class ProjectService {
    private projects: Project[] = [
    {
        name: "Dokkie",
        slogan: "Split the bill, not your friend group.",
        image: "/img/banner-1.jpg",
        backgroundColor: "#fcf8e8",
        textColor: "#280003",
        body: [
            new ProjectBodyText("Not many things are as deeply rooted into Dutch culture as sharing the bill. Many people nowadays use apps to help this process, to keep track of all expenses, and to accurately calculate what everyone has to pay. Dokkie does exactly that. It was my first project for my major in Computer Science."),
            new ProjectBodyImage("/img/banner-2.jpg", "My text")
        ]
    },
    {
        name: "Code Exchange",
        slogan: "Empowering students to help each other.",
        image: "/img/banner-2.jpg",
        backgroundColor: "#D7FDF0",
        textColor: "#171738",
        body: [
            new ProjectBodyText("Body goes here")
        ]
    },
    {
        name: "Elections",
        slogan: "Accessible insight into election data for everyone.",
        image: "/img/banner-3.jpg",
        backgroundColor: "#fcf8e8",
        textColor: "#280003",
        body: [
            new ProjectBodyText("For my third semester, I was tasked with creating a website together with my team to view Dutch election results. We built a front-end using TypeScript, Vue3 and TailwindCSS, and connected it to a Java Spring Boot with Hibernate back-end."),
            new ProjectBodyImage("/img/elections/elections-1.png", ""),
            new ProjectBodyText("The main task in this project was loading the election data. We used publicly available XML-files supplied by the government, and had to parse these to put them into an SQL database. These datasets are quite big, around 2-3GB each. We had limited computing resources, so our code being optimized was very important."),
            new ProjectBodyText("I did many optimizations, but some included optimizing the indexes of our database, utilizing multithreading and using Java's PreparedStatements."),
            new ProjectBodyImage("/img/elections/elections-2.png", ""),
            new ProjectBodyImage("/img/elections/elections-3.png", ""),
            new ProjectBodyImage("/img/elections/elections-4.png", ""),
        ]
    }]

    public getProjects(): Project[] {
        return this.projects
    }

    public getProject(id: number): Project | undefined {
        return this.projects[id]
    }
}