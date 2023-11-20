import type { Actions } from './$types';

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export const actions = {
	default: async (event) => {
		const r = Object.fromEntries(await event.request.formData()) as unknown as {
			email: string;
			name: string;
			password: string;
			confirmPassword: string;
		};

		const { confirmPassword, ...registerData } = r;

		if (
			!registerData.email ||
			!registerData.name ||
			!registerData.password ||
			!confirmPassword
		) {
			return {
				status: 400,
				body: {
					error: 'Invalid request',
					data: registerData
				}
			};
		}

		if (registerData.password !== confirmPassword) {
			return {
				status: 400,
				body: {
					error: 'Passwords do not match',
					data: registerData
				}
			};
		}

		const response = await event.locals.m.auth.register(registerData);

		if (!response) {
			return {
				status: 500,
				body: {
					error: 'Internal server error',
					data: registerData
				}
			};
		}

		if (response.status !== 201) {
			const { message } = await response.json();
			return {
				status: response.status,
				body: {
					error: message,
					data: registerData
				}
			};
		}

		const { data } = await response.json();

		return { success: true, data };
	}
} satisfies Actions;
