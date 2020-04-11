<template lang="pug">
.my(@click="toggle" )
	v-switch(v-model="value" :label="toggled.toString()"  )
</template>

<script>

export default {
	props: [ 'toggled' ],
	data () {
		return {
			one: false
		}
	},
	computed: {
		value: {
			get () {
				return this.toggled
			},
			set () {
			}
		}
	},
	methods: {
		toggle () {
			this.$emit('input', !this.value)
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.my {
	display: inline-block;
	/* background: pink; */
	/* border: 1px solid black; */
	cursor: pointer;

}
</style>
