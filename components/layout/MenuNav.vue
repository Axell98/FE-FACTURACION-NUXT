<script lang="ts" setup>
const { getMenuAuth } = useApiMenu();
const menuStore = useMenuStore();
const authStore = useAuthStore();
await getMenuAuth();

const isLargeScreen = useMediaQuery('(min-width: 800px)');
</script>

<template>
	<nav
		class="fixed top-0 left-0 z-20 min-h-screen border-r border-gray-200 dark:border-gray-800"
		:class="{
			'w-[235px]': isLargeScreen,
			'hidden w-0': !isLargeScreen,
		}"
	>
		<div class="w-full flex items-center h-[var(--height-header)] mb-2 gap-1 px-3">
			<img
				src="https://riaac.com/img/icons/logo2.png"
				class="h-[38px]"
			>
			<div>
				<p class="font-bold text-sm">
					{{ authStore.userData?.empresas[0].razon_social }}
				</p>
				<p class="text-xs">
					{{ authStore.userData?.empresas[0].ruc }}
				</p>
			</div>
			<UIcon
				name="i-lucide-chevrons-up-down"
				class="size-[18px] ms-auto hover:cursor-pointer select-none"
			/>
		</div>
		<ul
			v-for="(menu, i) in menuStore?.userMenu"
			:key="i"
			class="px-2"
		>
			<li class="mb-1">
				<p
					v-if="Boolean(menu.submenus.length)"
					class="flex items-center text-sm h-[42px] px-2 rounded-sm gap-2.5 hover:cursor-pointer hover:text-primary hover:bg-teal-100 dark:hover:bg-cyan-900"
				>
					<UIcon
						v-if="menu.icono"
						:name="menu.icono"
						class="size-[18px]"
					/>
					<span>{{ menu.nombre }}</span>
					<UIcon
						v-if="Boolean(menu.submenus.length)"
						name="i-lucide-chevron-down"
						class="size-[17px] ms-auto"
					/>
				</p>
				<NuxtLink
					v-else
					:to="menu.url"
					class="flex items-center text-sm h-[42px] px-2 rounded-sm gap-2.5 hover:cursor-pointer hover:text-primary hover:bg-teal-100 dark:hover:bg-cyan-900"
					active-class="text-primary bg-teal-100  dark:bg-cyan-900"
				>
					<UIcon
						v-if="menu.icono"
						:name="menu.icono"
						class="size-[18px]"
					/>
					<span>{{ menu.nombre }}</span>
					<UIcon
						v-if="Boolean(menu.submenus.length)"
						name="i-lucide-chevron-down"
						class="size-[17px] ms-auto"
					/>
				</NuxtLink>
				<LayoutMenuNavSub
					v-if="Boolean(menu.submenus.length)"
					:menu="menu.submenus"
				/>
			</li>
		</ul>
	</nav>
</template>
