let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if(textInput.value === ""){
        msg.innerHTML = "Task cannot be blank";
    } else {
        console.log('success');
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

let acceptData = () => {
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;
    console.log(data);
    createTasks();

};

let createTasks = () => {
tasks.innerHTML += `
  <div>
            <span class="fw-bold">${data.text}</span>
            <span class="fw-bold small">${data.date}</span>
            <p>${data.description}</p>
            <span class="options">
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </span>
        </div>
`;
};



