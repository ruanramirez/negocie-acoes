import Vue from 'vue'
import Vuex from 'vuex'

import stocks from './modules/sotcks'
import portfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		stocks,
		portfolio,
	}
})
