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

	return { list };
};

export default useApiUsuarios;
