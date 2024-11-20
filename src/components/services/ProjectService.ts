import {Project} from "../models/Project.ts";
import {ProjectBodyText} from "../project-body/ProjectBodyText.ts";
import {ProjectBodyImage} from "../project-body/ProjectBodyImage.ts";
import {ProjectBodyMultiImage} from "../project-body/ProjectBodyMultiImage.ts";

import projectData from "../../assets/projects.json";

export class ProjectService {
    private projects: Project[] = []

    public constructor() {
        this.loadProjects()
    }

    private loadProjects() {
        this.projects = projectData.map((it: any) => ({
            ...it,
            body: it.body.map((bodyPart: any) => {
                switch (bodyPart.type) {
                    case "text":
                        return new ProjectBodyText(bodyPart.content)
                    case "image":
                        return new ProjectBodyImage(bodyPart.url, bodyPart.alt)
                    case "multi-image":
                        return new ProjectBodyMultiImage(bodyPart.urls, bodyPart.alt)
                }
            })
        }))
    }

    public getProjects(): Project[] {
        return this.projects
    }

    public getProject(id: string): Project | undefined {
        return this.projects.find(it => it.id === id)
    }

    public getProjectIndex(id: string): number {
        return this.projects.indexOf(this.getProject(id)!)
    }
}