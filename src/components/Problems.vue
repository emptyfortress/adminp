<template lang="pug">
.problems
	.zag Проблемы
	drag-zone.zone.pa-5
		drag-content.content.one
			.sub Список
			v-card(outlined).li
				v-list-item-group(v-model="item")
					v-list(three-line)
						template(v-for="item in errors")
							v-subheader(v-if="item.header" :key="item.header" v-text="item.header").overline
							v-divider(v-else-if="item.divider" :key="index" :inset="item.inset")
							v-list-item(v-else :key="item.title" @click="setError(item.id)")
								v-list-item-avatar
									v-icon {{ item.icon }}
								v-list-item-content
									v-list-item-title(v-html="item.title")
									v-list-item-subtitle(v-html="item.subtitle")

		drag-handle.handle
			div
		drag-content.content.two
			.sub Локализация
			vue-pipeline(:data="items" @select="handleSelect").pipe
		drag-handle.handle
			div
		drag-content.content.three
			.sub Информация
			v-card.pa-5.mx-3
				v-icon mdi-information
				br
				h3 {{ msg }}
				br
				.body-2 Здесь будет информация по выбранному узлу.
				.body-2 Здесь будет информация по выбранному узлу.
				.body-2 Здесь будет информация по выбранному узлу.
				.body-2 Здесь будет информация по выбранному узлу.
</template>

<script>
import { dragZone, dragHandle, dragContent } from 'vue-drag-zone'
import { hue1, hue3, sample, sample2, sample3 } from '@/components/sample.js'

export default {
	data () {
		return {
			items: hue1.nodes,
			item: 0,
			msg: 'Выберите узел',
			errors: [
				{ header: 'Сегодня' },
				{
					id: 0,
					icon: 'mdi-alert',
					title: 'Ошибка 1',
					subtitle: "<span class='text--primary'>14:05</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
				},
				{ divider: true, inset: false },
				{
					id: 1,
					icon: 'mdi-alert-octagon',
					title: 'Ошибка 2',
					subtitle: "<span class='text--primary'>13:11</span> &mdash; Wish I could come, but I'm out of town this weekend.",
				},
				{ divider: true, inset: false },
				{
					id: 2,
					icon: 'mdi-alien-outline',
					title: 'Ошибка 3',
					subtitle: "<span class='text--primary'>13:03</span> &mdash; Do you have Paris recommendations? Have you ever been?",
				},
				{ divider: true, inset: false },
				{
					id: 3,
					icon: 'mdi-hand-left',
					title: 'Ошибка 4',
					subtitle: "<span class='text--primary'>12:47</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
				},
				{ divider: true, inset: false },
				{
					id: 4,
					icon: 'mdi-alert-octagon',
					title: 'Ошибка 5',
					subtitle: "<span class='text--primary'>11:54</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
				},
			],
		}
	},
	components: {
		dragZone,
		dragHandle,
		dragContent,
	},
	methods: {
		setError (e) {
			switch (e) {
			case 0:
				return this.items = hue1.nodes
			case 1:
				return this.items = sample2.nodes
			case 2:
				return this.items = hue3.nodes
			case 3:
				return this.items = sample3.nodes
			default:
				return this.items = sample.nodes
			}
		},
		handleSelect(node) {
			this.msg = `{ ${node.name} }`
		},
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.zone {
	width: 100%;
	height: 100%;
	margin: 0 auto;
	position: relative;
	display: flex;
	.handle {
		width: 20px;
		div {
			width:10px;
			height: 100%;
			transform: translateX(5px);
		}
		&:hover {
			div { border-left: 3px dotted #333; }
		}
	}
}
.content {
	overflow: hidden;
}
.one {
	width: 30%;
}
.two {
	width: 50%;
}
.three {
	width: 20%;
}
.problems {
	height: calc(100vh - 205px);
}
.v-list-item-group .v-list-item--active {
	color: red;
}
.sub {
	/* margin-bottom: 1rem; */
	font-size: .95rem;
	font-weight: 600;
	padding: 5px 15px;
	padding-left: 0;
}
</style>
