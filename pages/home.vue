<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
});

useHead({
	title: 'Home',
});

const items = ref([
	{
		label: 'Home',
		to: '/home',
	},
	{
		label: 'Dashboard',
	},
]);
</script>

<template>
	<LayoutBaseLayout>
		<div class="flex items-center justify-between">
			<h1 class="font-bold uppercase">
				Dashboard
			</h1>
			<UBreadcrumb :items="items" />
		</div>
	</LayoutBaseLayout>
</template>
