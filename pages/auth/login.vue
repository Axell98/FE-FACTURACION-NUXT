<script lang="ts" setup>
definePageMeta({
	layout: false,
});

useHead({
	title: 'Login',
});

const authStore = useAuthStore();

const messageError = ref<string>('');
const credentials = reactive({
	usuario: '',
	password: '',
});

const handleLogin = async () => {
	const response = await authStore.login({
		usuario: credentials.usuario,
		password: credentials.password,
	});
	if (response.status) {
		navigateTo('/home');
	}
	messageError.value = response.message;
};
</script>

<template>
	<section class="w-full flex min-h-screen">
		<div class="bg-amber-500 w-full" />
		<div class="w-full flex items-center justify-center max-w-[500px] p-4">
			<div>
				<div v-if="Boolean(messageError.length)">
					{{ messageError }}
				</div>
				<h1>Login</h1>
				<input
					v-model="credentials.usuario"
					type="text"
					placeholder="Nombre de usuario"
				>
				<br>
				<input
					v-model="credentials.password"
					type="text"
					placeholder="Contraseña"
				>
				<br>
				<UButton @click="handleLogin">
					Ingresar
				</UButton>
			</div>
		</div>
	</section>
</template>
