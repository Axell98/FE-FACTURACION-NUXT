<script lang="ts" setup>
import { object, string } from 'yup';
import type { UserData } from '~/domain/interfaces/user.interface';

const apiUsuarios = useApiUsuarios();

const props = defineProps<{
	userData: UserData | null;
}>();

const formProfile = reactive({
	nombre: props.userData?.nombre,
	tipo_doc: props.userData?.tipo_doc,
	nume_doc: props.userData?.nume_doc,
	celular: props.userData?.celular,
	email: props.userData?.email,
	direccion: props.userData?.direccion,
});

const schemaProfile = object({
	nombre: string().required('Campo requerido'),
	nume_doc: string().nullable(),
	email: string().nullable(),
	celular: string().nullable(),
	direccion: string().nullable(),
});

const submitProfile = async () => {
	console.log(schemaProfile);
};
</script>

<template>
	<UCard class="w-full">
		<template #header>
			<div class="flex items-center gap-1.5">
				<UIcon
					name="i-lucide-user"
					class="size-5"
				/>
				<span class="font-bold">Información del usuario</span>
			</div>
		</template>
		<UForm
			:schema="schemaProfile"
			:state="formProfile"
			class="space-y-4"
			@submit="submitProfile"
		>
			<UFormField
				label="Nombre y apellidos:"
				name="nombre"
			>
				<UInput
					v-model="formProfile.nombre"
					class="w-full"
				/>
			</UFormField>
			<div class="flex w-full gap-5">
				<div class="w-full">
					<UFormField
						label="Tipo documento:"
						name="tipo_doc"
					>
						<UInput
							v-model="formProfile.tipo_doc"
							class="w-full"
						/>
					</UFormField>
				</div>
				<div class="w-full">
					<UFormField
						label="Nro documento:"
						name="nume_doc"
					>
						<UInput
							v-model="formProfile.nume_doc"
							class="w-full"
						/>
					</UFormField>
				</div>
			</div>
			<div class="flex w-full gap-5">
				<div class="w-full">
					<UFormField
						label="Celular:"
						name="celular"
					>
						<UInput
							v-model="formProfile.celular"
							class="w-full"
						/>
					</UFormField>
				</div>
				<div class="w-full">
					<UFormField
						label="Email:"
						name="email"
					>
						<UInput
							v-model="formProfile.email"
							class="w-full"
						/>
					</UFormField>
				</div>
			</div>
			<UFormField
				label="Dirección:"
				name="direccion"
			>
				<UInput
					v-model="formProfile.direccion"
					class="w-full"
				/>
			</UFormField>
			<UButton
				type="submit"
				icon="i-lucide-save"
				class="mt-1"
			>
				Guardar
			</UButton>
		</UForm>
	</UCard>
</template>
