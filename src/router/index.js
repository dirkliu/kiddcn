import Vue from 'vue'
import Router from 'vue-router'

// import homeRouter from '../app/home/home.router'
import Clock from '../app/clock/Clock.vue'
import Icons from '../app/icons/Icons.vue'
const Login = () => import('../app/welcome/Login.vue')
const Chat = () => import('../app/chat/Chat.vue')
const Home = () => import('../app/home/Home.vue')
const Lottery = () => import('../app/lottery/Lottery.vue')

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
      path: '/lottery',
      name: 'lottery',
      component: Lottery
    }
  ]
})
