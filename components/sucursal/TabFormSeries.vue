<script lang="ts" setup>
const accordionSelect = ref([false, false, false, false]);

const showAccordion = (index: number) => {
	accordionSelect.value = [false, false, false, false];
	accordionSelect.value[index - 1] = true;
};
</script>

<template>
	<div class="w-full text-sm px-2 space-y-5 mt-3">
		<BaseAccordionCustom
			:index="1"
			:open="accordionSelect[0]"
			:header-text="'Facturas y boletas'"
			:header-desc="'Series para documentos principales'"
			:header-icon-color="'text-primary'"
			:open-accordion="showAccordion"
		>
			Facturas y boletas
		</BaseAccordionCustom>
		<BaseAccordionCustom
			:index="2"
			:open="accordionSelect[1]"
			:header-text="'Notas de Crédito'"
			:header-desc="'Series para notas de crédito'"
			:header-icon-color="'text-success'"
			:open-accordion="showAccordion"
		>
			Notas de crédito
		</BaseAccordionCustom>
		<BaseAccordionCustom
			:index="3"
			:open="accordionSelect[2]"
			:header-text="'Notas de Débito'"
			:header-desc="'Series para notas de débito'"
			:header-icon-color="'text-error'"
			:open-accordion="showAccordion"
		>
			Notas de débito
		</BaseAccordionCustom>
		<BaseAccordionCustom
			:index="4"
			:open="accordionSelect[3]"
			:header-text="'Otros documentos'"
			:header-desc="'Guías, notas de venta y cotizaciones'"
			:header-icon-color="'text-warning'"
			:open-accordion="showAccordion"
		>
			Notas de crédito
		</BaseAccordionCustom>
	</div>
</template>
