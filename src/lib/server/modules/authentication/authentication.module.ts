import { CoreModule } from '../core/core.module';
import type { ISession } from '../session/session.module';

export interface IAuthentication {
	session: ISession;
	login: (email: string, password: string) => Promise<Response>;
	logout: () => Promise<any>;
	register: (email: string, password: string) => Promise<any>;
	loadFromCookies: (cookie: string | null) => Promise<void>;
}

export class Authentication extends CoreModule implements IAuthentication {
	session: ISession;

	constructor(session: ISession) {
		super(session.baseUrl);
		this.session = session;
	}

	login(email: string, password: string): Promise<Response> {
		return this.post('/api/auth/login', { email, password });
	}

	logout(): Promise<any> {
		return Promise.resolve();
	}

	register(email: string, password: string): Promise<any> {
		return Promise.resolve();
	}

	loadFromCookies(): Promise<any> {
		return Promise.resolve();
	}
}
