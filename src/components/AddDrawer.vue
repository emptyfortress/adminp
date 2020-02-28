<template lang="pug">
v-navigation-drawer(v-model="add" app right temporary width="40%" )
	v-switch(v-model="$vuetify.theme.dark" hide-details inset label="Theme Dark")

</template>

<script>

export default {
	data () {
		return {

		}
	},
	computed: {
		add: {
			get () {
				return this.$store.getters.add
			},
			set () {}
		}

	}
}

</script>
