<template lang="pug">
.notific
	v-breadcrumbs(:items="breadcr")
	.zag.mb-5 Уведомления
	.wrap
		v-card(width="400").note
			v-list(two-lines subheader)
				v-subheader.high Errors
				v-list-item(v-for="item in errors" :key="item.title" @click="")
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
				v-list-item(v-for="item in warinings" :key="item.title" @click="")
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
				v-list-item(v-for="item in notific" :key="item.title" @click="")
					v-list-item-avatar
						v-icon(:class="[item.iconClass]" v-text="item.icon")
					v-list-item-content
						v-list-item-title(v-text="item.title")
						v-list-item-subtitle(v-text="item.subtitle")
					v-list-item-action
						.badge {{ item.badge }}
					//- v-btn(icon)
					//- 	v-icon(color="grey lighten-1") mdi-information
	//- Data(:headers="headers" :items="notifications")

</template>

<script>
import Data from '@/components/Data'
import {headers, notifications} from '@/notifications.js'

export default {
	data() {
		return {
			headers,
			notifications,
			breadcr: [
				{ text: 'Главная', disabled: false, href: '/' },
				{ text: 'Notifications', disabled: true, href: '' },
			],
			warinings: [
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Все предупреждения', subtitle: 'суэк' },
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Общие предупреждения', subtitle: 'суэк' },
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 18, title: 'Серверные предупреждения', subtitle: 'суэк' },
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 24, title: 'Серверные предупреждения', subtitle: 'суэк' },
			],
			errors: [
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Все ошибки', subtitle: 'суэк' },
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Общие ошибки', subtitle: 'суэк' },
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 18, title: 'Ошибки на сервере', subtitle: 'суэк' },
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 24, title: 'Ошибки на клиенте', subtitle: 'суэк' },
			],
			notific: [
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Все уведомления', subtitle: 'суэк' },
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 32, title: 'Общие уведомления', subtitle: 'суэк' },
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 18, title: 'Серверные уведомления', subtitle: 'суэк' },
				{ icon: 'mdi-folder', iconClass: 'grey lighten-1 white--text', badge: 24, title: 'Серверные уведомления', subtitle: 'суэк' },
			],
		}
	},
	components: {
		Data,
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
