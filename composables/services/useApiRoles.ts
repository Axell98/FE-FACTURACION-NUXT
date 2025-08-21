import type { DataResponse } from '~/domain/interfaces/response.interface';
import type { RoleData } from '~/domain/interfaces/roles.interface';

const useApiRoles = () => {
	const config = useRuntimeConfig();
	const headers = useHeaders().value;

	const list = async () => {
		const response = await useLazyFetch<DataResponse<RoleData[]>>(`${config.public.apiURL}/configuracion/roles`, {
			headers,
		});
		return response;
	};

	return { list };
};

export default useApiRoles;
