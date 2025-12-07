const myH1 =  document.getElementById("myH1")
const myButton= document.getElementById("myButton")
// myButton.classList.add("hover")
// myButton.classList.remove("enabled")

// myButton.addEventListener("mouseover",event=>{
//     event.target.classList.toggle("hover");
// })
// myButton.addEventListener("mouseout",event=>{
//     event.target.classList.toogle("hover");
// })
myH1.classList.add("enabled")
myButton.classList.add("enabled")

myButton.addEventListener("click",event=>{

if(event.target.classList.contains("disable")){
event.target.textContent+="😀"
}else{
        event.target.classList.replace("enabled","disable")
}



})
