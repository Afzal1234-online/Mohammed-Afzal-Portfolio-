document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Afzal's 3D Artist Portfolio!");

    // IntersectionObserver to detect when section is in view
    const sections = document.querySelectorAll("section");

    const options = {
        root: null,
        threshold: 0.3  // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Add class when section is visible
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section); // Observe each section
    });

    // Back-to-top button functionality
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block"; // Show button after scrolling down
        } else {
            backToTopButton.style.display = "none"; // Hide button if near top
        }
    });

    // Smooth scroll to the top
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});