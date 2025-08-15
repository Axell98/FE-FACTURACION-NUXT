export const useHeaders = () => {
	const authStore = useAuthStore();
	return computed(() => {
		const headers: Record<string, string> = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		};
		headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2ZhY3R1cmFjaW9uYmUtYXBpLnJpYWFjLmNvbS9hcGkvdjEvYXV0aC9sb2dpbiIsImlhdCI6MTc1NTI4NjkwNSwiZXhwIjoxNzU1Mjk0MTA1LCJuYmYiOjE3NTUyODY5MDUsImp0aSI6IlpWTFFLeHJuS29QY0picDIiLCJzdWIiOiIxIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.mAbD18yIjg-EYrRsiQKS9YNzrU_lLWuEWrzZfJFDKnA';
		/* if (authStore?.token) {
			headers['Authorization'] = `Bearer ${authStore.token}`;
		} */
		return headers;
	});
};
