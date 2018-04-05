document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
  alert("You clicked gray!")
}

function switchWhite() {
  document.body.style.backgroundColor = 'pink';
  document.body.style.color = 'black';
}
