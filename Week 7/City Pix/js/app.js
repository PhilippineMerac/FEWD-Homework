var cities = ["NYC", "SF", "LA", "ATX", "SYD","paris","london", "tokyo" ];
$(document).ready(function() {
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
    else if (city == 'paris') {
      $('body').attr('class','paris');
    }
    else if (city == 'london') {
      $('body').attr('class','london');
    }
    else if (city == 'tokyo') {
      $('body').attr('class','tokyo');
    }
  });
});