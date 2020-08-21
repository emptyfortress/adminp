<template lang="pug">
div
	table.tabs1
		thead
			tr
				th Входящие ссылки
				th Текущая карточка
				th Исходящие ссылки
		tbody
			tr(v-show="id" @click="$emit('snack')").id
				td DF345-SDF32-53KSF
				td DF345-SDF32-53KSF
				td DF345-SDF32-53KSF

			tr.only
				td 
					table.list
						tr(v-for="n in 5")
							td(@click="$emit('snack')") Длинный или не очень дайджест карточки ГЗ id:{{n}}
				td.main
					v-card
						v-card-title(@click="$emit('snack')") Card ID: {{cardid}}
						v-card-text
							CardTable(:id="id" @snack="$emit('snack')")
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
							tr(v-show="id" @click="$emit('snack')").id
								td DF345-SDF32-53KSF
								td DF345-SDF32-53KSF
								td DF345-SDF32-53KSF
								td DF345-SDF32-53KSF
								td DF345-SDF32-53KSF
							tr(v-for="index in 7" :key="index" @click="$router.push('journal')").ro.re
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
							td(@click="$emit('snack')") Длинный или не очень дайджест карточки ГЗ id:{{n+5}}

</template>

<script>
import CardTable from '@/components/CardTable'
import {messages} from '@/messages.js'

export default {
	props: ['id'],
	data () {
		return {
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
		cursor: pointer;
	}
}
.tabs {
	margin-bottom: 0;
}
.id {
	font-size: 0.9rem;
	/* height: 32px; */
	background: #555;
	color: #eee;
	td {
		cursor: pointer;
		padding: .5rem;
	}
}
</style>
