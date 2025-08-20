<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
	layout: false,
});
navigateTo('/home');
</script>

<template>
	<div>Redirigiendo...</div>
</template>
