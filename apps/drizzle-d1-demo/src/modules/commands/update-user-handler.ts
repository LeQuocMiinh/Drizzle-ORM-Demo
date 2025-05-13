import { IHono } from '../../constrains';
import { UsersRepositories } from '../../stores/repositories';
import { catchError, fail, success } from '../../utils';

export async function updateUserHanlder(c: IHono): Promise<Response> {
	try {
		const data = await c.req.json();
		const userId = Number(c.req.header('x-user-id'));
		const result = await UsersRepositories.updateUser(c.env, userId, data);
		if (result instanceof Error) {
			return fail('Invalid Argument', result.message);
		}

		return success('Update user successfully', result);
	} catch (error) {
		return fail('An occurs errors', catchError(error));
	}
}
