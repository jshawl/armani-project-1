$(document).ready(function(){
  console.log('SGo'); // nice! remove debug code before submitting in the future
//Clicking start displays first question and 4 potential answers
  $('.start').click(function(e) {
    e.preventDefault();
    $('fieldset').hide('slow');
    $('#counter').show('slow');
    $('h2').show('slow');
    $('input').show('slow');
// Restart button hides question and answers
  $(".reset").on("click", function(){
     location.reload();//this works, but can you think of a way to reload the data without an entire page refresh?
    })
// Array of questions and answers
var tQuestions = {
  question1: ['What plant is Tequila distilled from?'], answers1: ['Maguey', 'Agave Americana', 'Agave Azul', 'Agave Attenuata'],
  question2: ['In which Mexican State is the town of Tequila located?'], answers2: ['Jalisco', 'Chihuahua', 'Durango', 'Oaxaca'],
  question3: ['What is the traditional way to serve Tequila?'], answers3: ['Lime & Salt', 'Sangrita', 'Orange & Cinnamon', 'Out of Your Navel with High Fives'],
  question4: ['The Agave plant is also used to make what?'], answers4: ['Lotions', 'Textiles', 'Cosmetics', 'Sweeteners'],
  question5: ['Tequila was first served out of a...'], answers5: ['1 oz. Shot Glass', '2 oz. Shot Glass', 'Bulls Horn', 'Out of Your Navel with High Fives'],
  question6: ['"Worms" are found in which type of Tequila?'], answers6: ['Ordinario', 'Mezcal', 'Corazon', 'Cabeza'],
  question7: ['The Blue Agave is closley related to which other plant?'], answers7: ['Lily','Cacti', 'Aloe', 'Asparagus'],
}
// the above looks great! I recommend an array of question/answer objects rather than an object containing key value pairs
// of question/answer pairs. This will allow you or the user to create more questions if they wanted to in the future / 
// prevent you from having to hardcode-reference questions by their number.

$('.q1').html('<h2>'+tQuestions.question1+'</h2>')
  for (i = 0; i < tQuestions.answers1.length; ++i) {
  var answer = tQuestions.answers1[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 2 ){
    btn.addClass("correct");
    btn.addClass('shake');
  }
  $(".q1").append(btn)
  }
  $("button").on("click", function(){
// Click event to indicate the correct answer was chosen
    if($(this).hasClass("correct")){
// Click event to refresh question AND answer array after answer is selected
      tQuestions.question = tQuestions.question1 + 1;
// Assign a point for each correct answer
      $('#counter').html(function(i, val) { return +val+1 });
      alert("Nice!")
// Click event to indicate the incorrect answer was chosen
    }else{
      $( "button" ).shake;
  }

$('.q1').html('<h2>'+tQuestions.question2+'</h2>')
  for (i = 0; i < tQuestions.answers2.length; ++i) {
  var answer = tQuestions.answers2[i] // please indent code correctly.
  var btn = $('<button>'+answer+'</button>')
  if( i == 0 ){
    btn.addClass("correct");
  }
  $(".q1").append(btn)
  }
  $("button").on("click", function(){
    if($(this).hasClass("correct")){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 }); // nice!
      alert("Another!")
    }else{
      $( "button" ).shake();
}

$('.q1').html('<h2>'+tQuestions.question3+'</h2>') // how does this line not execute immediately?
for (i = 0; i < tQuestions.answers3.length; ++i) {
  var answer = tQuestions.answers3[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 1 ){
      btn.addClass("correct");
    }
    $(".q1").append(btn)
  }
  $("button").on("click", function(){
    if($(this).hasClass("correct")){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      alert("Party!")
    }else{
      $( "button" ).shake;
} // the code on 69 - 85 looks very similar to the above block - can you think of a way to combine their functionality?

$('.q1').html('<h2>'+tQuestions.question4+'</h2>')
for (i = 0; i < tQuestions.answers4.length; ++i) {
  var answer = tQuestions.answers4[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 3 ){
      btn.addClass("correct"); // maybe you can store which one is correct in your above questions object
      // this would allow you to shuffle the answers each time someone plays the game.
    }
    $(".q1").append(btn)
  }
  $("button").on("click", function(){
    if($(this).hasClass("correct")){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      alert("Maybe have a glass of water?")
    }else{
      $( "button" ).shake;
}

$('.q1').html('<h2>'+tQuestions.question5+'</h2>')
for (i = 0; i < tQuestions.answers5.length; ++i) {
  var answer = tQuestions.answers5[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 2 ){
      btn.addClass('correct');
    }
    $(".q1").append(btn)
  }
  $('button').on('click', function(){
    if($(this).hasClass("correct")){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      alert("Let's get you an Uber...")
    }else{
      $( "button" ).shake;
}

$('.q1').html('<h2>'+tQuestions.question6+'</h2>')
for (i = 0; i < tQuestions.answers6.length; ++i) {
  var answer = tQuestions.answers6[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 1 ){
      btn.addClass("correct");
    }
    $(".q1").append(btn)
  }
  $('button').on('click', function(){
    if($(this).hasClass("correct")){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      alert("WHERE ARE YOUR PANTS?!")
    }else{
      $( "button" ).shake;
}

$('.q1').html('<h2>'+tQuestions.question7+'</h2>')
for (i = 0; i < tQuestions.answers7.length; ++i) {
  var answer = tQuestions.answers7[i]
  var btn = $('<button>'+answer+'</button>')
  if( i == 0 ){
      btn.addClass("correct");
    }
    $(".q1").append(btn)
  }
  $('button').on('click', function(){
    if($(this).hasClass('correct')){
      tQuestions.question = tQuestions.question + 1;
      $('#counter').html(function(i, val) { return +val+1 });
      alert("F it, let's go again!")
    }else{
      $( "button" ).shake;;
}})
})
})
})
})
})
})
})
})
// please indent code correctly
