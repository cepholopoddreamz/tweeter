/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement (tweets) {
  $('#tweets-container').prepend(
    `<article class="box2">
    <header id ="titlespace2">
      <img class="userlogo" src="${tweets.user.avatars.small}">
      <h2 id="username">${tweets.user.name}</h2>
      <span class="id">${tweets.user.handle}</span>
    </header>
    <div class="tweetresponse">${escape(tweets.content.text)}
    </div>
    <footer id="tweetfooter"><p class="tinytype">${timestamp(tweets.created_at)}</p></footer>
  </article>
  </section>`
  );
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function timestamp (tweets_created_at){
  var clock = moment(new Date (tweets_created_at), "YYYYMMDD").fromNow()
  return clock; 
}

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

$(document).ready(function(){

  var $formsubmit = $('.tweetform');

  $formsubmit.on('submit', function (event) {
    event.preventDefault();
    var textvalue = $(this).find(".tweettextarea").val();
    var textlength = textvalue.length;
    
    if (textvalue !== '' && textvalue !== undefined && textlength < 140){
      addnewTweet (textvalue);
      $(".errordisplay p").removeClass("errormessage");
    } else if (textvalue === '' || textvalue === undefined){
      $(".errordisplay p").addClass("errormessage")
      $(".errormessage").empty().append("<p>please write something before tweeting</p>");
      //alert(`Please write something before posting` )
      //$(.displayerror).append(<p> Please write something before posting </p>)
    } else {
      //alert(`Please write something less then 140 characters` )
    }
    $(this).find(".tweettextarea").val('');
  });

  function addnewTweet(input){
    console.log(input);
    
    const postoptions = { 
      url: "http://localhost:8080/tweets",
      method: 'POST',
      data: {
        text: input
      }
    };
    
    $.ajax(postoptions)
    .done(function (response) {
      createTweetElement(response)
    }).fail(function(error){
      console.log('error');
    }).always(function(){
      console.log('request completed');
    });
  }

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
  }
  loadtweets();
})








