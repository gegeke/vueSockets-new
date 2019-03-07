import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Account from './components/pages/Account'
import Channel from './components/pages/Channel'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/account',
			name: 'account',
			component: Account
		},
		{
			path: '/channel/:channelName',
			name: 'channel',
			component: Channel
		}
	]
})
