export const useHeaders = () => {
	const authStore = useAuthStore();
	return computed(() => {
		const headers: Record<string, string> = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		};
		if (authStore?.token) {
			headers['Authorization'] = `Bearer ${authStore.token}`;
		}
		return headers;
	});
};
