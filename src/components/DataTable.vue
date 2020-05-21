<template lang="pug">
.table
	//- Toolbar( :current="current" :group="group" @groupped="setGroup")
	v-row(justify="end")
		v-col(cols="12" sm="3")
			v-text-field(v-model="filter" label="Фильтр" prepend-inner-icon="mdi-filter-outline" clearable single-line)
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
						//- v-icon(v-show="smallFilter === index" @click="smallFilter = null" color="#8B0000") mdi-filter-remove-outline
						v-icon(@click="setFilter(index)") mdi-filter-outline
						//- v-icon(@click="filterByIndex = null") mdi-pin-outline
						//- v-icon(@click="filterByIndex = null") mdi-eye-off
					v-slide-y-transition
						v-card.quick.elevation-3(v-show="filterByIndex === index")
							v-text-field(autofocus clearable :key="index" v-model="colfilter[index]")
							//- v-card-actions
							//- 	v-btn(text color="primary" @click="filterByIndex = null; smallFilter = null") Отмена
							//- 	v-spacer
							//- 	v-btn(text color="primary" @click="filterByIndex = null; smallFilter = index") Применить
		tbody
			tr(v-for="item in filteredItems").ro
				td
					v-checkbox.check
				td {{ item.date }}
				td {{ item.level }}
				td {{ item.module }}
				td error: Your local changes to the following files would be overwritten by checkout
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
// import Toolbar from '@/components/Toolbar'

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
		}
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
	width: 100%;
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

</style>
