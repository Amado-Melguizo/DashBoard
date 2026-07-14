export declare class UserApiClass {
    id: number;
    firstName: string;
    maidenName: string;
    lastName: string;
    email: string;
    username: string;
    role: string;
    constructor(id: number, firstName: string, maidenName: string, lastName: string, email: string, username: string, role: string);
    updateEmail(newEmail: string): void;
    updateRole(newRole: string): void;
    getFullName(): string;
    toCardHTML(): string;
}
//# sourceMappingURL=userApiClass.d.ts.map