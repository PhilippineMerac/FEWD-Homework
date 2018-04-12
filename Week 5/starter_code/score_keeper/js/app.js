var score = 0

$("#zero").click(zeroButton)
$("#add5").click(addFive)
$("#add10").click(addTen)
$("#sub1").click(subtract1)

function zeroButton() {
	//zero out the score variable 
	score = 0

	// zero out of the value in the #result h1
	$("#result").html(score)

	// console.log("zero button clicked")
}

function addFive (){
	// add five to the current score
	score = score + 5 
	// output the value in the #result h1
	$("#result").html(score)
}

function addTen (){
	// add ten to the current score
	score = score + 10
	// output the value in the #result h1
	$("#result").html(score)
}

function subtract1 (){
	// substrack 1 from the current score
	score = score - 1
	// output the value in the #result h1
	$("#result").html(score)
}