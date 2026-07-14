import type { Theme } from "../interfaces/DashConfig";

export class ThemeManager {
    private theme: string;

    constructor(initialTheme: string = "light") {
        this.theme = initialTheme;
    }

    getTheme(): string {
        return this.theme;
    }

    toggleTheme(): Theme {
        return this.theme = this.theme === "light" ? "dark" : "light";
    }

}

const manager = new ThemeManager()

manager.toggleTheme();