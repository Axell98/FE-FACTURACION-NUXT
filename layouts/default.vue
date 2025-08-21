<template>
	<main>
		<LayoutMenuNav />
		<LayoutMenuHeader />
		<section class="relative top-[var(--height-header)] left-[240px] w-[calc(100%_-_240px)] min-h-[calc(100vh_-_var(--height-header))] bg-[#f7f8f9] dark:bg-slate-950">
			<slot />
		</section>
	</main>
</template>
