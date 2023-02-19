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
        acceptData();
        //modal close
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();
        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })();
    }
}

/**
*local data storage using array
 */
let data = [];
let acceptData = () => {
    data.push({
        text: textInput.value,
        date: dateInput.value,
        description: textarea.value,

    });
    localStorage.setItem("data",JSON.stringify(data));
    console.log(data);
}
