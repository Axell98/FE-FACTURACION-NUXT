<template>
	<div class="grid grid-cols-2 gap-3 text-sm">
		<div class="border border-accented rounded-lg px-1 pt-2 flex flex-col">
			<label class="text-xs ms-2 light:text-gray-500">Código sucursal sunat:</label>
			<UInput
				size="md"
				variant="none"
				placeholder="Ingresar código"
			/>
		</div>
		<div class="border border-accented rounded-lg px-1 pt-2 flex flex-col">
			<label class="text-xs ms-2 light:text-gray-500">Nombre de sucursal:</label>
			<UInput
				size="md"
				variant="none"
				placeholder="Ingresar código"
			/>
		</div>
		<div class="col-span-2">
			<div class="border border-accented rounded-lg px-1 pt-2 flex flex-col">
				<label class="text-xs ms-2 light:text-gray-500">Dirección Fiscal:</label>
				<UInput
					size="md"
					variant="none"
					placeholder="Ingresar código"
				/>
			</div>
		</div>
	</div>
</template>
