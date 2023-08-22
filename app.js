const progress = document.getElementById("progress-line");
const circles = document.querySelectorAll(".circle");
const prev =document.getElementById("prev");
const next = document.getElementById("next");

let currenetActive = 1;

next.addEventListener("click", ()=>{
     currenetActive++;

     if(currenetActive>circles.length){
        currenetActive = circles.length;
     }
     update();

})
prev.addEventListener("click", ()=>{
    currenetActive--;
    if(currenetActive<1){
        currenetActive =1;
    }
    update();
     
})
function update(){
     circles.forEach((circle,index)=>{
        if(index<currenetActive){
            circle.classList.add("active");  
        }else{
            circle.classList.remove("active");
        }
     })
     const actives = document.querySelectorAll(".active");
    // console.log(((actives.length-1)/(circles.length-1))*100 +"%");
    progress.style.width = (((actives.length-1)/(circles.length-1))*100 +"%");
     if(currenetActive===1){
        prev.disabled = true;
     }else if(currenetActive===circles.length){
        next.disabled = true;
     }else{
        prev.disabled = false;
        next.disabled = false;
     }
}