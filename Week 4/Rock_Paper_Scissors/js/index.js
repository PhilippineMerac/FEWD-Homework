console.log("js loaded")

$("#weblink").click(webLinkClicked)

$("#rock").click (rockButtonClicked)

$("#paper").click (paperButtonClicked)

$("#scissors").click (scissorsButtonClicked)

function rockButtonClicked(){
    console.log("You chose rock")
    console.log("Computer player chooses rock")
    console.log("It's a tie")
    $("body").css("background-color","yellow")
    $("#rock").fadeOut()
     $("#paper").fadeIn()
}

function paperButtonClicked(){
    console.log("You chose paper")
    console.log("Computer player chooses rock")
    console.log("You win!!!")
    $("body").css("background-color","pink")
    $("#paper").fadeOut()
    $("#rock").fadeIn()
}

function scissorsButtonClicked(){
    console.log("You chose scissors")
    console.log("Computer player chooses rock")
    console.log("You lose")
    $("body").css("background-color","blue")

}

function webLinkClicked(){
    alert("Woohoo you clicked the secret link!")
}