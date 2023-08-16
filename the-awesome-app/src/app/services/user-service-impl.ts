import { User } from "../model/user";
import { UserService } from "./user-service";

export class UserServiceImpl extends UserService {

    private user: User = new User;

    public override isAuthenticated(): boolean {
       if (this.user.isAuthenticated) {
            return this.user.isAuthenticated;
        } else {
            return false;
        }
    }

    public override getAccessToken(): string {
        return this.user.accessToken? this.user.accessToken: ""
    }

    public override setUserDetails(user: User): void {
        this.user = user;
    }

}