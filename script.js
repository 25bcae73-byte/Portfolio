import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ1etNRoJHPheciw3MHRPSOyH_-EOIqqQ",
  authDomain: "portfolio-a11d9.firebaseapp.com",
  projectId: "portfolio-a11d9",
  storageBucket: "portfolio-a11d9.firebasestorage.app",
  messagingSenderId: "891859677064",
  appId: "1:891859677064:web:17605c293f2651c6f5943d",
  measurementId: "G-529F4ZYTB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Scroll to Contact
const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
}

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const submitBtn = this.querySelector("button[type='submit']");

  try {
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    await addDoc(collection(db, "Mahima_portfolio"), {
      name: name,
      email: email,
      message: message,
      timestamp: new Date()
    });

    alert("Message sent successfully!");
    this.reset();
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Error sending message. Please try again.");
  } finally {
    submitBtn.textContent = "Send Message";
    submitBtn.disabled = false;
  }
});

// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
