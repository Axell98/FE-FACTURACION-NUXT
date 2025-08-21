<script lang="ts" setup>
import { h, resolveComponent } from 'vue';
import type { UserData } from '~/domain/interfaces/user.interface';

definePageMeta({
	middleware: 'auth',
});

useHead({
	title: 'Usuarios',
});

const apiUsuarios = useApiUsuarios();

const { data, pending } = await apiUsuarios.list();

const table = useTemplateRef('table');
const UBadge = resolveComponent('UBadge');
const listadoUsuarios = ref<UserData[]>([]);
const showDrawerPanel = ref<boolean>(false);

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
		cell: ({ row }) => {
			const color = ({
				true: 'success' as const,
				false: 'error' as const,
			})[row.getValue('activo') as string];
			return h(UBadge, { class: 'capitalize', variant: 'subtle', color }, () => row.getValue('activo') == true ? 'Activo' : 'Inactivo');
		},
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
		<div class="bg-white dark:bg-slate-900 w-full mt-4 rounded-lg p-4 shadow-sm">
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
					@click="showDrawerPanel = true"
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
		<UDrawer
			v-model:open="showDrawerPanel"
			:dismissible="false"
			direction="right"
			:ui="{ header: 'flex items-center justify-between' }"
		>
			<template #header>
				<h2 class="text-highlighted font-semibold">
					Nuevo usuario
				</h2>
				<UButton
					color="neutral"
					variant="ghost"
					icon="i-lucide-x"
					@click="showDrawerPanel = false"
				/>
			</template>
			<template #body>
				<FormsFormUserReg />
			</template>
		</UDrawer>
	</LayoutBaseLayout>
</template>
