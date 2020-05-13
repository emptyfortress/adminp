<template lang="pug">
.myrow
	//- video(src="@/assets/img/network.mp4" autoplay).img
	v-img(src="@/assets/img/nature.jpg").img
	.sign
		.card
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
				a(href="") Напомнить пароль
	.dv
		img(src="@/assets/img/logo-w.svg")
		.txt admin interface

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
	position: relative;
	.dv {
		position: absolute;
		bottom: 1rem;
		left: 0;
		display: flex;
		justify-content: space-between;
		width: 50%;
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
.img {
	width: 50%;
}
.sign {
	width: 50%;
	height: 100vh;
	background-color: #dedede;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23f2f2f2' stroke-width='3.1' %3E%3Cpath d='M-500%2C75c0%2C0%2C125-30%2C250-30S0%2C75%2C0%2C75s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3Cpath d='M-500%2C45c0%2C0%2C125-30%2C250-30S0%2C45%2C0%2C45s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3Cpath d='M-500%2C105c0%2C0%2C125-30%2C250-30S0%2C105%2C0%2C105s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3Cpath d='M-500%2C15c0%2C0%2C125-30%2C250-30S0%2C15%2C0%2C15s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3Cpath d='M-500-15c0%2C0%2C125-30%2C250-30S0-15%2C0-15s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3Cpath d='M-500%2C135c0%2C0%2C125-30%2C250-30S0%2C135%2C0%2C135s125%2C30%2C250%2C30s250-30%2C250-30s125-30%2C250-30s250%2C30%2C250%2C30s125%2C30%2C250%2C30s250-30%2C250-30'/%3E%3C/g%3E%3C/svg%3E");
	background-repeat: repeat;
	display: flex;
	justify-content: center;
	align-items: center;
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
	h2 {
		text-transform: none;
		margin-bottom: .5rem;
	}
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
		a:link {
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}
	.registration {
		position: absolute;
		bottom: -1.7rem;
		right: 0;
	}
}

</style>
