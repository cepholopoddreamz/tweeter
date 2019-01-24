$(document).ready(function() {
  var text$ = document.getElementById('hittest');
  console.log('hellllllllooooooo');

  $("article.box2").on('focus', function( event ) {
    console.log('inside');
  });

  $("article.box2").hover(function(){
    $('#titlespace2').animate({opacity: 1.0}, 300);
    $('#tweetfooter').animate({opacity: 1.0}, 300);
    $('h2.tweetresponse').animate({opacity: 1.0}, 300);

    // $(this).animate({opacity: 1.0}, 300);
    // $(h2.tweetresponse).animate({opacity: 1.0}, 300);
  });

  $("article.box2").mouseleave(function(){
    $('#titlespace2').animate({opacity: 0.4}, 300);
    $('#tweetfooter').animate({opacity: 0.4}, 300);
    $('h2.tweetresponse').animate({opacity: 1.0}, 300);
  });




  $(text$).on('focus', function( event ) {
    console.log('inside');
  });


  $(text$).on('blur', function( event ) {
    console.log('outside');   
  });

  $(text$).on('keyup', function( event ) {

    var counter = event.target.value.length;

    if (counter <= 140) {
      //let countertxt = document.getElementById("textcounter").innerHTML = counter;
      $('#textcounter').text(counter);
      //return countertxt;
      console.log('allowed letters')
    }
    else {
      let countertxt = $('#textcounter').text(140 - counter).css('color','red');
      console.log('toomanyletters')
    }
  })
})
