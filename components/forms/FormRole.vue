<script lang="ts" setup>
const roleName = ref<string>('');
const items = ref(['Home', 'Inventario', 'Configuracion']);
const value = ref();
</script>

<template>
	<div class="w-full min-w-[330px] pe-2">
		<UFormField label="Nombre del rol:">
			<UInput
				v-model="roleName"
				class="w-full"
				placeholder="Ejm: Admin del sistema"
			/>
		</UFormField>
		<div class="w-full mt-3">
			<label class="text-sm">Seleccionar permisos:</label>
			<UCheckboxGroup
				v-model="value"
				:items="items"
			/>
		</div>
	</div>
</template>
