// =========================
// Custom Popup Controls
// =========================
function showPopup(msg) {
    const popup = document.getElementById("popup");
    document.getElementById("popup-text").textContent = msg;
    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}



// =========================
// Main Email Function
// =========================
function send_mail(event) {
    if (event) event.preventDefault();

    const btn = document.querySelector('.cta-btn');

    // Disable button instantly (prevents double click)
    lockButton(btn, "Sending...");

    const subject = document.getElementById("subject").value.trim();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // -------------------------
    // Validation Check
    // -------------------------
    if (!name || !email || !message || !subject) {

        showPopup("Fill all the fields.");

        setTimeout(() => {
            unlockButton(btn);
        }, 5000);

        return;
    }

    // -------------------------
    // Send Email
    // -------------------------
    emailjs.send("service_6w88c3i", "template_mob4dza", {
        user_subject: subject,
        user_name: name,
        user_email: email,
        user_message: message
    })
    .then(() => {
        showPopup("Message sent successfully!");

        setTimeout(() => {

            // Clear form
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";

            unlockButton(btn);

        }, 5000);
    })
    .catch((error) => {
        console.log(error);

        showPopup("Failed to send message.");

        setTimeout(() => {
            unlockButton(btn);
        }, 5000);
    });
}



// =========================
// Button Lock Helpers
// =========================
function lockButton(btn, text) {
    btn.disabled = true;
    btn.style.opacity = "0.6";
    btn.style.cursor = "not-allowed";
    btn.innerText = text;
}

function unlockButton(btn) {
    btn.disabled = false;
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    btn.innerText = "Send Message";
}

