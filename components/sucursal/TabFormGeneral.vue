<script lang="ts" setup>
const sucursalMain = ref<boolean>(false);

const items = ref([
	{
		label: 'Backlog',
		value: 'backlog',
	},
	{
		label: 'Todo',
		value: 'todo',
	},
	{
		label: 'In Progress',
		value: 'in_progress',
	},
	{
		label: 'Done',
		value: 'done',
	},
]);
</script>

<template>
	<div class="grid grid-cols-2 gap-4 text-sm px-1">
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
			label="Celular || Teléfono:"
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
		<div class="col-span-2 grid grid-cols-3 gap-x-4">
			<BaseSelectCustom
				id="suc_departamento"
				label="Departamento:"
				:items="items"
				placeholder="Seleccionar una opción"
			/>
			<BaseSelectCustom
				id="suc_provincia"
				label="Provincia:"
				:items="items"
				placeholder="Seleccionar una opción"
			/>
			<BaseSelectCustom
				id="suc_distrito"
				label="Distrito:"
				:items="items"
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
