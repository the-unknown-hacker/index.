function send_mail() {
    const btn = document.querySelector('.cta-btn');

    // Disable button immediately (no second click possible)
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
    btn.innerText = "Sending...";

    const subject = document.getElementById("subject").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message || !subject) {
        alert("Fill all the fields.");

        // Re-enable button ONLY when alert finishes
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
        btn.innerText = "Send Message";
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

        // Re-enable button ONLY after alert is done
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
        btn.innerText = "Send Message";
    })
    .catch((error) => {
        alert("Failed to send message.");
        console.log(error);

        // Re-enable button ONLY after alert is done
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.style.cursor = "pointer";
        btn.innerText = "Send Message";
    });
}
