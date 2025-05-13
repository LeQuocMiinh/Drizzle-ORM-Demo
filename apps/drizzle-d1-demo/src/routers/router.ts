import { Hono } from 'hono';

import { createUserHandler } from '../modules/commands/create-user.handler';
import { deleteAllUsers } from '../modules/commands/delete-all-user.handler';
import { updateUserHanlder } from '../modules/commands/update-user-handler';
import { listUsersQuery } from '../modules/queries/list-user.query';
import { ROUTES } from '../route';

const drizzleDemoRoute = new Hono();

drizzleDemoRoute.get(ROUTES.ListUsers, listUsersQuery);
drizzleDemoRoute.post(ROUTES.CreateUser, createUserHandler);
drizzleDemoRoute.put(ROUTES.UpdateUser, updateUserHanlder);
drizzleDemoRoute.delete(ROUTES.DeleteUsers, deleteAllUsers);

export default drizzleDemoRoute;
