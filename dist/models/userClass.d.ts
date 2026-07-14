export declare class UserClass {
    name: string;
    email: string;
    role: string | number;
    isActive: boolean;
    constructor(name: string, email: string, role: string | number, isActive: boolean);
    toggleActivate(): void;
    updateEmail(newEmail: string): void;
    toCardHTML(): string;
}
export declare let userClass: UserClass[];
//# sourceMappingURL=userClass.d.ts.map