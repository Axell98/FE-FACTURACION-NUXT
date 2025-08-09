<script lang="ts" setup>
import type { MenuData } from '~/domain/interfaces/menu.interface';

const userMenu: MenuData[] = [
	{
		nombre: 'Dashboard',
		icono: 'i-lucide-house',
		visible: false,
		submenus: [],
	},
	{
		nombre: 'Inventario',
		icono: 'i-lucide-house',
		visible: false,
		submenus: [],
	},
	{
		nombre: 'Ventas',
		icono: 'i-lucide-house',
		visible: false,
		submenus: [],
	},
	{
		nombre: 'Configuración',
		icono: 'i-lucide-house',
		visible: false,
		submenus: [
			{
				nombre: 'Empresa',
				icono: 'i-lucide-house',
				submenus: [],
				visible: false,
			},
			{
				nombre: 'Usuarios',
				icono: 'i-lucide-house',
				submenus: [],
				visible: false,
			},
			{
				nombre: 'Roles',
				icono: 'i-lucide-house',
				submenus: [],
				visible: false,
			},
		],
	},
];
</script>

<template>
	<nav class="fixed top-0 left-0 z-20 w-[240px] min-h-screen border-r border-gray-300">
		<div class="h-[20px]" />
		<ul
			v-for="(menu, i) in userMenu"
			:key="i"
			class="px-2"
		>
			<li class="mb-1">
				<p class="flex items-center text-sm h-[42px] px-2 rounded-sm gap-2.5 hover:bg-amber-200 hover:cursor-pointer">
					<UIcon
						:name="menu.icono"
						class="size-[17px]"
					/>
					<span>{{ menu.nombre }}</span>
					<UIcon
						v-if="Boolean(menu.submenus.length)"
						name="i-lucide-chevron-down"
						class="size-[17px] ms-auto"
					/>
				</p>
				<LayoutMenuNavSub
					v-if="Boolean(menu.submenus.length)"
					:menu="menu.submenus"
				/>
			</li>
		</ul>
	</nav>
</template>
