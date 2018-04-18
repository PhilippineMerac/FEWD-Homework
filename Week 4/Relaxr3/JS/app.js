$(document).ready(function() {
  $('.readmore').click(function(){
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
    event.preventDefault();
  });

  $('.readless').click(function(){
    $('#show-this-on-click').slideUp();
    $('.readless').hide();
    $('.readmore').show();
    event.preventDefault();
  });

  $('.lireplus').click(function(){
    $('#montre-moi').slideDown();
    $('.lireplus').hide();
    $('.liremoins').show();
    event.preventDefault();
  });
  $('.liremoins').click(function(){
    $('#montre-moi').slideUp();
    $('.liremoins').hide();
    $('.lireplus').show();
    event.preventDefault();
  });


  $('.learnmore').click(function(){
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
    event.preventDefault();
  });
});
