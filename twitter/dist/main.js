'use strict';

new Vue({
  el: '#twitterVue',
  data: {
    tweet: ''
  },
  computed: {
    tweetIsEmpty: function tweetIsEmpty() {
      return this.tweet.length == 0;
    }
  }
});