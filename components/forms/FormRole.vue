<script lang="ts" setup>
const roleName = ref<string>('');
</script>

<template>
	<div class="w-full">
		<UFormField label="Nombre del rol:">
			<UInput
				v-model="roleName"
				class="w-full"
				placeholder="Ejm: Admin del sistema"
			/>
		</UFormField>
	</div>
</template>
