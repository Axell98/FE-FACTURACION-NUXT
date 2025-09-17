<script lang="ts" setup>
import { object, string } from 'yup';

definePageMeta({
	middleware: 'guest',
	layout: false,
});

useHead({
	title: 'Login',
});

const authStore = useAuthStore();
const errorMessage = ref<string>('');
const loading = ref<boolean>(false);

const credentials = reactive({
	usuario: '',
	password: '',
});

const schema = object({
	usuario: string().required('Campo requerido'),
	password: string().required('Campo requerido'),
});

const submitLogin = async () => {
	loading.value = true;
	const message = await authStore.login({
		usuario: credentials.usuario,
		password: credentials.password,
	});
	if (message) {
		errorMessage.value = message;
		loading.value = false;
	}
};
</script>

<template>
	<section class="w-full flex min-h-screen">
		<div class="bg-primary w-full" />
		<div class="w-full max-w-[430px] flex flex-col items-center justify-center">
			<div class="w-[70%]">
				<h1 class="mb-4 text-2xl font-bold">
					Iniciar sesión
				</h1>
				<UAlert
					v-show="Boolean(errorMessage.length)"
					color="error"
					variant="subtle"
					:description="errorMessage"
					icon="i-lucide-circle-x"
					class="my-4"
				/>
				<UForm
					class="flex flex-col space-y-5"
					:schema="schema"
					:state="credentials"
					@submit.prevent="submitLogin"
				>
					<UFormField
						label="Usuario:"
						name="usuario"
						:ui="{
							error: 'text-xs mt-1',
						}"
					>
						<UInput
							v-model="credentials.usuario"
							type="text"
							class="w-full"
							icon="i-lucide-user"
							placeholder="Ingresar usuario"
							:ui="{
								base: '!py-[9px]',
								leadingIcon: 'size-4.5',
							}"
						/>
					</UFormField>
					<UFormField
						label="Contraseña:"
						name="password"
						:ui="{
							error: 'text-xs mt-1',
						}"
					>
						<UInput
							v-model="credentials.password"
							type="password"
							class="w-full"
							icon="i-lucide-lock-keyhole"
							placeholder="Ingresar contraseña"
							:ui="{
								base: '!py-[9px]',
								leadingIcon: 'size-4.5',
							}"
						/>
					</UFormField>
					<UButton
						:label="loading ? '' : 'Ingresar'"
						type="submit"
						class="py-2 mt-1"
						:loading="loading"
						block
					/>
				</UForm>
			</div>
			<div class="absolute bottom-2">
				<span class="text-sm">Copyright © 2025</span>
			</div>
		</div>
	</section>
</template>
