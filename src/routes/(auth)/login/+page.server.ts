import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	default: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData()) as unknown as {
			email: string;
			password: string;
		};

		if (!data.email || !data.password) {
			return fail(400, { status: 'error', message: 'Invalid request' });
		}

		const response = await locals.m.auth.login(data.email, data.password);


		if (!response) {
			return fail(500, { status: 'error', message: 'Internal server error' });
		}

		if (response.status !== 200) {
			return fail(401, { status: 'error', message: 'Invalid login' });
		}

		return { success: true };
	}
} satisfies Actions;
