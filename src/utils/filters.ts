import type { User } from "../interfaces/User";

// Filtrar usuarios activos
function filterActiveUsers(users: User[]): User[] {
    return users.filter(u => u.isActive);
}


// Filtrar por rol
function filterUsersByRole(users: User[], role: string | number): User[] {
    return users.filter(u => u.role === role);
}

// Filtrar por nombre (coincidencia parcial)
function filterUsersByName(users: User[], name: string): User[] {
    return users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
}

// Filtrar por email
function filterUsersByEmail(users: User[], email: string): User[] {
    return users.filter(u => u.email.toLowerCase().includes(email.toLowerCase()));
}