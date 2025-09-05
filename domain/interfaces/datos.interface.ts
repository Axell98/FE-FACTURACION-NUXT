interface UbigeoDistritos {
	distrito_id: string;
	distrito_nombre: string;
}

interface UbigeoProvincias {
	provincia_id: string;
	provincia_nombre: string;
	distritos: UbigeoDistritos[];
}

export interface UbigeoDepartamentos {
	departamento_id: string;
	departamento_nombre: string;
	provincias: UbigeoProvincias[];
}

export interface DataDistritos {
	label: string;
	value: string;
}

export interface DataProvincias {
	label: string;
	value: string;
	distritos: any;
}

export interface DataDepartamentos {
	label: string;
	value: string;
	provincias: any;
}
