import { defineStore } from 'pinia';
import type { AuthStoreData, UserData } from '~/domain/interfaces/auth.interface';

export const useAuthStore = defineStore('auth', {
	state: (): AuthStoreData => ({
		user: null,
		token: import.meta.client ? localStorage.getItem('tokenAuth') : null,
		authenticated: false,
		loading: true,
	}),
	actions: {
		setUser(user: UserData) {
			this.user = user;
			this.authenticated = true;
		},
		setToken(token: string) {
			localStorage.setItem('tokenAuth', token);
			this.token = token;
		},
		clearAuth() {
			localStorage.removeItem('tokenAuth');
			this.token = null;
			this.user = null;
			this.authenticated = false;
		},
		async logout() {
			this.clearAuth();
			return navigateTo('/auth/login');
		},
	},
});
