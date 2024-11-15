import {Project} from "../models/Project.ts";
import {ProjectBodyText} from "../project-body/ProjectBodyText.ts";
import {ProjectBodyImage} from "../project-body/ProjectBodyImage.ts";
import {ProjectBodyMultiImage} from "../project-body/ProjectBodyMultiImage.ts";

export class ProjectService {
    private projects: Project[] = [
    {
        name: "Dokkie",
        slogan: "Split the bill, not your friend group.",
        image: "./img/banner-1.jpg",
        backgroundColor: "#fcf8e8",
        textColor: "#280003",
        body: [
            new ProjectBodyText("Not many things are as deeply rooted into Dutch culture as sharing the bill. Many people nowadays use apps to help this process, to keep track of all expenses, and to accurately calculate what everyone has to pay. Dokkie does exactly that. It was my first academic project."),
            new ProjectBodyText("Dokkie allows you to create events, and invite other users to them. You can then add costs to an event, and lock the event to finish. All users will then get access to a shareable list of transactions that must be made. Locking the event also starts payment tracking, offering an easy way to keep track of who you've sent money too, who you still need to pay and who you should still receive money from."),
            new ProjectBodyMultiImage(["./img/dokkie/dokkie-1.png", "./img/dokkie/dokkie-2.png", "./img/dokkie/dokkie-3.png"], "Some of the core pages when logged in, viewed on a phone"),
            new ProjectBodyText("The project follows the Google Material Design 3 guidelines, using their colors according to the guidelines and implementing some of their components."),
            new ProjectBodyImage("./img/dokkie/dokkie-4.png", "The home page when logged in, viewed on desktop"),
            new ProjectBodyImage("./img/dokkie/landing.png", "Part of the landing page")
        ]
    },
    {
        name: "BandiThemepark",
        slogan: "The next generation of Minecraft themeparks.",
        image: "./img/banner-4.png",
        backgroundColor: "#FEF3C7",
        textColor: "#1B1B1E",
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
            new ProjectBodyImage("./img/bandi/plugin-1.png", "Our in-game rollercoaster editor, which visualizes the spline of the ride"),
            new ProjectBodyText("This picture shows our rollercoaster system. Minecraft does not have (realistic) rollercoasters as part of the game, so I had to program my own. At their core, these rollercoasters are Bezier splines, that have trains that follow these splines. These trains have simulated physics (written by me), and their rendering is powered by matrices and quaternions. Each rollercoaster also has a realistic control system, modeled after real-life examples. There can also be collisions between trains.")
        ]
    },
    {
        name: "Code Exchange",
        slogan: "Empowering students to help each other.",
        image: "./img/banner-2.jpg",
        backgroundColor: "#E3DFFF",
        textColor: "#16120D",
        body: [
            new ProjectBodyText("For my second academic project, I had to create a coding forum for students, inspired by StackOverflow."),
            new ProjectBodyImage("./img/code-exchange/code-exchange-2.png", "The home page of the site"),
            new ProjectBodyImage("./img/code-exchange/code-exchange-1.png", "The view page for a question, featuring code syntax highlighting"),
            new ProjectBodyMultiImage(["./img/code-exchange/code-exchange-6.png", "./img/code-exchange/code-exchange-5.png", "./img/code-exchange/code-exchange-4.png"], "Multiple other pages from the site, viewed on a mobile phone"),
            new ProjectBodyImage("./img/code-exchange/code-exchange-3.png", "The user info page, showcasing their public information and recent activity"),
        ]
    },
    {
        name: "TripSwift",
        slogan: "Quickly view Dutch public transport data.",
        image: "./img/banner-5.jpg",
        backgroundColor: "#E1EFE6",
        textColor: "#403D58",
        body: [
            new ProjectBodyText("One day, I started getting annoyed with the 9292 app I was using to get my bus times. 9292 only shows your saved bus stops on the departure times screen, after your location has been loaded. This can makes it so that you often have to wait at least a few seconds. It also doesn't have a quick button to see departure times of a saved stop on the home page either."),
            new ProjectBodyText("Besides this, it also loads a lot of ads, which can result in high data usage and even longer loading times. At some point, I had enough and decided to look into making my own app. I discovered that I could get a personal API-key for a public transport API, totally for free. I used this to create an app, that fixed my issues and removed the ads."),
            new ProjectBodyMultiImage(["./img/tripswift/tripswift-1.png", "./img/tripswift/tripswift-2.png", "./img/tripswift/tripswift-3.png"], "These are the main screens of the app. Bus 305 is the one I take from Central Station to get back home!"),
            new ProjectBodyText("I still use it every single day, and it costs me over 8x less mobile data to use."),
            new ProjectBodyText("The app was made with Android/Jetpack Compose with Kotlin, and uses Google's Material Design 3. It also uses the dynamic color system introduced in Android 12. This way, it always matches the look and feel of my phone's UI.")
        ]
    },
    {
        name: "Elections",
        slogan: "Accessible insight into election data for everyone.",
        image: "./img/banner-3.jpg",
        backgroundColor: "#E0F3FC",
        textColor: "#190B28",
        body: [
            new ProjectBodyText("For my third semester, I was tasked with creating a website together with my team to view Dutch election results. We built a front-end using TypeScript, Vue3 and TailwindCSS, and connected it to a Java Spring Boot with Hibernate back-end."),
            new ProjectBodyImage("./img/elections/elections-1.png", "The core page showing a summary of the selected election's results"),
            new ProjectBodyText("The main task in this project was loading the election data. We used publicly available XML-files supplied by the government, and had to parse these to put them into an SQL database. These datasets are quite big, around 2-3GB each. We had limited computing resources, so our code being optimized was very important."),
            new ProjectBodyText("I did many optimizations, but some included optimizing the indexes of our database, utilizing multithreading and using Java's PreparedStatements."),
            new ProjectBodyImage("./img/elections/elections-2.png", "The admin dashboard, with some simple statistics and a tool to load election data"),
            new ProjectBodyImage("./img/elections/elections-3.png", "The party information page, showcasing some general information, and more detailed information about their result per municipality"),
            new ProjectBodyMultiImage(["./img/elections/elections-4.png"], "A map that offers an easier way to interpret election results of a party"),
        ]
    }]

    public getProjects(): Project[] {
        return this.projects
    }

    public getProject(id: number): Project | undefined {
        return this.projects[id]
    }
}