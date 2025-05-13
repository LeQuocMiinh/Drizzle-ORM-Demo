import { drizzle } from 'drizzle-orm/d1';

import { Env } from '../../constrains';

let _db: ReturnType<typeof drizzle> | null = null;

export function getDb(env: Env): ReturnType<typeof drizzle> {
	if (!_db) {
		_db = drizzle(env.drizzleDemo);
	}
	return _db;
}
