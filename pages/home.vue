<script lang="ts" setup>
const items = ref([
	{
		label: 'Home',
	},
	{
		label: 'Dashboard',
		to: '/home',
	},
]);
</script>

<template>
	<LayoutBaseLayout>
		<div class="flex items-center justify-between">
			<h1 class="font-bold">
				Dashboard
			</h1>
			<UBreadcrumb :items="items" />
		</div>
	</LayoutBaseLayout>
</template>
