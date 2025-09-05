<script lang="ts" setup>
import type { SelectItem } from '@nuxt/ui';

defineProps<{
	id: string;
	label: string;
	placeholder?: string;
	items: SelectItem[];
}>();
const selectValue = ref<string>('');
const isFocused = ref<boolean>(false);

const emits = defineEmits(['change']);

watch(selectValue, (newValue) => {
	emits('change', newValue);
});
</script>

<template>
	<div
		class="relative border box-border rounded-lg px-1 pt-2 pb-1 flex flex-col"
		:class="{
			'border-accented': !isFocused,
			'outline-1 outline-primary border-primary': isFocused,
		}"
	>
		<label
			:for="id"
			class="text-xs ms-2.5 light:text-gray-500 w-full"
		>{{ label }}</label>
		<USelect
			v-model="selectValue"
			variant="none"
			trailing-icon=""
			class="w-full !h-[28px]"
			:items="items"
			:placeholder="placeholder"
			@focus="isFocused = true"
			@blur="isFocused = false"
		/>
		<UIcon
			name="i-lucide-chevron-down"
			class="absolute size-[18px] right-2 top-1/2 translate-y-[-45%]"
		/>
	</div>
</template>
