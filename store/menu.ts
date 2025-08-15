import type { MenuData } from '~/domain/interfaces/menu.interface';

export const useMenuStore = defineStore('menuStore', {
	state: () => {
		return {
			menuAuth: {
				data: null,
				error: null,
				status: false,
			} as {
				data: MenuData[] | null;
				error: string | null;
				status: boolean;
			},
		};
	},
	getters: {
		userMenu: state => state.menuAuth.data,
	},
	actions: {
		setMenuAuth(payload: {
			data: MenuData[] | null;
			error: string | null;
			status: boolean;
		}) {
			this.menuAuth.data = payload.data;
			this.menuAuth.error = payload.error;
			this.menuAuth.status = payload.status;
			if (this.menuAuth.data) {
				sessionStorage.setItem(
					'menuAuth',
					JSON.stringify(this.menuAuth),
				);
			}
		},
	},
});
