$(document).ready(function() {
  var text$ = document.getElementById('hittest');
  console.log('hellllllllooooooo');

  $("article.box2").on('focus', function( event ) {
    console.log('inside');
  });

  // $("section.box2").hover(function(){
  //   $(this).fadeTo(1000, 0.4);
  // });

  // $("section.box2").ready(function() {
  //   $(this).css({opacity: 0.4}, 10);
  // })

  $("article.box2").hover(function(){
    $(this).animate({opacity: 1.0}, 300);
  });
  //$(selector).fadeTo(speed,opacity,easing,callback)

  $("article.box2").mouseleave(function(){
    $(this).animate({opacity: 0.4}, 300);
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
