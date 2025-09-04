<script lang="ts" setup>
defineProps<{
	id: string;
	label: string;
	placeholder?: string;
	items: any;
}>();
const selectValue = ref<string>('');
const isFocused = ref<boolean>(false);
</script>

<template>
	<div
		class="relative border box-border rounded-lg px-1 pt-2 flex flex-col"
		:class="{
			'border-accented': !isFocused,
			'outline outline-primary border-primary': isFocused,
		}"
	>
		<label
			:for="id"
			class="text-xs ms-2.5 light:text-gray-500 w-full"
		>{{ label }}</label>
		<USelect
			v-model="selectValue"
			:items="items"
			variant="none"
			:placeholder="placeholder"
			trailing-icon=""
			class="w-full"
			@focus="isFocused = true"
			@blur="isFocused = false"
		/>
		<UIcon
			name="i-lucide-chevron-down"
			class="absolute size-[20px] right-2 top-1/2 translate-y-[-45%]"
		/>
	</div>
</template>
