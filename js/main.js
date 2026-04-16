/* ==========================================================================
   DIAMBA SAGRADA — Main JavaScript
   Handles: navigation, scroll animations, accordion, multi-step form,
            page-load animations, and intersection observer reveals.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. NAVIGATION — Scroll-based background + Mobile menu
     ------------------------------------------------------------------------ */
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav__toggle');
  const navMobile = document.querySelector('.nav__mobile');

  // Add background on scroll
  function handleNavScroll() {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // Run on load

  // Mobile menu toggle
  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMobile.classList.contains('nav__mobile--open');
      navMobile.classList.toggle('nav__mobile--open');
      navToggle.setAttribute('aria-expanded', String(!isOpen));
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close menu when a link is clicked
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMobile.classList.remove('nav__mobile--open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ------------------------------------------------------------------------
     2. SCROLL REVEAL — IntersectionObserver for .reveal elements
     ------------------------------------------------------------------------ */
  function initScrollReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    // Check for reduced motion preference
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      reveals.forEach(function (el) {
        el.classList.add('reveal--visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ------------------------------------------------------------------------
     3. PAGE-LOAD ANIMATION — Staggered fade-in on hero elements
     ------------------------------------------------------------------------ */
  function initPageLoad() {
    var elements = document.querySelectorAll('.page-enter');
    if (!elements.length) return;

    // Small delay to let browser paint first
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        elements.forEach(function (el) {
          el.classList.add('page-enter--visible');
        });
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. SMOOTH SCROLL — For anchor links
     ------------------------------------------------------------------------ */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;

        var target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          var offset = nav ? nav.offsetHeight : 0;
          var top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. ACCORDION — FAQ expand/collapse
     ------------------------------------------------------------------------ */
  function initAccordion() {
    var items = document.querySelectorAll('.accordion__item');
    if (!items.length) return;

    items.forEach(function (item) {
      var trigger = item.querySelector('.accordion__trigger');
      var content = item.querySelector('.accordion__content');
      if (!trigger || !content) return;

      trigger.addEventListener('click', function () {
        var isOpen = item.classList.contains('accordion__item--open');

        // Close all other items
        items.forEach(function (otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove('accordion__item--open');
            var otherContent = otherItem.querySelector('.accordion__content');
            if (otherContent) otherContent.style.maxHeight = '0';
            var otherTrigger = otherItem.querySelector('.accordion__trigger');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('accordion__item--open');
          content.style.maxHeight = '0';
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('accordion__item--open');
          content.style.maxHeight = content.scrollHeight + 'px';
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     6. MULTI-STEP FORM — Membership form with validation
     ------------------------------------------------------------------------ */
  function initMultiStepForm() {
    var form = document.getElementById('membership-form');
    if (!form) return;

    var steps = form.querySelectorAll('.form-step');
    var stepperSteps = document.querySelectorAll('.stepper__step');
    var progressBar = document.querySelector('.stepper__progress');
    var currentStep = 0;

    // Show the first step
    updateStep(0);

    // Next buttons
    form.querySelectorAll('[data-action="next"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (validateStep(currentStep)) {
          goToStep(currentStep + 1);
        }
      });
    });

    // Previous buttons
    form.querySelectorAll('[data-action="prev"]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        goToStep(currentStep - 1);
      });
    });

    // Form submission
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateStep(currentStep)) {
        // Show confirmation
        goToStep(steps.length - 1);
      }
    });

    function goToStep(index) {
      if (index < 0 || index >= steps.length) return;

      // Animate out current step
      steps[currentStep].classList.add('form-step--exit-left');
      steps[currentStep].classList.remove('form-step--active');

      currentStep = index;
      updateStep(currentStep);
    }

    function updateStep(index) {
      // Update form steps visibility
      steps.forEach(function (step, i) {
        step.classList.remove('form-step--active', 'form-step--exit-left');
        if (i === index) {
          step.classList.add('form-step--active');
        }
      });

      // Update stepper
      stepperSteps.forEach(function (step, i) {
        step.classList.remove('stepper__step--active', 'stepper__step--done');
        if (i < index) {
          step.classList.add('stepper__step--done');
        } else if (i === index) {
          step.classList.add('stepper__step--active');
        }
      });

      // Update progress bar
      if (progressBar) {
        var progress = (index / (steps.length - 1)) * 100;
        progressBar.style.width = progress + '%';
      }

      // Scroll to form top on step change
      var formTop = form.getBoundingClientRect().top + window.scrollY - 120;
      if (index > 0) {
        window.scrollTo({ top: formTop, behavior: 'smooth' });
      }
    }

    function validateStep(stepIndex) {
      var step = steps[stepIndex];
      var inputs = step.querySelectorAll('[required]');
      var valid = true;

      inputs.forEach(function (input) {
        var errorEl = input.parentElement.querySelector('.form-error');
        if (!input.value.trim()) {
          valid = false;
          input.classList.add('form-input--error');
          if (errorEl) errorEl.classList.add('form-error--visible');
        } else {
          input.classList.remove('form-input--error');
          if (errorEl) errorEl.classList.remove('form-error--visible');
        }

        // Email validation
        if (input.type === 'email' && input.value.trim()) {
          var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value.trim())) {
            valid = false;
            input.classList.add('form-input--error');
            if (errorEl) {
              errorEl.textContent = 'Insira um e-mail válido.';
              errorEl.classList.add('form-error--visible');
            }
          }
        }
      });

      // Check consent checkbox on last real step
      var checkbox = step.querySelector('input[type="checkbox"][required]');
      if (checkbox && !checkbox.checked) {
        valid = false;
        var checkError = step.querySelector('.form-error');
        if (checkError) checkError.classList.add('form-error--visible');
      }

      return valid;
    }

    // Real-time validation: clear errors on input
    form.querySelectorAll('.form-input').forEach(function (input) {
      input.addEventListener('input', function () {
        this.classList.remove('form-input--error');
        var errorEl = this.parentElement.querySelector('.form-error');
        if (errorEl) errorEl.classList.remove('form-error--visible');
      });
    });
  }

  /* ------------------------------------------------------------------------
     7. FILE UPLOAD — Visual feedback for file selection
     ------------------------------------------------------------------------ */
  function initFileUpload() {
    var uploads = document.querySelectorAll('.file-upload');
    uploads.forEach(function (upload) {
      var input = upload.querySelector('input[type="file"]');
      var textEl = upload.querySelector('.file-upload__text');

      if (!input || !textEl) return;

      upload.addEventListener('click', function () {
        input.click();
      });

      // Allow keyboard activation
      upload.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          input.click();
        }
      });

      input.addEventListener('change', function () {
        if (input.files.length > 0) {
          textEl.innerHTML = '<strong>' + input.files[0].name + '</strong> selecionado';
          upload.style.borderColor = 'var(--color-green-deep)';
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     8. INIT — Run all modules on DOMContentLoaded
     ------------------------------------------------------------------------ */
  document.addEventListener('DOMContentLoaded', function () {
    initPageLoad();
    initScrollReveal();
    initSmoothScroll();
    initAccordion();
    initMultiStepForm();
    initFileUpload();
  });
})();
