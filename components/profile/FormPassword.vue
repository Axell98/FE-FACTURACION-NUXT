<script lang="ts" setup>
import { object, string } from 'yup';

const authStore = useAuthStore();
const apiUsuarios = useApiUsuarios();

const formPassword = reactive({
	passwordOld: '',
	passwordNew: '',
	passwordConf: '',
});

const schemaProfile = object({
	passwordOld: string().required('Campo requerido'),
	passwordNew: string().required('Campo requerido'),
	passwordConf: string().required('Campo requerido'),
});

const showPwdOld = ref<boolean>(false);
const showPwdNew = ref<boolean>(false);

const onSubmit = async () => {
	/* await apiUsuarios.changePassword(authStore.userData?.id || 0, {
		current_password: formPassword.passwordOld,
		new_password: formPassword.passwordNew,
		new_password_confirmation: formPassword.passwordConf,
	}); */
};
</script>

<template>
	<UCard class="w-full">
		<template #header>
			<div class="flex items-center gap-1.5">
				<UIcon
					name="i-lucide-lock"
					class="size-5"
				/>
				<span class="font-bold">Actualizar contraseña</span>
			</div>
		</template>
		<UForm
			:schema="schemaProfile"
			:state="formPassword"
			class="space-y-4"
			@submit="onSubmit"
		>
			<UFormField
				label="Contraseña actual:"
				name="passwordOld"
			>
				<UInput
					v-model="formPassword.passwordOld"
					class="w-full"
					:type="showPwdOld ? 'text' : 'password'"
				>
					<template #trailing>
						<UButton
							color="neutral"
							variant="link"
							size="sm"
							:icon="showPwdOld ? 'i-lucide-eye-off' : 'i-lucide-eye'"
							:aria-pressed="showPwdOld"
							@click="showPwdOld = !showPwdOld"
						/>
					</template>
				</UInput>
			</UFormField>
			<UFormField
				label="Nueva contraseña:"
				name="passwordNew"
			>
				<UInput
					v-model="formPassword.passwordNew"
					class="w-full"
					:type="showPwdNew ? 'text' : 'password'"
				>
					<template #trailing>
						<UButton
							size="sm"
							color="neutral"
							variant="link"
							:icon="showPwdNew ? 'i-lucide-eye-off' : 'i-lucide-eye'"
							:aria-pressed="showPwdNew"
							@click="showPwdNew = !showPwdNew"
						/>
					</template>
				</UInput>
			</UFormField>
			<UButton
				icon="i-lucide-save"
				class="mt-1"
				type="submit"
			>
				Guardar
			</UButton>
		</UForm>
	</UCard>
</template>
