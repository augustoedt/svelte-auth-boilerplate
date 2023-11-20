import type { RegisterInput } from '$lib/dtos/users.dto';
import { CoreModule } from '../core/core.module';
import type { ISession } from '../session/session.module';

export interface IAuthentication {
	session: ISession;
	login: (email: string, password: string) => Promise<Response | null>;
	logout: () => Promise<any>;
	register: (input: RegisterInput) => Promise<Response | null>;
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
			return await this.post('/users/login', { email, password });
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	logout(): Promise<any> {
		return Promise.resolve();
	}

	async register(input: RegisterInput): Promise<Response | null> {
		try {
			return await this.post('/users', input);
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	loadFromCookies(): Promise<any> {
		return Promise.resolve();
	}
}
