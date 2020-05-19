<template lang="pug">
.table
	//- Toolbar( :current="current" :group="group" @groupped="setGroup")
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
						v-icon(v-show="smallFilter === index" @click="smallFilter = null" color="#8B0000") mdi-filter-remove-outline
						v-icon(@click="filterByIndex = index") mdi-filter-outline
						v-icon(@click="filterByIndex = null") mdi-pin-outline
						v-icon(@click="filterByIndex = null") mdi-eye-off
		tbody
			tr(v-for="item in items").ro
				td
					v-checkbox.check
				//- td {{ item.number }}
				td {{ item.date }}
				td {{ item.level }}
				td {{ item.module }}
				td error: Your local changes to the following files would be overwritten by checkout
				td {{ item.settle }}
</template>

<script>
// import Toolbar from '@/components/Toolbar'

export default {
	props: ['headers', 'items'],
	data() {
		return {
			showByIndex: null,
		}
	},
	components: {
		// Toolbar,
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
	}
	td {
		padding: 0 1rem;
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
	background: rgba(255, 255, 255, 0.6);
	line-height: 41px;
	i {
		margin-right: 4px;
		color: #999;
		&:hover {
			color: black;
		}
	}
}

</style>
