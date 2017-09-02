new Vue({
	
	el: '#app',

	data: {
		skills:[]
	},

	mounted() {
		// Make and ajax request to our server. /skills
		// fetch()
		// $.ajax()
		// $.getJson()
		// axios
		// Make a request for a user with a given ID
		// axios.get('/user?ID=12345')
		//   .then(function (response) {
		//     console.log(response);
		//   })
		//   .catch(function (error) {
		//     console.log(error);
		//   });
		axios.get('/skills').then(response => this.skills = response.data);
	}
});