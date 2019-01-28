$(document).ready(function() {
  var text$ = $('.tweettextarea');
  console.log('oranges');

  // $('.box2').find("#titlespace2").animate({opacity: 0.7}, 300);
  // $('.box2').find("#tweetfooter").animate({opacity: 0.7}, 300);
  // $('.box2').find('h2.tweetresponse').animate({opacity: 1.0}, 300);


  $(document).on('mouseenter', "span.rightside",
  function(){
      $(this).animate({opacity: 1.0}, 300);
  });

  $(document).on('mouseleave', "span.rightside",
  function(){
      $(this).animate({opacity: 0.0}, 300);
    
  });
 

  $(document).on('mouseleave', ".box2",
  function(){
    //console.log('entering')
    $(this).find("#titlespace2").animate({opacity: 0.7}, 300);
    $(this).find("#tweetfooter").animate({opacity: 0.7}, 300);
    $(this).find('h2.tweetresponse').animate({opacity: 1.0}, 300);
  });

  $(document).on('mouseenter', ".box2",
  function(){
    //console.log('exiting')
    $(this).find("#titlespace2").animate({opacity: 1.0}, 300);
    $(this).find("#tweetfooter").animate({opacity: 1.0}, 300);
    $(this).find('h2.tweetresponse').animate({opacity: 1.0}, 300);
  
  });

  // $("article.box2").on('focus', function( event ) {
  //   console.log('hovering over box2');

  

  $(document).on('mouseenter','p',
  function(){
    $(this).css("color", "red");
  }
);
$(document).on('mouseleave','p',
  function(){
    $(this).css("color", "black");
  }
);

  // $("article.box2").hover(function(){
  //   console.log('hovering')
  //   $('#titlespace2').animate({opacity: 1.0}, 300);
  //   $('#tweetfooter').animate({opacity: 1.0}, 300);
  //   $('h2.tweetresponse').animate({opacity: 1.0}, 300);

  //   // $(this).animate({opacity: 1.0}, 300);
  //   // $(h2.tweetresponse).animate({opacity: 1.0}, 300);
  // });

  // $("article.box2").mouseleave(function(){
  //   console.log('mouse leave')
  //   $('#titlespace2').animate({opacity: 0.4}, 300);
  //   $('#tweetfooter').animate({opacity: 0.4}, 300);
  //   $('h2.tweetresponse').animate({opacity: 1.0}, 300);
  // });


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
    var counter = (event.target.value.length);
    if (counter <= 140) {
      $('#textcounter').text(140 - counter).css('color','black');
    } else {
      let countertxt = $('#textcounter').text(140 - counter).css('color','red');
    }
  })

  $( "#composebt" ).click(function(event) {
    $( "section.box" ).slideToggle( "slow", function() {
      $(this).find(".tweettextarea").focus().select()  
    });
  });

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
