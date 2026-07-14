export class ThemeManager {
    constructor(initialTheme = "light") {
        this.theme = initialTheme;
    }
    getTheme() {
        return this.theme;
    }
    toggleTheme() {
        return this.theme = this.theme === "light" ? "dark" : "light";
    }
}
const manager = new ThemeManager();
manager.toggleTheme();
//# sourceMappingURL=toggleManager.js.map