import Vue from 'vue'
import axios from 'axios'

Vue.use({
	install(Vue) {
		Vue.prototype.$http = axios.create({
			baseURL: 'https://stock-e8f56-default-rtdb.firebaseio.com/'
		})
	}
})
