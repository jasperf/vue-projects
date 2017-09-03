// Component must be registered before Vue instance
Vue.component('message', { 
	props: ['title', 'body'], 
	// props here not inside the params for the component!
	//  As you can see you can use more custom tags this way
	//  No need to create one component per custom html tag
	template: `
		<article class="message">
		  <div class="message-header">
		    {{title}}
		    <button class="delete" aria-label="delete"></button>
		  </div>
		  <div class="message-body">
		  {{body}}
		  </div>
		</article>
	`
});

new Vue({
	el: '#root'
})