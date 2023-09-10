import { CoreModule } from '../core/core.module';
import type { ISession } from '../session/session.module';

export interface IAuthentication {
	session: ISession;
	login: (email: string, password: string) => Promise<Response | null>;
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

	async login(email: string, password: string): Promise<Response | null> {
		try {
			return await this.post('/api/auth/login', { email, password });
		} catch (error) {
			// console.error(error);
			return null;
		}
	}

	logout(): Promise<any> {
		return Promise.resolve();
	}

	register(email: string, password: string): Promise<any> {
		return this.post('/api/auth/register', { email, password });
	}

	loadFromCookies(): Promise<any> {
		return Promise.resolve();
	}
}
