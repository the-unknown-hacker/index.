function send_mail() {
    const btn = document.querySelector('.cta-btn');

    // Disable button for 2 seconds immediately
    btn.disabled = true;
    setTimeout(() => {
        btn.disabled = false;
    }, 2000);

    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
    btn.innerText = "Sending...";

    const subject = document.getElementById("subject").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message || !subject) {
        alert("Fill all the fields.");
        btn.innerText = "Send Message";
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
        return;
    }

    emailjs.send("service_6w88c3i", "template_mob4dza", {
        user_subject: subject,
        user_name: name,
        user_email: email,
        user_message: message
    })
    .then(() => {
        alert("Message sent successfully!");

        // Clear form
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

        btn.innerText = "Send Message";
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    })
    .catch((error) => {
        alert("Failed to send message.");
        console.log(error);

        btn.innerText = "Send Message";
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
    });
}
