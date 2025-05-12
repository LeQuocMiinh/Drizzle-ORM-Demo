import type { Config } from 'drizzle-kit';

export default {
	schema: './src/stores/schemas',
	out: './drizzle/migrations',
	dialect: 'sqlite',
	driver: 'd1-http',
	dbCredentials: {
		accountId: '762a1bdee9fb5298894009f7625b55c6',
		databaseId: '6a0af321-88ce-4c77-a7ee-c9c320d86d00',
		token: 'XCKLcU3LZaeDBWmv1Q2JYgLl4Fduqw2fI6YwOYeZ',
	},
} satisfies Config;

// after run: pnpm drizzle-kit push
