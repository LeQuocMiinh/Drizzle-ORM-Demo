import type { Config } from 'drizzle-kit';

export default {
	schema: './src/stores/schemas',
	out: './migrations',
	dialect: 'sqlite',
	driver: 'd1-http',
	dbCredentials: {
		accountId: '762a1bdee9fb5298894009f7625b55c6',
		databaseId: '970701f4-8338-4ce6-a03e-092e96daae06',
		token: 'XCKLcU3LZaeDBWmv1Q2JYgLl4Fduqw2fI6YwOYeZ',
	},
} satisfies Config;
