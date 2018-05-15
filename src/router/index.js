import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home';
import Idea from '@/components/Idea';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		}, {
			path: '/:idea',
			name: 'Idea',
			component: Idea,
		}
	],
	mode: 'history',
})