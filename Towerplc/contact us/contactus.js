let form = document.getElementById("formm");
let fullname = document.getElementById("name");
let phone = document.getElementById("phonenumber");
let email = document.getElementById("email");
let message = document.getElementById("message");
let nameVal = document.getElementById("nameValid");
let nameInval = document.getElementById("nameInvalid");
let numVal = document.getElementById("numValid");
let numInval = document.getElementById("numInvalid");
let msgVal = document.getElementById("msgValid");
let msgInval = document.getElementById("msgInvalid");
let emailVal = document.getElementById("emailValid");
let emailInval = document.getElementById("emailInvalid");
// let valid = document.querySelectorAll(".valid");
// let invalid = document.querySelectorAll(".invalid");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
// })
// e.preventDefault();

fullname.addEventListener("keyup", () => {
    let name = fullname.value;
    // let regex = 
    // if(name==null ||name == 0){
    //     alert("Name can not be blanked");
    //     return false;
    // }
    if (name.match(/[a-zA-Z]/)){
        nameInval.style.display = "none";
        nameVal.style.display = "block";
        nameVal.textContent = "valid";
    }
    if(name.match(/[!-\/]|[:-@]|[\[-`]|[\{-~}]]|[0-9]|\s/)) {
        nameInval.style.display = "block";
        nameInval.textContent = "invalid";
        nameVal.style.display = "none";
    }
    if(name.length < 3 || name.length >= 22) {
        nameInval.style.display = "block";
        nameInval.textContent = "invalid";
        nameVal.style.display = "none";
    }
})

//phone.mathch(/[a-z]/)

email.addEventListener("keyup", () => {

    //     /^[A-Za-z]\|{0-10}/)
    let formEmail = email.value;
    if( formEmail.match(/([a-zA-Z])([!-\/]|[:-@]|[\[-`]|[\{-~}]{1,2})/) ){
        emailVal.style.display="block"
        emailInval.style.display="none"
    } else{
        emailInval.style.display="block"
        emailVal.style.display="none"
    }
})

phone.addEventListener("keyup", () => {
    let phoneNumber = phone.value;
    if(phoneNumber.match (/([0-9])(\-{2,4})?|\+{1,1}/)) {
        numVal.style.display = "block";
        numInval.style.display = "none";
    }
if(phoneNumber.match(/[!-\*/]|[\.-\/]|[:-@]|[\[-`]|[\{-~}]]|\s|[a-zA-Z]/)){
        numInval.style.display = "block";
        numVal.style.display = "none";
    }
if(phoneNumber.length < 11) {
    numInval.style.display = "block";
    numVal.style.display = "none";
}
})

message.addEventListener("keyup", ()=>{
    let message = message.value;
    if(message.match (/^([A-Za-z]|[0-9]{5,100})$/)){
        msgVal.style.display = "block";
        msgInval.style.display = "none";
    }
    else{
        msgInval.style.display = "block";
        msgInval.textContent= "message has exceed 100"
        msgVal.style.display = "none";
    }
})