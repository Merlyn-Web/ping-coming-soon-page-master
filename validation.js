function valide() {
    let inputEmail = document.getElementById("inputtext").value;
    let outAlert = document.getElementById("message");
    let email = document.querySelector('#inputtext');

    if (inputEmail.match(/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/)) {
        let alert = "Email is valid ✔";
        outAlert.innerHTML = alert;
        outAlert.classList.toggle('valide');
        email.classList.toggle('inputvalide');
    } else {
        let alert2 = "Please enter your valid email address";
        outAlert.innerHTML = alert2;
        outAlert.classList.toggle('message');
        email.classList.toggle('error');
        inputEmail.push("ggg")
    }
}