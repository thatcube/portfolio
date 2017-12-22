import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import Index from '../components/Index.vue'
import NotFound from '../components/404.vue'

Vue.use(VueRouter)

var router = new VueRouter({
	history: true
})

router.map({
	'/': {
		component: Index
	},
	'/404': {
		name: 'Not-Found',
		component: NotFound
	}
})
router.redirect({
    '*': '/404'
})
router.start(App, '#app');
