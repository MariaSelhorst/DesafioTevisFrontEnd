fetch("http://localhost:8080/test")
    .then(response => response.text())
    .then(text => {
        let value = document.getElementsByClassName("message")[0]
        value.innerHTML = text
    })

function openModal(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('01').style.display = 'block';
}

function closeModal() {
    document.getElementById('01').style.display = 'none';
}
