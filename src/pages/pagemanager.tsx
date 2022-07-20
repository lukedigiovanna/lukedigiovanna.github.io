import React from "react";
import core from "../core";
import { Vector2 } from "../models/math.model";
import { MainPage } from "./MainPage";
import { WebDevelopmentPage } from "./WebDevelopmentPage";
import anime from "animejs";
import { TestPage } from "./TestPage";
import { AboutPage } from "./AboutPage";

export interface Page {
    target: {
        position: Vector2;
        scale: number;
    },
    element: any
}

class PageManager {
    static pages: {[key: string]: Page} = {
        "home": {
            target: {
                position: {x: -0.5, y: 0.0},
                scale: 1.0
            },
            element: <MainPage />
        },
        "about": {
            target: {
                position: {x: -0.2, y: 0.0},
                scale: 0.7
            },
            element: <AboutPage />
        },
        "web-development": {
            target: {
                position: {x: -1, y: 0.0},
                scale: 0.3
            },
            element: <WebDevelopmentPage />
        },
        "test-page": {
            target: {
                position: {x: -1.14, y: -0.24},
                scale: 0.03
            },
            element: <TestPage />
        }
    };

    public currentPage: Page = PageManager.pages["home"];
    
    constructor() {
        this.goto("home");
    }
    
    /**
     * Initiates animations and miscellaneous steps to navigate to a different page.
     * @param page String identifier of the target page.
     */
    goto(page: string) {
        if (!PageManager.pages[page]) {
            throw Error(`Unknown page: ${page}`);
        }
        // tell the core module to direct the camera to the target position.
        // core.position.x = this.currentPage.target.position.x;
        // core.position.y = this.currentPage.target.position.y;
        // core.scale = this.currentPage.target.scale;
        this.currentPage = PageManager.pages[page];
        anime({
            targets: core.position,
            x: this.currentPage.target.position.x, 
            y: this.currentPage.target.position.y,
            duration: 1000,
            easing: "easeInOutQuad",
        });
        anime({
            targets: core,
            scale: this.currentPage.target.scale,
            duration: 1000,
            easing: "easeInOutQuad",
        });
        // core.position = PageManager.pages[page].target.position;
        // core.scale = PageManager.pages[page].target.scale;
    }
}


export default new PageManager();