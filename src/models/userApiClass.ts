export class UserApiClass {
    constructor(
        public id: number,
        public firstName: string,
        public maidenName: string,
        public lastName: string,
        public email: string,
        public username: string,
        public role: string
    ) { }

    updateEmail(newEmail: string) {
        this.email = newEmail;
    }

    updateRole(newRole: string) {
        this.role = newRole;
    }

    getFullName() {
        return `${this.firstName} ${this.maidenName} ${this.lastName}`;
    }

    toCardHTML() {
        console.log(this.username);

        return `
            <div class="user-card">
                <h3>${this.getFullName()}</h3>
                <p><strong>Usuario:</strong> ${this.username}</p>
                <p><strong>Email:</strong> ${this.email}</p>
                <p><strong>Rol:</strong> ${this.role}</p>
            </div>
        `;
    }
}