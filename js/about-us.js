/**
 * About Us 페이지 애니메이션 및 인터랙션 스크립트
 * 브랜드엘리베이트 회사 소개 페이지의 동적 기능을 관리합니다.
 */

document.addEventListener('DOMContentLoaded', function() {
  // 애니메이션 및 인터랙션 초기화
  initAnimations();
  
  // 통계 수치 자동 계산
  updateExperienceYears();
  updateTotalLogistics();
  
  // 네비게이션 메뉴 활성화
  highlightActiveNavLink();
});

/**
 * 애니메이션 및 인터랙션 초기화 함수
 */
function initAnimations() {
  // 파티클 효과의 투명도 조정
  const particlesContainer = document.querySelector('.particles-container');
  if (particlesContainer) {
    particlesContainer.style.opacity = '0.4';
  }
  
  // 타임라인 컨테이너 애니메이션 즉시 적용
  const timelineContainers = document.querySelectorAll('.timeline-container');
  timelineContainers.forEach(container => {
    setTimeout(() => {
      container.classList.add('animate');
    }, 500); // DOM 완전 로드 후 딜레이
  });
  
  // 다른 요소들을 위한 IntersectionObserver 생성
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  timelineContainers.forEach(container => {
    observer.observe(container);
  });
  
  // 통계 아이템 애니메이션
  const statItems = document.querySelectorAll('.stat-item');
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  statItems.forEach(item => {
    statObserver.observe(item);
  });
  
  // 특징 카드 애니메이션
  const featureCards = document.querySelectorAll('.feature-card');
  const featureObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // 단계적 딜레이 추가
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 100);
        featureObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  featureCards.forEach(card => {
    featureObserver.observe(card);
  });
  
  // 네트워크 위치 애니메이션
  const networkLocations = document.querySelectorAll('.network-location');
  networkLocations.forEach((location, index) => {
    const locationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 단계적 애니메이션
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, index * 100);
          locationObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    locationObserver.observe(location);
  });
  
  // 솔루션 아이템 애니메이션
  const solutionItems = document.querySelectorAll('.solution-item');
  const solutionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // 단계적 애니메이션
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * 150);
        solutionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  solutionItems.forEach(item => {
    solutionObserver.observe(item);
  });

  // 스토리 섹션 애니메이션
  const storySections = document.querySelectorAll('.story-section');
  const storyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        storyObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  storySections.forEach(section => {
    storyObserver.observe(section);
  });

  // 시스템 특징 아이템 애니메이션
  const systemFeatureItems = document.querySelectorAll('.system-feature-item');
  const systemObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 100);
        systemObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  systemFeatureItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    systemObserver.observe(item);
  });
}

/**
 * 연도 자동 계산 함수 (설립연도 기준 - 2000년)
 */
function updateExperienceYears() {
  const startYear = 2000;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;
  const experienceElement = document.getElementById('experience-years');
  
  if (experienceElement) {
    experienceElement.textContent = yearsOfExperience;
    experienceElement.setAttribute('data-count', yearsOfExperience);
    experienceElement.innerHTML = yearsOfExperience + '<sup>+</sup>';
  }
}

/**
 * 총 물류 수량 자동 계산
 */
function updateTotalLogistics() {
  // 수식 기반 계산: 300 * 365 * 25 = 2,737,500
  const totalLogistics = 300 * 365 * 25; // 2,737,500
  const millionValue = (totalLogistics / 1000000).toFixed(1); // 2.7
  const formattedTotal = millionValue + 'M+'; // 2.7M+
  
  const logisticsElement = document.getElementById('total-logistics');
  if (logisticsElement) {
    logisticsElement.textContent = formattedTotal;
    logisticsElement.setAttribute('data-count', totalLogistics);
  }
}

/**
 * 현재 네비게이션 링크 강조 함수
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const aboutLink = document.querySelector('a[href="about-us.html"]');
  
  if (aboutLink && currentPath.includes("about-us")) {
    aboutLink.classList.add('active-nav-link');
    aboutLink.style.color = 'var(--color-accent)';
  }
}

/**
 * 스크롤 이벤트 기반 요소 표시 함수
 */
function showOnScroll(selector, delay = 0) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate');
        }, index * delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(element => {
    observer.observe(element);
  });
}

/**
 * 페이지 로드 완료 시 콘솔에 메시지 출력
 */
window.addEventListener('load', function() {
  console.log('About Us page fully loaded and initialized');
});

/**
 * 부드러운 스크롤 기능
 */
function smoothScrollTo(target) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

/**
 * CTA 버튼 클릭 이벤트 처리
 */
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('hero-button') || e.target.classList.contains('cta-button-large')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    if (href && href.startsWith('#')) {
      smoothScrollTo(href);
    }
  }
});

/**
 * 반응형 디자인 지원 함수
 */
function handleResponsiveFeatures() {
  const isMobile = window.innerWidth <= 768;
  const timelineContainers = document.querySelectorAll('.timeline-container');

  timelineContainers.forEach((container, index) => {
    if (isMobile) {
      // 모바일 뷰: 'left', 'right'를 제거하고 'mobile'을 추가합니다.
      container.classList.remove('left', 'right');
      container.classList.add('mobile');
    } else {
      // 데스크톱 뷰: 'mobile'을 제거하고, 순서에 따라 'left' 또는 'right'를 다시 추가합니다.
      container.classList.remove('mobile');
      
      // 짝수 번째 요소(0, 2, 4...)는 'left', 홀수 번째 요소(1, 3, 5...)는 'right'
      if (index % 2 === 0) { 
        container.classList.add('left');
      } else {
        container.classList.add('right');
      }
    }
  });
}

// 윈도우 리사이즈 이벤트 리스너
window.addEventListener('resize', handleResponsiveFeatures);

// 초기 로드 시 반응형 기능 적용
handleResponsiveFeatures();