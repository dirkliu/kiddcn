import Vue from 'vue'
import Router from 'vue-router'

import homeRouter from '../app/home/home.router'
import welcomeRouter from '../app/welcome/welcome.router'
import Clock from '../app/clock/Clock.vue'

Vue.use(Router)

export default new Router({
  routes: [
    homeRouter,
    welcomeRouter,
 		{
			path: '/clock',
			name: 'clock',
			component: Clock
    }
  ]
})
