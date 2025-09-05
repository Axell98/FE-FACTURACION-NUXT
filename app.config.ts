export default defineAppConfig({
	ui: {
		colors: {
			primary: 'blue',
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
				variant: {
					pill: {
						list: 'rounded-lg',
					},
				},
			},
		},
	},
});
