import { IHono } from '../../constrains';
import { UsersRepositories } from '../../stores/repositories';
import { catchError, fail, success } from '../../utils';

export async function deleteAllUsers(c: IHono): Promise<Response> {
	try {
		const result = await UsersRepositories.deleteUsers(c.env);
		if (result instanceof Error) {
			return fail('Invalid Argument', result.message);
		}

		return success('Delete all users successfully');
	} catch (error) {
		return fail('An erros', catchError(error));
	}
}
