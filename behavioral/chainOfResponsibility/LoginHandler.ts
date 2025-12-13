import AbstractHandler from "./AbstractHandler";

export class LoginHandler extends AbstractHandler {

    private loggedInUsers: Set<string> = new Set(["user1", "user2", "admin"]);

    public handle(request: any): any {
        if (!this.loggedInUsers.has(request.username)) {
           throw new Error("The user is not logged in.");   
        }else {
            return super.handle(request);
        }
    }
}