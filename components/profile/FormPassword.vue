<script lang="ts" setup>
import { object, string } from 'yup';

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

const checkStrength = (str: string) => {
	const requirements = [
		{ regex: /.{8,}/, text: 'Al menos 8 caracteres' },
		{ regex: /\d/, text: 'Al menos 1 número' },
		{ regex: /[a-z]/, text: 'Al menos 1 letra minúscula' },
		{ regex: /[A-Z]/, text: 'Al menos 1 letra mayúscula' },
	];
	return requirements.map(req => ({ met: req.regex.test(str), text: req.text }));
};

const strength = computed(() => checkStrength(formPassword.passwordNew));
const score = computed(() => strength.value.filter(req => req.met).length);

const text = computed(() => {
	if (score.value === 0) return 'Ingresa una contraseña';
	if (score.value <= 2) return 'Contraseña débil';
	if (score.value === 3) return 'Contraseña mediana';
	return 'Contraseña segura';
});

const color = computed(() => {
	if (score.value === 0) return 'neutral';
	if (score.value <= 1) return 'error';
	if (score.value <= 2) return 'warning';
	if (score.value === 3) return 'warning';
	return 'success';
});

const submitForm = async () => {
	console.log('enviando');
};
</script>

<template>
	<UCard class="w-full">
		<template #header>
			<span class="font-bold">Actualizar contraseña</span>
		</template>
		<UForm
			:schema="schemaProfile"
			:state="formPassword"
			class="space-y-4"
			@submit="submitForm"
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
							color="neutral"
							variant="link"
							size="sm"
							:icon="showPwdNew ? 'i-lucide-eye-off' : 'i-lucide-eye'"
							:aria-pressed="showPwdNew"
							@click="showPwdNew = !showPwdNew"
						/>
					</template>
				</UInput>
			</UFormField>
			<UProgress
				:color="color"
				:indicator="text"
				:model-value="score"
				:max="4"
				size="sm"
			/>
			<p
				id="password-strength"
				class="text-sm font-medium"
			>
				{{ text }}. Debe contener:
			</p>
			<ul>
				<li
					v-for="(req, index) in strength"
					:key="index"
					class="flex items-center gap-1 mb-1.5"
					:class="req.met ? 'text-success' : 'text-muted'"
				>
					<UIcon
						:name="req.met ? 'i-lucide-circle-check' : 'i-lucide-circle-x'"
						class="size-3.5 shrink-0"
					/>

					<span class="text-xs font-light">
						{{ req.text }}
						<span class="sr-only">
							{{ req.met ? ' - Requirement met' : ' - Requirement not met' }}
						</span>
					</span>
				</li>
			</ul>
			<UButton
				type="submit"
				icon="i-lucide-save"
			>
				Guardar
			</UButton>
		</UForm>
	</UCard>
</template>
