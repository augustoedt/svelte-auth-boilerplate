export interface ISession {
    getToken: () => string;
    setSession: (token: string) => void;
    getSession: () => string;
    clearSession: () => void;
    isValidSession: () => boolean;
}

export class Session implements ISession {
    getToken(): string {
        return '';
    }

    setSession(token: string): void {
        console.log('setSession', token);
    }

    getSession(): string {
        return '';
    }

    clearSession(): void {
        console.log('clearSession');
    }

    isValidSession(): boolean {
        return false;
    }
}