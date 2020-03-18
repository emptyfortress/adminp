<template lang="pug">
v-navigation-drawer(v-model="add" stateless app right temporary width="30%" hide-overlay)
	p.text-center
		v-switch(v-model="$vuetify.theme.dark" color="primary" hide-details inset label="Theme Dark").d-inline-block

	div(v-show="$route.name === 'home'")
		h4 Выберите виджеты для дашборда
		v-item-group(multiple v-model="selected").listwrap
			v-item(v-slot:default="{active, toggle}" v-for="item in widget1" :key="item.id")
				v-card(:color="active ? 'primary' : '' " height="42" @click="mytoggle(item.id)").toggle
					.txt(v-if="item.text.length") {{ item.text }}
					.txt(v-else) Widget {{ item.i }}
					v-scroll-y-transition(mode="out-in")
						.act(v-if="active")
							v-icon(color="white" ) mdi-check-bold

</template>

<script>

export default {
	data () {
		return {
			order: 1
		}
	},
	computed: {
		add: {
			get () {
				return this.$store.getters.add
			},
			set () {}
		},
		widget1 () {
			return this.$store.getters.widget1
		},
		selected () {
			return this.widget1
				.filter(item => item.selected === true)
				.map(item => item.id)
		}
	},
	components: {
	},
	methods: {
		mytoggle (e) {
			const temp = []
			this.widget1.map((item) => {
				if (item.id === e) {
					item.selected = !item.selected
					temp.push(item)
				} else {
					temp.push(item)
				}
			})
			this.$store.commit('updateWidget1', temp)
		}
	}
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.listwrap {
	margin: 0 .5rem;
	display: flex;
	flex-wrap: wrap;
}
.theme--light.v-card.toggle {
	box-shadow: none;
	background: #ccc;
	position: relative;
	margin: .25rem;
}
.theme--dark.v-card.toggle {
	box-shadow: none;
	background: #585858;
	position: relative;
	margin: .25rem;
}
.act {
	position: absolute;
	top: .3rem;
	right: .5rem;
}
.theme--light.v-item--active .txt {
	color: #fff;
}

.txt {
	line-height: 42px;
	margin-left: 1rem;
	margin-right: 3rem;
}
h4 {
	text-align: center;
	font-weight: 400;
}
</style>k
