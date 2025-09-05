<script lang="ts" setup>
defineProps<{
	id: string;
	label: string;
	placeholder?: string;
}>();
const isFocused = ref<boolean>(false);
</script>

<template>
	<div
		class="border box-border rounded-lg px-1 pt-2 pb-1 flex flex-col"
		:class="{
			'border-accented': !isFocused,
			'outline-1 outline-primary border-primary': isFocused,
		}"
	>
		<label
			:for="id"
			class="text-xs ms-2.5 light:text-gray-500"
		>{{ label }}</label>
		<UInput
			:id="id"
			size="md"
			variant="none"
			class="w-full !h-[28px]"
			:placeholder="placeholder"
			@focus="isFocused = true"
			@blur="isFocused = false"
		/>
	</div>
</template>
