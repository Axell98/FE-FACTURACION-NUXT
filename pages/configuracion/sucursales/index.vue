<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
});

useHead({
	title: 'Sucursales',
});

const table = useTemplateRef('table');
const showModal = ref<boolean>(true);
const listadoSucursales = ref([]);

const items = ref([
	{
		label: 'Home',
		to: '/home',
	},
	{
		label: 'Configuración',
	},
	{
		label: 'Sucursales',
		to: '/configuracion/sucursales',
	},
]);

const columnsTable = [
	{
		accessorKey: 'id',
		header: 'Id',
	},
	{
		accessorKey: 'nombre',
		header: 'Nombre',
	},
	{
		accessorKey: 'tipo',
		header: 'Tipo',
	},
	{
		id: 'action',
	},
];

const columnFilters = ref([
	{
		id: 'nombre',
		value: '',
	},
]);

const tabsItem = ref([
	{
		label: 'Información General',
		icon: 'i-lucide-info',
		slot: 'information' as const,
	},
	{
		label: 'Series & Correlativos',
		icon: 'i-lucide-list-ordered',
		slot: 'series' as const,
	},
	{
		label: 'Logos',
		icon: 'i-lucide-image',
		slot: 'image' as const,
	},
]);
</script>

<template>
	<LayoutBaseLayout>
		<div class="flex items-center justify-between">
			<h1 class="font-bold">
				SUCURSALES
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
					label="Nueva sucursal"
					size="lg"
					@click="showModal = true"
				/>
			</div>
			<div class="w-full">
				<UTable
					ref="table"
					v-model:column-filters="columnFilters"
					:data="listadoSucursales"
					:columns="columnsTable"
					class="flex-1 mt-2"
					empty="No existen registros"
				/>
			</div>
		</div>
		<UModal
			v-model:open="showModal"
			title="Agregar sucursal"
			description=""
			:ui="{
				content: 'lg:max-w-[810px]',
			}"
		>
			<template #body>
				<UTabs
					size="lg"
					variant="pill"
					class="w-full gap-4"
					:ui="{
						leadingIcon: 'size-4',
					}"
					:items="tabsItem"
				>
					<template #information>
						<SucursalTabFormGeneral />
					</template>
				</UTabs>
			</template>
		</UModal>
	</LayoutBaseLayout>
</template>
