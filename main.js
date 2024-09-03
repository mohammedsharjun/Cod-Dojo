document.addEventListener("DOMContentLoaded", function () {
    gsap.set(".img", { y: 500 });
    gsap.set(".loader-img", { x: 500 });
    gsap.set(".nav-item", { y: 25, opacity: 0 });
    gsap.set("h1, .item, footer", { y: 200 });

    const t1 = gsap.timeline({ delay: 0.5 });

    t1.to(".img", {
      y: 0,
      duration: 1.5,
      stagger: 0.05,
      ease: "power3.inOut",
    }).to(
      ".loader-img",
      {
        x: 0,
        duration: 3,
        ease: "power3.inOut",
      },
      "-=2.5"
    )
    .to(".img:not(#loader-logo)", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
    }, "-=1")
    
    .to(".loader", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1,
        ease: "power3.inOut",
    }, "-=0.5")

    .to(".nav-item, h1, footer, .item, section", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
    }, "-=0.5");
});

const card3 = document.querySelector("#card-3");
const toggleButton = document.querySelector("#togglebutton"); // Corrected selector
const cards = document.querySelectorAll(".card");
const toggleDiv = document.querySelector(".toggle");
const siteContent = document.querySelector(".site-content");
let isCardOpen = false;

card3.addEventListener("click", () => {
  if (!isCardOpen) {
    gsap.to(cards, {
      top: "0px",
      duration: 1,
      ease: "power4.inOut",
    });
    gsap.to(toggleDiv, {
      delay: 0.4,
      display: "flex",
      opacity: 1,
      duration: 0.4,
      ease: "power4.inOut",
    });
    gsap.to(siteContent, {
      filter: "blur(20px)", // Corrected closing parenthesis
      duration: 0.75,
      ease: "power4.inOut",
    });
    isCardOpen = true;
  }
});

toggleButton.addEventListener("click", () => {
  if (isCardOpen) {
    gsap.to("#card-1", {
      top: "0px",
      duration: 1,
      ease: "power4.inOut",
    });
    gsap.to("#card-2", { 
      top: "-100px",
      duration: 1,
      ease: "power4.inOut",
    });
    gsap.to("#card-3", { 
      top: "-200px",
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.to(toggleDiv, {
      delay: 0,
      display: "none",
      opacity: 0,
      duration: 0.4,
      ease: "power4.inOut",
    });

    gsap.to(siteContent, {
      filter: "blur(0px)",
      duration: 1,
      ease: "power4.inOut",
    });

    isCardOpen = false;
  }
});
