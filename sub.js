document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Retrieve form values
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs
        .send("service_igxdhdn", "template_3d3s4x5", params)
        .then(
            function (response) {
                alert("Message sent successfully!");
                console.log("SUCCESS", response);
            },
            function (error) {
                alert("Failed to send message. Please try again.");
                console.error("FAILED", error);
            }
        );
});
