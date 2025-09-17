<script lang="ts" setup>
import type { UserData } from '~/domain/interfaces/user.interface';

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

const authStore = useAuthStore();
const userData = ref<UserData | null>(authStore.userData);
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
							{{ userData?.usuario }}
						</div>
						<div class="text-sm">
							Rol:
						</div>
						<div class="text-sm truncate">
							{{ userData?.roles.display_name }}
						</div>
						<div class="text-sm">
							Registro:
						</div>
						<div class="text-sm truncate">
							{{ userData?.created_at }}
						</div>
					</div>
				</UCard>
			</div>
			<div class="w-full space-y-6">
				<ProfileFormUser :user-data="userData" />
				<ProfileFormPassword />
			</div>
		</div>
	</LayoutBaseLayout>
</template>
