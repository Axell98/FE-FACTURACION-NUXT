<script lang="ts" setup>
const { getMenuAuth } = useApiMenu();
const menuStore = useMenuStore();
await getMenuAuth();
</script>

<template>
	<nav class="fixed top-0 left-0 z-20 w-[240px] min-h-screen border-r border-gray-200 dark:border-gray-700">
		<div class="w-full flex items-center h-[var(--height-header)] mb-2 gap-1 px-3">
			<img
				src="https://riaac.com/img/icons/logo2.png"
				class="h-[38px]"
			>
			<div>
				<p class="font-bold text-sm">
					RIAAC S.A.C.
				</p>
				<p class="text-xs">
					7320307612
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
				<p class="flex items-center text-sm h-[42px] px-2 rounded-sm gap-2.5 hover:cursor-pointer hover:text-green-600 hover:bg-gray-100">
					<UIcon
						:name="menu.icono"
						class="size-[18px]"
					/>
					<span>{{ menu.nombre }}</span>
					<!-- <UIcon
						v-if="Boolean(menu.submenus.length)"
						name="i-lucide-chevron-down"
						class="size-[17px] ms-auto"
					/> -->
				</p>
				<!-- <LayoutMenuNavSub
					v-if="Boolean(menu.submenus.length)"
					:menu="menu.submenus"
				/> -->
			</li>
		</ul>
	</nav>
</template>
