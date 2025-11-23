function send_mail(event) {
    if (event) event.preventDefault(); // Stop form auto-submit

    const btn = document.querySelector('.cta-btn');

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

        // Wait 5 seconds, then re-enable button
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

        // Wait 5 seconds after alert
        setTimeout(() => {
            // Clear form
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

        // Wait 5 seconds before re-enabling
        setTimeout(() => {
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.style.cursor = "pointer";
            btn.innerText = "Send Message";
        }, 5000);
    });
}