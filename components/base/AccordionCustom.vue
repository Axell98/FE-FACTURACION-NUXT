<script lang="ts" setup>
defineProps<{
	index: number;
	open?: boolean;
	headerText: string;
	headerDesc?: string;
	headerIconColor?: string;
	openAccordion: (key: number) => void;
}>();
</script>

<template>
	<div class="w-full border-b border-accented">
		<div
			class="flex items-center gap-2 pb-3 hover:cursor-pointer"
			@click="openAccordion(index)"
		>
			<UIcon
				name="i-lucide-book-check"
				class="size-5"
				:class="headerIconColor"
			/>
			<div>
				<p class="font-bold">
					{{ headerText }}
				</p>
				<p class="text-xs">
					{{ headerDesc }}
				</p>
			</div>
			<UIcon
				name="i-lucide-chevron-down"
				class="size-5 ms-auto me-1"
			/>
		</div>
		<div
			v-if="open"
			class="w-full pt-1"
		>
			<slot />
		</div>
	</div>
</template>
