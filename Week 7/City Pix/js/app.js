var cities = ["nyc", "sf", "LA", "austin", "sydney","paris", "tokyo", "london"];
$(document).ready(function(){
    for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value=" ' + cities[i] + ' ">' + cities[i] + '</option>');
  }

  $('form').on('change','#city-type',function(){
    var city = $('#city-type').val();
        // if city is "la", change the background to images/la.jpg:
        if(city == 'la'){
            $('body').attr('class', 'la')
        }
        else if(city == 'nyc'){
            $('body').attr('class', 'nyc')
        }
        else if(city == 'sf'){
            $('body').attr('class', 'sf')
        }
        else if(city == 'austin'){
            $('body').attr('class', 'austin')
        }
        else if(city == 'paris'){
            $('body').attr('class', 'paris')
        }
        else if(city == 'sydney'){
            $('body').attr('class', 'sydney')
        }
        else if(city == 'tokyo'){
            $('body').attr('class', 'tokyo')
        }
        else if(city == 'london'){
            $('body').attr('class', 'london')
        }
  });
});