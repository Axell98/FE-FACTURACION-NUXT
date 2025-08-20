export default defineNuxtRouteMiddleware(async () => {
	const authStore = useAuthStore();
	if (authStore.loading) {
		await authStore.validateAuth();
	}
	if (authStore.isAuthenticated) {
		return navigateTo('/home');
	}
});
