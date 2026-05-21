/* ==========================================================================
   STEM Abacus Academy Woraiyur - Interactive Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. Floating Header Scrolled Effect --- */
  const header = document.getElementById('main-header');
  
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Trigger once on load


  /* --- 2. Mobile Responsive Menu Toggle --- */
  const mobileToggle = document.getElementById('btn-mobile-menu-toggle');
  const navMenu = document.getElementById('navigation-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMobileMenu = () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  mobileToggle.addEventListener('click', toggleMobileMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });


  /* --- 3. Active Nav Link Highlighter --- */
  const sections = document.querySelectorAll('section');

  const highlightNavigation = () => {
    let scrollPosition = window.scrollY + 100; // offset for sticky header

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavigation);


  /* --- 4. Interactive Level Advisor Calculator --- */
  const calculateBtn = document.getElementById('btn-calculate-advisor');
  const ageSelect = document.getElementById('select-advisor-age');
  const courseSelect = document.getElementById('select-advisor-course');
  const resultBox = document.getElementById('div-advisor-result');
  
  const resCourse = document.getElementById('lbl-result-course');
  const resLevel = document.getElementById('lbl-result-level');
  const resDuration = document.getElementById('lbl-result-duration');
  const resFrequency = document.getElementById('lbl-result-frequency');
  const resFees = document.getElementById('lbl-result-fees');
  const selectInquireBtn = document.getElementById('btn-result-inquire');
  const mainInterestSelect = document.getElementById('select-interest-course');

  calculateBtn.addEventListener('click', () => {
    const age = parseInt(ageSelect.value);
    const course = courseSelect.value;
    
    let recommendation = {
      title: '',
      level: '',
      duration: '',
      frequency: '',
      fees: ''
    };

    // Calculation Logic
    recommendation.fees = 'Discuss on inquiry / Assessment';
    if (course === 'abacus') {
      if (age <= 5) {
        recommendation.title = 'Junior Abacus (Smart Start)';
        recommendation.level = 'Level 1 (Basic Beads & Number Recognition)';
        recommendation.duration = '3 to 4 Months (Total 4 Levels)';
        recommendation.frequency = '2 classes/week (1 hour each)';
      } else if (age >= 6 && age <= 9) {
        recommendation.title = 'Primary Abacus (Brain Spark)';
        recommendation.level = 'Level 1 (Direct Addition & Subtraction)';
        recommendation.duration = '3 Months per Level (Total 8 Levels)';
        recommendation.frequency = '1 class/week (2 hours) - Weekend Batch';
      } else {
        recommendation.title = 'Senior Abacus (Memory Master)';
        recommendation.level = 'Level 1 (Fast Mental Math & Visualization)';
        recommendation.duration = '3 Months per Level (Total 8 Levels)';
        recommendation.frequency = '1 class/week (2 hours) - Weekend Batch';
      }
    } 
    else if (course === 'speedmath') {
      if (age < 10) {
        recommendation.title = 'Foundational Speed Maths (Preparatory)';
        recommendation.level = 'Intro Level (Mental addition shortcuts & finger counting)';
        recommendation.duration = '2 Months';
        recommendation.frequency = '2 classes/week (1 hour each)';
      } else {
        recommendation.title = 'Vedic & Senior Speed Maths';
        recommendation.level = 'Level 1 (Vedic Sutras for multiplication & rapid squares)';
        recommendation.duration = '3 Months (Total 3 Levels)';
        recommendation.frequency = '1 class/week (2 hours)';
      }
    } 
    else if (course === 'phonics') {
      if (age <= 5) {
        recommendation.title = 'Phonics Junior (Foundation)';
        recommendation.level = 'Level 1 (44 Letter sounds, short vowels & initial blending)';
        recommendation.duration = '4 Months';
        recommendation.frequency = '2 classes/week (1 hour each)';
      } else if (age >= 6 && age <= 8) {
        recommendation.title = 'Phonics Senior (Digraphs)';
        recommendation.level = 'Level 2 (Digraphs, vowel teams, tricky sight words & reading fluency)';
        recommendation.duration = '4 Months';
        recommendation.frequency = '2 classes/week (1 hour each)';
      } else {
        recommendation.title = 'Advanced English Reading & Vocabulary';
        recommendation.level = 'Spelling patterns, prefix/suffix and grammar syntax';
        recommendation.duration = '3 Months';
        recommendation.frequency = '1 class/week (2 hours)';
      }
    } 
    else if (course === 'handwriting') {
      if (age <= 5) {
        recommendation.title = 'Strokes & Grip Alignment';
        recommendation.level = 'Foundation level (Pre-writing strokes, pencil grip alignment)';
        recommendation.duration = '2 Months';
        recommendation.frequency = '2 classes/week (1 hour each)';
      } else {
        recommendation.title = 'Print & Cursive Legibility';
        recommendation.level = 'Print legibility or Cursive flow alignment';
        recommendation.duration = '3 Months';
        recommendation.frequency = '2 classes/week (1 hour each)';
      }
    }

    // Display values
    resCourse.textContent = recommendation.title;
    resLevel.textContent = recommendation.level;
    resDuration.textContent = recommendation.duration;
    resFrequency.textContent = recommendation.frequency;
    if (resFees) resFees.textContent = recommendation.fees;

    // Show result card
    resultBox.style.display = 'block';
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Action button inside calculator result
  selectInquireBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const courseValue = courseSelect.value;
    
    // Auto-select course in the registration form
    if (mainInterestSelect) {
      mainInterestSelect.value = courseValue;
    }

    // Scroll to inquiry section
    const inquirySection = document.getElementById('inquiry-section');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  });


  /* --- 5. Inquiry Registration Form Simulator --- */
  const inquiryForm = document.getElementById('form-inquiry-registration');
  const inquirySuccessOverlay = document.getElementById('div-inquiry-success');
  const inquirySummary = document.getElementById('div-inquiry-summary');
  const closeInquirySuccessBtn = document.getElementById('btn-close-inquiry-success');
  const submitInquiryBtn = document.getElementById('btn-submit-inquiry');

  inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Disable button & show spinner
    submitInquiryBtn.disabled = true;
    submitInquiryBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';

    // Retrieve input values
    const childName = document.getElementById('input-child-name').value;
    const childAge = document.getElementById('input-child-age').value;
    const parentName = document.getElementById('input-parent-name').value;
    const contactPhone = document.getElementById('input-contact-phone').value;
    const interestCourse = mainInterestSelect.options[mainInterestSelect.selectedIndex].text;
    const classMode = document.getElementById('select-class-mode').value;

    // Simulate Network API call
    setTimeout(() => {
      inquirySummary.innerHTML = `
        <p><span class="lbl">Student:</span> <span class="val">${childName} (${childAge} Years)</span></p>
        <p><span class="lbl">Parent:</span> <span class="val">${parentName}</span></p>
        <p><span class="lbl">Contact:</span> <span class="val">${contactPhone}</span></p>
        <p><span class="lbl">Program:</span> <span class="val">${interestCourse}</span></p>
        <p><span class="lbl">Batch Mode:</span> <span class="val" style="text-transform: capitalize;">${classMode}</span></p>
      `;

      // Animate success screen overlay
      inquirySuccessOverlay.classList.add('active');
    }, 1200);
  });

  // Close inquiry success card
  closeInquirySuccessBtn.addEventListener('click', () => {
    // Reset Form
    inquiryForm.reset();

    // Enable submit button
    submitInquiryBtn.disabled = false;
    submitInquiryBtn.innerHTML = 'Submit Application';

    // Slide out success card overlay
    inquirySuccessOverlay.classList.remove('active');
  });


  /* --- 6. Scroll Reveal Observer --- */
  const revealElements = document.querySelectorAll('.scroll-reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Reveal only once
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback support
    revealElements.forEach(el => el.classList.add('revealed'));
  }


  /* --- 7. Interactive Course Switcher Tabs --- */
  const courseTabs = document.querySelectorAll('.course-tab');
  const courseCards = document.querySelectorAll('.course-card');

  courseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      courseTabs.forEach(t => t.classList.remove('active'));
      // Add active class to clicked tab
      tab.classList.add('active');

      const selectedCourse = tab.getAttribute('data-course');

      courseCards.forEach(card => {
        if (selectedCourse === 'all') {
          card.style.display = 'flex';
          card.classList.remove('expanded');
        } else if (card.getAttribute('data-course-type') === selectedCourse) {
          card.style.display = 'flex';
          card.classList.add('expanded');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* --- 8. Student Welcome Kit Modal Dialog --- */
  const triggerWelcomeBtn = document.getElementById('btn-trigger-welcome-modal');
  const welcomeModal = document.getElementById('modal-welcome-kit');
  const closeWelcomeBtn = document.getElementById('btn-close-welcome-modal');
  const okWelcomeBtn = document.getElementById('btn-welcome-modal-ok');

  if (triggerWelcomeBtn && welcomeModal) {
    const openModal = () => {
      welcomeModal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent main body scrolling
    };

    const closeModal = () => {
      welcomeModal.classList.remove('active');
      document.body.style.overflow = ''; // Restore main body scrolling
    };

    triggerWelcomeBtn.addEventListener('click', openModal);
    if (closeWelcomeBtn) closeWelcomeBtn.addEventListener('click', closeModal);
    if (okWelcomeBtn) okWelcomeBtn.addEventListener('click', closeModal);

    // Close modal when clicking background overlay
    welcomeModal.addEventListener('click', (e) => {
      if (e.target === welcomeModal) {
        closeModal();
      }
    });
  }


  /* --- 9. Smooth Scroll for Step Timeline Buttons --- */
  const timelineScrollBtns = document.querySelectorAll('.scroll-to-btn');
  timelineScrollBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});
