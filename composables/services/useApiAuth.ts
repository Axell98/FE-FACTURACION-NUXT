import type { DataResponse } from '~/domain/interfaces/response.interface';
import type { UserStoreData, UserData } from '~/domain/interfaces/user.interface';

const useApiAuth = () => {
	const config = useRuntimeConfig();
	const headers = useHeaders().value;

	const login = async (credentials: Record<string, string>) => {
		return $fetch<DataResponse<UserStoreData>>('/auth/login', {
			baseURL: config.public.apiURL,
			method: 'POST',
			body: credentials,
			headers,
		});
	};

	const profile = async () => {
		return $fetch<DataResponse<UserData>>('/auth/profile', {
			baseURL: config.public.apiURL,
			method: 'GET',
			headers,
		});
	};

	const refresh = async () => {
		return $fetch('/auth/refresh', {
			baseURL: config.public.apiURL,
			method: 'POST',
			headers,
		});
	};

	const logout = async () => {
		return $fetch('/auth/logout', {
			baseURL: config.public.apiURL,
			method: 'POST',
			headers,
		});
	};

	return { login, refresh, profile, logout };
};

export default useApiAuth;
