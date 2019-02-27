$(document).ready(function() {
  var text$ = $(".tweettextarea");

  $(document).on("mouseenter", "span.rightside",
  function(){
    $(this).animate({opacity: 1.0}, 300);
  });
  $(document).on("mouseleave", "span.rightside",
  function(){
    $(this).animate({opacity: 0.0}, 300); 
  });

  $(document).on("mouseleave", ".box2",
  function(){
    $(this).find("#titlespace2").animate({opacity: 0.5}, 300);
    $(this).find("#tweetfooter").animate({opacity: 0.5}, 300);
    $(this).find("h2.tweetresponse").animate({opacity: 1.0}, 300);
  });

  $(document).on("mouseenter", ".box2",
  function(){
    $(this).find("#titlespace2").animate({opacity: 1.0}, 300);
    $(this).find("#tweetfooter").animate({opacity: 1.0}, 300);
    $(this).find("h2.tweetresponse").animate({opacity: 1.0}, 300);
  });

  $(document).on("mouseenter","p", function() {
    $(this).css("color", "red");
  });
  
  $(document).on("mouseleave","p", function() {
    $(this).css("color", "black");
  });

  //key up accounts for every finished letter, rather then key down 

  $(text$).on("keyup", function( event ) {
    var counter = (event.target.value.length);
    if (counter <= 140) {
      $("#textcounter").text(140 - counter).css("color","black");
    } else {
      let countertxt = $("#textcounter").text(140 - counter).css("color","red");
    }
  });

  //appear/disappear of compose tweet area box at top

  $("#composebt").click(function(event) {
    $( "section.box" ).slideToggle( "slow", function() {
      $(this).find(".tweettextarea").focus().select()  
    });
  });

  $("span.headerbuttons").mouseenter(function() {
    $(this).animate({opacity: 1.0}, 300);
  });

  $("span.headerbuttons").mouseleave(function() {
    $(this).animate({opacity: 0.7}, 300);
  });

  $(".tweetsubmit").on("click", function( event ) {

  });
});