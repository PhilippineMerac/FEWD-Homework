$(document).ready(function(){

	function updateCity() {
		// grab the value in the city text box, store it as city variable
		var city = $("city-type").val()
		

		console.log("city submitted")

		if (city=="la"){
		$("body").attr("class","la")
		}

		$("city-type").val("")

		// precent the defaulty action after form submit (page reload):
		event.preventDefault()
		// code goes here
	}

	$("#city-form").submit(updateCity)

})