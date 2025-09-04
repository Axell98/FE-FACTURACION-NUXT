<script lang="ts" setup>
const items = ref([
	{
		label: 'Facturas y Boletas',
		icon: 'i-lucide-book-text',
		slot: 'facturas_boletas' as const,
	},
	{
		label: 'Notas de Crédito',
		icon: 'i-lucide-book-text',
		slot: 'notas_credito' as const,
	},
	{
		label: 'Notas de Débito',
		icon: 'i-lucide-book-text',
		slot: 'notas_debito' as const,
	},
	{
		label: 'Otros documentos',
		icon: 'i-lucide-book-text',
		slot: 'otros_documentos' as const,
	},
]);
</script>

<template>
	<div class="w-full px-2">
		<UAccordion :items="items">
			<template #facturas_boletas>
				Facturas y boletas
			</template>
			<template #notas_credito>
				Notas de créditos
			</template>
			<template #notas_debito>
				Notas de débito
			</template>
			<template #otros_documentos>
				Otros documentos
			</template>
		</UAccordion>
	</div>
</template>
