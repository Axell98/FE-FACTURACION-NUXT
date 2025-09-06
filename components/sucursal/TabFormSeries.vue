<script lang="ts" setup>
const accordionSelect = ref([true, false, false, false]);

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
			<div class="pb-4">
				<div class="flex gap-3 py-3 px-4 text-xs text-[#035C9A] bg-[#E6F5FF] rounded-lg">
					<UIcon
						name="i-lucide-info"
						class="size-6"
					/>
					<div>
						<p class="mb-1">
							Formato de series según SUNAT:
						</p>
						<ul class="list-disc ml-4 mb-1 space-y-0.5">
							<li>
								<p>Facturas: F + 3 dígitos (Ej: F001)</p>
							</li>
							<li>
								<p>Boletas: B + 3 dígitos (Ej: B001)</p>
							</li>
						</ul>
						<p>Nota: Las series y correlativos son únicos por sucursal.</p>
						<p>Si creas otra sucursal, cambia el número: F001 -> F002, B001 -> B002, etc. </p>
					</div>
				</div>
			</div>
		</BaseAccordionCustom>
		<BaseAccordionCustom
			:index="2"
			:open="accordionSelect[1]"
			:header-text="'Notas de Crédito'"
			:header-desc="'Series para notas de crédito'"
			:header-icon-color="'text-warning'"
			:open-accordion="showAccordion"
		>
			<div class="pb-4">
				<div class="flex gap-3 py-3 px-4 text-xs text-[#A9803D] bg-[#FDEDD3] rounded-lg">
					<UIcon
						name="i-lucide-info"
						class="size-6"
					/>
					<div>
						<p class="mb-1">
							Formato de series según SUNAT:
						</p>
						<ul class="list-disc ml-4 mb-1 space-y-0.5">
							<li>
								<p>Notas de Crédito para Facturas: FN + 2 dígitos (Ej: FN01)</p>
							</li>
							<li>
								<p>Notas de Crédito para Boletas: BN + 2 dígitos (Ej: BN01)</p>
							</li>
						</ul>
						<p>Nota: Las series y correlativos son únicos por sucursal.</p>
						<p>Si creas otra sucursal, cambia el número: FN01 -> FN02, BN01 -> BN02, etc.</p>
					</div>
				</div>
			</div>
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
