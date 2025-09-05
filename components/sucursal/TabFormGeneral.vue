<script lang="ts" setup>
import type { DataDepartamentos, DataProvincias, DataDistritos } from '~/domain/interfaces/datos.interface';

const props = defineProps<{
	dataDepartamentos: DataDepartamentos[];
}>();

const dataProvincias = ref<DataProvincias[]>([]);
const dataDistritos = ref<DataDistritos[]>([]);

const selectDept = ref<string>('');
const selectProv = ref<string>('');
const sucursalMain = ref<boolean>(false);

const getDeptIndex = computed(() => {
	return props.dataDepartamentos.findIndex(item => item.value === selectDept.value);
});

const getProvIndex = computed(() => {
	return dataProvincias.value.findIndex(item => item.value === selectProv.value);
});

const changeDepartamento = (value: string) => {
	selectDept.value = value;
	const indexDept = getDeptIndex.value;
	const provincias = props.dataDepartamentos[indexDept].provincias;
	dataProvincias.value = provincias.map((prov: Record<string, string>) => ({
		label: prov.provincia_nombre,
		value: prov.provincia_nombre,
		distritos: prov.distritos,
	}));
	dataDistritos.value = [];
};
const changeProvincia = (value: string) => {
	selectProv.value = value;
	const indexProv = getProvIndex.value;
	const distritos = dataProvincias.value[indexProv].distritos;
	dataDistritos.value = distritos.map((dist: Record<string, string>) => ({
		label: dist.distrito_nombre,
		value: dist.distrito_id,
	}));
};
</script>

<template>
	<div class="grid grid-cols-2 gap-3.5 text-sm px-1">
		<BaseInputCustom
			id="suc_codigo"
			label="Código sucursal sunat"
			placeholder="Ingresa tu código de sunat"
		/>
		<BaseInputCustom
			id="suc_nombre"
			label="Nombre de sucursal:"
			placeholder="Ingresa el nombre"
		/>
		<BaseInputCustom
			id="suc_celular"
			label="Celular - Teléfono:"
			placeholder="Ingresa un número de teléfono"
		/>
		<BaseInputCustom
			id="suc_email"
			label="Email:"
			placeholder="Ingresa un email"
		/>
		<div class="col-span-2">
			<BaseInputCustom
				id="suc_direccion"
				label="Dirección Fiscal:"
				placeholder="Ingresa una dirección"
			/>
		</div>
		<div class="col-span-2 grid grid-cols-3 gap-x-3.5">
			<BaseSelectCustom
				id="suc_departamento"
				label="Departamento:"
				:items="dataDepartamentos"
				placeholder="Seleccionar una opción"
				@change="changeDepartamento"
			/>
			<BaseSelectCustom
				id="suc_provincia"
				label="Provincia:"
				:items="dataProvincias"
				placeholder="Seleccionar una opción"
				@change="changeProvincia"
			/>
			<BaseSelectCustom
				id="suc_distrito"
				label="Distrito:"
				:items="dataDistritos"
				placeholder="Seleccionar una opción"
			/>
		</div>
		<div class="ps-1 py-2">
			<USwitch
				v-model="sucursalMain"
				label="Sucursal principal"
			/>
		</div>
	</div>
</template>
