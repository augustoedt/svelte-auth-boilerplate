import type { ISession } from '../session/session.module';

export interface IAuthentication {
	session: ISession;
	login: (email: string, password: string) => Promise<any>;
	logout: () => Promise<any>;
	register: (email: string, password: string) => Promise<any>;
	resetPassword: (email: string) => Promise<any>;
	loadFromCookies: () => Promise<any>;
}

export class Authentication implements IAuthentication {
	session: ISession;

	constructor(session: ISession) {
		this.session = session;
	}

	login(email: string, password: string): Promise<any> {
		return Promise.resolve();
	}

	logout(): Promise<any> {
		return Promise.resolve();
	}

	register(email: string, password: string): Promise<any> {
		return Promise.resolve();
	}

	resetPassword(email: string): Promise<any> {
		return Promise.resolve();
	}

	loadFromCookies(): Promise<any> {
		return Promise.resolve();
	}
}
