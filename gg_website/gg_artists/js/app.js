document.getElementsByTagName("li")[0].addEventListener("click",function(){
	if(!this.parentNode.getAttribute("class")){
		this.parentNode.setAttribute("class","slideDown");
	}
	else{
		this.parentNode.removeAttribute("class");
	}
});

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
});

$(document).ready(function() {
  $('.readmore2').click(function(){
    $('#show-this-on-click').slideDown();
    $('.readmore2').hide();
    $('.readless2').show();
    event.preventDefault();
  });

  $('.readless2').click(function(){
    $('#show-this-on-click').slideUp();
    $('.readless2').hide();
    $('.readmore2').show();
    event.preventDefault();
  });
});