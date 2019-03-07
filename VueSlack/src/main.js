import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

// a quick note:
// you imported vue-socket-io, but were looking at the documentation of
// vue-socket.io - notice the difference? Doesn't matter, vue-socket.io-extended
// solved the problem

// LOOK AT THE SERVER, I ADDED A BIT OF CODE THERE TOO, AS THE VUE APPLICATION
// COULDN'T COMMUNICATE WITH IT - THERE WAS A CORS ERROR


// changed the package to a better one and added another one
// suggested by the writer of the better package
// source: https://www.npmjs.com/package/vue-socket.io-extended
import VueSocketio from 'vue-socket.io-extended';
import io from 'socket.io-client';

Vue.config.productionTip = false;
Vue.use(VueResource);

// source: https://www.npmjs.com/package/vue-socket.io-extended
Vue.use(VueSocketio, io('http://localhost:3001/'));

// removed this, because vue-resource is deprecated (axios or even the
// JS native .fetch is there), and did not want to investigate what it should
// be doing.

// Vue.http.interceptors.push(function(resource, next) {
// 	this.method = 'POST';
// 	next();
// });

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
