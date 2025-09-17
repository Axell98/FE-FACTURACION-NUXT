import type { DataResponse } from '~/domain/interfaces/response.interface';
import type { UserData } from '~/domain/interfaces/user.interface';

const useApiUsuarios = () => {
	const config = useRuntimeConfig();
	const headers = useHeaders().value;

	const list = async () => {
		const response = await useLazyFetch<DataResponse<UserData[]>>(`${config.public.apiURL}/configuracion/usuarios`, {
			headers,
		});
		return response;
	};

	const save = async (body: Record<string, string>) => {
		const response = await useLazyFetch<DataResponse>(`${config.public.apiURL}/configuracion/usuarios`, {
			method: 'POST',
			headers,
			body,
		});
		return response;
	};

	const changePassword = async (id: number, body: Record<string, string>) => {
		const response = await useLazyFetch<DataResponse>(`${config.public.apiURL}/configuracion/usuarios/update-password/${id}`, {
			method: 'POST',
			headers,
			body,
		});
		return response;
	};

	return { list, save, changePassword };
};

export default useApiUsuarios;
