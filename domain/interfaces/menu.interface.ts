export interface MenuData {
	id?: number;
	id_pad?: number | null;
	nombre: string;
	url?: string;
	icono: string;
	nuevo?: boolean | null;
	activo?: boolean;
	submenus: MenuData[];
}
