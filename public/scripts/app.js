//create tweet element - with has all the html script for what creates the tweet box and the var names for each dynamic element

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
    <footer id="tweetfooter"><span class="leftside"><p class="tinytype">${timestamp(tweets.created_at)}</p></span><span class="rightside"><img class="flaglikeretweet" src="/images/likeretweet.gif"></span></footer>
    </article>`
  );
}


//appends new tweet boxes with inner text captured from compose tweet form
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//creates time stamp at bottom of tweet - moment.js library was used for it and including this dependency has sometimes failed

function timestamp (tweets_created_at){
  var clock = moment(new Date (tweets_created_at), "YYYYMMDD").fromNow()
  return clock; 
}

//renders tweets that have been entered in the form of the tweets compose box. it uses a loop through off all the tweets that have been enetered and prints them and appends a tweet box for each

function renderTweets(tweets) {

  for (var tweetdeets of tweets) {
    createTweetElement(tweetdeets);
    tweetrender = tweetdeets;
  }
}

//jquery that reads the values entered in the text area of the compose tweet
//and then runs it through some validation processes - checking if nothing was added, too much was written or if the text had <html> markups - and if me, then processing and passing on for rendering, the text entered in the tweettextarea compose box. This also includes the count down of letters entered from 140, and the color change of the counter if that limit is exceeded.

$(document).ready(function(){
  var $formsubmit = $('.tweetform');
  $formsubmit.on('submit', function (event) {
    event.preventDefault();
    var textvalue = $(this).find(".tweettextarea").val();
    var textlength = textvalue.length;
    
    if (textvalue !== '' && textvalue !== undefined && textlength < 140){
      
      addnewTweet (textvalue);
      errortest(false);
      $('#textcounter').text(140);
      $(this).find(".tweettextarea").val('');
    } else if (textvalue === '' || textvalue === undefined){
      errortest('error1');
    } else if (textlength > 140){
      errortest('error2');
      //$('#textcounter').text(140).css('color','black');
    } else {
      
  }
  //
});

//i have no idea why the very first slidedown on the error reveal stutters. from there on it doesn't but removing the first two functions for slideup and empty, which may be the reason, then cause a core re-quirement to not be met- aka for the slide up and empty text and slide down of a new error message. so. them's the breaks. 

function errortest (trueorfalse){
  $(".errordisplay").slideUp( "slow", function() {
    $(".errordisplay").empty();
    if (trueorfalse === 'error1'){
      $( ".errordisplay" ).slideDown( "slow", function() {
        $(".errordisplay").empty().append("<p>please write something before tweeting</p>")
      });
    } else if (trueorfalse === 'error2'){
      $( ".errordisplay" ).slideDown( "slow", function() {
        $(".errordisplay").empty().append("<p>tweet content is too long</p>");
      });
    } else {
      $( ".errordisplay" ).slideUp( "slow", function() {
        $(".errordisplay").empty();
      });
    }
  });
}


//adding a new tweet involves creating a new object (aka data') to hold that text input. an object has to be created, rather then a string, for ajax to be able to read it
  function addnewTweet(input){
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
    }).always(function(){
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
      renderTweets(response);
    }).fail(function(error){
    }).always(function(){
    });
  }
  loadtweets();
})








