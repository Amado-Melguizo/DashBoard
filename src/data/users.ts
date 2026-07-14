import type { User } from "../interfaces/User";

export let users: User[] = [
    { name: "Amado", email: "amado@bde.es", role: "desarrollador", isActive: true },
    { name: "Ana", email: "ana@bde.es", role: 1, isActive: false },
    { name: "Juan", email: "juan@bde.es", role: "soporte", isActive: true },
];