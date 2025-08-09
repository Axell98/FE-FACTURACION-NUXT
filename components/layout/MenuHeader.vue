<script lang="ts" setup>
const colorMode = useColorMode();

const changeThemeColor = () => {
	colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light');
};
</script>

<template>
	<header class="w-full h-[60px] flex items-center px-3 border-b border-gray-300">
		<div class="flex items-center gap-4">
			<UButton
				color="neutral"
				variant="ghost"
				icon="i-lucide-menu"
				size="lg"
			/>
		</div>
		<div class="flex items-center gap-4 ms-auto">
			<UTooltip
				:text="colorMode.value == 'light' ? 'Modo oscuro' : 'Modo claro'"
				:delay-duration="1"
			>
				<UButton
					color="neutral"
					variant="ghost"
					:icon="colorMode.value == 'light' ? 'i-lucide-moon' : 'i-lucide-sun'"
					size="lg"
					@click="changeThemeColor"
				/>
			</UTooltip>
			<UTooltip
				text="Notificaciones"
				:delay-duration="1"
			>
				<UButton
					color="neutral"
					variant="ghost"
					icon="i-lucide-bell"
					size="lg"
				/>
			</UTooltip>
			<UTooltip
				text="Necesitas ayuda"
				:delay-duration="1"
			>
				<UButton
					color="neutral"
					variant="ghost"
					icon="i-lucide-circle-help"
					size="lg"
				/>
			</UTooltip>
		</div>
	</header>
</template>
