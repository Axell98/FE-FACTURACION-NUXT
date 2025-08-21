<script lang="ts" setup>
import type { UserData } from '~/domain/interfaces/user.interface';

definePageMeta({
	middleware: 'auth',
});

useHead({
	title: 'Roles',
});

const apiUsuarios = useApiUsuarios();

const { data, pending } = await apiUsuarios.list();

const table = useTemplateRef('table');
const listadoUsuarios = ref<UserData[]>([]);

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
		label: 'Roles',
		to: '/configuracion/roles',
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
				ROLES
			</h1>
			<UBreadcrumb :items="items" />
		</div>
		<div class="bg-white dark:bg-slate-900 w-full mt-4 rounded-lg p-4 shadow-sm">
			<div class="flex justify-between px-0.5 py-2">
				<UInput
					:model-value="table?.tableApi?.getColumn('nombre')?.getFilterValue() as string"
					class="max-w-sm"
					placeholder="Buscar rol..."
					size="lg"
					@update:model-value="table?.tableApi?.getColumn('nombre')?.setFilterValue($event)"
				/>
				<UButton
					label="Nuevo rol"
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
