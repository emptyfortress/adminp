<template lang="pug">
.files.mt-4
	v-expansion-panels(v-model="panel")
		v-expansion-panel
			v-expansion-panel-header
				.blockhd.rel Файлы (4)
					v-btn(icon small @click.stop="").plus
						v-icon mdi-plus

			v-expansion-panel-content
				v-simple-table.filetable
					thead
						tr
							//- th
							th Имя
							th Версия
							th
					tbody
						tr(v-for="item in files" :key="item.name" :class="item.id === file ? 'act' : ''" @click="setFile(item.id)")
							//- td(width="20").px-0
							//- 	v-icon(v-if="item.id === file" color="primary") mdi-forward
							td
								img(:src="iconPath(item.icon)")
								.name {{ item.name }}
							td {{ item.v }}
							td(width="30").px-0
								v-btn(small icon)
									v-icon mdi-dots-vertical

</template>

<script>

export default {
	data () {
		return {
			panel: 0,
			files: [
				{ id: 0, icon: 'word', name: 'Договор с ООО Ромашка.doc', v: '1.1', cl: 'act' },
				{ id: 1, icon: 'word', name: 'Приложение к договору.doc', v: '1.0' },
				{ id: 2, icon: 'xls', name: 'Смета расходов.xls', v: '1.1' },
				{ id: 3, icon: 'xls', name: 'Расчет цены.xls', v: '1.1' }
			]
		}
	},
	computed: {
		file () {
			return this.$store.getters.file
		}
	},
	methods: {
		setFile (e) {
			this.$store.commit('setOverlay', true)
			let that = this
			setTimeout(function () {
				that.$store.commit('setFile', e)
				that.$store.commit('setOverlay', false)
			}, 500)
		},
		iconPath (e) {
			if (e === 'word') {
				return require(`@/assets/img/files/file-ext-word.png`)
			} else if (e === 'xls') {
				return require(`@/assets/img/files/file-ext-excel.png`)
			}
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.plus {
	position: absolute;
	bottom: -.5rem;
	right: 1rem;
}

.filetable td {
	color: $link;
	img {
		vertical-align: middle;
	}
}
.name {
	display: inline;
	margin-left: .8rem;
	cursor: pointer;
}
.act {
	background: #ddf0ff;
}

</style>
