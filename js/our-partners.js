// BrandElevate Our Partners JavaScript v1.0.0

document.addEventListener("DOMContentLoaded", function() {
  // 언어 선택기 초기화 (Initialize language selector)
  initLanguageSelector();
  
  // 기본 언어로 텍스트 설정 (Set text in default language)
  setLanguage(window.currentLanguage || 'ko');
  
  // 히어로 섹션 애니메이션 초기화
  initHeroAnimation();
  
  // Initialize partners cards animations
  initPartnerCards();
  
  // Initialize mobile menu for the partners page
  initMobileMenu();
  
  // 추가 동적 효과 초기화
  initAdditionalEffects();
});

/**
 * 히어로 섹션 애니메이션 초기화
 */
function initHeroAnimation() {
  const heroTitle = document.querySelector('.partners-hero h1');
  if (heroTitle) {
    // 타이핑 효과 시뮬레이션
    const titleText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    heroTitle.classList.add('typing-animation');
    
    // 애니메이션이 끝난 후 원래 텍스트 복원 (화면에서는 타이핑 효과가 보임)
    setTimeout(() => {
      heroTitle.textContent = titleText;
    }, 500);
  }
}

/**
 * 언어 선택기 초기화 (Initialize language selector)
 * 재사용: main.js의 기능 활용
 */
function initLanguageSelector() {
  // 이미 main.js에서 초기화됨
  // Already initialized in main.js
  
  // 현재 페이지가 'our-partners.html'인 경우 메뉴 활성화
  const partnersMenuItem = document.querySelector('a[href="our-partners.html"]');
  if (partnersMenuItem) {
    partnersMenuItem.classList.add('active');
  }
}

/**
 * 파트너 카드 애니메이션 초기화 (Initialize partner cards animations)
 */
function initPartnerCards() {
  const partnerCards = document.querySelectorAll('.partner-card');
  
  // 스크롤 기반 페이드인 애니메이션 (Scroll-based fade-in animation)
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, Math.random() * 300); // 약간의 무작위 지연으로 자연스러운 효과
        cardObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // 모든 카드에 초기 스타일과 관찰자 적용
  partnerCards.forEach((card, index) => {
    // 초기 스타일은 HTML에 적용됨
    card.style.transition = 'all 0.8s ease-out';
    card.style.transitionDelay = `${index * 0.15}s`;
    
    // 파트너 카드에 물결 효과 추가
    const rippleEffect = document.createElement('span');
    rippleEffect.classList.add('card-ripple-effect');
    card.appendChild(rippleEffect);
    
    // 파트너 로고에 반짝임 효과 추가
    const logo = card.querySelector('.partner-logo');
    if (logo) {
      const shine = document.createElement('span');
      shine.classList.add('logo-shine');
      logo.appendChild(shine);
    }
    
    cardObserver.observe(card);
  });
  
  // 호버 효과 강화 (Enhanced hover effects)
  partnerCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const logo = this.querySelector('.partner-logo');
      const link = this.querySelector('.partner-link');
      
      if (logo) logo.style.transform = 'scale(1.05)';
      if (link) link.style.color = '#ffd700';
    });
    
    card.addEventListener('mouseleave', function() {
      const logo = this.querySelector('.partner-logo');
      const link = this.querySelector('.partner-link');
      
      if (logo) logo.style.transform = 'scale(1)';
      if (link) link.style.color = '#d4af37';
    });
  });
}

/**
 * 모바일 메뉴 초기화 (Initialize mobile menu)
 * 재사용: main.js의 기능과 유사하지만 이 페이지에 특화됨
 */
function initMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      
      navLinks.classList.toggle('active');
      this.classList.toggle('active');
      
      // 접근성을 위한 스크린 리더 안내 (Screen reader guidance for accessibility)
      if (!isExpanded) {
        this.setAttribute('aria-label', '메뉴 닫기');
      } else {
        this.setAttribute('aria-label', '메뉴 열기');
      }
    });
  }
}

/**
 * 외부 링크 애널리틱스 추적 (External link analytics tracking)
 * 파트너 웹사이트 방문 추적 (Track partner website visits)
 */
function trackPartnerLinkClick(partnerName) {
  // Analytics tracking code would go here
  console.log(`Partner link clicked: ${partnerName}`);
  
  // 실제 구현에서는 Google Analytics 또는 다른 분석 도구 사용
  // In a real implementation, use Google Analytics or other analytics tools
  if (window.gtag) {
    gtag('event', 'partner_click', {
      'partner_name': partnerName,
      'page_title': document.title,
      'user_language': currentLanguage
    });
  }
}

/**
 * 추가 동적 효과 초기화
 */
function initAdditionalEffects() {
  // 섹션 헤더 애니메이션 효과
  const sectionHeader = document.querySelector('.partners-section h2');
  if (sectionHeader) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        sectionHeader.classList.add('animated-header');
        observer.unobserve(sectionHeader);
      }
    }, { threshold: 0.5 });
    
    observer.observe(sectionHeader);
  }
  
  // CTA 섹션 애니메이션
  const ctaSection = document.querySelector('.cta');
  if (ctaSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        ctaSection.classList.add('cta-animated');
        observer.unobserve(ctaSection);
      }
    }, { threshold: 0.3 });
    
    observer.observe(ctaSection);
  }
}

// 페이지 로드 완료 시 콘솔에 메시지 출력 (Console message on page load completion)
window.addEventListener('load', function() {
  console.log('Partners page fully loaded and initialized');
});

/**
 * 언어 설정 함수 (Language setting function)
 * main.js와 호환되는 언어 전환 구현 (Compatible language switching implementation)
 */
function setLanguage(lang) {
  // main.js의 setLanguage 함수를 재사용 (Reuse setLanguage function from main.js)
  // 이 함수는 main.js에서 이미 정의되어 있으므로 여기서는 특별한 추가 기능만 구현
  
  // 파트너 페이지 전용 번역 요소 (Partner page specific translation elements)
  const partnersTitle = document.querySelector('.partners-hero h1');
  const partnersSubtitle = document.querySelector('.partners-hero p');
  const partnersHeading = document.querySelector('.partners-section h2');
  const partnersIntro = document.querySelector('.section-subtitle');
  const ctaTitle = document.querySelector('.cta h2');
  const ctaDesc = document.querySelector('.cta p');
  const ctaButton = document.querySelector('.cta .hero-button');
  
  // 언어에 따른 파트너 페이지 전용 텍스트 설정 (Set partner page specific text based on language)
  if (lang === 'en') {
    if (partnersTitle) partnersTitle.textContent = 'The Choice of Brands That Reject Mediocrity';
    if (partnersSubtitle) partnersSubtitle.innerHTML = 'We go beyond simple consulting to discover the essence of brands and maximize their potential.<br>Numerous companies have already experienced the authenticity of BrandElevate.';
    if (partnersHeading) partnersHeading.textContent = 'Our Valued Partners';
    if (partnersIntro) partnersIntro.textContent = 'BrandElevate is not just a helper, but a co-founder of success. Listen to the stories of companies that have achieved amazing growth with us.';
    if (ctaTitle) ctaTitle.textContent = 'Looking for a New Global Logistics Partner?';
    if (ctaDesc) ctaDesc.textContent = 'Accelerate your business growth with BrandElevate\'s professional logistics solutions. Our logistics experts with 25 years of experience will provide optimized solutions for your business.';
    if (ctaButton) ctaButton.textContent = 'Inquire about Partnership';
    
    // 파트너 카드 영어 텍스트 (Partner cards English text)
    updatePartnerCardLanguage('en');
  } else {
    // 한국어 기본값 유지 (Keep Korean defaults)
    if (partnersTitle) partnersTitle.textContent = '평범함을 거부하는 브랜드들의 선택';
    if (partnersSubtitle) partnersSubtitle.innerHTML = '저희는 단순한 컨설팅을 넘어 브랜드의 본질을 찾아내고 잠재력을 극대화 합니다.<br>이미 수많은 기업이 BrandElevate 의 진정성을 경험했습니다.';
    if (partnersHeading) partnersHeading.textContent = 'Our Valued Partners';
    if (partnersIntro) partnersIntro.textContent = 'BrandElevate는 단순한 조력자가 아닌, 성공의 공동 창업자 입니다. 저희와 함께 놀라운 성장을 이뤄낸 기업들의 이야기를 들어보세요.';
    if (ctaTitle) ctaTitle.textContent = '글로벌 물류의 새로운 파트너를 찾고 계신가요?';
    if (ctaDesc) ctaDesc.textContent = 'BrandElevate의 전문적인 물류 솔루션으로 비즈니스 성장을 가속화하세요. 25년 경험의 물류 전문가가 귀사의 비즈니스에 최적화된 솔루션을 제공해 드립니다.';
    if (ctaButton) ctaButton.textContent = '파트너십 문의하기';
    
    // 파트너 카드 한국어 텍스트 (Partner cards Korean text)
    updatePartnerCardLanguage('ko');
  }
}

/**
 * 파트너 카드 언어 업데이트 (Update partner card language)
 */
function updatePartnerCardLanguage(lang) {
  const partnerCards = document.querySelectorAll('.partner-card');
  
  // 각 파트너 카드의 "Visit Website" 텍스트 변경
  // Change "Visit Website" text for each partner card
  partnerCards.forEach(card => {
    const link = card.querySelector('.partner-link');
    if (link) {
      const icon = link.querySelector('i');
      if (lang === 'en') {
        link.innerHTML = 'Visit Website ';
        if (icon) link.appendChild(icon);
      } else {
        link.innerHTML = '웹사이트 방문 ';
        if (icon) link.appendChild(icon);
      }
    }
  });
  
  // 영어 모드에서 특정 파트너 설명 변경 (예시)
  // Change specific partner descriptions in English mode (example)
  if (lang === 'en') {
    const partnerDescriptions = {
      '이런익스프레스': 'A logistics specialist partner providing fast and safe delivery services. From domestic and international shipping to warehouse management, we support your business growth with efficient logistics solutions.',
      '케이스타일나우': 'A fashion and lifestyle brand leading the latest trends. With innovative design and quality, we complete your style and promote the excellence of K-fashion in the global market.',
      '파이슨': 'A global semiconductor technology company providing innovative storage solutions. Based on cutting-edge technology, we are a trusted partner in various industries.',
      '미닥뷰티': 'A K-beauty brand offering premium beauty products based on natural ingredients. Pursuing healthy beauty, we develop innovative products that prioritize customer satisfaction.',
      '이런무빙': 'A relocation specialist partner providing professional and safe moving services. From personal moves to corporate relocations, we safely transport your valuable belongings to new spaces.',
      '조아익스프레스': 'A delivery specialist partner trusted for fast and accurate courier and logistics services. We provide smart delivery solutions that save time and costs through a nationwide delivery network.'
    };
    
    // 각 파트너 카드의 설명 텍스트 변경
    // Change description text for each partner card
    partnerCards.forEach(card => {
      const title = card.querySelector('h3');
      const desc = card.querySelector('p');
      
      if (title && desc && partnerDescriptions[title.textContent]) {
        desc.textContent = partnerDescriptions[title.textContent];
      }
    });
  }
}