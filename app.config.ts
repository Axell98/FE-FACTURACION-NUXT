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
				base: '!py-[7px]',
			},
		},
	},
});
