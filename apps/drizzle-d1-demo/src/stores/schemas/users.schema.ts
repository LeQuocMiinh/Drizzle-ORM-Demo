import { InferSelectModel } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const usersSqliteTable = sqliteTable('users', {
	id: integer('id').primaryKey(),
	name: text('name').notNull(),
	age: integer('age'),
});

export type UsersType = InferSelectModel<typeof usersSqliteTable>;
