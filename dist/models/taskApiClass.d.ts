export declare class TaskApiClass {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
    constructor();
    toggleCompleted(): void;
    getStatusText(): "Completada" | "Pendiente";
    toCardHTML(): string;
}
//# sourceMappingURL=taskApiClass.d.ts.map