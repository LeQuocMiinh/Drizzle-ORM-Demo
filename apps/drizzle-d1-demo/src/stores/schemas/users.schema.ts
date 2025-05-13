import { InferSelectModel } from 'drizzle-orm';
import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersSqliteTable = sqliteTable(
	'users',
	{
		id: integer('id').primaryKey(),
		name: text('name').notNull(),
		age: integer('age'),
	},
	(users) => [index('nameIdx').on(users.name)],
);

export type UsersType = InferSelectModel<typeof usersSqliteTable>;
