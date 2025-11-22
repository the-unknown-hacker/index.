function send_mail() {
    const subject = document.querySelector('input{placeholder="Subject"]').value;
    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const message = document.querySelector('textarea[placeholder="Message"]').value;

    if (!name || !email || !message || !subject) {
        alert("Fill all the fields.");
        return;
    }

    emailjs.send("service_6w88c3i", "template_mob4dza", 
        user_subject: subject,
        user_name: name,
        user_email: email,
        user_message: message
    })
    .then(() => {
        alert("Message sent successfully!");
    }, (error) => {
        alert("Failed to send message.");
        console.log(error);
    });
}
