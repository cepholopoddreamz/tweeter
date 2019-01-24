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


function createTweetElement (tweets) {
  var testkey = tweety_the_tweet.content.text;
  $('#tweets-container').append(
    `<article class="box2">
    <header id ="titlespace2">
      <img class="userlogo" src="${tweets.user.avatars.small}">
      <h2 id="username">${tweets.user.name}</h2>
      <span class="id">${tweets.user.handle}</span>
    </header>
    <div class="tweetresponse">
      ${tweets.content.text}
    </div>
    <footer id="tweetfooter"><p class="tinytype">empty footer</p></footer>
  </article>
  </section>`
  )
}


$(document).ready(function() {
createTweetElement(tweety_the_tweet);
});

// // ---------------------


//responsible for taking in an array of tweet objects

// function renderTweets(tweets) {

//   tweets.forEach( function())
// // loops through tweets
//     // calls createTweetElement for each tweet
//     // takes return value and appends it to the tweets container

// }

// function createTweetElement(tweet) {
//   let $tweet = $('#tweet-container').addClass('tweet');
//   // ...
//   return $tweet;
// }




/*
$(document).ready(function() {
createTweetElement(tweety_the_tweet);
});

// responsible for taking in an array of tweet objects

function renderTweets (/*arryofobj*/

//passes that whole jquery thing through the function


//$(#tweets-container).append(/*arryofobj*/);

//let $tweet = $('<article>').addClass('tweet');renderTweets(apples)*/