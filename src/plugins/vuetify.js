import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		themes: {
			dark: {
				// primary: '#ff0000',
				color1: '#f5f9fa',
				color2: '#c7c9cc',
				color3: '#979ba0',
				color4: '#696e72',
				color5: '#292d2d',
			},
			light: {
				// primary: '#271F47',
				color1: '#f5f9fa',
				color2: '#c7c9cc',
				color3: '#979ba0',
				color4: '#696e72',
				color5: '#292d2d',
				docolor: '#0095da',
				taskcolor: '#6DAE50',
				dark: '#2C4159',
				link: '#0077CE',
			},
		},
	},
})
