function validate() {
    let name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        subject = document.getElementById("subject").value,
        message = document.getElementById("textArea").value,
        error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    let text;
    if (name.length < 3) {
        text = `<i class="fa-solid fa-circle-exclamation"></i> Please Enter Valid Name`;
        console.log("error name");
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = `<i class="fa-solid fa-circle-exclamation"></i> Please Enter Valid Email`;
        error_message.innerHTML = text;
        return false;
    }
    if (subject.length < 5) {
        text = `<i class="fa-solid fa-circle-exclamation" ></i> Please Enter Correct Subject`;
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 10) {
        text = `<i class="fa-solid fa-circle-exclamation"></i> Your Message Is Too Short`;
        error_message.innerHTML = text;
        return false;
    }
    alert(`Thank you ${name}. Your message ${subject}, ${message} was sent successfully. You will get response to your Email: ${email}.`);
    return true;
}
