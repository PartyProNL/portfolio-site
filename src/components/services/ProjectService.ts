import {Project} from "../models/Project.ts";
import {ProjectBodyText} from "../models/ProjectBodyText.ts";
import {ProjectBodyImage} from "../models/ProjectBodyImage.ts";

export class ProjectService {
    private projects: Project[] = [
    {
        name: "Dokkie",
        slogan: "Split the bill, not your friend group.",
        image: "./img/banner-1.jpg",
        backgroundColor: "#fcf8e8",
        textColor: "#280003",
        body: [
            new ProjectBodyText("Not many things are as deeply rooted into Dutch culture as sharing the bill. Many people nowadays use apps to help this process, to keep track of all expenses, and to accurately calculate what everyone has to pay. Dokkie does exactly that. It was my first project for my major in Computer Science."),
            new ProjectBodyImage("./img/dokkie/dokkie-1.png", "My text")
        ]
    },
    {
        name: "Code Exchange",
        slogan: "Empowering students to help each other.",
        image: "./img/banner-2.jpg",
        backgroundColor: "#D7FDF0",
        textColor: "#171738",
        body: [
            new ProjectBodyText("Body goes here")
        ]
    },
    {
        name: "Elections",
        slogan: "Accessible insight into election data for everyone.",
        image: "./img/banner-3.jpg",
        backgroundColor: "#fcf8e8",
        textColor: "#280003",
        body: [
            new ProjectBodyText("For my third semester, I was tasked with creating a website together with my team to view Dutch election results. We built a front-end using TypeScript, Vue3 and TailwindCSS, and connected it to a Java Spring Boot with Hibernate back-end."),
            new ProjectBodyImage("./img/elections/elections-1.png", ""),
            new ProjectBodyText("The main task in this project was loading the election data. We used publicly available XML-files supplied by the government, and had to parse these to put them into an SQL database. These datasets are quite big, around 2-3GB each. We had limited computing resources, so our code being optimized was very important."),
            new ProjectBodyText("I did many optimizations, but some included optimizing the indexes of our database, utilizing multithreading and using Java's PreparedStatements."),
            new ProjectBodyImage("./img/elections/elections-2.png", ""),
            new ProjectBodyImage("./img/elections/elections-3.png", ""),
            new ProjectBodyImage("./img/elections/elections-4.png", ""),
        ]
    },
    {
        name: "BandiThemepark",
        slogan: "Add slogan!",
        image: "./img/banner-4.png",
        backgroundColor: "#fcf8e8",
        textColor: "#280003",
        body: [
            new ProjectBodyText("Back in february 2020 I got invited to join a project called BandiThemepark. BandiThemepark is a fictional themepark, built in a modified version of the famous videogame Minecraft. I joined this project as a developer, but quickly also became the co-owner."),
            new ProjectBodyText("I have been working on the project as a volunteer developer since then. My main task is developing the Kotlin back-end that runs the themepark part, but I also work on some of our other services, such as our websites and internal tools."),
            new ProjectBodyImage("./img/bandi/landing.png", "The landing page of our main site, www.bandithemepark.net"),
            new ProjectBodyText("Our main website is powered by a content management system (CMS) called Strapi, so that anyone in our team can easily edit and update the site. It is also Search Engine Optimized."),
            new ProjectBodyText("BandiThemepark exists out of a lot of different services. This includes our main game-server, a website, a webstore and internal administration and management tools. Almost all of these run using Docker. We also have communication between most of our services, some via a (partially public) REST API, and some using MQTT."),
            new ProjectBodyImage("./img/bandi/parkops-1.png", "The login page of our administration tool"),
            new ProjectBodyImage("./img/bandi/parkops-2.png", "The screen to manage so-called achievements players can get by exploring the themepark"),
            new ProjectBodyText("We also have a (not currently public) store, where people can buy optional cosmetics and other features to add to their experience."),
            new ProjectBodyImage("./img/bandi/store-1.png", "The home page of our store"),
            new ProjectBodyImage("./img/bandi/store-2.png", "The shopping cart sheet that appears before checkout"),
            new ProjectBodyImage("./img/bandi/store-3.png", "Further details on the product page of our 'VIP-rank'. All renders and art are by me as well"),
            new ProjectBodyText("These are some of the web-apps I have worked on for BandiThemepark. I was also involved in developing the main REST API that powers most of our services, but my main task was the game-server(s) code. Most of that is hard to show, especially if you are not familiar with Minecraft. I do have some visualization for the rollercoasters I programmed though."),
            new ProjectBodyText("This picture shows our rollercoaster system. Minecraft does not have (realistic) rollercoasters as part of the game, so I had to program my own. At their core, these rollercoasters are Bezier splines, that have trains that follow these splines. These trains have simulated physics (written by me), and their rendering is powered by matrices and quaternions. Each rollercoaster also has a realistic control system, modeled after real-life examples. There can also be collisions between trains.")
        ]
    }]

    public getProjects(): Project[] {
        return this.projects
    }

    public getProject(id: number): Project | undefined {
        return this.projects[id]
    }
}