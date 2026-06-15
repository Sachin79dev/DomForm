const form = document.querySelector("form")
const field1 = document.querySelector("#name")
const field2 = document.querySelector("#email")
const users = document.querySelector(".users")



form.addEventListener('submit', (events) => {
    events.preventDefault()

    let name = field1.value
    let email = field2.value

    if (name.trim() === "" && email.trim() === "") return

    users.innerHTML += `<div class="user_card">
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


    form.reset()

    const del = document.querySelector(".del")

    // console.log(del);


    del.forEach((n) => {
        n.addEventListener('click', () => {
            users.innerHTML = ""
        })
    })

})


