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
				thead: 'relative bg-[#f9fafb] dark:bg-[#252630]',
			},
		},
		formField: {
			slots: {
				label: 'font-normal',
				container: 'mt-1.5 relative',
			},
		},
	},
});
