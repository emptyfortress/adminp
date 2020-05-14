<template lang="pug">
.myrow
	video( autoplay loop playsinline muted ).vid
		source(src="@/assets/img/autumn.mp4" type="video/mp4")
	.card.elevation-3
		.logo
			img(src="@/assets/img/user0.svg")
		h2 Привет, kmg01!
		.mail(contenteditable="true")
			i.icon-mail
			span kmg01@docsvision.com
		form
			input(type="password" placeholder="Пароль").pass
			br
			br
			label.alien
				input(type="checkbox").mr-2
				span Чужой компьютер
		v-card-actions.mt-5.px-0
			v-btn(color="primary" @click="login" block) Вход
		.forget
			a(href="#") Напомнить пароль
		img(src="@/assets/img/houston.svg").houston
	.dv
		img(src="@/assets/img/logo-w.svg")
		.txt admin web interface

</template>

<script>

export default {
	data () {
		return {

		}
	},
	methods: {
		login () {
			this.$store.commit('login')
			this.$router.push('/', () => {})
		}
	}
}

</script>

<style scoped lang="scss">

.myrow {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	.dv {
		position: absolute;
		top: 50%;
		left: 0;
		display: flex;
		justify-content: space-between;
		width: 100%;
		background: rgba(0,0,0,.4);
		padding: 0 2rem;
		img {
			vertical-align: bottom;
			height: 48px;
			display: block;
		}
		.txt {
			color: white;
			font-size: 2rem;
			font-weight: 300;
		}
	}
}
.vid {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	object-fit: cover;
}
.card {
	margin-top: -3rem;
	box-sizing: border-box;
	width: 500px;
	background: #fff;
	padding: 2rem;
	padding-top: 3rem;
	padding-top: 3rem;
	position: relative;
	box-shadow: 0 1px 3px #999;
	border-radius: 5px;
	z-index: 2;
	.icon-mail {
		font-size: 1rem;
		margin-right: 1rem;
	}
	.logo {
		position: absolute;
		top: -3rem;
		left: 50%;
		background: #fff;
		padding: 1rem;
		border-radius: 4rem;
		margin-left: -3rem;
		img {
			width: 4rem;
		}
	}
	form {
		margin-top: 2rem;
		.pass {
			width: 100%;
			height: 2.5rem;
			border: none;
			border-bottom: 1px dotted #333;
			outline: none;
			font-size: 1.3rem;
		}
		::placeholder {
			color: #ccc;
		}
	}
	a:hover {
		text-decoration: underline;
	}
	.forget {
		position: absolute;
		bottom: -1.7rem;
		left: 0;
		a:link, a:visited {
			color: #fff;
			text-decoration: none;
			opacity: .5;
			&:hover {
				text-decoration: underline;
				opacity: 1;
			}
		}
	}
	.registration {
		position: absolute;
		bottom: -1.7rem;
		right: 0;
	}
}
.houston {
	position: absolute;
	top: -70px;
	left: 0;
	width: 120px;
	opacity: .7;
}

</style>
