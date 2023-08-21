import type { ISession } from '../session/session.module';

export interface IUser {
	session: ISession;
	profile(): Promise<any>;
}

export class User implements IUser {
	session: ISession;

	constructor(session: ISession) {
		this.session = session;
	}

	async profile() {
		throw new Error('Method not implemented.');
	}
}
