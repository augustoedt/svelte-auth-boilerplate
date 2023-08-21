import { Authentication, type IAuthentication } from "../authentication/authentication.module";
import { Session, type ISession } from "../session/session.module";
import { User, type IUser } from "../user/user.module";

export class BaseModule {
    auth: IAuthentication;
    session: ISession;
    user: IUser;

    constructor() {
        this.session = new Session();
        this.auth = new Authentication(this.session);
        this.user = new User(this.session);
    }


}