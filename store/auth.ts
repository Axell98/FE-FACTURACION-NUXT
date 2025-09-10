import { defineStore } from 'pinia';
import type { UserStoreData } from '~/domain/interfaces/user.interface';

export const useAuthStore = defineStore('auth', {
	state: (): UserStoreData => ({
		token: import.meta.client ? localStorage.getItem('tokenAuth') : null,
		userData: null,
		loading: true,
	}),
	getters: {
		isAuthenticated: (state): boolean => !!state.token && !!state.userData,
	},
	actions: {
		setToken(token: string) {
			this.token = token;
			localStorage.setItem('tokenAuth', token);
		},
		clearAuth() {
			this.token = null;
			this.userData = null;
			localStorage.removeItem('tokenAuth');
			localStorage.removeItem('menuAuth');
		},
		async login(credentials: Record<string, string>) {
			const { login } = useApiAuth();
			try {
				const response = await login(credentials);
				this.userData = response.data.userData;
				this.setToken(response.data.token || '');
				await navigateTo('/home');
			}
			catch (error: any) {
				this.clearAuth();
				return error?.data.message || 'Se ha producido un error';
			}
			finally {
				this.loading = false;
			}
		},
		async validateAuth() {
			if (!this.token && import.meta.client) {
				this.token = localStorage.getItem('tokenAuth');
				if (!this.token) {
					this.loading = false;
					return false;
				}
			}
			let checkAuth = false;
			const { profile } = useApiAuth();
			try {
				const response = await profile();
				this.userData = response.data;
				checkAuth = true;
			}
			catch (error) {
				console.error('Error en validateAuth', error);
				this.clearAuth();
				await navigateTo('/auth/login');
			}
			finally {
				this.loading = false;
			}
			return checkAuth;
		},
		async logout() {
			useApiAuth().logout();
			this.clearAuth();
			await navigateTo('/auth/login');
		},
	},
});
