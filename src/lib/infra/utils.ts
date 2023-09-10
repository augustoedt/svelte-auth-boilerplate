import { PUBLIC_API_URL } from '$env/static/public';
import { BaseModule } from '$lib/server/modules/base/base.module';

export const m = new BaseModule(PUBLIC_API_URL);
