<script lang="ts" setup>
import type { MenuData } from '~/domain/interfaces/menu.interface';

defineProps<{
	menu: MenuData[];
}>();
</script>

<template>
	<ul class="ms-3 text-sm">
		<li
			v-for="(item, i) in menu"
			:key="i"
		>
			<p class="flex items-center py-1">
				<UIcon
					name="i-lucide-dot"
					class="size-6"
				/>
				<span>{{ item.nombre }}</span>
			</p>
		</li>
	</ul>
</template>
