<template lang="pug">
.add
	v-card.addcard.mx-auto
		v-list-item(two-line)
			v-list-item-content
				div( class="overline mb-4" )  Создать панель
				v-list-item-title( class="headline mb-1" ) {{ name }}
			v-icon(size="80") mdi-monitor-dashboard
		v-form.mx-4
			v-text-field(label="Название" v-model="name" autofocus)
			v-text-field(label="Описание")
		v-card-actions
			v-spacer
			v-btn(text) Очистить
			v-btn( color="primary" @click="create") Создать
</template>

<script>

export default {
	data () {
		return {
			name: 'Новая панель'
		}
	},
	methods: {
		create () {
			this.$emit('create', this.name)
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.add {
	.addcard {
		margin-top: 2rem;
		width: 600px;
		padding: 1rem;
	}

}
</style>
