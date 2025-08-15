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
	empresa_acceso: string | null;
	empresa_actual: string | null;
	activo: boolean;
	created_at: string;
	updated_at: string;
}
