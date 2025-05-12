
const container=document.querySelector("#container");
const noof=document.querySelector("#noof");
function getrandomInt(max){
    return Math.floor(Math.random()*max);
}

function getRandomColor(){
    const redValue = getrandomInt(256)
    const greenValue = getrandomInt(256)
    const blueValue = getrandomInt(256)
  return `rgb(${redValue},${greenValue},${blueValue})`
}


function createGrid(squreNumber){
const noofsqure=squreNumber**2;
const size =960/squreNumber;
for (let i = 0; i < noofsqure; i++) {
  const grid =document.createElement("div");
  grid.setAttribute("class", "pixel")

    grid.style.width=size+"px"
   grid.style.height=size+"px"

   grid.addEventListener("mouseover",()=>{
    grid.style.backgroundColor = getRandomColor()   
   })
    container.appendChild(grid);
} }
createGrid(5);
