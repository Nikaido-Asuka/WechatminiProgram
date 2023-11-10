import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Community from '../pages/community/community'

const routes = [
	{
		path: '/community',
		name: 'community',
		component: Community
	}
];

const router = new VueRouter({
  routes,
  mode: 'hash'
});

export default router;
