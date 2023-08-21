// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			m: import('$lib/server/modules/base/base.module').BaseModule;
			user: import('$lib/server/modules/session/session.module').ISession;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
