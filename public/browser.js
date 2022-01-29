document.addEventListener("click", function(event) {
    // delete feature
    if(event.target.classList.contains("delete-me")) {
        if (confirm("Do you want to delete this item?")) {
            axios.post('/delete-item', {id: event.target.getAttribute("data-id")}).then(function() {
                event.target.parentElement.parentElement.remove()
            }).catch(function() {
                console.log("Something went wrong!")
            })
        }
    }
    
    // update feature
    if (event.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter new to-do:", event.target.parentElement.parentElement.querySelector(".item-text").innerHTML)
        if (userInput) {
            axios.post('/update-item', {text: userInput, id: event.target.getAttribute("data-id")}).then(function() {
                event.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput
            }).catch(function() {
                console.log("Something went wrong!")
            })
        }
    }
})