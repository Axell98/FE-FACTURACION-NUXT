<script lang="ts" setup>
import { object, string } from 'yup';

const formProfile = reactive({
	nombre: '',
	tipo_doc: '',
	nume_doc: '',
	celular: '',
	email: '',
	direccion: '',
});

const schemaProfile = object({
	nombre: string().required('Campo requerido'),
	nume_doc: string().nullable(),
	email: string().nullable(),
	celular: string().nullable(),
	direccion: string().nullable(),
});

const submitProfile = async () => {
	console.log('enviando');
};
</script>

<template>
	<UCard class="w-full">
		<template #header>
			<span class="font-bold">Información del usuario</span>
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
			<UFormField
				label="Celular:"
				name="celular"
			>
				<UInput
					v-model="formProfile.celular"
					class="w-full"
				/>
			</UFormField>
			<UFormField
				label="Email:"
				name="email"
			>
				<UInput
					v-model="formProfile.email"
					class="w-full"
				/>
			</UFormField>
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
