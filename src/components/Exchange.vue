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

	.greyblock.mt-6(:class="edited1 ? 'active' : ''")
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
					Edit(:prop="name[1]" @save="saving1")
			tr
				td Тип сервера:
				td.edit.pl-5
					v-select(:items="select" dense hide-details value="SMPT/POP3" @change="saving1").sm
			tr
				td Отправка:
				td.edit.pl-5
					v-select(:items="send" dense hide-details value="Удаленная" @change="saving1").sm
			tr
				td Email сервера:
				td.edit.pl-5
					Edit(:prop="empty" @save="saving1")
			tr
				td(colspan="2")
					v-checkbox(v-model="check1" label="Использовать по умолчанию" dense hide-details).small

		.inner
			.block
				table.tabs1
					tr
						td SMPT server:
						td.edit.pl-5
							Edit(prop="server" @save="saving1")
					tr
						td Аутентификация:
						td.edit.pl-5
							v-select(:items="auth" dense hide-details value="Anonymous" @change="saving1").sm
					tr
						td Логин:
						td.edit.pl-5
							Edit(prop="administrator" @save="saving1")
					tr
						td Пароль:
						td.edit.pl-5
							Edit(prop="***************" @save="saving1")
			.block
				table.tabs1
					tr
						td Порт&nbsp;SMPT:
						td.edit.pl-5(style="width: 70%")
							Edit(:prop="empty" @save="saving1" style="width: 100%")
					tr
						td Таймаут:
						td.edit.pl-5
							Edit(:prop="empty" @save="saving1")
					tr
						td(style="width: 100%" colspan="2")
							v-checkbox(dense hide-details label="Использовать SSI").small

		.inner.mt-3
			.block
				table.tabs1
					tr
						td POP3 server:
						td.edit.pl-5
							Edit(prop="server" @save="saving1")
					tr
						td Аутентификация:
						td.edit.pl-5
							v-select(:items="auth" dense hide-details value="Basic" @change="saving1").sm
					tr
						td Логин:
						td.edit.pl-5
							Edit(prop="administrator" @save="saving1")
					tr
						td Пароль:
						td.edit.pl-5
							Edit(prop="***************" @save="saving1")
			.block
				table.tabs1
					tr
						td Порт&nbsp;SMPT:
						td.edit.pl-5(style="width: 70%")
							Edit(:prop="empty" @save="saving1" style="width: 100%")
					tr
						td Таймаут:
						td.edit.pl-5
							Edit(:prop="empty" @save="saving1")
					tr
						td(style="width: 100%" colspan="2")
							v-checkbox(dense hide-details label="Использовать SSI").small
		v-card-actions(v-show="edited1")
			v-spacer
			v-btn(text color small @click="edited1 = false") Отмена
			v-btn(depressed small @click="edited1 = false" color="primary") Сохранить
	.greyblock.mt-6(:class="edited2 ? 'active' : ''")
		.close
			v-btn(icon)
				v-icon mdi-content-duplicate
			v-btn(icon)
				v-icon mdi-trash-can-outline
		.zg {{ name[2] }}
		table.tabs1
			tr
				td Имя соединения:
				td.edit.pl-5
					Edit(:prop="name[0]" @save="saving2")
			tr
				td Тип сервера:
				td.edit.pl-5
					v-select(:items="select" dense hide-details value="MS Exchange Web Services" @change="saving2").sm
			tr
				td Версия:
				td.edit.pl-5
					v-select(:items="version" dense hide-details value="2007 SP1" @change="saving2").sm
			tr
				td(colspan="2")
					v-checkbox(v-model="check2" label="Использовать по умолчанию" dense hide-details).small

		.inner
			.block
				table.tabs1
					tr
						td Email сервера:
						td.edit.pl-5
							Edit(:prop="empty" @save="saving2")
					tr
						td Адрес сервера:
						td.edit.pl-5
							Edit(prop="http://olaf/Docsvison/server" @save="saving2")
					tr
						td Аутентификация:
						td.edit.pl-5
							v-select(:items="auth" dense hide-details value="Basic" @change="saving2").sm
					tr
						td Логин:
						td.edit.pl-5
							Edit(prop="administrator" @save="saving2")
					tr
						td Пароль:
						td.edit.pl-5
							Edit(prop="***************" @save="saving2")

		v-card-actions(v-show="edited2")
			v-spacer
			v-btn(text color small @click="edited2 = false") Отмена
			v-btn(depressed small @click="edited2 = false" color="primary") Сохранить
			//- tr
			//- 	td Имя профиля:
			//- 	td.edit.pl-5
			//- 		Edit(:prop="empty" @save="saving2")



</template>

<script>
import Edit from '@/components/Edit'

export default {
	data: () => ({
		name: [ 'Current99', 'Current88', 'Current66' ],
		auth: [ 'Anonymous', 'Basic', 'NTML' ],
		send: [ 'Удаленная', 'Локальная'],
		version: [ '2007 SP1', '2010'],
		address: 'http://olaf/Docsvision/StorageServer/',
		empty: '',
		edited: false,
		edited1: false,
		edited2: false,
		check: false,
		check1: false,
		select: ['MS Exchange', 'SMPT/POP3', 'MS Exchange Web Services'],
	}),
	components: {
		Edit,
	},
	methods: {
		saving () {
			this.edited = true
		},
		saving1 () {
			this.edited1 = true
		},
		saving2 () {
			this.edited2 = true
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
		check1: function (newv) {
			if (newv) {
				this.edited1 = true
			} else {
				this.edited1 = false
			}
		}, 
		check2: function (newv) {
			if (newv) {
				this.edited2 = true
			} else {
				this.edited2 = false
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
.inner {
	border: 3px double #cdcdcd;
	display: grid;
	gap: 2rem;
	padding: .5rem;
	grid-template-columns: repeat(2, 1fr);
	@media (max-width:1400px) {
		grid-template-columns: 1fr;
	}
}
.field {
	width: 150px;
	border-bottom: 1px dotted $link;
}
</style>
