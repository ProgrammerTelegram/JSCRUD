let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");


/**
 * form validations
 */

form.addEventListener("submit", (e) => {
   e.preventDefault();
   formValidations();
});

let formValidations = () => {
    if(textInput.value === ""){
        console.log("Fail form");
        msg.innerHTML = "Task cannot be blank";
    } else {
        console.log("success");
        msg.innerHTML = "";
    }
}
