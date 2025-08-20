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
				const response: any = await login(credentials);
				if (!response.status) {
					throw new Error(response.message || 'Error en login');
				}
				const { accessToken, userData, expiresIn } = response.data;
				this.user = userData;
				this.setToken(accessToken);
				localStorage.setItem('expiresIn', expiresIn);
				await navigateTo('/home');
			}
			catch (error: any) {
				this.clearAuth();
				console.error('Error login', error);
				return error?.data.message || 'Server error';
			}
		},
		async validateAuth() {
			if (!this.token && import.meta.client) {
				this.token = localStorage.getItem('tokenAuth');
			}

			if (!this.token) {
				this.loading = false;
				return false;
			}
			try {
				const { profile } = useApiAuth();
				const response: any = await profile();
				this.user = response.data;
				return true;
			}
			catch (error) {
				console.error('Error en validateAuth', error);
				this.clearAuth();
				await navigateTo('/auth/login');
				return false;
			}
			finally {
				this.loading = false;
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
