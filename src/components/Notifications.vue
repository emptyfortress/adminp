<template lang="pug">
.notific
	.zag.mb-5 Уведомления
	.wrap
		v-card(width="400").note
			v-list(two-lines subheader)
				v-subheader.high Errors
				v-list-item(v-for="item in errors" :key="item.id" @click="$router.push('/notifications/errorlist')")
					v-list-item-avatar
						v-icon(:class="[item.iconClass]" v-text="item.icon")
					v-list-item-content
						v-list-item-title(v-text="item.title")
						v-list-item-subtitle(v-text="item.subtitle")
					v-list-item-action
						.badge {{ item.badge }}
		v-card(width="400").note
			v-list(two-lines subheader)
				v-subheader.high Warnings
				v-list-item(v-for="item in warinings" :key="item.id" @click="$router.push('/notifications/errorlist')")
					v-list-item-avatar
						v-icon(:class="[item.iconClass]" v-text="item.icon")
					v-list-item-content
						v-list-item-title(v-text="item.title")
						v-list-item-subtitle(v-text="item.subtitle")
					v-list-item-action
						.badge {{ item.badge }}
		v-card(width="400").note
			v-list(two-lines subheader)
				v-subheader.high Notifications
				v-list-item(v-for="item in notific" :key="item.id" @click="$router.push('/notifications/errorlist')")
					v-list-item-avatar
						v-icon(:class="[item.iconClass]" v-text="item.icon")
					v-list-item-content
						v-list-item-title(v-text="item.title")
						v-list-item-subtitle(v-text="item.subtitle")
					v-list-item-action
						.badge {{ item.badge }}

</template>

<script>

export default {
	data() {
		return {
			warinings: [
				{ id: 0, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Все предупреждения', subtitle: 'суэк' },
				{ id: 1, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Общие предупреждения', subtitle: 'суэк' },
				{ id: 2, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 18, title: 'Серверные предупреждения', subtitle: 'суэк' },
				{ id: 3, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 24, title: 'Клиентские предупреждения', subtitle: 'суэк' },
			],
			errors: [
				{ id: 0, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Все ошибки', subtitle: 'суэк' },
				{ id: 1, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Общие ошибки', subtitle: 'суэк' },
				{ id: 2, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 18, title: 'Ошибки на сервере', subtitle: 'суэк' },
				{ id: 3, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 24, title: 'Ошибки на клиенте', subtitle: 'суэк' },
			],
			notific: [
				{ id: 0, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Все уведомления', subtitle: 'суэк' },
				{ id: 1, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Общие уведомления', subtitle: 'суэк' },
				{ id: 2, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 18, title: 'Серверные уведомления', subtitle: 'суэк' },
				{ id: 3, icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 24, title: 'Клиентские уведомления', subtitle: 'суэк' },
			],
		}
	},
}

</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.notific {
	padding: 1rem;
	padding-top: 0;
}
.high {
	text-transform: uppercase;
	
}
.badge {
	background: $link;
	padding: .2rem .5rem;
	color: #fff;
	border-radius: 3rem;
}
.wrap {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.note:not(last-child) {
	margin-right: 1rem;
	margin-bottom: 1rem;

}

</style>
