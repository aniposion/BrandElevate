// BrandElevate Our Partners JavaScript v1.0.1

document.addEventListener("DOMContentLoaded", function() {
  // 참고: 언어 선택기는 main.js에서 자동으로 초기화됩니다.
  // Note: The language selector is initialized automatically by main.js.
  
  // 기본 언어로 텍스트 설정 (Set text in default language)
  // main.js의 setLanguage 함수가 호출되도록 하여 페이지 언어를 설정합니다.
  if (typeof setLanguage === 'function') {
    // main.js 에서 설정된 전역 언어 변수(currentLanguage)를 사용합니다.
    setLanguage(window.currentLanguage || 'ko');
  }
  
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

// 참고: setLanguage 및 언어 전환 관련 기능은 main.js에서 처리됩니다.
// 이 파일에서는 파트너 페이지에 특화된 텍스트 업데이트 로직만 남겨두거나,
// main.js의 setLanguage 함수가 호출될 때 자동으로 처리되도록 구조를 변경하는 것이 좋습니다.
// 아래 코드는 main.js의 setLanguage 함수가 존재할 경우를 대비한 예시입니다.

const originalSetLanguage = window.setLanguage;

window.setLanguage = function(lang) {
    // main.js의 원래 setLanguage 함수 호출
    if (typeof originalSetLanguage === 'function') {
        originalSetLanguage(lang);
    }

    // 파트너 페이지 전용 번역 요소
    const partnersTitle = document.querySelector('.partners-hero h1');
    const partnersSubtitle = document.querySelector('.partners-hero p');
    const partnersHeading = document.querySelector('.partners-section h2');
    const partnersIntro = document.querySelector('.partners-section .section-subtitle');
    const ctaTitle = document.querySelector('.cta h2');
    const ctaDesc = document.querySelector('.cta p');
    const ctaButton = document.querySelector('.cta .hero-button');

    const partnerTranslations = {
        ko: {
            heroTitle: '평범함을 거부하는 브랜드들의 선택',
            heroSubtitle: '저희는 단순한 컨설팅을 넘어 브랜드의 본질을 찾아내고 잠재력을 극대화 합니다.<br>이미 수많은 기업이 BrandElevate 의 진정성을 경험했습니다.',
            sectionTitle: 'Our Valued Partners',
            sectionSubtitle: 'BrandElevate는 단순한 조력자가 아닌, 성공의 공동 창업자 입니다. 저희와 함께 놀라운 성장을 이뤄낸 기업들의 이야기를 들어보세요.',
            ctaTitle: '글로벌 물류의 새로운 파트너를 찾고 계신가요?',
            ctaDesc: 'BrandElevate의 전문적인 물류 솔루션으로 비즈니스 성장을 가속화하세요. 25년 경험의 물류 전문가가 귀사의 비즈니스에 최적화된 솔루션을 제공해 드립니다.',
            ctaButton: '파트너십 문의하기',
            visitWebsite: '웹사이트 방문'
        },
        en: {
            heroTitle: 'The Choice of Brands That Reject Mediocrity',
            heroSubtitle: 'We go beyond simple consulting to discover the essence of brands and maximize their potential.<br>Numerous companies have already experienced the authenticity of BrandElevate.',
            sectionTitle: 'Our Valued Partners',
            sectionSubtitle: 'BrandElevate is not just a helper, but a co-founder of success. Listen to the stories of companies that have achieved amazing growth with us.',
            ctaTitle: 'Looking for a New Global Logistics Partner?',
            ctaDesc: 'Accelerate your business growth with BrandElevate\'s professional logistics solutions. Our logistics experts with 25 years of experience will provide optimized solutions for your business.',
            ctaButton: 'Inquire about Partnership',
            visitWebsite: 'Visit Website'
        }
    };

    const translations = partnerTranslations[lang];

    if (translations) {
        if (partnersTitle) partnersTitle.textContent = translations.heroTitle;
        if (partnersSubtitle) partnersSubtitle.innerHTML = translations.heroSubtitle;
        if (partnersHeading) partnersHeading.textContent = translations.sectionTitle;
        if (partnersIntro) partnersIntro.textContent = translations.sectionSubtitle;
        if (ctaTitle) ctaTitle.textContent = translations.ctaTitle;
        if (ctaDesc) ctaDesc.textContent = translations.ctaDesc;
        if (ctaButton) ctaButton.textContent = translations.ctaButton;
        updatePartnerCardLanguage(lang, translations.visitWebsite);
    }
};

/**
 * 파트너 카드 언어 업데이트 (Update partner card language)
 */
function updatePartnerCardLanguage(lang, visitText) {
  const partnerCards = document.querySelectorAll('.partner-card');
  
  partnerCards.forEach(card => {
    const link = card.querySelector('.partner-link');
    if (link) {
      const icon = link.querySelector('i');
      link.textContent = visitText + ' '; // 공백을 추가하여 아이콘과 간격 유지
      if (icon) {
        link.appendChild(icon);
      }
    }
  });

  if (lang === 'en') {
    const partnerDescriptions = {
      '이런익스프레스': 'A logistics specialist partner providing fast and safe delivery services. From domestic and international shipping to warehouse management, we support your business growth with efficient logistics solutions.',
      '케이스타일나우': 'A fashion and lifestyle brand leading the latest trends. With innovative design and quality, we complete your style and promote the excellence of K-fashion in the global market.',
      '파이슨': 'A global semiconductor technology company providing innovative storage solutions. Based on cutting-edge technology, we are a trusted partner in various industries.',
      '미닥뷰티': 'A K-beauty brand offering premium beauty products based on natural ingredients. Pursuing healthy beauty, we develop innovative products that prioritize customer satisfaction.',
      '이런무빙': 'A relocation specialist partner providing professional and safe moving services. From personal moves to corporate relocations, we safely transport your valuable belongings to new spaces.',
      '조아익스프레스': 'A delivery specialist partner trusted for fast and accurate courier and logistics services. We provide smart delivery solutions that save time and costs through a nationwide delivery network.'
    };
    
    partnerCards.forEach(card => {
      const title = card.querySelector('h3');
      const desc = card.querySelector('p');
      
      if (title && desc && partnerDescriptions[title.textContent]) {
        desc.textContent = partnerDescriptions[title.textContent];
      }
    });
  } else {
    // 한국어 설명을 위한 데이터 (필요 시 추가)
    const partnerDescriptionsKO = {
        '이런익스프레스': '빠르고 안전한 배송 서비스를 제공하는 물류 전문 파트너입니다. 국내외 배송부터 창고 관리까지, 효율적인 물류 솔루션으로 고객의 비즈니스 성장을 지원합니다.',
        '케이스타일나우': '최신 트렌드를 선도하는 패션 및 라이프스타일 브랜드입니다. 혁신적인 디자인과 품질로 고객의 스타일을 완성하며, 글로벌 시장에서 K-패션의 우수성을 알리고 있습니다.',
        '파이슨': '세계적인 반도체 기술 전문 기업으로, 혁신적인 스토리지 솔루션을 제공합니다. 최첨단 기술력을 바탕으로 다양한 산업 분야에서 신뢰받는 파트너로 자리잡고 있습니다.',
        '미닥뷰티': '천연 성분을 바탕으로 한 프리미엄 뷰티 제품을 선보이는 K-뷰티 브랜드입니다. 건강한 아름다움을 추구하며, 고객 만족을 최우선으로 하는 혁신적인 제품을 개발합니다.',
        '이런무빙': '전문적이고 안전한 이사 서비스를 제공하는 이주 전문 파트너입니다. 개인 이사부터 기업 이전까지, 고객의 소중한 짐을 안전하게 새로운 공간으로 옮겨드립니다.',
        '조아익스프레스': '빠르고 정확한 택배 및 물류 서비스로 고객의 신뢰를 받고 있는 배송 전문 파트너입니다. 전국 배송 네트워크를 통해 시간과 비용을 절약하는 스마트한 배송 솔루션을 제공합니다.'
    };
    partnerCards.forEach(card => {
      const title = card.querySelector('h3');
      const desc = card.querySelector('p');
      
      if (title && desc && partnerDescriptionsKO[title.textContent]) {
        desc.textContent = partnerDescriptionsKO[title.textContent];
      }
    });
  }
}
