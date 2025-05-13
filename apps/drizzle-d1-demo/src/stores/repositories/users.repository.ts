import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/d1';

import { Env } from '../../constrains';
import { usersSqliteTable, UsersType } from '../schemas/users.schema';

async function listUsers(env: Env): Promise<UsersType[]> {
	const db = drizzle(env.drizzleDemo);
	return await db.select().from(usersSqliteTable).all();
}

async function updateUser(env: Env, userId: number, data: Omit<UsersType, 'id'>): Promise<UsersType[]> {
	const db = drizzle(env.drizzleDemo);

	return await db.update(usersSqliteTable).set(data).where(eq(usersSqliteTable.id, userId)).returning();
}

async function createUsers(env: Env, data: Omit<UsersType, 'id'>): Promise<UsersType[]> {
	const db = drizzle(env.drizzleDemo);
	return await db.insert(usersSqliteTable).values(data).returning();
}

async function deleteUsers(env: Env): Promise<UsersType[]> {
	const db = drizzle(env.drizzleDemo);
	return await db.delete(usersSqliteTable).returning();
}

export const UsersRepositories = {
	listUsers,
	createUsers,
	updateUser,
	deleteUsers,
};
