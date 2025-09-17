import type { DataResponse } from '~/domain/interfaces/response.interface';
import type { MenuData } from '~/domain/interfaces/menu.interface';

const useApiMenu = () => {
	const config = useRuntimeConfig();
	const headers = useHeaders().value;

	const getMenuAuth = async () => {
		const { data } = await useLazyFetch<DataResponse<MenuData[]>>(
			`${config.public.apiURL}/configuracion/sistema/menu/user`,
			{
				headers,
			},
		);
		return data;
	};

	return {
		getMenuAuth,
	};
};

export default useApiMenu;
