$("#submit").click(compareClicked)

	function compareClicked (){
		var num1 =$("#a").val()
		var num2 =$("#b").val()

		console.log("num1 is " + num1)
		console.log("num2 is " + num2)

		If (num1 > num2)
		$("#comparison").html(">")

		If (num1 < num2)
		$("#comparison").html("<")

		If (num1 = num2)
		$("#comparison").html("=")

	}

	

