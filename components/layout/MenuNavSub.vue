<script lang="ts" setup>
import type { MenuData } from '~/domain/interfaces/menu.interface';

defineProps<{
	menu: MenuData[];
}>();
</script>

<template>
	<ul class="ms-1 text-xs">
		<li
			v-for="(item, i) in menu"
			:key="i"
		>
			<NuxtLink
				:to="item.url"
				active-class="text-primary"
				class="flex items-center py-1.5 hover:text-primary"
			>
				<UIcon
					name="i-lucide-dot"
					class="size-6"
				/>
				<span class="ms-2">{{ item.nombre }}</span>
			</NuxtLink>
		</li>
	</ul>
</template>
