export interface Alert {
    code: number,
    message: string, 
    type: "success" | "error" | "warning" | "info";
}