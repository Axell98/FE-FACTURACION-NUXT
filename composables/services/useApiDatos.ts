import type { DataResponse } from '~/domain/interfaces/response.interface';
import type { UbigeoDepartamentos } from '~/domain/interfaces/datos.interface';

const useApiDatos = () => {
	const config = useRuntimeConfig();
	const headers = useHeaders().value;

	const getUbigeo = async (agrupar: string = 'true') => {
		const response = await useLazyFetch<DataResponse<UbigeoDepartamentos[]>>(`${config.public.apiURL}/configuracion/sistema/datos/ubigeo?agrupar=${agrupar}`, {
			headers,
		});
		return response;
	};

	return { getUbigeo };
};

export default useApiDatos;
