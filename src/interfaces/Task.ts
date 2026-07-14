export type Priority = "alta" | "media" | "baja";

export interface Task{
    title: string; 
    description: string;
    priority: Priority; 
    completed: boolean 
}
