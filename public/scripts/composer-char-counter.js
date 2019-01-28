$(document).ready(function(){
  var text$ = $('.tweettextarea');

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
    $(this).find("#titlespace2").animate({opacity: 0.5}, 300);
    $(this).find("#tweetfooter").animate({opacity: 0.5}, 300);
    $(this).find('h2.tweetresponse').animate({opacity: 1.0}, 300);
  });

  $(document).on('mouseenter', ".box2",
  function(){
    $(this).find("#titlespace2").animate({opacity: 1.0}, 300);
    $(this).find("#tweetfooter").animate({opacity: 1.0}, 300);
    $(this).find('h2.tweetresponse').animate({opacity: 1.0}, 300);
  });

  $(document).on('mouseenter','p',
  function(){
    $(this).css("color", "red");
  });
  
  $(document).on('mouseleave','p',
  function(){
    $(this).css("color", "black");
  });

  $(text$).on('keyup', function( event ){
    var counter = (event.target.value.length);
    if (counter <= 140) {
      $('#textcounter').text(140 - counter).css('color','black');
    } else {
      let countertxt = $('#textcounter').text(140 - counter).css('color','red');
    }
  });

  $("#composebt").click(function(event){
    $( "section.box" ).slideToggle( "slow", function() {
      $(this).find(".tweettextarea").focus().select()  
    });
  });

  $(".tweetsubmit").on('click', function( event ) {
    console.log('apples')
  });
});