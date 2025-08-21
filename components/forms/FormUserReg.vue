<script lang="ts" setup>
import { object, string } from 'yup';

const schema = object({
	usuario: string().required('Campo requerido'),
	nombre: string().required('Campo requerido'),
	telefono: string().required('Campo requerido'),
	email: string().required('Campo requerido'),
});

const userData = reactive({
	usuario: '',
	nombre: '',
	telefono: '',
	email: '',
});

const onSubmit = () => {

};
</script>

<template>
	<div class="w-full min-w-[340px]">
		<UForm
			:schema="schema"
			:state="userData"
			class="w-full space-y-3"
			@submit="onSubmit"
		>
			<UFormField
				label="Usuario"
				name="usuario"
				:ui="{
					error: 'text-xs mt-1',
				}"
			>
				<UInput
					v-model="userData.usuario"
					class="w-full"
				/>
			</UFormField>
			<UFormField
				label="Email"
				name="email"
				:ui="{
					error: 'text-xs mt-1',
				}"
			>
				<UInput
					v-model="userData.email"
					class="w-full"
				/>
			</UFormField>
		</UForm>
	</div>
</template>
