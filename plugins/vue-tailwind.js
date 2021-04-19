import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import { TAlert } from 'vue-tailwind/dist/components'

const settings = {
	't-alert': {
		component: TAlert,
	},
}

Vue.use(VueTailwind, settings)
