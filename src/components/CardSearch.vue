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
						tr
							td Дайджест карточка ГЗ id:0 и очень длинный текст
							td(:rowspan="num+1").main
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
										tr(v-for="n in 45")
											td some text
											td some text
											td some text
											td some text
											td some text
							td Исходящее задание id: aaabbbccc
						tr(v-for="n in num")
							td
							td Дайджест карточки id {{n}} и очень длинный текст

			v-tab-item(key="2")
				.pa-5
					.subtitle-1 Здесь будет pipeline


</template>

<script>
import CardTable from '@/components/CardTable'

export default {
	data () {
		return {
			cardid: this.$route.params.cardid,
			num: 8,
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
		text-transform: capitalize;
		font-size: 0.75rem;
		text-align: left;
		padding: 0 1rem;
		z-index: 3;
	}
	td {
		padding: .5rem 1rem;
		position: relative;
		cursor: pointer;
		&.main {
			vertical-align: top;
			padding: 3rem;
			padding-top: 1rem;
			cursor: default;
		}
	}
}
.theme--dark .tabs1 {
	th {
		background: #424242;
		color: #aaa;
		border-right: 1px solid #111;
	}
	td {
		border: 1px solid #666;
		color: #aaa;
		&:hover {
			background: #3a3a3a;
		}
	}
}
.theme--light .tabs1 {
	th {
		background: #ddd;
		color: #666;
		border-right: 1px solid #fff;
	}
	td {
		border: 1px solid #cecece;
		&:hover {
			background: #fefefe;

		}
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
.cardtabs {
}
</style>
