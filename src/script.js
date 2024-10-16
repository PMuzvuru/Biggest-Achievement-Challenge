// Function to scroll to a specific section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* Dark Theme Button */
function darkTheme() {
  document.body.classList.toggle("dark");
}
let themeButton = document.querySelector(".dark-mode-button");
themeButton.addEventListener("click", darkTheme);

/* Carousel Zoom Effect */
const images = document.querySelectorAll(".carousel img");
const fullImageModal = document.querySelector(".full-image-modal");
const fullImage = document.querySelector(".full-image-modal img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    fullImage.src = image.src;
    fullImageModal.classList.add("show");
  });
});

fullImageModal.addEventListener("click", () => {
  fullImageModal.classList.remove("show");
});

/* Form Email sent */
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the user's name
  const name = document.getElementById("name-input").value;

  // Create the greeting message
  const greeting = "Hello, " + name + "! Thank you for your time.";

  // Update the success message content
  successMessage.innerHTML = `
    <h2>Message Simulated!</h2>
     <p>${greeting}</p>
    <p>You've successfully reached the end of my SheCodes challenge! While this form doesn't send real emails (yet!), you can find me at the links below.</p>
  `;

  // Reset and hide the form
  form.reset();
  form.style.display = "none";

  // Show the success message
  successMessage.style.display = "block";
});
