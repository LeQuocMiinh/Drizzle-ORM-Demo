import { eq } from 'drizzle-orm';

import { Env } from '../../constrains';
import { catchError } from '../../utils';
import { getDb } from '../drizzle/drizzle.service';
import { usersSqliteTable, UsersType } from '../schemas/users.schema';

async function existUser(env: Env, userId: number): Promise<UsersType[] | Error> {
	try {
		const db = getDb(env);
		return await db.select().from(usersSqliteTable).where(eq(usersSqliteTable.id, userId));
	} catch (error) {
		return new Error(catchError(error));
	}
}

async function listUsers(env: Env, limit: number = 20, offset: number = 0): Promise<UsersType[] | Error> {
	try {
		const db = getDb(env);
		const rs = await db.select().from(usersSqliteTable).limit(limit).offset(offset);
		return rs;
	} catch (error) {
		return new Error(catchError(error));
	}
}

async function updateUser(env: Env, userId: number, data: Omit<UsersType, 'id'>): Promise<UsersType[] | Error> {
	try {
		const db = getDb(env);
		const rs = await db.update(usersSqliteTable).set(data).where(eq(usersSqliteTable.id, userId)).returning();
		return rs;
	} catch (error) {
		return new Error(catchError(error));
	}
}

async function createUsers(env: Env, data: Omit<UsersType, 'id'>): Promise<UsersType[] | Error> {
	try {
		const db = getDb(env);
		const rs = await db.insert(usersSqliteTable).values(data).returning();
		return rs;
	} catch (error) {
		return new Error(catchError(error));
	}
}

async function deleteAllUsers(env: Env): Promise<D1Response | Error> {
	try {
		const db = getDb(env);
		return await db.delete(usersSqliteTable);
	} catch (error) {
		return new Error(catchError(error));
	}
}

async function deleteOneUser(env: Env, userId: number): Promise<D1Response | Error> {
	try {
		const db = getDb(env);
		const res = await db.delete(usersSqliteTable).where(eq(usersSqliteTable.id, userId));
		return res;
	} catch (error) {
		return new Error(catchError(error));
	}
}

export const UsersRepositories = {
	existUser,
	listUsers,
	createUsers,
	updateUser,
	deleteAllUsers,
	deleteOneUser,
};
