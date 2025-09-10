<script lang="ts" setup>
const isLargeScreen = useMediaQuery('(min-width: 800px)');
</script>

<template>
	<main>
		<LayoutMenuNav />
		<LayoutMenuHeader />
		<section
			class="relative top-[var(--height-header)] min-h-[calc(100vh_-_var(--height-header))] bg-[#f7f8f9] dark:bg-slate-950"
			:class="{
				'left-0 w-full': !isLargeScreen,
				'left-[235px] w-[calc(100%_-_235px)]': isLargeScreen,
			}"
		>
			<slot />
		</section>
	</main>
</template>
