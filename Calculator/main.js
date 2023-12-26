let inputBox = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button =>{
    button.addEventListener("click" , (e)=>{
        if(e.target.innerHTML === "="){
            string = eval(string);  //The eval() function evaluates JavaScript code represented as a string and returns its completion value.
            inputBox.value = string ;
        }else if(e.target.innerHTML === "AC" || e.target.value === undefined){
           string = "";
           inputBox.value = string ;
        }else if(e.target.innerHTML === "DEL"){
            string = string.substring(0 , string.length - 1);
            inputBox.value = string;
        }else{
            string += e.target.innerHTML ;
            inputBox.value = string ;
        }
    })
})