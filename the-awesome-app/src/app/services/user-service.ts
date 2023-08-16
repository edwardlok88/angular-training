import { User } from "../model/user";

export abstract class UserService {
    public abstract isAuthenticated(): boolean;
    public abstract getAccessToken(): string;

    public abstract setUserDetails(user: User): void;
}