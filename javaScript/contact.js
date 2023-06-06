function submitContact() {
    document.getElementById("btn").onclick('click', function () {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("textArea").value;
        let error = document.getElementById("error");
        if (name.value.length < 2 || name.value == '' || email.value == '' || email.value.indexOf('@') == -1) {
            return error.innerHTML = `<div><p><b>There was an Error.</b><br> Please check that all fields are filled correctly.</p></div>`;
        } else {
            return document.getElementById("success").innerHTML = `<p>Name: ${name.value}<br>Email adress: ${email.value}<br>Subject: ${subject.value} <br>Message: ${message.value}<br> Sent successfully!</p>`;
        }
    });
}
submitContact();
