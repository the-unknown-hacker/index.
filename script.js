function send_mail(event) {
    if (event) event.preventDefault(); // Stop form auto-submit
    
    const btn = document.querySelector('.cta-btn'); // MUST be here before using it

    // Disable button immediately
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
    btn.innerText = "Sending...";

    const subject = document.getElementById("subject").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!name || !email || !message || !subject) {
        alert("Fill all the fields.");

        setTimeout(() => {
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
            btn.innerText = "Send Message";
        }, 5000);

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

        setTimeout(() => {
            // Clear the form
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";

            // Re-enable button
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
            btn.innerText = "Send Message";
        }, 5000);

    })
    .catch((error) => {
        console.log(error);
        alert("Failed to send message.");

        setTimeout(() => {
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
            btn.innerText = "Send Message";
        }, 5000);
    });
}
