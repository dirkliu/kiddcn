import Vue from 'vue'
import Router from 'vue-router'

// import homeRouter from '../app/home/home.router'
import Clock from '../app/clock/Clock.vue'
import Icons from '../app/icons/Icons.vue'
const Login = () => import('../app/welcome/Login.vue')
const Chat = () => import('../app/chat/Chat.vue')
const Home = () => import('../app/home/Home.vue')
<<<<<<< HEAD
const Formula = () => import('../app/formula/Formula.vue')
=======
const Lottery = () => import('../app/lottery/Lottery.vue')
>>>>>>> 1906f27c9e03ee9ec7cc66be84993b1102caff37

Vue.use(Router)

export default new Router({
  routes: [
   	{
  		path: '/',
  		name: 'home', 
  		component: Home
   	}, {
  		path: '/login',
  		name: 'login',
  		component: Login
		}, {
			path: '/clock',
			name: 'clock',
			component: Clock
    }, {
    	path: '/icons',
    	name: 'icons',
    	component: Icons
    }, {
    	path: '/chat',
    	name: 'chat',
    	component: Chat
    }, {
			path: '/formula',
			name: 'formula',
			component: Formula
		},{
      path: '/lottery',
      name: 'lottery',
      component: Lottery
    }
  ]
})
