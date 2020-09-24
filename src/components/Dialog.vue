<template lang="pug">
v-dialog(v-model="dialog" persistent max-width="450")
	v-card
		v-card-title( class="headline" ) Добавить экземпляр соединения
		v-card-text Тип соединения, имя и другие детали
		v-form.px-5
			v-text-field(label="Имя соединения")
			v-text-field(label="Адрес сервера")
			v-text-field(label="Начальный URL")
		v-card-actions
			v-spacer
			v-btn( color="primary" text @click="close" )  Отмена
			v-btn( color="primary" text @click="close" )  Сохранить

</template>

<script>

export default {
	data () {
		return {
		}
	},
	computed: {
		dialog () {
			return this.$store.getters.dialog
		},
	},
	methods: {
		close () {
			this.$store.commit('toggleDialog')
		},
	},
	components: {
	},
}

</script>

<style scoped lang="scss">
</style>
