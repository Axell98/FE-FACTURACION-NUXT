import type { MenuData } from '~/domain/interfaces/menu.interface';

export const useMenuStore = defineStore('menuStore', {
	state: () => ({
		menu: [] as MenuData[],
	}),
	getters: {
		hasMenu: (state): boolean => state.menu.length > 0,
	},
	actions: {
		async loadMenu() {
			if (this.hasMenu) return;
			if (import.meta.client) {
				const storedMenu = sessionStorage.getItem('menuAuth');
				if (storedMenu) {
					this.menu = JSON.parse(storedMenu);
					return;
				}
			}
			const data = await useApiMenu().getMenuAuth();
			watch(data, (response) => {
				if (response?.status) {
					this.menu = response.data;
					sessionStorage.setItem('menuAuth', JSON.stringify(this.menu));
				}
			});
		},
	},
});
