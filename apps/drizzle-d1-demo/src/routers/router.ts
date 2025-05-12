import { Hono } from 'hono';

import { createUserHandler } from '../modules/commands/create-user.handler';
import { listUsersQuery } from '../modules/queries/list-user.query';
import { ROUTES } from '../route';

const drizzleDemoRoute = new Hono();

drizzleDemoRoute.post(ROUTES.CreateUser, createUserHandler);
drizzleDemoRoute.get(ROUTES.ListUsers, listUsersQuery);

export default drizzleDemoRoute;
