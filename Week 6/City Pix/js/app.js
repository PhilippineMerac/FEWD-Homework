$(document).ready(function(){



    function updateCity(){
        // grab the value in the city text box, store it as the city variable:
        var city = $("#city-type").val()

        // output city to the js console:
        console.log(city)

        // if city is "la", change the backgrond to images/la.jpg:
        if(city == "la"){
            $("body").attr("class", "la")
        }

        if(city == "nyc"){
            $("body").attr("class", "nyc")
        }

        if(city == "sf"){
            $("body").attr("class", "sf")
        }

        if(city == "austin"){
            $("body").attr("class", "austin")
        }

        if(city == "paris"){
            $("body").attr("class", "paris")
        }

        if(city == "sydney"){
            $("body").attr("class", "sydney")
        }

        if(city == "tokyo"){
            $("body").attr("class", "tokyo")
        }

        if(city == "london"){
            $("body").attr("class", "london")
        }

        // blank out the text box:
        $("#city-type").val("")

        // prevent the default action after form submit (page reload):
        event.preventDefault()
    }

    // Listen for a form submit event (enter or click button) and run updateCity when submitted:
    $("#city-form").submit(updateCity)

    })