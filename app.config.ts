export default defineAppConfig({
	ui: {
		colors: {
			primary: 'teal',
		},
		button: {
			slots: {
				base: [
					'rounded-sm font-normal',
				],
			},
		},
		table: {
			slots: {
				thead: 'relative bg-[#f9fafb] dark:bg-slate-950',
			},
		},
		card: {
			slots: {
				header: '!px-6 py-4 text-sm',
				body: '!px-6',
			},
		},
		formField: {
			slots: {
				label: 'font-normal',
				container: 'mt-1.5 relative',
				error: 'text-xs mt-1',
			},
		},
		input: {
			slots: {
				base: '!py-[8px]',
			},
		},
		modal: {
			slots: {
				header: 'p-4 sm:px-4',
				body: 'p-4.5 sm:p-4.5',
			},
		},
		tabs: {
			variants: {
				compoundVariants: [
					{
						color: 'primary',
						variant: 'pill',
						class: {
							indicator: 'bg-primary',
							trigger: 'data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex-1',
						},
					},
					{
						color: 'neutral',
						variant: 'pill',
						class: {
							indicator: 'bg-inverted',
							trigger: 'data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted flex-1',
						},
					},
					{
						color: 'primary',
						variant: 'link',
						class: {
							indicator: 'bg-primary',
							trigger: 'data-[state=active]:text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary flex-1',
						},
					},
					{
						color: 'neutral',
						variant: 'link',
						class: {
							indicator: 'bg-inverted',
							trigger: 'data-[state=active]:text-highlighted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted flex-1',
						},
					},
				],
			},
		},
	},
});
