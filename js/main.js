
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "919650624441"; // apna WhatsApp number yaha daalo

    let whatsappMessage = `New Contact Form Lead:%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Subject: ${subject}%0A
Message: ${message}`;

    let url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(url, "_blank");
});
