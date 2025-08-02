export interface UserData {
	id: number;
	usuario: string;
	nombre: string;
	activo: boolean;
}

export interface AuthStoreData {
	user: UserData | null;
	token: string | null;
	authenticated: boolean;
	loading: boolean;
}
