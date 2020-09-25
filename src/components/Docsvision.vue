<template lang="pug">
.greyblock.mt-3(:class="edited ? 'active' : ''")
	.close
		v-btn(icon)
			v-icon mdi-content-duplicate
		v-btn(icon)
			v-icon mdi-trash-can-outline
	.zg {{ name }}
	table.tabs1
		tr
			td Имя соединения:
			td.edit.pl-5
				Edit(:prop="name" @save="saving")
		tr
			td Адрес сервера:
			td.edit.pl-5
				Edit(:prop="address" @save="saving")
		tr
			td Имя БД:
			td.edit.pl-5
				Edit(:prop="bd" @save="saving")
		tr
			td Начальный URL:
			td.edit.pl-5
				Edit(:prop="url" @save="saving")
	.d-flex.justify-space-between
		v-checkbox(v-model="check" label="Использовать по умолчанию" dense hide-details).small
		v-checkbox(v-model="check" label="Использовать настройки по умолчанию" dense hide-details).small
	v-card-actions(v-show="edited")
		v-spacer
		v-btn(text color small @click="edited = false") Отмена
		v-btn(depressed small @click="edited = false" color="primary") Сохранить

</template>

<script>
import Edit from '@/components/Edit'



export default {
	data: () => ({
		name: 'Current55',
		address: 'http://olaf/Docsvision/StorageServer/',
		bd: '',
		url: '',
		edited: false,
		check: false,
	}),
	components: {
		Edit,
	},
	methods: {
		saving () {
			this.edited = true
		},
	},
	watch: {
		check: function (newv) {
			if (newv) {
				this.edited = true
			} else {
				this.edited = false
			}
		}, 
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.greyblock {
	padding: 1rem;
	padding-top: 1.3rem;
	background: #efefef;
	border-radius: 4px;
	position: relative;
	&.active {
		border: 1px dashed red;
	}
	.zg {
		position: absolute;
		top: -12px;
		left: 15px;
		background: $yellow;
		font-size: 0.9rem;
		padding: 1px 15px;
		border-radius: 20px;
	}
	.close {
		position: absolute;
		top: .5rem;
		right: .5rem;
	}
}
</style>
