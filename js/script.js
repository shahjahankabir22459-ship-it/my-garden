    gsap.registerPlugin(ScrollTrigger);

    document.addEventListener("DOMContentLoaded", function () {
      
      // =========================================================================
      // 1. MOBILE MENU TOGGLER & CLOSE BUTTON LOGIC
      // =========================================================================
      const hamburgerBtn = document.getElementById("hamburgerBtn");
      const closeMenuBtn = document.getElementById("closeMenuBtn");
      const mobileMenu = document.getElementById("mobileMenu");
      const mobileLinks = document.querySelectorAll(".mobile-link");

      function toggleMenu() {
        hamburgerBtn.classList.toggle("active");
        mobileMenu.classList.toggle("open");
        document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "auto";
      }

      hamburgerBtn.addEventListener("click", toggleMenu);
      closeMenuBtn.addEventListener("click", toggleMenu);

      mobileLinks.forEach(link => {
        link.addEventListener("click", toggleMenu);
      });

      // =========================================================================
      // 2. ACTIVE NAVIGATION HIGHLIGHT ON SCROLL
      // =========================================================================
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");

      window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (window.pageYOffset >= sectionTop - 160) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      });

      // =========================================================================
      // 3. PLANTS CATEGORY FILTER INTERACTION
      // =========================================================================
      const filterBtns = document.querySelectorAll(".filter-btn");
      const plantCards = document.querySelectorAll(".plant-card");

      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          filterBtns.forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          const filterValue = btn.getAttribute("data-filter");

          plantCards.forEach((card) => {
            if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
              card.style.display = "flex";
              gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.4 });
            } else {
              card.style.display = "none";
            }
          });
          
          // Refresh GSAP ScrollTrigger after dynamic layout update
          ScrollTrigger.refresh();
        });
      });

      // =========================================================================
      // 4. ACCURATE GSAP SCROLLTRIGGER ANIMATIONS
      // =========================================================================
      
      // Hero Section Animations
      gsap.from(".about-text", {
        duration: 1,
        y: 40,
        opacity: 0,
        ease: "power3.out"
      });

      gsap.from(".hero-card-preview", {
        duration: 1.2,
        x: 40,
        opacity: 1.0,
        delay: 0.2,
        ease: "power3.out"
      });

      // Section Titles Reveal
      gsap.utils.toArray(".section-title, .section-tag, .section-subtitle").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none"
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out"
        });
      });

      // Section 2: Explore Featured Plants Grid Trigger
      ScrollTrigger.batch(".plant-card", {
        start: "top 85%",
        toggleActions: "play none none none",
        onEnter: (batch) => gsap.fromTo(batch, 
          { opacity: 0, y: 45 }, 
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power2.out" }
        )
      });

      // Section 3: Gallery Trigger
      ScrollTrigger.batch(".gallery-item", {
        start: "top 85%",
        toggleActions: "play none none none",
        onEnter: (batch) => gsap.fromTo(batch,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.4)" }
        )
      });

      // Section 4: Nurturing Healthy Plants (Care Guide) Cards Trigger
      ScrollTrigger.batch(".care-card", {
        start: "top 85%",
        toggleActions: "play none none none",
        onEnter: (batch) => gsap.fromTo(batch,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.75, stagger: 0.14, ease: "power2.out" }
        )
      });

      // Section 5: Garden Analytics (Tips & Stats) Grid Trigger
      gsap.from(".tip-box", {
        scrollTrigger: {
          trigger: ".tip-box",
          start: "top 85%",
          toggleActions: "play none none none"
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      ScrollTrigger.batch(".stat-card", {
        start: "top 88%",
        toggleActions: "play none none none",
        onEnter: (batch) => gsap.fromTo(batch,
          { opacity: 0, scale: 0.9, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.65, stagger: 0.1, ease: "back.out(1.2)" }
        )
      });

      // Section 6: Contact Form Trigger
      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });

      // Recalculate ScrollTrigger offsets once images complete loading
      window.addEventListener("load", () => {
        ScrollTrigger.refresh();
      });
    });

    // =========================================================================
    // 5. HELPER FUNCTIONS & FORM SUBMISSION
    // =========================================================================
    function handleFormSubmit(e) {
      e.preventDefault();
      const modal = document.getElementById("modalAlert");
      modal.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully.`;
      modal.style.display = "block";
      document.getElementById("contactForm").reset();

      setTimeout(() => {
        modal.style.display = "none";
      }, 4000);
    }

    function openPlantModal(name, scientific, detail) {
      const modal = document.getElementById("modalAlert");
      modal.innerHTML = `<i class="fa-solid fa-leaf"></i> <b>${name}</b> (<i>${scientific}</i>): ${detail}`;
      modal.style.display = "block";

      setTimeout(() => {
        modal.style.display = "none";
      }, 5000);
    }
