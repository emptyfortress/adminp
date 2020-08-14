<template lang="pug">
.pa-5
	.zag Сообщения карточки
	.rel
		v-btn(outlined color="primary").id Показать все ID
		v-text-field(v-model="cardid" label="Card ID" prepend-inner-icon="mdi-magnify" clearable single-line).poisk
	v-tabs(centered).cardtabs
			v-tab(key="1") Таблица
			v-tab(key="2") Pipeline
			v-tab-item(key="1")
				table.tabs1
					thead
						tr
							th Входящие ссылки
							th Текущая карточка
							th Исходящие ссылки
					tbody
						tr.only
							td 
								table.list
									tr(v-for="n in 5")
										td Длинный или не очень дайджест карточки ГЗ id:{{n}}
							td.main
								v-card
									v-card-title Card ID: {{cardid}}
									v-card-text
										CardTable
								br
								.overline Сообщения карточки
								table.tabs
									thead
										tr
											th Creation date
											th State
											th Type ID
											th Subtype ID
											th Data
									tbody
										tr(v-for="index in 7" :key="index").ro.re
											td {{ messages[index-1].date }}
											td(:class="messages[index-1].state === 'ошибка' ? 'tder' : '' || messages[index-1].state === 'блокировано' ? 'tdbl' : ''") 
												v-icon(color="red" v-if="messages[index-1].state === 'ошибка'").mr-2 mdi-alert-circle
												v-icon(color="orange" v-if="messages[index-1].state === 'блокировано'").mr-2 mdi-lock-outline
												span {{ messages[index-1].state }}
											td {{ messages[index-1].gservice }}
											td {{ messages[index-1].service }}
											td {{ messages[index-1].info }}
							td
								table.list
									tr(v-for="n in num")
										td Длинный или не очень дайджест карточки ГЗ id:{{n+5}}
						//- tr(v-for="n in num")
						//- 	td
						//- 	td Дайджест карточки id {{n}} и очень длинный текст

			v-tab-item(key="2")
				.pa-5
					.subtitle-1 Здесь будет pipeline


</template>

<script>
import CardTable from '@/components/CardTable'
import {messages} from '@/messages.js'

export default {
	data () {
		return {
			cardid: this.$route.params.cardid,
			num: 8,
			messages,
		}
	},
	components: {
		CardTable,
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.tabs1 {
	margin-top: 1rem;
	width: 100%;
	margin-bottom: 6rem;
	transition: all 0.3s ease;
	border-collapse: collapse;
	font-size: 0.9rem;
	th {
		height: 2.5rem;
		position: sticky;
		top: 0;
		font-size: 0.75rem;
		text-align: left;
		padding: 0 1rem;
		z-index: 3;
	}
	td {
		vertical-align: top;
		&.main {
			padding: 3rem;
			padding-top: 1rem;
			cursor: default;
		}
	}
}
.theme--dark .tabs1 {
	th {
		background: #444;
		color: #aaa;
		border-right: 1px solid #111;
	}
	.only > td {
		border: 1px solid #666;
		color: #aaa;
	}
}
.theme--light .tabs1 {
	th {
		background: #ddd;
		color: #666;
		border-right: 1px solid #fff;
	}
	.only > td {
		border: 1px solid #cecece;
	}
}

.id {
	position: absolute;
	top: 1rem;
	left: 0;
}
.poisk {
	width: 400px;
	position: absolute;
	top: 0;
	right: 0;
}
.rel {
	z-index: 2;
}
.list {
	width: 100%;
	border: none;
	border-collapse: collapse;
	td {
		padding: .5rem;
		cursor: pointer;
	}
}
.theme--light .list td {
	border-bottom: 1px solid #ccc;
	background: #fff;
	&:hover {
		background: #efefef;
	}
}
.theme--dark .list td {
	border-bottom: 1px solid #666;
	background: #383838;
	&:hover {
		background: #444;
	}
}
.tabs1 .re {
	height: auto;
	td {
		padding: .5rem;
	}
}
.tabs {
	margin-bottom: 0;
}
		
</style>
