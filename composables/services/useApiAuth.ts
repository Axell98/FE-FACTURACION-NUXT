const useApiAuth = () => {
	const config = useRuntimeConfig();
	const headers = useHeaders().value;

	const login = async (credentials: Record<string, unknown>) => {
		return await $fetch('/auth/login', {
			baseURL: config.public.apiURL,
			method: 'POST',
			body: credentials,
			headers,
		});
	};

	const profile = async () => {
		return $fetch('/auth/profile', {
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
