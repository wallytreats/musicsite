// var clickButton = document.getElementById('btn')
//
// clickButton.addEventListener('click', function(event){
//  var removeBtn = document.getElementById('btn')
//  var showSound = document.getElementById('sndcld')
//   removeBtn.style.disply('invisible')
//
// })

var toggle  = document.getElementById("btn");
var content = document.getElementById("sndcld");

toggle.addEventListener("click", function(){
  content.style.display = "block";
}, false);
