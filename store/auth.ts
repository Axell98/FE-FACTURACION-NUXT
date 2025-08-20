import { defineStore } from 'pinia';
import type { UserData } from '~/domain/interfaces/auth.interface';

interface AuthState {
	user: UserData | null;
	token: string | null;
	loading: boolean;
}

export const useAuthStore = defineStore('auth', {
	state: (): AuthState => ({
		user: null,
		token: import.meta.client ? localStorage.getItem('tokenAuth') : null,
		loading: true,
	}),
	getters: {
		isAuthenticated: (state): boolean => !!state.token && !!state.user,
	},
	actions: {
		setToken(token: string) {
			this.token = token;
			localStorage.setItem('tokenAuth', token);
		},
		clearAuth() {
			this.user = null;
			this.token = null;
			localStorage.removeItem('tokenAuth');
		},
		async login(credentials: Record<string, unknown>) {
			const { login } = useApiAuth();
			try {
				const response = await login(credentials);
				const { accessToken, userData } = response?.data;
				this.setToken(accessToken);
				this.user = userData;
				await navigateTo('/home');
			}
			catch (error) {
				this.clearAuth();
				console.error('Error login', error);
				return error?.data.message || 'Error en el servidor';
			}
		},
		async logout() {
			const { logout } = useApiAuth();
			try {
				await logout();
			}
			catch (error) {
				console.error('Error logout', error);
			}
			finally {
				this.clearAuth();
				await navigateTo('/auth/login');
			}
		},
	},
});
