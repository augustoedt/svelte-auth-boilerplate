export interface CoreModule {
    fetch(): Promise<Response>;
    authFetch(): Promise<Response>;
}


