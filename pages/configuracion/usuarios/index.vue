<script lang="ts" setup>
useHead({
	title: 'Usuarios',
});

const apiUsuarios = useApiUsuarios();

const { data, error, pending } = await apiUsuarios.list();

const table = useTemplateRef('table');
const listadoUsuarios = ref([]);

watch(data, (response) => {
	if (response?.status) {
		listadoUsuarios.value = response.data;
	}
});

const items = ref([
	{
		label: 'Home',
		to: '/home',
	},
	{
		label: 'Configuración',
	},
	{
		label: 'Usuarios',
		to: '/configuracion/usuarios',
	},
]);

const columnsTable = [
	{
		accessorKey: 'id',
		header: 'Id',
	},
	{
		accessorKey: 'usuario',
		header: 'Usuario',
	},
	{
		accessorKey: 'nombre',
		header: 'Nombre',
	},
	{
		accessorKey: 'activo',
		header: 'Estado',
	},
	{
		accessorKey: 'created_at',
		header: 'Fec. registro',
	},
];

const columnFilters = ref([
	{
		id: 'nombre',
		value: '',
	},
]);
</script>

<template>
	<LayoutBaseLayout>
		<div class="flex items-center justify-between">
			<h1 class="font-bold">
				USUARIOS
			</h1>
			<UBreadcrumb :items="items" />
		</div>
		<div class="bg-white w-full mt-4 rounded-sm p-4 shadow-sm">
			<div class="flex justify-between px-0.5 py-2">
				<UInput
					:model-value="table?.tableApi?.getColumn('nombre')?.getFilterValue() as string"
					class="max-w-sm"
					placeholder="Buscar usuario..."
					size="lg"
					@update:model-value="table?.tableApi?.getColumn('nombre')?.setFilterValue($event)"
				/>
				<UButton
					label="Nuevo usuario"
					size="lg"
				/>
			</div>
			<div v-if="pending">
				<BaseLoading />
			</div>
			<UTable
				v-else
				ref="table"
				v-model:column-filters="columnFilters"
				:data="listadoUsuarios"
				:columns="columnsTable"
				class="flex-1 mt-2"
				empty="No existen registros"
			/>
		</div>
	</LayoutBaseLayout>
</template>
