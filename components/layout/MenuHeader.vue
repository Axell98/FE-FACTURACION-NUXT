<script lang="ts" setup>
const authStore = useAuthStore();
const colorMode = useColorMode();

const isLargeScreen = useMediaQuery('(min-width: 800px)');

const itemsProfile = ref(
	[
		[
			{
				label: authStore.userData?.nombre,
				slot: 'account',
				disabled: true,
			},
		],
		[
			{
				label: 'Mi perfil',
				icon: 'i-lucide-user',
				onSelect() {
					navigateTo('/configuracion/profile');
				},
			},
			{
				label: 'Configuración',
				icon: 'i-lucide-bolt',
			},
			{
				label: 'Cerrar sesión',
				icon: 'i-lucide-log-out',
				onSelect(e: Event) {
					e.preventDefault();
					authStore.logout();
				},
			},
		],
	],
);

const changeThemeColor = () => {
	colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light');
};
</script>

<template>
	<header
		class="fixed top-0 z-20 h-[var(--height-header)] flex items-center px-2 border-b border-gray-200 dark:border-gray-800"
		:class="{
			'left-[235px] w-[calc(100%_-_235px)]': isLargeScreen,
			'left-0 w-full': !isLargeScreen,
		}"
	>
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
			<UDropdownMenu
				:items="itemsProfile"
				:content="{
					align: 'end',
				}"
				:ui="{
					item: 'py-2.5 px-2',
					content: 'min-w-50 p-1 shadow-lg',
					itemLeadingIcon: 'size-4.5',
					itemLabel: 'ms-1.5',
				}"
			>
				<UButton
					color="neutral"
					variant="ghost"
				>
					<UAvatar
						src="/images/avatar-men.png"
						size="sm"
					/>
					<UIcon
						name="i-lucide-chevron-down"
						class="size-5"
					/>
				</UButton>
				<template #account="{ item }">
					<div class="text-left">
						<p class="font-bold text-[13px] uppercase">
							{{ item.label }}
						</p>
						<p class="truncate font-medium text-sm mt-1">
							{{ authStore.userData?.roles.display_name }}
						</p>
					</div>
				</template>
			</UDropdownMenu>
		</div>
	</header>
</template>
