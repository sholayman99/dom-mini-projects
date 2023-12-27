const submitBtn = document.querySelector("#submit-btn");
const nameErr = document.querySelector("#nameError");
const emailErr = document.querySelector("#emailError");
const passErr = document.querySelector("#passError");


submitBtn.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(validateName() && validateEmail() && validatePassword()){
        alert('Created account successfully')
    }
})


function validateName() {
    const name = document.querySelector("#name").value;

    if(name.length === 0){
        nameErr.innerHTML ="Name is Required";
        return false;
    }
    if(!name.match(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)){
        nameErr.innerHTML ="Full Name is Required";
        return false;
    }
        nameErr.innerHTML="";
        return true

}

function validateEmail() {
    const email = document.querySelector("#email").value;

    if(email.length === 0){
        emailErr.innerHTML ="Email is Required";
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailErr.innerHTML ="Enter Valid Email";
        return false;
    }

    emailErr.innerHTML="";
    return true


}

function validatePassword() {
    const pass = document.querySelector("#password").value;

    if(pass.length === 0){
        passErr.innerHTML ="Password is required";
        return false;
    }
    if(!pass.match( /^(?=.*[a-zA-Z]).{8,}$/)){
        passErr.innerHTML ="password should be at least 8 characters long and contains one letter";
        return false;
    }

    passErr.innerHTML="";
    return true

}