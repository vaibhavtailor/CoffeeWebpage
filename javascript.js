// lets add a pop up onload
alert("Final Project!");

///button function to change Theme
function next(){
  document.getElementById('hidden').style.display='block';
}

//button function to change Theme
function theme(){
  var element = document.body;
   element.classList.toggle("dark-mode");
}

function show() {
  document.getElementById("dropdown").classList.toggle("show");
}

function change() {
  document.getElementById("color").style.backgroundColor = ("lightgreen");
}

function size() {
  document.getElementById("offer").style.color = ("red");
  document.getElementById("offer").style.fontSize = ("25px");
  document.getElementById("offer").style.display='block';
}
