<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
});

useHead({
	title: 'Profile',
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
		label: 'Profile',
		to: '/configuracion/profile',
	},
]);
</script>

<template>
	<LayoutBaseLayout>
		<div class="flex items-center justify-between">
			<h1 class="font-bold">
				MI PERFIL
			</h1>
			<UBreadcrumb :items="items" />
		</div>
		<div class="flex w-full mt-4">
			<div class="w-full">
				Fecha de reg: 25/08/2025 14:25:00
			</div>
			<div class="w-full space-y-6">
				<ProfileFormUser />
				<ProfileFormPassword />
			</div>
		</div>
	</LayoutBaseLayout>
</template>
