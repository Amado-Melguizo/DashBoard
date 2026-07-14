import type { TaskApi } from "../interfaces/TaskApi";
import type { UserApi } from "../interfaces/UserApi";
import { TaskApiClass } from "../models/taskApiClass.js";
import { UserApiClass } from "../models/userApiClass.js";
/**
 * Función para convertir los datos de la API en instancias de tu clase
 * @param u
 * @returns
 */
export declare function mapUserApiToClass(u: UserApi): UserApiClass;
export declare function mapTaskApiToClass(t: TaskApi): TaskApiClass;
//# sourceMappingURL=mappers.d.ts.map