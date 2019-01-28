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
      errortest(false);
      $('#textcounter').text(140);
    } else if (textvalue === '' || textvalue === undefined){
      errortest('error1');
    } else if (textlength > 140){
      errortest('error2');
      $('#textcounter').text(140).css('color','black');
    } else {
  }
  $(this).find(".tweettextarea").val('');
});

function errortest (trueorfalse){
  $(".errordisplay").slideUp( "fast", function() {
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








