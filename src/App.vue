<template lang="pug">
v-app
	template(v-if="isLogged")
		Drawer
		AddDrawer
		v-app-bar(app collapse-on-scroll clipped-left :class="calcWidth()").pr-2
			.lft
				v-img( src="@/assets/img/adm-logo.svg" transition="scale-transition" )
				span(v-show="logo") Administration
			v-spacer
			v-scale-transition(origin="center right" mode="out-in")
				v-card(v-show="searchMode").searchbox
					input(placeholder="Найти" autofocus)
			v-btn( href="" icon  v-show="offsetTop" @click="toggleSearch")
				v-icon mdi-home-search-outline
			v-btn( href="" icon  v-show="offsetTop")
				v-icon mdi-bell-outline
			v-btn( href="" icon  v-show="offsetTop" @click="$vuetify.theme.dark = !$vuetify.theme.dark").mr-3
				v-icon mdi-brightness-4
			v-avatar(color="#cdcdcd" size="35" v-show="offsetTop" v-ripple @click="logout")
				img(src="@/assets/img/user-profile.svg" )
			v-avatar(color="#cdcdcd" size="35" v-show="offsetTop" v-ripple @click="logout")
				img(src="@/assets/img/user-profile.svg" )

		v-content(v-scroll="handleScroll")
			v-container(fluid :class="drawer ? '' : 'leftmargin'").rel.pa-0
				//- transition(name="fade" mode="out-in")
				//- 	v-btn(fab outlined color="#ccc" small  @click="back").back
				//- 		v-icon(color="#aaa") mdi-arrow-left
				//- transition(name="fade" mode="out-in")
				//- 	v-btn(fab outlined color="#ccc" small  @click="forward").forward
				//- 		v-icon(color="#aaa") mdi-arrow-right

			Breadcrumbs
			transition(name="slide-fade" mode="out-in")
				div(v-if="!searchMode" key="start")
						v-slide-x-transition(mode="out-in")
							router-view
				SearchPanel(v-else key="search")

		Footer
		Dialog
		v-alert(transition="scale-transition").plus
			v-btn(v-show="$route.name === 'home'" fab large @click="toggleAdd" :class="add ? 'active' : '' " ).fab
				v-icon(color="white") mdi-plus

		v-alert(v-show="scroll" transition="scale-transition").up
			v-btn(fab color="white" @click="$vuetify.goTo(0)")
				v-icon(dark) mdi-arrow-up
	template(v-else)
		Login
</template>

<script>
import Drawer from './components/Drawer'
import AddDrawer from './components/AddDrawer'
import Footer from './components/Footer'
import SearchPanel from './components/SearchPanel'
import Breadcrumbs from './components/Breadcrumbs'
import Login from './views/Login'
import './assets/css/palette.scss'

export default {
	name: 'App',
	components: {
		Drawer,
		AddDrawer,
		Footer,
		SearchPanel,
		Login,
		Breadcrumbs,
	},
	data: (vm) => ({
		initialDark: vm.$vuetify
			? vm.$vuetify.theme.dark
			: false,
		offsetTop: true,
		scroll: false,
		logo: true,
	}),
	beforeDestroy() {
		if (!this.$vuetify) return
		this.$vuetify.theme.dark = this.initialDark
	},
	computed: {
		isLogged() { return this.$store.getters.isLogged },
		add() { return this.$store.getters.add },
		drawer() { return this.$store.getters.drawer },
		mini() { return this.$store.getters.mini },
		searchMode() { return this.$store.getters.searchMode },
		row() { return this.$router.params.id },
	},
	methods: {
		logout() {
			this.$store.commit('logout')
		},
		back() {
			this.$router.push(this.pathback)
		},
		forward() {
			this.$router.push(this.pathforward)
		},
		toggleAdd() {
			this.$store.commit('toggleAdd')
		},
		toggleSearch() {
			this.$store.commit('toggleSearchMode')
		},
		calcWidth() {
			const po = window.pageYOffset
			if (this.drawer && !this.mini && po > 0) {
				return 'drawer'
			} if (this.drawer && this.mini && po > 0) {
				return 'mid'
			} return 'sm'
		},
		handleScroll() {
			if (window.pageYOffset > 300) {
				this.scroll = true
			} else if (window.pageYOffset > 0 && this.mini) {
				this.offsetTop = false
				this.logo = false
			} else if (window.pageYOffset > 0) {
				this.offsetTop = false
				this.logo = true
			} else {
				this.offsetTop = true
				this.scroll = false
				this.logo = true
			}
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';
@import '@/assets/css/palette.scss';

.lft {
	display: flex;
	span {
		font-weight: 300;
		font-size: 1.3rem;
		margin-left: 1rem;
		text-transform: uppercase;
	}
}
.v-toolbar.v-toolbar--collapsed {
	max-width: 260px;
	&.sm {
		max-width: 48px;
	}
	&.mid {
		max-width: 82px;
	}
}
.icon-user, .icon-search, .icon-search-scan {
	font-size: 1.2rem;
	margin-left: -4px;
}
.leftmargin {
	margin-left: 40px;
	div {
		margin-right: 40px;
	}
}
.forward {
	position: absolute;
	top: 1rem;
	left: 3.6rem;
	z-index: 1000;
}
.back {
	position: absolute;
	top: 1rem;
	left: 1rem;
	z-index: 1000;
}
.plus {
	background: transparent;
	position: fixed;
	transition: all .2s ease;
	bottom: 2rem;
	right: 1rem;
	z-index: 1000;
	.active {
		transform: rotate(45deg);
	}
	.v-btn {
		background: #ccc;
	}
}
.up {
	position: fixed;
	bottom: 2rem;
	left: 50%;
	background: transparent;
}
.searchbox {
	box-shadow: none;
	width: 100%;
	/* display: flex; */
	margin-left: 4rem;
	input {
		border: none;
		outline: none;
		background: white;
		width: 100%;
		height: 32px;
		color: #000;
		padding: 0 .5rem;
	}
}

.status {
	width: 13px;
	height: 13px;
	background: $success;
	position: absolute;
	left: 0;
	bottom: 0;
	border-radius: 10px;
	border: 2px solid $dark;
}
.ful {
	height: 100%;
}
.brd {
	border: 1px solid #ccc;
	overflow: hidden;
}
.theme--dark.fab.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
	background: $link;
}
.theme--light.fab.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
	background: $blue-grey;
}

</style>
