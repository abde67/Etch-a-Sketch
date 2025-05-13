const reset=document.querySelector("#reset")
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



function numberOfsqure(){
 squreNumber=prompt("how many squre do you want?",16)
 if (isNaN(squreNumber)||squreNumber>100||squreNumber<=0) {
   alert("give me the number between 0-100")
  
 }
 else{
    
function createGrid(squreNumber){
const noofsqure=squreNumber**2;
const size =850/squreNumber;
for (let i = 0; i < noofsqure; i++) {
  const grid =document.createElement("div");
  grid.setAttribute("class", "pixel")
    
    grid.style.width=size+"px"
   grid.style.height=size+"px"
    
   grid.addEventListener("mouseover",()=>{
    grid.style.opacity=0.5;
    
    
            grid.style.backgroundColor = getRandomColor()   
  
    
    })
    container.appendChild(grid);


      reset.addEventListener("click",()=>{
  grid.style.backgroundColor="white"
})
} 

}
createGrid(squreNumber);

 }


}




   

