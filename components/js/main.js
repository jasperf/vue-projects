// Component must be registered before Vue instance
Vue.component('task-list', { 
	template: '<ul><slot></slot></ul>'
	// data Must Be a Function		
});

Vue.component('task', { 
	template: '<li><slot></slot></li>'
	// data Must Be a Function		
});

new Vue({
	el: '#root'
})