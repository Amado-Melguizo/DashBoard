export class UserApiClass {
    constructor(id, firstName, maidenName, lastName, email, username, role) {
        this.id = id;
        this.firstName = firstName;
        this.maidenName = maidenName;
        this.lastName = lastName;
        this.email = email;
        this.username = username;
        this.role = role;
    }
    updateEmail(newEmail) {
        this.email = newEmail;
    }
    updateRole(newRole) {
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
//# sourceMappingURL=userApiClass.js.map