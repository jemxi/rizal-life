// Smooth scrolling and animations
document.addEventListener("DOMContentLoaded", () => {
  // Initialize animations
  initScrollAnimations()
  initTopicCardAnimations()
  initRizalPortraitAnimation()

  // Add event listeners
  addEventListeners()
})

// Scroll to topics section
function scrollToTopics() {
  const topicsSection = document.getElementById("topics")
  if (topicsSection) {
    topicsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Show about modal (placeholder)
function showAbout() {
  alert(
    "This is an educational website about Dr. José Rizal, developed for Our Lady of the Sacred Heart College of Guimba, Inc. in compliance with Republic Act 1425.",
  )
}

// Initialize scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated")
      }
    })
  }, observerOptions)

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(".animate-on-scroll")
  animatedElements.forEach((el) => observer.observe(el))

  // Add animation classes to content cards
  const contentCards = document.querySelectorAll(".content-card, .topic-card, .about-item")
  contentCards.forEach((card, index) => {
    card.classList.add("animate-on-scroll")
    card.style.animationDelay = `${index * 0.1}s`
  })
}

// Topic card hover animations
function initTopicCardAnimations() {
  const topicCards = document.querySelectorAll(".topic-card")

  topicCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
      this.style.transition = "all 0.3s ease"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
}

// Rizal portrait animation
function initRizalPortraitAnimation() {
  const rizalImg = document.querySelector(".rizal-img")
  if (rizalImg) {
    // Add a subtle rotation on hover
    rizalImg.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) rotate(2deg)"
      this.style.transition = "all 0.3s ease"
    })

    rizalImg.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)"
    })
  }
}

// Add various event listeners
function addEventListeners() {
  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add loading animation to buttons
  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (!this.classList.contains("loading")) {
        this.classList.add("loading")
        setTimeout(() => {
          this.classList.remove("loading")
        }, 1000)
      }
    })
  })

  // Timeline animation
  const timelineItems = document.querySelectorAll(".timeline-item")
  timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`
    item.classList.add("fade-in")
  })

  // Siblings grid animation
  const siblingCards = document.querySelectorAll(".sibling-card")
  siblingCards.forEach((card, index) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
      this.style.transition = "all 0.2s ease"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })

  // Achievement cards animation
  const achievementCards = document.querySelectorAll(".achievement-card")
  achievementCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
    card.classList.add("slide-in-left")
  })

  // University cards stagger animation
  const universityCards = document.querySelectorAll(".university-card")
  universityCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`
    card.classList.add("fade-in")
  })

  // Work cards animation
  const workCards = document.querySelectorAll(".work-card")
  workCards.forEach((card, index) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)"
      this.style.transition = "all 0.3s ease"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
    })
  })
}

// Page transition effects
function initPageTransitions() {
  // Add fade-in effect to page content
  const pageContent = document.querySelector(".page-content")
  if (pageContent) {
    pageContent.style.opacity = "0"
    pageContent.style.transform = "translateY(20px)"

    setTimeout(() => {
      pageContent.style.transition = "all 0.6s ease"
      pageContent.style.opacity = "1"
      pageContent.style.transform = "translateY(0)"
    }, 100)
  }
}

// Initialize page transitions when DOM is loaded
document.addEventListener("DOMContentLoaded", initPageTransitions)

// Parallax effect for hero section
function initParallaxEffect() {
  const hero = document.querySelector(".hero")
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      hero.style.transform = `translateY(${rate}px)`
    })
  }
}

// Initialize parallax effect
document.addEventListener("DOMContentLoaded", initParallaxEffect)

// Typing animation for hero title
function initTypingAnimation() {
  const heroTitle = document.querySelector(".hero-title")
  if (heroTitle) {
    const text = heroTitle.textContent
    heroTitle.textContent = ""
    heroTitle.style.borderRight = "2px solid #fbbf24"

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 50)
      } else {
        setTimeout(() => {
          heroTitle.style.borderRight = "none"
        }, 1000)
      }
    }

    setTimeout(typeWriter, 1000)
  }
}

// Counter animation for stats
function initCounterAnimation() {
  const statNumbers = document.querySelectorAll(".stat-number")

  const animateCounter = (element, target, duration = 2000) => {
    let start = 0
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        element.textContent = target
        clearInterval(timer)
      } else {
        element.textContent = Math.floor(start)
      }
    }, 16)
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target.textContent
        if (!isNaN(target)) {
          animateCounter(entry.target, Number.parseInt(target))
        }
        observer.unobserve(entry.target)
      }
    })
  })

  statNumbers.forEach((stat) => observer.observe(stat))
}

// Initialize counter animation
document.addEventListener("DOMContentLoaded", initCounterAnimation)

// Progress bar animation for timeline
function initTimelineProgress() {
  const timelineItems = document.querySelectorAll(".timeline-item")

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateX(0)"
        }, index * 200)
      }
    })
  })

  timelineItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateX(-50px)"
    item.style.transition = "all 0.6s ease"
    observer.observe(item)
  })
}

// Initialize timeline progress
document.addEventListener("DOMContentLoaded", initTimelineProgress)

// Add ripple effect to buttons
function addRippleEffect() {
  const buttons = document.querySelectorAll(".btn")

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
}

// Add CSS for ripple effect
const rippleCSS = `
.btn {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`

// Add ripple CSS to document
const style = document.createElement("style")
style.textContent = rippleCSS
document.head.appendChild(style)

// Initialize ripple effect
document.addEventListener("DOMContentLoaded", addRippleEffect)

// Smooth reveal animation for content sections
function initContentReveal() {
  const sections = document.querySelectorAll(".content-card, .about-item")

  const revealSection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }

  const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.15,
  })

  sections.forEach((section, index) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(50px)"
    section.style.transition = `all 0.6s ease ${index * 0.1}s`
    sectionObserver.observe(section)
  })
}

// Initialize content reveal
document.addEventListener("DOMContentLoaded", initContentReveal)
