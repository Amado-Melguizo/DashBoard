import type { TaskApi } from "./TaskApi";

export interface TaskApiResponse {
    todos: TaskApi[];
    total: number;
    skip: number;
    limit: number;
}
