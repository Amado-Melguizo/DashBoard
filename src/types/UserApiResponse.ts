import type { UserApi } from "./UserApi";

export interface UserApiResponse {
    users: UserApi[];
    total: number;
    skip: number;
    limit: number;
}
