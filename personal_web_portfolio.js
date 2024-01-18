document.addEventListener("DOMContentLoaded", function () {
  // Navigation scrolling
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    });
  });

  // Typing animation for the hero section
  const heroText = document.querySelector(".hero .content h1 span");
  const texts = ["Developer", "Designer", "Innovator"];
  let index = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < texts[index].length) {
      heroText.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 150);
    } else {
      setTimeout(erase, 1500);
    }
  }

  function erase() {
    if (charIndex > 0) {
      heroText.textContent = texts[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, 50);
    } else {
      index = (index + 1) % texts.length;
      setTimeout(type, 500);
    }
  }

  // Start typing animation
  type();

  // Show email validation message on submit
  const newsletterForm = document.querySelector(".newslatter form");
  const emailInput = document.getElementById("mail");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
      alert("Please enter a valid email address.");
    } else {
      alert(`Thank you for subscribing!`);
      // You can add further logic for handling the subscription
    }
  });
});
