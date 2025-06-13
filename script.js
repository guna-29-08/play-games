document.getElementById("email-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_25ohw1w", "template_6hcvn4d", this)
    .then(() => {
      alert("Email sent successfully!");
    })
    .catch((error) => {
      alert("Failed to send email: " + JSON.stringify(error));
    });
});
