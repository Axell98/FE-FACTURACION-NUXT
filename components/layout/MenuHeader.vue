<script lang="ts" setup>
const colorMode = useColorMode();

const changeThemeColor = () => {
	colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light');
};
</script>

<template>
	<header class="w-full h-[60px] flex items-center px-3 border-b border-gray-300">
		<p>Cabeceras</p>
		<div class="flex items-center gap-4 ms-auto">
			<UButton
				color="neutral"
				variant="ghost"
				:icon="colorMode.value == 'light' ? 'i-lucide-moon' : 'i-lucide-sun'"
				size="lg"
				@click="changeThemeColor"
			/>
			<UButton
				color="neutral"
				variant="ghost"
				icon="i-lucide-bell"
				size="lg"
			/>
			<UButton
				color="neutral"
				variant="ghost"
				icon="i-lucide-circle-help"
				size="lg"
			/>
		</div>
	</header>
</template>
