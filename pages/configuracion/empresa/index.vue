<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
});

useHead({
	title: 'Empresa',
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
		label: 'Empresa',
		to: '/configuracion/empresa',
	},
]);
</script>

<template>
	<LayoutBaseLayout>
		<div class="flex items-center justify-between">
			<h1 class="font-bold">
				EMPRESA
			</h1>
			<UBreadcrumb :items="items" />
		</div>
		<div class="bg-white dark:bg-slate-900 w-full mt-4 rounded-lg p-4 shadow-sm">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, voluptatum. Dolorum quisquam possimus aliquam recusandae quia itaque. Praesentium culpa nemo nihil facilis soluta fugiat distinctio dolor. Commodi veniam expedita neque!
		</div>
	</LayoutBaseLayout>
</template>
