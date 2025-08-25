interface UserRoleData {
	name: string;
	display_name: string;
}

export interface UserData {
	id: number;
	usuario: string;
	nombre: string;
	activo: boolean;
	roles: UserRoleData;
}

export interface AuthStoreData {
	user: UserData | null;
	token: string | null;
	authenticated: boolean;
	loading: boolean;
}
