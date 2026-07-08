export type Theme = "dark" | "light";
export type UserRole = "admin" | "user";
export type ApiStage = "loading" | "success" | "error";
export interface DashConfig {
    state: "open" | "close" | boolean;
    theme: Theme;
    language: string;
    itemsPerPage: number;
    userRole: UserRole;
    apistage: ApiStage;
}
//# sourceMappingURL=DashConfig.d.ts.map