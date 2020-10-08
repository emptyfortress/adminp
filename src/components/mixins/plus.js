export const plus = {
	computed: {
		plus() {
			let name = this.$route.name
			// if (name === 'home' || name === 'setup') {
			if (name === 'home') {
				return true
			} else return false
		},
	},
}
