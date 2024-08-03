var Preloader = document.getElementById("loading");

    function myfunction() {
      // Increase the delay time as needed (e.g., 3000 milliseconds = 3 seconds)
      setTimeout(function() {
        Preloader.style.display = "none";
      }, 3000); // 3000 milliseconds delay
    }

    var Active = document.getElementById("Active");
    var activeBtn = Active.getElementsByClassName("active-btn");
    for (var i = 0; i < activeBtn.length; i++) {
      activeBtn[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
//   country image change

function updateCountryIcon() {
  const selectElement = document.getElementById("country");
  const selectedCountry = selectElement.value;
  const countryIcon = document.getElementById("country-icon");

  countryIcon.src = `/image/country/${selectedCountry}.svg`;
  countryIcon.alt = `${selectedCountry} Icon`;
}

// tab

// JavaScript to handle active tab and smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-2 a");

  // Smooth scrolling
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      // Scroll to the target section
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });

      // Update active class on navbar
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Set the first tab as active by default
  if (navLinks.length > 0) {
    navLinks[0].classList.add("active");
  }
});
// responsive navbar
document.getElementById("hamburger").addEventListener("click", function () {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }
  });
  

// fixed input field

document.addEventListener('DOMContentLoaded', () => {
    const inputCard = document.querySelector('.input-card');
    const eligibilityContent = document.querySelector('#eligibility-content');
    const doctorTeam = document.querySelector('.doctor-team');
  
    function handleScroll() {
      const eligibilityTop = eligibilityContent.getBoundingClientRect().top;
      const doctorTeamTop = doctorTeam.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
  
      // Check if the input card should be fixed
      if (eligibilityTop <= 0 && doctorTeamTop > viewportHeight) {
        inputCard.style.position = 'fixed';
        inputCard.style.top = '10%'; // Adjust this value as needed
      } else {
        inputCard.style.position = 'absolute';
        inputCard.style.top = '40%'; // Reset top position
      }
    }
  
    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);
  
    // Initial check in case of direct access or page load
    handleScroll();
  });

//   owl carousal

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  });

  
