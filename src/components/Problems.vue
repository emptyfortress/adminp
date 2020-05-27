<template lang="pug">
.problems
	.zag Проблемы
	drag-zone.zone.pa-5
		drag-content.content.one
			v-card(outlined)
				v-list-item-group(v-model="item")
					v-list(three-line)
						template(v-for="(item, index) in errors")
							v-subheader(v-if="item.header" :key="item.header" v-text="item.header").overline
							v-divider(v-else-if="item.divider" :key="index" :inset="item.inset")
							v-list-item(v-else :key="item.title")
								v-list-item-avatar
									v-icon {{ item.icon }}
								v-list-item-content
									v-list-item-title(v-html="item.title")
									v-list-item-subtitle(v-html="item.subtitle")

		drag-handle.handle
			div
		drag-content.content.two
			vue-pipeline(:data="items").pipe
		drag-handle.handle
			div
		drag-content.content.three
			v-card
				p laksjdla laskjd laksjd lakjs lk
</template>

<script>
import { dragZone, dragHandle, dragContent } from 'vue-drag-zone'
import { hue1 } from '@/components/sample.js'

export default {
	data () {
		return {
			items: hue1.nodes,
			item: 0,
			errors: [
				{ header: 'Сегодня' },
				{
					icon: 'mdi-alert',
					title: 'Brunch this weekend?',
					subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
				},
				{ divider: true, inset: false },
				{
					icon: 'mdi-alert-octagon',
					title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
					subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
				},
				{ divider: true, inset: false },
				{
					icon: 'mdi-alien-outline',
					title: 'Oui oui',
					subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
				},
				{ divider: true, inset: false },
				{
					icon: 'mdi-hand-left',
					title: 'Birthday gift',
					subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
				},
				{ divider: true, inset: false },
				{
					icon: 'mdi-alert-octagon',
					title: 'Recipe to try',
					subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
				},
			],
		}
	},
	components: {
		dragZone, 
		dragHandle, 
		dragContent,
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
	width: 20%;
	padding: 1rem;
}
.two {
	width: 40%;
}
.three {
	width: 30%;
}
.problems {
	height: calc(100vh - 205px);
}
.v-list-item-group .v-list-item--active {
	color: red;
}
</style>
