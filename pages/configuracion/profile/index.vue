<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
});

useHead({
	title: 'Profile',
});

const items = ref([
	{
		label: 'Home',
		to: '/home',
	},
	{
		label: 'Configuración',
	},
	{
		label: 'Profile',
		to: '/configuracion/profile',
	},
]);
</script>

<template>
	<LayoutBaseLayout>
		<div class="flex items-center justify-between">
			<h1 class="font-bold">
				MI PERFIL
			</h1>
			<UBreadcrumb :items="items" />
		</div>
		<div class="flex w-full mt-5 gap-6">
			<div class="w-full max-w-[310px]">
				<UCard class="w-full pt-4">
					<div class="flex items-center justify-center">
						<UAvatar
							src="/images/avatar-men.png"
							class="size-[130px]"
						/>
					</div>
					<div class="text-center mb-7">
						<UButton
							class="mt-3"
							size="sm"
							label="Cambiar imagen"
						/>
					</div>
					<div class="grid grid-cols-2 space-y-4">
						<div class="text-sm">
							Usuario:
						</div>
						<div class="text-sm">
							avalle
						</div>
						<div class="text-sm">
							Rol:
						</div>
						<div class="text-sm">
							Admin del sistema
						</div>
						<div class="text-sm">
							Fecha de reg:
						</div>
						<div class="text-sm">
							26/08/2025 13:42
						</div>
					</div>
				</UCard>
			</div>
			<!-- <div class="w-full flex flex-col items-center max-w-[310px] border rounded-2xl p-5">
				<UAvatar
					src="/images/avatar-men.png"
					class="size-[130px]"
				/>
				<UButton
					class="mt-3 mb-6"
					size="sm"
					label="Cambiar imagen"
				/>

			</div> -->
			<div class="w-full space-y-6">
				<ProfileFormUser />
				<ProfileFormPassword />
			</div>
		</div>
	</LayoutBaseLayout>
</template>
