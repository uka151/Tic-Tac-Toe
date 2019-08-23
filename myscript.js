
console.log('Hello');


// Restart Game button
var restart=document.querySelector("#btn");

//Grab All the squares

var squares=document.querySelectorAll('td');


// CLear all the squares

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent='';
  }

}
restart.addEventListener('click',clearBoard);
// Check  the square marker
var cellOne =document.querySelector('#one')

cellOne.addEventListener('click',function() {
  if(cellOne.textContent===''){
    cellOne.textContent='X';
  }else if(cellOne.textContent==='X'){
    cellOne.textContent='O';
  }else {
    cellOne.textContent='';
  }
})

var celltwo =document.querySelector('#two')

celltwo.addEventListener('click',function() {
  if(celltwo.textContent===''){
    celltwo.textContent='X';
  }else if(celltwo.textContent==='X'){
    celltwo.textContent='O';
  }else {
    celltwo.textContent='';
  }
})
var cellthree =document.querySelector('#three')

cellthree.addEventListener('click',function() {
  if(cellthree.textContent===''){
    cellthree.textContent='X';
  }else if(cellthree.textContent==='X'){
    cellthree.textContent='O';
  }else {
    cellthree.textContent='';
  }
})
var cellfour =document.querySelector('#four')

cellfour.addEventListener('click',function() {
  if(cellfour.textContent===''){
    cellfour.textContent='X';
  }else if(cellfour.textContent==='X'){
    cellfour.textContent='O';
  }else {
    cellfour.textContent='';
  }
})

var cellf =document.querySelector('#five')

cellf.addEventListener('click',function() {
  if(cellf.textContent===''){
    cellf.textContent='X';
  }else if(cellf.textContent==='X'){
    cellf.textContent='O';
  }else {
    cellf.textContent='';
  }
})
var cells =document.querySelector('#six')

cells.addEventListener('click',function() {
  if(cells.textContent===''){
    cells.textContent='X';
  }else if(cells.textContent==='X'){
    cells.textContent='O';
  }else {
    cells.textContent='';
  }
})
var cellSeven =document.querySelector('#seven')

cellSeven.addEventListener('click',function() {
  if(cellSeven.textContent===''){
    cellSeven.textContent='X';
  }else if(cellSeven.textContent==='X'){
    cellSeven.textContent='O';
  }else {
    cellSeven.textContent='';
  }
})
var cellEight =document.querySelector('#eight')

cellEight.addEventListener('click',function() {
  if(cellEight.textContent===''){
    cellEight.textContent='X';
  }else if(cellEight.textContent==='X'){
    cellEight.textContent='O';
  }else {
    cellEight.textContent='';
  }
})
var cellnine =document.querySelector('#nine')

cellnine.addEventListener('click',function() {
  if(cellnine.textContent===''){
    cellnine.textContent='X';
  }else if(cellnine.textContent==='X'){
    cellnine.textContent='O';
  }else {
    cellnine.textContent='';
  }
})
