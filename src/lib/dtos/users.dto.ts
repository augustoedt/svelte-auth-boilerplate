export interface RegisterInput {
	email: string;
	password: string;
	name: string;
	roleId?: string;
	userId?: string;
	applicationId?: string;
}

export interface RegisterResponse {
	data: {
        id: string;
		email: string;
		name: string;
	};
}
