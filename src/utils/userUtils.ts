import type { User } from "../interfaces/User";

export function getUser(user: User): void {

    // console.log('Usuario antiguo: Nombre: ', user.name, 'Email: ', user.email);
    user.name = "pepe";
    user.email = "pepe@bde.es";
    // console.log('Usuario activo: Nombre: ', user.name, 'Email: ', user.email);
}