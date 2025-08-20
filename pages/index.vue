<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
});
navigateTo('/home');
</script>

<template>
	<div>Redirigiendo...</div>
</template>
