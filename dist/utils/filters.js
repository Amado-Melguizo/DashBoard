// Filtrar usuarios activos
function filterActiveUsers(users) {
    return users.filter(u => u.isActive);
}
// Filtrar por rol
function filterUsersByRole(users, role) {
    return users.filter(u => u.role === role);
}
// Filtrar por nombre (coincidencia parcial)
function filterUsersByName(users, name) {
    return users.filter(u => u.name.toLowerCase().includes(name.toLowerCase()));
}
// Filtrar por email
function filterUsersByEmail(users, email) {
    return users.filter(u => u.email.toLowerCase().includes(email.toLowerCase()));
}
export {};
//# sourceMappingURL=filters.js.map