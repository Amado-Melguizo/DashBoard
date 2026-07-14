import { TaskApiClass } from "../models/taskApiClass.js";
import { UserApiClass } from "../models/userApiClass.js";
/**
 * Función para convertir los datos de la API en instancias de tu clase
 * @param u
 * @returns
 */
export function mapUserApiToClass(u) {
    return new UserApiClass(u.id, u.firstName, u.maidenName, u.lastName, u.email, u.username, u.role);
}
export function mapTaskApiToClass(t) {
    const task = new TaskApiClass();
    task.id = t.id;
    task.todo = t.todo;
    task.completed = t.completed;
    task.userId = t.userId;
    return task;
}
//# sourceMappingURL=mappers.js.map