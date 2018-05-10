/* First Slide */
$('.button.top').click(function(){
  $('.one').removeClass('hide').addClass('show');
});

$('.button.top').click(function(){
  $('.two').removeClass('show').addClass('hide');
});

$('.button.top').click(function(){
  $('.three').removeClass('show').addClass('hide');
});

$('.button.top').click(function(){
  $('.top').addClass('red');
});
$('.button.top').click(function(){
  $('.middle').removeClass('orange');
});
$('.button.top').click(function(){
  $('.bottom').removeClass('blue');
});

/* Second Slide */
$('.button.middle').click(function(){
  $('.one').removeClass('show').addClass('hide');
});

$('.button.middle').click(function(){
  $('.two').removeClass('hide').addClass('show');
});

$('.button.middle').click(function(){
  $('.three').removeClass('show').addClass('hide');
});
$('.button.middle').click(function(){
  $('.middle').removeClass('red blue').addClass('orange');
});

$('.button.middle').click(function(){
  $('.top').removeClass('red');
});
$('.button.middle').click(function(){
  $('.middle').addClass('orange');
});
$('.button.middle').click(function(){
  $('.bottom').removeClass('blue');
});


/* Third Slide */
$('.button.bottom').click(function(){
  $('.one').removeClass('show').addClass('hide');
});

$('.button.bottom').click(function(){
  $('.two').removeClass('show').addClass('hide');
});

$('.button.bottom').click(function(){
  $('.three').removeClass('hide').addClass('show');
});
$('.button.bottom').click(function(){
  $('.bottom').removeClass('red orange').addClass('blue');
});

$('.button.bottom').click(function(){
  $('.top').removeClass('red');
});
$('.button.bottom').click(function(){
  $('.middle').removeClass('orange');
});
$('.button.bottom').click(function(){
  $('.bottom').addClass('blue');
});