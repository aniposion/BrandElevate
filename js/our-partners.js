// BrandElevate Our Partners JavaScript v1.0.1

document.addEventListener("DOMContentLoaded", function() {
  // 참고: 언어 선택기는 main.js에서 자동으로 초기화됩니다.
  // Note: The language selector is initialized automatically by main.js.
  
  // 히어로 섹션 애니메이션 초기화
  initHeroAnimation();
  
  // 파트너 카드 애니메이션 초기화
  initPartnerCards();
  
  // 모바일 메뉴 초기화 (our-partners.html 전용)
  initMobileMenuForPartners();
  
  // 추가 동적 효과 초기화
  initAdditionalEffects();

  // 현재 페이지 네비게이션 활성화
  highlightActivePartnerLink();
});

/**
 * 현재 페이지('our-partners.html') 네비게이션 링크를 활성화합니다.
 */
function highlightActivePartnerLink() {
    const partnersMenuItem = document.querySelector('a[href="our-partners.html"]');
    if (partnersMenuItem) {
        // 기존 active 클래스와 충돌을 피하기 위해 고유한 클래스 사용
        partnersMenuItem.classList.add('active-nav-link'); 
    }
}


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
 * 모바일 메뉴 초기화 (Initialize mobile menu for partners page)
 * main.js의 기능과 충돌하지 않도록 별도 관리
 */
function initMobileMenuForPartners() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuToggle && navLinks) {
    // main.js에서 이미 이벤트 리스너가 추가되었을 수 있으므로,
    // 이 페이지에 특화된 로직만 추가하거나 필요한 경우에만 이벤트를 추가합니다.
    // 여기서는 main.js의 로직이 그대로 적용되므로 별도의 이벤트 추가는 생략합니다.
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
      'user_language': window.currentLanguage
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

