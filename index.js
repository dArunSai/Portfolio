var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Close mobile menu if open
    document.getElementById("mobile-menu").classList.add("hidden");

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });

      // Update active nav link
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
});

// Highlight active navigation link based on scroll position
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 100) {
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

// Animate skill bars when they come into view
const skillBars = document.querySelectorAll(".skill-bar");

const animateSkillBars = () => {
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      bar.style.width = bar.style.width;
    }
  });
};

window.addEventListener("scroll", animateSkillBars);
window.addEventListener("load", animateSkillBars);

// Add fade-in animation to elements when they come into view
const fadeElements = document.querySelectorAll(".fade-in");

const checkFadeElements = () => {
  fadeElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", checkFadeElements);
window.addEventListener("load", checkFadeElements);

/*

Projects 



          Project 3 
          <div
            class="project-card bg-white rounded-xl shadow-md overflow-hidden transition duration-500"
          >
            <div class="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Social Media Dashboard"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">Social Media Dashboard</h3>
              <p class="text-gray-600 mb-4">
                Analytics dashboard for tracking social media metrics with
                real-time data visualization.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                  >React</span
                >
                <span
                  class="bg-blue-400 text-white text-xs px-3 py-1 rounded-full"
                  >TypeScript</span
                >
                <span
                  class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full"
                  >D3.js</span
                >
              </div>
              <div class="flex space-x-3">
                <a href="#" class="text-blue-600 hover:text-blue-800"
                  >Live Demo</a
                >
                <a href="#" class="text-gray-600 hover:text-gray-800"
                  >Source Code</a
                >
              </div>
            </div>
          </div>
          
          
          
          

           Project 4 
          <div
            class="project-card bg-white rounded-xl shadow-md overflow-hidden transition duration-500"
          >
            <div class="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
                alt="Learning Platform"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">
                Online Learning Platform
              </h3>
              <p class="text-gray-600 mb-4">
                An interactive platform for online courses with video streaming,
                quizzes, and progress tracking.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                  >Next.js</span
                >
                <span
                  class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full"
                  >Stripe</span
                >
                <span
                  class="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full"
                  >PostgreSQL</span
                >
              </div>
              <div class="flex space-x-3">
                <a href="#" class="text-blue-600 hover:text-blue-800"
                  >Live Demo</a
                >
                <a href="#" class="text-gray-600 hover:text-gray-800"
                  >Source Code</a
                >
              </div>
            </div>
          </div>

          

           Project 5 
          <div
            class="project-card bg-white rounded-xl shadow-md overflow-hidden transition duration-500"
          >
            <div class="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="CRM System"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">CRM System</h3>
              <p class="text-gray-600 mb-4">
                Customer relationship management tool with lead tracking,
                analytics, and reporting features.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                  >Angular</span
                >
                <span
                  class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full"
                  >NestJS</span
                >
                <span
                  class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full"
                  >MySQL</span
                >
              </div>
              <div class="flex space-x-3">
                <a href="#" class="text-blue-600 hover:text-blue-800"
                  >Live Demo</a
                >
                <a href="#" class="text-gray-600 hover:text-gray-800"
                  >Source Code</a
                >
              </div>
            </div>
          </div>

          

          Project 6 
          <div
            class="project-card bg-white rounded-xl shadow-md overflow-hidden transition duration-500"
          >
            <div class="h-48 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Team Collaboration"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">
                Team Collaboration Tool
              </h3>
              <p class="text-gray-600 mb-4">
                Real-time collaboration platform with chat, video conferencing,
                and document sharing.
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span
                  class="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                  >React</span
                >
                <span
                  class="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full"
                  >Socket.io</span
                >
                <span
                  class="bg-blue-400 text-white text-xs px-3 py-1 rounded-full"
                  >WebRTC</span
                >
              </div>
              <div class="flex space-x-3">
                <a href="#" class="text-blue-600 hover:text-blue-800"
                  >Live Demo</a
                >
                <a href="#" class="text-gray-600 hover:text-gray-800"
                  >Source Code</a
                >
              </div>
            </div>
          </div>
        </div>


*/
