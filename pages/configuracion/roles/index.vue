<script lang="ts" setup>
import type { RoleData } from '~/domain/interfaces/roles.interface';

definePageMeta({
	middleware: 'auth',
});

useHead({
	title: 'Roles',
});

const apiRoles = useApiRoles();

const { data, pending } = await apiRoles.list();

const table = useTemplateRef('table');
const listadoRoles = ref<RoleData[]>([]);

watch(data, (response) => {
	if (response?.status) {
		listadoRoles.value = response.data;
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
		accessorKey: 'display_name',
		header: 'Nombre del rol',
	},
	{
		accessorKey: 'created_at',
		header: 'Fec. registro',
	},
];

const columnFilters = ref([
	{
		id: 'display_name',
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
					:model-value="table?.tableApi?.getColumn('display_name')?.getFilterValue() as string"
					class="max-w-sm"
					placeholder="Buscar rol..."
					size="lg"
					@update:model-value="table?.tableApi?.getColumn('display_name')?.setFilterValue($event)"
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
				:data="listadoRoles"
				:columns="columnsTable"
				class="flex-1 mt-2"
				empty="No existen registros"
			/>
		</div>
	</LayoutBaseLayout>
</template>
