export interface ICoreModule {
	baseUrl: string;
}

interface HttpClient {
	get(url: string, headers?: Record<string, string>): Promise<Response>;
	post(url: string, input: any, headers?: Record<string, string>): Promise<Response>;
	getWithAuth(url: string, token: string): Promise<Response>;
	postWithAuth(url: string, input: any, token: string): Promise<Response>;
}

export class CoreModule implements HttpClient, ICoreModule {
	baseUrl: string;

	constructor(host: string) {
		this.baseUrl = host;
	}

	async get(url: string, headers?: Record<string, string>): Promise<Response> {
		const response = await fetch(`${this.baseUrl}${url}`, {
			method: 'GET',
			headers: { ...headers, 'Content-Type': 'application/json' }
		});
		return response;
	}

	async post(url: string, input: any, headers?: Record<string, string>): Promise<Response> {
		const response = await fetch(`${this.baseUrl}${url}`, {
			method: 'POST',
			headers: { ...headers, 'Content-Type': 'application/json' },
			body: JSON.stringify(input)
		});
		return response;
	}

	async getWithAuth(url: string, token: string): Promise<Response> {
		const response = await fetch(`${this.baseUrl}${url}`, {
			method: 'GET',
			headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
		});
		return response;
	}

	async postWithAuth(url: string, input: any, token: string): Promise<Response> {
		const response = await fetch(`${this.baseUrl}${url}`, {
			method: 'POST',
			headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
			body: JSON.stringify(input)
		});
		return response;
	}
}
