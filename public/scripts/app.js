/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// var tweety_the_tweet = {
//   user: {
//     name: 'Newton',
//     avatars: {
//       small:   'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png',
//       regular: 'https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png',
//       large:   'https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png'
//     },
//     handle: '@SirIsaac'
//   },
//   content: {
//     text: 'If I have seen further it is by standing on the shoulders of giants'
//   },
//   created_at: 1461116232227
// };

// var exacttime = moment(1461116232227).startOf('hour').fromNow(); 

// function datecheck (){
//   console.log(tweets.created_at + "APPPPPPLLLEEESSSS")
// var datref = moment(new Date (tweets.created_at), "YYYYMMDD").fromNow()
// console.log(dateref); 



function createTweetElement (tweets) {

  //var testkey = tweety_the_tweet.content.text;
  $('#tweets-container').prepend(
    `<article class="box2">
    <header id ="titlespace2">
      <img class="userlogo" src="${tweets.user.avatars.small}">
      <h2 id="username">${tweets.user.name}</h2>
      <span class="id">${tweets.user.handle}</span>
    </header>
    <div class="tweetresponse">${escape(tweets.content.text)}
    </div>
    <footer id="tweetfooter"><p class="tinytype">${tweets.created_at}</p></footer>
  </article>
  </section>`
  );
}

//E

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
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

// $(document).ready(function(){
//   renderTweets(data);
// }) /// this is important --- remember to wrap your function call - if it's using jquery - in this document ready function that is jquery specific

$(document).ready(function(){

  var $formsubmit = $('.tweetform');
  $formsubmit.on('submit', function (event) {
  event.preventDefault();
  //console.log( $( this ).serialize() );
  //let form_values = $( this ).serialize(); another option if you don't create the object yourself in the post
  var textvalue = $(this).find(".tweettextarea").val();
  var textlength = textvalue.length;

  if (textvalue !== '' && textvalue !== undefined && textlength < 140){

    addnewTweet (textvalue);
    console.log('valid value')

 } else if (textvalue === '' || textvalue === undefined){
 alert(`Please write something before posting` )
 //$(.displayerror).append(<p> Please write something before posting </p>)
  
} 
else {
  alert(`Please write something less then 140 characters` )
}
});


//console.log(textvalue + "apples")
//var textvalue2 = $formsubmit.find(".tweettextarea").val();

  function addnewTweet(input){

    console.log(input);
    
    const postoptions = { 
            url: "http://localhost:8080/tweets",
            method: 'POST',
            data: {
              text: input
              // the server needs things in an object form where as if only 'input' was past through it was a bare string

            }       
  }

  $.ajax(postoptions)
    .done(function (response) {
    
      //console.log(response);
      createTweetElement(response)
  ///get the object from the server //
  //create tweet element (response)
  //prepend the tweet element from your call to the list of tweets
      //renderTweets(response);
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
  };
  loadtweets()

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

})








