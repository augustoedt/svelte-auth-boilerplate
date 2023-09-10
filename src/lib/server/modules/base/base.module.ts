import { Authentication, type IAuthentication } from '../authentication/authentication.module';
import { Session, type ISession } from '../session/session.module';
import { User, type IUser } from '../user/user.module';

export class BaseModule {
	private __auth: IAuthentication;
	private __session: ISession;
	private __user: IUser;

	constructor(baseUrl: string) {
		this.__session = new Session(baseUrl);
		this.__auth = new Authentication(this.session);
		this.__user = new User(this.session);
	}

	get auth(): IAuthentication {
		return this.__auth;
	}

	get user(): IUser {
		return this.__user;
	}

	get session(): ISession {
		return this.__session;
	}
}
