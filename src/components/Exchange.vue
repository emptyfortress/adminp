<template lang="pug">
.exchange
	.greyblock.mt-3(:class="edited ? 'active' : ''")
		.close
			v-btn(icon)
				v-icon mdi-content-duplicate
			v-btn(icon)
				v-icon mdi-trash-can-outline
		.zg {{ name[0] }}
		table.tabs1
			tr
				td Имя соединения:
				td.edit.pl-5
					Edit(:prop="name[0]" @save="saving")
			tr
				td Тип сервера:
				td.edit.pl-5
					v-select(:items="select" dense hide-details value="MS Exchange" @change="saving").sm
			tr
				td Имя профиля:
				td.edit.pl-5
					Edit(:prop="empty" @save="saving")
			tr
				td Email сервера:
				td.edit.pl-5
					Edit(:prop="empty" @save="saving")
			tr
				td(colspan="2")
					v-checkbox(v-model="check" label="Использовать по умолчанию" dense hide-details).small
		v-card-actions(v-show="edited")
			v-spacer
			v-btn(text color small @click="edited = false") Отмена
			v-btn(depressed small @click="edited = false" color="primary") Сохранить

	.greyblock.mt-8(:class="edited ? 'active' : ''")
		.close
			v-btn(icon)
				v-icon mdi-content-duplicate
			v-btn(icon)
				v-icon mdi-trash-can-outline
		.zg {{ name[1] }}
		table.tabs1
			tr
				td Имя соединения:
				td.edit.pl-5
					Edit(:prop="name[1]" @save="saving")
			tr
				td Тип сервера:
				td.edit.pl-5
					v-select(:items="select" dense hide-details value="SMPT/POP3" @change="saving").sm
			tr
				td Отправка:
				td.edit.pl-5
					v-select(:items="send" dense hide-details value="Удаленная" @change="saving").sm
			tr
				td Email сервера:
				td.edit.pl-5
					Edit(:prop="empty" @save="saving")
			tr
				td(colspan="2")
					v-checkbox(v-model="check" label="Использовать по умолчанию" dense hide-details).small



</template>

<script>
import Edit from '@/components/Edit'

export default {
	data: () => ({
		name: [ 'Current99', 'Current88', 'Current66' ],
		send: [ 'Удаленная', 'Локальная'],
		address: 'http://olaf/Docsvision/StorageServer/',
		empty: '',
		edited: false,
		check: false,
		select: ['MS Exchange', 'SMPT/POP3', 'MS Exchange Web Services'],
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
.sm {
	font-size: .9rem;
	margin-top: -2px;
}
.v-input--selection-controls.small {
	margin-top: 10px;
	margin-bottom: 10px;
}
</style>
