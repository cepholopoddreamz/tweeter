$(document).ready(function() {
  var text$ = document.getElementById('hittest');
  console.log('hellllllllooooooo');

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