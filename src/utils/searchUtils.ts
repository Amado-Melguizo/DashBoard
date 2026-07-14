import type { Task } from "../interfaces/Task";

export function searchItems<T extends Task>(
    items: T[],
    query: string
): T[] {
    return items.filter(item =>
        (item.title?.toLowerCase().includes(query.toLowerCase())) ||
        (item.priority?.toLowerCase().includes(query.toLowerCase()))
    );
}