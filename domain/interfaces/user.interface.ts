interface UserRoleData {
	name: string;
	display_name: string;
}
export interface UserEmpresaData {
	id: number;
	ruc: string;
	razon_social: string;
	logo_url: string;
}
export interface UserData {
	id: number;
	usuario: string;
	nombre: string;
	tipo_doc: string;
	nume_doc: string;
	celular: string;
	email: string;
	direccion: string | null;
	foto: string | null;
	roles: UserRoleData;
	empresas: UserEmpresaData[];
	activo: boolean;
	created_at: string;
	updated_at: string;
}
export interface UserStoreData {
	token: string | null;
	userData: UserData | null;
	expiresIn?: string;
	loading?: boolean;
}
