<template lang="pug">
.table
	v-row(justify="space-between" align="center")
		v-col(cols="12" sm="3")
			v-text-field(v-model="filter" label="Поиск" prepend-inner-icon="mdi-magnify" clearable single-line)

		v-col
			v-row(justify="space-around")
				v-chip-group(active-class="tt").mr-8
					v-chip.mr-2 Сегодня
					v-chip.mr-2 Вчера
					v-chip.mr-2 Эта неделя
				v-chip-group(active-class="tt")
					v-chip.mr-2 Параметр
					v-chip.mr-2 Параметр
					v-chip.mr-2 Параметр
					v-chip.mr-2 Параметр

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
				td {{ item.level }}
				td {{ item.module }}
				td Action: Your local changes to the following files would be overwritten by checkout
				td
					span {{ item.settle }}
					span.action
						i.icon-star-empty
						i.icon-check
						i.icon-trash-line
			tr(v-show="filteredItems.length === 0")
				td(colspan="6")
					v-img(src="@/assets/img/nothing.svg" width="130").mx-auto.my-3
					p.text-center.blue-grey--text Ничего не найдено

</template>

<script>

export default {
	props: ['headers', 'items'],
	data() {
		return {
			showByIndex: null,
			smallFilter: null,
			filterByIndex: null,
			all: this.items,
			colfilter: [],
			filter: '',
			buttons: [
				// { text: 'Выбрать', icon: 'icon-select', click: '' },
				// { text: 'Прочитать все', icon: 'icon-read', click: '' },
				// { text: 'Группировка', icon: 'icon-multi', click: 'groupped' },
				// { text: 'Поиск', icon: 'icon-search', click: '' },
				{ text: 'Обновить', icon: 'icon-refresh', click: '' },
				{ text: 'Reset', icon: 'icon-empty', click: '' },
				{ text: 'Экспорт', icon: 'icon-xls', click: '' },
				{ text: 'Удалить выбранные', icon: 'icon-trash-line', click: '' },
			],
		}
	},
	mounted () {
		this.colfilter.length = this.headers.length
	},
	computed: {
		filteredItems () {
			let result = this.items
			if (!this.filter) {
				return result
			} else {
				const filterValue = this.filter.toLowerCase()
				const filt = function (item) {
					return item.level.toLowerCase().includes(filterValue) ||
						item.module.toLowerCase().includes(filterValue) ||
						item.date.toLowerCase().includes(filterValue) ||
						item.descr.toLowerCase().includes(filterValue)
				}
				return result.filter(filt)
			}
		},
	},
	methods: {
		setFilter (e) {
			if (!this.filterByIndex) {
				this.filterByIndex = e
			} else this.filterByIndex = null
		},
	},
}

</script>

