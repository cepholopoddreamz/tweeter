$(document).ready(function() {
  var text$ = document.getElementById('hittest');
  console.log('hellllllllooooooo');

  $(text$).on('focus', function( event ) {
    //event.target.style.background = 'pink';  
    console.log('inside');
  });


  $(text$).on('blur', function( event ) {
    //event.target.style.background = ''; 
    console.log('outside');   
  });

  $(text$).on('keyup', function( event ) {
    //event.target.style.background = ''; 
    //console.log(event.target.value);
    //console.log(this);

    var counter = event.target.value.length;

    if (counter <= 140) {
      //let countertxt = document.getElementById("textcounter").innerHTML = counter;
      $('#textcounter').text(counter);
      //return countertxt;
      console.log('allowed letters')
    }
    else {
      //$(text$).css('color','red')  
      let countertxt = $('#textcounter').text(140 - counter).css('color','red') 
      //return countertxt;
      console.log('toomanyletters')

      //let countertxt = document.getElementById("textcounter").innerHTML = 140 - counter;
      //countertxt.style.color = #FF0000;
      //this.style.color = #FF0000;
      //document.getElementById("textcounter")
      //.style.color = #FF0000;
    }

    
    
    // //console.log(counter);
    // let countertxt = document.getElementById("textcounter").innerHTML = counter
  
    // //console.log('a'); 
  });


});



// function textCounter(field, cnt, maxlimit) {         
//   var cntfield = document.getElementById("textcounter")   
//   if (field.value.length > maxlimit) // if too long...trim it!
//     field.value = field.value.substring(0, maxlimit);
//     // otherwise, update 'characters left' counter
//   else
//     cntfield.value = maxlimit - field.value.length;
// }






// document.addEventListener("dblclick", (event) => {
//   console.log(event);
//   "clientX: " + event.clientX +
//   " - clientY: " + event.clientY;
// });