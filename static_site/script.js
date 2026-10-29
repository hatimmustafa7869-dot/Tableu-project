/**
 * Health360 - Interactive Client Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // 2. Interactive Risk Calculator Simulator (on Index Page)
  const ageSlider = document.getElementById('calc-age');
  const bpSlider = document.getElementById('calc-bp');
  const glucoseSlider = document.getElementById('calc-glucose');
  const bmiSlider = document.getElementById('calc-bmi');
  const smokerCheck = document.getElementById('calc-smoker');
  const activityCheck = document.getElementById('calc-active');

  const ageVal = document.getElementById('val-age');
  const bpVal = document.getElementById('val-bp');
  const glucoseVal = document.getElementById('val-glucose');
  const bmiVal = document.getElementById('val-bmi');
  const riskBadge = document.getElementById('calc-risk-badge');
  const riskScoreText = document.getElementById('calc-score-text');

  function calculateRisk() {
    if (!ageSlider || !bpSlider || !glucoseSlider || !bmiSlider || !riskBadge) return;

    const age = parseInt(ageSlider.value, 10);
    const bp = parseInt(bpSlider.value, 10);
    const glucose = parseInt(glucoseSlider.value, 10);
    const bmi = parseFloat(bmiSlider.value);
    const isSmoker = smokerCheck ? smokerCheck.checked : false;
    const isActive = activityCheck ? activityCheck.checked : false;

    // Update displays
    if (ageVal) ageVal.textContent = age + ' yrs';
    if (bpVal) bpVal.textContent = bp + ' mmHg';
    if (glucoseVal) glucoseVal.textContent = glucose + ' mg/dL';
    if (bmiVal) bmiVal.textContent = bmi.toFixed(1);

    // Scoring heuristic (demonstrative based on Health360 cohort models)
    let score = 0;
    if (age > 45) score += 20;
    if (age > 60) score += 15;
    if (bp >= 130) score += 20;
    if (bp >= 140) score += 15;
    if (glucose >= 100) score += 15;
    if (glucose >= 126) score += 20;
    if (bmi >= 25) score += 10;
    if (bmi >= 30) score += 15;
    if (isSmoker) score += 20;
    if (isActive) score -= 15;
    if (score < 0) score = 0;

    // Set Risk Tier
    riskBadge.className = 'risk-level-badge';
    if (score < 35) {
      riskBadge.classList.add('risk-low');
      riskBadge.textContent = 'Low Observed Risk';
      if (riskScoreText) riskScoreText.textContent = `Estimated Index: ${score}/100 • Typical baseline indicators`;
    } else if (score < 70) {
      riskBadge.classList.add('risk-moderate');
      riskBadge.textContent = 'Moderate Risk';
      if (riskScoreText) riskScoreText.textContent = `Estimated Index: ${score}/100 • Borderline clinical markers`;
    } else {
      riskBadge.classList.add('risk-elevated');
      riskBadge.textContent = 'Elevated Risk';
      if (riskScoreText) riskScoreText.textContent = `Estimated Index: ${score}/100 • Multiple risk factors present`;
    }
  }

  const calcInputs = [ageSlider, bpSlider, glucoseSlider, bmiSlider, smokerCheck, activityCheck];
  calcInputs.forEach(input => {
    if (input) {
      input.addEventListener('input', calculateRisk);
      input.addEventListener('change', calculateRisk);
    }
  });

  calculateRisk();

  // 3. Interactive FAQ Accordion & Search (on FAQ Page)
  const faqItems = document.querySelectorAll('.faq-item');
  const faqSearch = document.getElementById('faq-search');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Optional: close other items for clean single accordion
        faqItems.forEach(other => {
          if (other !== item && other.classList.contains('open')) {
            other.classList.remove('open');
            const otherAns = other.querySelector('.faq-answer');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        if (isOpen) {
          item.classList.remove('open');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
        }
      });
    }
  });

  // Open first FAQ item by default
  if (faqItems.length > 0 && !faqItems[0].classList.contains('open')) {
    const firstAns = faqItems[0].querySelector('.faq-answer');
    faqItems[0].classList.add('open');
    if (firstAns) firstAns.style.maxHeight = firstAns.scrollHeight + 30 + 'px';
  }

  // FAQ Live Search
  if (faqSearch) {
    faqSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      faqItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }
});
