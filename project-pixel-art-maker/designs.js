// Select input
var canvas = document.getElementById('pixelCanvas');
const btn = document.getElementById("btn");
var sizePicker = document.getElementById("sizePicker");
const btnErease = document.getElementById("btnErease");
var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');
let isErease = false;


function makeGrid(height, width) {
  rowCell(height, width); 
}

sizePicker.addEventListener("submit", function(evt) {
  evt.preventDefault();
  while (canvas.hasChildNodes()) {
    canvas.removeChild(canvas.lastChild);
  }
  makeGrid(height.value, width.value);
});

//Make Row/Cell
function rowCell(height, width){

  canvas.innerHTML = ''; 
  for (i = 0; i < height; i++) {
    var row = document.createElement('tr'); 
    canvas.appendChild(row); 
    for (j = 0; j < width; j++) { 
      var cell = document.createElement('td');
      row.appendChild(cell); 
      cell.addEventListener('click', function(event) { 
        if(isErease){
          var white = '#f9f6f6';
          event.target.style.backgroundColor = white; 
        }else{
          var color = document.getElementById('colorPicker');
          event.target.style.backgroundColor = color.value;
        }   
      });
    }
  }
}

//Handle Text Erease/Draw Button
btn.addEventListener("click", function(){
  const erease = document.querySelector('#btn').textContent;
  if(erease == "Erease"){
    document.querySelector('#btn').textContent = "Draw";
    isErease = true;

  }else if(erease == "Draw"){
    document.querySelector('#btn').textContent = "Erease";
    isErease = false;
  }
});

//Erease button
btnErease.addEventListener("click", function(){
  var text = 'Warning! \n' +
  'Are your sure you want to Start Over?.\n\n' +
  'Press OK to Continue. \nPress Cancel to go back.';

  if(confirm(text)){
    while (canvas.hasChildNodes()) {
      canvas.innerHTML ='';
    }   
  }else{
    return false;
  }
});
