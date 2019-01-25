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

// var exacttime = moment(1461116232227).startOf('hour').fromNow(); 

// function datecheck (){
//   console.log(tweets.created_at + "APPPPPPLLLEEESSSS")
// var datref = moment(new Date (tweets.created_at), "YYYYMMDD").fromNow()
// console.log(dateref); 
// }

// datecheck();


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
    <footer id="tweetfooter"><p class="tinytype">${tweets.created_at}</p></footer>
  </article>
  </section>`
  );
}





// $(document).ready(function() {
// createTweetElement(tweety_the_tweet)
// });

// // ---------------------
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
    //milliseconds //
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
  var username
  var userhandle
  var useravatar
  var contenttext
  var createdate

  for (var tweetdeets of tweets) {
    createTweetElement(tweetdeets);
    tweetrender = tweetdeets;
   
  }
}

// $(document).ready(function(){
//   renderTweets(data);
// }) /// this is important --- remember to wrap your function call - if it's using jquery - in this document ready function that is jquery specific

$(document).ready(function(){
  
  function loadtweets(){
    const options = { 
      url: "http://localhost:8080/tweets",
      method: 'GET',
      dataType: 'json'

    }
    $.ajax(options)
    .done(function (response) {
      console.log(response);
      renderTweets(response);
    }).fail(function(error){
      console.log('error');
    }).always(function(){
      console.log('request completed');
    });
  };
  loadtweets()

});

