import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		const data = Object.fromEntries(await event.request.formData()) as unknown as {
			email: string;
			name: string;
			password: string;
			confirmPassword: string;
		};

		if (!data.email || !data.name || !data.password || !data.confirmPassword) {
			return {
				status: 400,
				body: {
					error: 'Invalid request'
				}
			};
		}

		if (data.password !== data.confirmPassword) {
			return {
				status: 400,
				body: {
					error: 'Passwords do not match'
				}
			};
		}

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
