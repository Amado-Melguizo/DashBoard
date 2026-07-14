export class UserClass {
    constructor(
        public name: string,
        public email: string,
        public role: string | number,
        public isActive: boolean
    ) { }

    toggleActivate() {
        this.isActive = !this.isActive
    }

    updateEmail(newEmail: string) {
        this.email = newEmail
    }

    toCardHTML() {
        return `
        <h3>${this.name}</h3>
        <p>Email: ${this.email}</p>
        <p>Rol: ${this.role}</p>
        <p class="${this.isActive ? "active" : "inactive"}">
            Usuario Activo: ${this.isActive ? "Sí" : "No"}
        </p>        
        `
    }
}

export let userClass: UserClass[] = [
    new UserClass("Amado", "amado@bde.es", "desarrollador", true)
];