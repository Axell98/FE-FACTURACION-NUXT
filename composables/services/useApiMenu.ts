import type { DataResponse } from '~/domain/interfaces/response.interface';
import type { MenuData } from '~/domain/interfaces/menu.interface';

const useApiMenu = () => {
	const config = useRuntimeConfig();
	const headers = useHeaders().value;
	const menuStore = useMenuStore();

	const getMenuAuth = async () => {
		if (menuStore.menuAuth.data) return;
		const { data, error } = await useLazyFetch<DataResponse<MenuData[]>>(
			`${config.public.apiURL}/configuracion/sistema/menu/user`,
			{
				headers,
			},
		);
		menuStore.setMenuAuth({
			data: null,
			error: null,
			status: false,
		});
		watch(data, (response) => {
			if (response?.status) {
				menuStore.setMenuAuth({
					data: response.data ?? [],
					error: response.error ?? null,
					status: response.status,
				});
			}
			else {
				console.error('Error fetching menu', error);
			}
		});
	};

	return {
		getMenuAuth,
	};
};

export default useApiMenu;
