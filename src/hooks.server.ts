import { m } from '$lib/infra/utils';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const { headers } = event.request;

	event.locals.m = m;

	event.locals.m.auth.loadFromCookies(headers.get('cookie') ?? '');

	const isValid = await event.locals.m.session.isValidSession();

	if (isValid == null) {
		event.locals.m.auth.logout(event.cookies);
	} else {
		event.locals.user = event.locals.m.session;
	}

	const response = await resolve(event);

	return response;
}) satisfies Handle;