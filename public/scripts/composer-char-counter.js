$(document).ready(function() {
  var text$ = $('.tweettextarea');
  console.log('oranges');

  // $("article.box2").on('focus', function( event ) {
  //   //console.log('inside');
  // });

  $("article.box2").hover(function(){
    console.log('hovering')
    $('#titlespace2').animate({opacity: 1.0}, 300);
    $('#tweetfooter').animate({opacity: 1.0}, 300);
    $('h2.tweetresponse').animate({opacity: 1.0}, 300);

    // $(this).animate({opacity: 1.0}, 300);
    // $(h2.tweetresponse).animate({opacity: 1.0}, 300);
  });

  $("article.box2").mouseleave(function(){
    console.log('mouse leave')
    $('#titlespace2').animate({opacity: 0.4}, 300);
    $('#tweetfooter').animate({opacity: 0.4}, 300);
    $('h2.tweetresponse').animate({opacity: 1.0}, 300);
  });


  // $("span.composebt button").hover(function(){
  //   $(this).animate({opacity: 1.0}, 300);
  // });

  // $("span.composebt button").hover(function(){
  //   $(this).mouseleave({opacity: 0.7}, 300);
  // });




  // $(text$).on('focus', function( event ) {
  //   //console.log('inside');
  // });


  // $(text$).on('blur', function( event ) {
  //   console.log('outside');   
  // });

  console.log($(".tweettextarea").val());

//var text$ = $('.tweettextarea');

  $(text$).on('keyup', function( event ) {
    //this isn't a key up on the tweet button, it's on the composing area. i need to tie the errors to that submit attempt
    var counter = (event.target.value.length);
    
    if (counter <= 140) {
      $('#textcounter').text(counter).css('color','black');
      $(".errordisplay p").removeClass("errormessage").empty();
      console.log('allowed letters')
    } else {
      let countertxt = $('#textcounter').text(140 - counter).css('color','red');
      //alert(' tweet content is too long');
      $(".errordisplay p").addClass("errormessage")
      $(".errormessage").empty().append("<p>tweet content is too long</p>");
    }
  })

  $( "#composebt" ).click(function(event) {
    $( "section.box" ).slideToggle( "slow", function() {
      $(this).find(".tweettextarea").focus().select()  
    });
  });

  // function errorcheck(typeoferror){

  // }

  $(".tweetsubmit").on('click', function( event ) {
    console.log('apples')
    // $( ".tweettextarea" ).focus().select().addClass("errormessage") 
  })
})
  
    // $( "#other").click(function() {
    //   $( "#target" ).select();
    // });



// function errorcheck(typeoferror){
//   while (typeoferror === 'toomany'){
//     $(".errordisplay p").append( "exceeded max value of 140 char" )
//   }
//   else if(typeoferror === 'toofew'){
//   $(".errordisplay p").append( "can't post an empty tweet")
//   }
//   else {
//     $(".errordisplay p").append("")
//   }
// }
