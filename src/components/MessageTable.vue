<template lang="pug">
.table
	v-row(justify="space-between" align="center")
		v-col(cols="12" sm="2")
			v-text-field(v-model="filter" label="Поиск" prepend-inner-icon="mdi-magnify" clearable single-line)

		v-col
			v-row(justify="space-around")
				v-chip-group(active-class="tt" v-model="type1" ).mr-8
					v-chip.mr-2 ГЗ
					v-chip.mr-2 Задания
					v-chip.mr-2 Согласования
					v-chip.mr-2 Почта ГЗ
					v-chip.mr-2 Почта заданий
					v-chip.mr-2 Почта согласований
				v-chip-group(active-class="tt" v-model="type2" )
					v-chip.mr-2 Ошибка
					v-chip.mr-2 В работе
					v-chip.mr-2 Блокировано

		v-col(cols="12" sm="2").tool
			template(v-for="(item, index) in buttons")
				v-tooltip(bottom)
					template(v-slot:activator="{ on }")
						v-btn(icon v-on="on")
							i(:class="item.icon")
					span {{item.text}}
	table.tabs
		thead
			tr
				th.sm
					v-checkbox.check
				th(v-for="(header, index) in headers"
					@mouseover="showByIndex = index"
					@mouseout="showByIndex = null"
					) 
					span {{ header.text }}
					.over(v-show="showByIndex === index")
						v-icon(@click="sortByIndex = index") mdi-arrow-down
						v-icon(@click="setFilter(index)") mdi-filter-outline
					v-slide-y-transition
						v-card.quick.elevation-3(v-show="filterByIndex === index")
							v-text-field(autofocus clearable :key="index" v-model="colfilter[index]")
		tbody
			tr(v-for="item in filteredItems").ro
				td
					v-checkbox.check
				td {{ item.date }}
				td {{ item.digest }}
				td(:class="item.state === 'ошибка' ? 'tder' : '' || item.state === 'блокировано' ? 'tdbl' : ''")
					v-icon(color="red" v-if="item.state === 'ошибка'").mr-2 mdi-alert-circle
					v-icon(color="orange" v-if="item.state === 'блокировано'").mr-2 mdi-minus-circle-outline
					span {{ item.state }}
				td {{ item.gservice }}
				td {{ item.service }}
				td {{ item.type }}
				td {{ item.info }}
				td
					span {{ item.database }}
					span.action
						i.icon-star-empty
						i.icon-check
						i.icon-trash-line
			tr(v-show="filteredItems.length === 0")
				td(colspan="9")
					v-img(src="@/assets/img/nothing.svg" width="130").mx-auto.my-3
					p.text-center.blue-grey--text Ничего не найдено

</template>

<script>

export default {
	props: ['headers', 'items', 'category'],
	data() {
		return {
			showByIndex: null,
			smallFilter: null,
			filterByIndex: null,
			all: this.items,
			type1: '',
			type2: '',
			colfilter: [],
			filter: '',
			buttons: [
				{ text: 'Обновить', icon: 'icon-refresh', click: '' },
				{ text: 'Reset', icon: 'icon-empty', click: '' },
				{ text: 'Экспорт', icon: 'icon-xls', click: '' },
				{ text: 'Удалить выбранные', icon: 'icon-trash-line', click: '' },
			],
		}
	},
	mounted () {
		this.colfilter.length = this.headers.length
		this.type1 = parseInt(this.category)
	},
	computed: {
		filteredItems () {
			let result = this.items
			let chip1 = this.type1
			let chip2 = this.type2
			switch (chip1) {
			case 0:
				return result.filter( item => { return item.service.toLowerCase().includes('гз ')})
			case 1:
				return result.filter( item => { return item.service.toLowerCase().includes('задания')})
			case 2:
				return result.filter( item => { return item.service.toLowerCase().includes('согласования')})
			case 3:
				return result.filter( item => { return item.service.toLowerCase().includes('почта гз')})
			case 4:
				return result.filter( item => { return item.service.toLowerCase().includes('заданий')})
			case 5:
				return result.filter( item => { return item.service.toLowerCase().includes('согласований')})
			}
			switch (chip2) {
			case 0:
				return result.filter( item => { return item.state.toLowerCase().includes('ошибка')})
			case 1:
				return result.filter( item => { return item.state.toLowerCase().includes('работе')})
			case 2:
				return result.filter( item => { return item.state.toLowerCase().includes('блокир')})
			}
			if (!this.filter) {
				return result
			} else {
				const filterValue = this.filter.toLowerCase()
				const filt = function (item) {
					return item.date.toLowerCase().includes(filterValue) ||
						item.digest.toLowerCase().includes(filterValue) ||
						item.state.toLowerCase().includes(filterValue) ||
						item.gservice.toLowerCase().includes(filterValue) ||
						item.service.toLowerCase().includes(filterValue) ||
						item.type.toLowerCase().includes(filterValue) ||
						item.info.toLowerCase().includes(filterValue) ||
						item.database.toLowerCase().includes(filterValue)
				}
				return result.filter(filt)
			}
		},
	},
	methods: {
		tdclass (e) {
			if (e === 'Ошибка') return '.tder'
			else if (e === 'Блокировано') return ''
			else return ''
		},
		setFilter (e) {
			if (!this.filterByIndex) {
				this.filterByIndex = e
			} else this.filterByIndex = null
		},
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.theme--dark .tabs {
	border: 1px solid #666;
	th {
		background: #444;
		color: #aaa;
		border-right: 1px solid #666;
	}
	.ro:hover {
		background: #3a3a3a;
	}
	td {
		border-bottom: 1px solid #666;
		color: #ccc;
	}
}

.theme--light .tabs {
	border: 1px solid #ccc;
	th {
		background: #ddd;
		color: #666;
		border-right: 1px solid #fff;
	}
	.ro {
		background: #fff;
		&:hover {
			background: #eee;
		}
	}
	td {
		border-bottom: 1px solid #eee;
	}
}

.tabs {
	width: 100%;
	margin-bottom: 6rem;
	transition: all 0.3s ease;
	border-collapse: collapse;
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
	.ro {
		height: 3rem;
		position: relative;
	}
	td {
		padding: 0 1rem;
		position: relative;
	}
}
.check {
	height: 24px;
	margin-top: 0;
	padding-top: 0;
}
.tabs th.sm {
	text-align: center;
	width: 40px;
}
.over {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	text-align: right;
	margin-right: 0.5rem;
	background: #eee;
	line-height: 41px;
	i {
		margin-right: 4px;
		color: #999;
		&:hover {
			color: black;
		}
	}
}
span.action {
	display: none;
	width: 150px;
	height: 100%;
	position: absolute;
	right: 0px;
	top: 0;
	background: #eee;
	text-align: right;
	padding-right: 1rem;
	line-height: 45px;
	font-size: 1.2rem;
	cursor: pointer;
	i {
		margin-left: .5rem;
	}
}
tr:hover span.action {
	display: block;
}
.quick {
	position: absolute;
	top: 40px;
	left: 0;
	width: 100%;
	min-width: 200px;
	max-width: 400px;
	padding: 0 1rem;
}
.v-chip.tt {
	background: $blue-grey;
	color: #fff;
}

.tool {
	display: flex;
	justify-content: flex-end;
	.v-btn {
		margin-right: .7rem;
	}
	i {
		font-size: 1.2rem;
		margin-left: -3px;
	}
}
.tder {
	background: #FFCDD2;
}
.tdbl {
	background: #FFE57F;
}
</style>
