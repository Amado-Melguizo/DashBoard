import type { DashConfig } from "../interfaces/DashConfig";

export let dashConfig: DashConfig[] = [
    { state: "close", theme: "dark", language: "esp", itemsPerPage: 10, apistage: "success", userRole: "user" },
    { state: true, theme: "light", language: "en", itemsPerPage: 15, apistage: "loading", userRole: "user" }
]