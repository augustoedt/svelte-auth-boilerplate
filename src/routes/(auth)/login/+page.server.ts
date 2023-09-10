import type { Actions } from './$types';

export const actions = {
	login: async ({ cookies, request, locals }) => {
		const data = Object.fromEntries(await request.formData()) as unknown as {
			email: string;
			password: string;
		};

		const response = await locals.m.auth.login(data.email, data.password);

		if (response.status !== 200) {
			return {
				status: response.status,
				body: {
					error: 'Invalid login'
				}
			};
		}

		return { success: true };
	}
} satisfies Actions;
