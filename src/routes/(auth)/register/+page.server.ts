import type { Actions } from './$types';

export const actions = {
	register: async (event) => {
		const data = Object.fromEntries(await event.request.formData()) as unknown as {
			email: string;
			password: string;
		};

		const response = await event.locals.m.auth.register(data.email, data.password);

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
