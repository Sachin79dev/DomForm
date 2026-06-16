const form = document.querySelector("form")
const field1 = document.querySelector("#name")
const field2 = document.querySelector("#email")
const users = document.querySelector(".users")
const btn = document.querySelector(".create")

let id = 0;
let editUserName = null;
let editUserEmail = null;


form.addEventListener('submit', (events) => {
    events.preventDefault()

    let name = field1.value
    let email = field2.value

    // Empty Avoid Condition
    if (name.trim() === "" && email.trim() === "") return


    // Edit Inputs Condition
    if (editUserName && editUserEmail) {
        editUserName.textContent = field1.value;
        editUserEmail.textContent = field2.value;
        form.reset()
        btn.textContent = "Create";
        btn.style.backgroundColor = "#396aff";
        return
    }

    id++;

    users.innerHTML += `<div class="user_card" id="${id}">
            <div class="img_box">
                <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User Image">
            </div>
            
            <div class="text">
                <h3>${name}</h3>
                <p>${email}</p>
            </div>

            <div class="actions">
                <button class="edit">Edit</button>
                <button class="del">Delete</button>
            </div>
        </div>`






    // Delete Funtionality
    const del = document.querySelectorAll(".del")

    del.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.closest(".user_card").remove();
        })
    })




    // Edit Functionality

    const edit = document.querySelectorAll(".edit")



    edit.forEach((editbtn) => {
        editbtn.addEventListener('click', () => {
            let userItems = editbtn.closest(".user_card");
            let userName = userItems.querySelector("h3");
            let userEmail = userItems.querySelector("p");


            field1.value = userName.textContent;
            field2.value = userEmail.textContent;

            editUserName = userName;
            editUserEmail = userEmail;

            btn.textContent = "Save";
            btn.style.backgroundColor = "#13b900";

        })
    })



    form.reset()
})


