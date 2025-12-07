let buttons = document.querySelectorAll(".myButtons");
console.log(buttons)

// buttons.forEach(button =>{
// button.style.backgroundColor = "green"
// button.textContent = "hello"
// })

// buttons.forEach(button =>{
//     button.addEventListener("click",event=>{
//         event.target.style.backgroundColor="Tomato"
//     })
// })

// buttons.forEach(button =>{
//     button.addEventListener("mouseover", event=>{
//       event.target.style.backgroundColor ="hsl(205,100%,40%)"
//     })
// })

// buttons.forEach(button =>{
//     button.addEventListener("mouseout", event=>{
//       event.target.style.backgroundColor ="hsla(205, 84%, 35%, 1.00)"
//     })
// })

// const newButton =  document.createElement("button");

// newButton.textContent ="Button 5";
// newButton.classList = "myButtons";

// document.body.appendChild(newButton)



// buttons = document.querySelectorAll(".myButtons")
// console.log(buttons)

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.remove();
         buttons =document.querySelectorAll("myButtons");
         console.log(buttons);
    })
})