export class UserClass {
    constructor(name, email, role, isActive) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.isActive = isActive;
    }
    toggleActivate() {
        this.isActive = !this.isActive;
    }
    updateEmail(newEmail) {
        this.email = newEmail;
    }
    toCardHTML() {
        return `
        <h3>${this.name}</h3>
        <p>Email: ${this.email}</p>
        <p>Rol: ${this.role}</p>
        <p class="${this.isActive ? "active" : "inactive"}">
            Usuario Activo: ${this.isActive ? "Sí" : "No"}
        </p>        
        `;
    }
}
export let userClass = [
    new UserClass("Amado", "amado@bde.es", "desarrollador", true)
];
//# sourceMappingURL=userClass.js.map