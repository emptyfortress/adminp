<template lang="pug">
v-edit-dialog(single-line
	:return-value.sync="property"
	lazy
	@save="test") {{ property }}
	template(v-slot:input)
		v-text-field(v-model="property" label="Edit" single-line)
</template>

<script>

export default {
	props: ['prop'],
	data() {
		return {
			property: this.prop,
		}
	},
	methods: {
		test () {
			this.$emit('save')
		},
	},
}

</script>

