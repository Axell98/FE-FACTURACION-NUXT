import type { DataResponse } from '~/domain/interfaces/response.interface';
import type { RoleData, PermissionData } from '~/domain/interfaces/roles.interface';

const useApiRoles = () => {
	const config = useRuntimeConfig();
	const headers = useHeaders().value;

	const getRoles = async () => {
		const response = await useLazyFetch<DataResponse<RoleData[]>>(`${config.public.apiURL}/configuracion/roles`, {
			headers,
		});
		return response;
	};

	const getPermissions = async () => {
		const response = await useLazyFetch<DataResponse<PermissionData[]>>(`${config.public.apiURL}/configuracion/sistema/permisos`, {
			headers,
		});
		return response;
	};

	const saveRoles = async () => {
		const response = await useLazyFetch<DataResponse<any>>(`${config.public.apiURL}/configuracion/roles`, {
			method: 'POST',
			headers,
		});
		return response;
	};

	return { getRoles, saveRoles, getPermissions };
};

export default useApiRoles;
