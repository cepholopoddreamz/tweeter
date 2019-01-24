/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var tweety_the_tweet = {
  user: {
    name: 'Newton',
    avatars: {
      small:   'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
      regular: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
      large:   'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png'
    },
    handle: '@SirIsaac'
  },
  content: {
    text: 'If I have seen further it is by standing on the shoulders of giants'
  },
  created_at: 1461116232227
};



function createTweetElement (thingy) {
  var testkey = tweety_the_tweet.content.text;
  //$ ('main.container').append('<h1>testing</h1>');
  // $ (text$).append("<p>testing</p>");
  //$('<article>').append(`<p>testing ${testkey}</p>`);

  
  console.log(thingy['user']['name']);
  console.log(thingy.user.name);
  console.log(thingy.user.avatars.small);

  $('article.box2').append(
    `<article class="box2" style="opacity: 0.4;">
    <header class="titlespace">
      <img class="userlogo" src="${thingy.user.avatars.small}">
      <span class="id">${thingy.user.handle}</span>
    </header>
    <div class="tweetresponse">
      ${thingy.content.text}
    </div>
    <footer class="buttonsbelow">empty footer</footer>
  </article>`
  )

}

$(document).ready(function() {

createTweetElement(tweety_the_tweet);

});
// var bob = 'img1.jpg'

// $('main').append('<img src="'+bob+''">')
// $('main').append(`<img src="${bob}">`)

// var $tweet = $("<article>").addClass("tweet");





//when i use the function: 
/////$(document).ready(function() {

//$(document).ready(function() {?


// function reqListener () {
//   $articles = document.querySelector("<articles>") /// does this need to be .tweetresponse?
//   console.log(this.responseText)
//   $articles.innerHTML = this.responseText
// }

// function createTweetElement (){


// }

//? $(document).ready(function() {
 // var text$ = document.getElementById('hittest');
 
 
 //var $tweet = $(text$).addClass("tweet");




// {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// }