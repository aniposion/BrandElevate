/**
 * About Us 페이지 동적 생성 스크립트
 * 브랜드엘리베이트 회사 소개 페이지를 JavaScript로 동적 생성합니다.
 */

document.addEventListener('DOMContentLoaded', function() {
  // 메인 컨텐츠 요소 찾기
  const mainContent = document.getElementById('main-content');
  
  // 페이지 컨테이너 생성
  const container = document.createElement('div');
  container.className = 'page-container';
  
  // 각 섹션 생성 및 추가
  container.appendChild(createHeroSection());
  container.appendChild(createAboutIntroductionSection());
  container.appendChild(createTimelineSection());
  container.appendChild(createStatsSection());
  container.appendChild(createFeaturesSection());
  container.appendChild(createGlobalNetworkSection());
  container.appendChild(createSolutionsSection());
  container.appendChild(createAutomationSection());
  container.appendChild(createLMDSection());
  container.appendChild(createAllInOneSection());
  container.appendChild(createEcommerceSection());
  container.appendChild(createOnlineSystemSection());
  container.appendChild(createCTASection());
  
  // 메인 컨텐츠에 컨테이너 추가
  mainContent.appendChild(container);
  
  // 애니메이션 및 인터랙션 초기화
  initAnimations();
  
  // 통계 수치 자동 계산
  updateExperienceYears();
  updateTotalLogistics();
  
  // 네비게이션 메뉴 활성화
  highlightActiveNavLink();
});

/**
 * 히어로 섹션 생성 함수
 */
function createHeroSection() {
  const heroSection = document.createElement('section');
  heroSection.className = 'hero about-hero';
  
  // 배경 요소 생성
  const heroBackground = document.createElement('div');
  heroBackground.className = 'hero-background';
  
  // 배경 이미지 생성
  const heroImg = document.createElement('img');
  heroImg.className = 'hero-bg-image';
  heroImg.src = 'images/erun_global.png';
  heroImg.alt = 'Global Network Background';
  heroImg.style.width = '100%';
  heroImg.style.height = '100%';
  heroImg.style.objectFit = 'cover';
  heroImg.style.objectPosition = 'center';
  
  // 오버레이 생성
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  
  // 파티클 컨테이너 생성
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  
  const particlesJs = document.createElement('div');
  particlesJs.id = 'particles-js';
  particlesJs.setAttribute('aria-hidden', 'true');
  
  particlesContainer.appendChild(particlesJs);
  
  // 배경 구성 요소들을 배경 요소에 추가
  heroBackground.appendChild(heroImg);
  heroBackground.appendChild(overlay);
  heroBackground.appendChild(particlesContainer);
  
  // 히어로 콘텐츠 생성
  const heroContent = document.createElement('div');
  heroContent.className = 'container hero-content';
  
  const heroTextContainer = document.createElement('div');
  heroTextContainer.className = 'hero-text-container';
  
  // 히어로 제목 생성
  const heroTitle = document.createElement('h1');
  heroTitle.className = 'hero-title';
  heroTitle.textContent = '단순한 광고를 넘어, 비즈니스 전체를 설계합니다';
  
  // 서브타이틀 라인 생성
  const heroSubtitleLine = document.createElement('div');
  heroSubtitleLine.className = 'hero-subtitle-line';
  heroSubtitleLine.style.display = 'none'; // 골드 라인 숨김
  
  // 서브타이틀 생성
  const heroSubtitle = document.createElement('p');
  heroSubtitle.className = 'hero-subtitle';
  heroSubtitle.textContent = '웹사이트 구축부터 광고, 물류, 고객 경험까지 모든 과정을 통합한 실행형 브랜드 성장 솔루션입니다.';
  
  // 히어로 텍스트 컨테이너 생성
  const heroText = document.createElement('div');
  heroText.className = 'hero-text';
  
  // 히어로 설명 삭제
  const heroDescription = document.createElement('p');
  heroDescription.className = 'hero-description';
  heroDescription.textContent = '';
  
  heroText.appendChild(heroDescription);
  
  // 히어로 버튼 생성
  const heroButton = document.createElement('a');
  heroButton.href = '#';
  heroButton.className = 'hero-button open-email-popup';
  heroButton.textContent = '무료 상담 문의';
  
  // 텍스트 요소들을 텍스트 컨테이너에 추가
  heroTextContainer.appendChild(heroTitle);
  heroTextContainer.appendChild(heroSubtitleLine);
  heroTextContainer.appendChild(heroSubtitle);
  heroTextContainer.appendChild(heroText);
  heroTextContainer.appendChild(heroButton);
  
  // 텍스트 컨테이너를 콘텐츠에 추가
  heroContent.appendChild(heroTextContainer);
  
  // 배경과 콘텐츠를 히어로 섹션에 추가
  heroSection.appendChild(heroBackground);
  heroSection.appendChild(heroContent);
  
  return heroSection;
}

/**
 * 회사 소개 섹션 생성 함수
 */
function createAboutIntroductionSection() {
  const section = document.createElement('section');
  section.className = 'section about-introduction';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const title = document.createElement('h2');
  title.className = 'section-title small-title';
  title.textContent = '고객의 필요에서 시작된 혁신의 25년';
  
  const aboutContent = document.createElement('div');
  aboutContent.className = 'about-content';
  
  const paragraph1 = document.createElement('p');
  paragraph1.className = 'introduction-text';
  paragraph1.textContent = '이런그룹은 미국에서 한국으로의 구매대행을 처음으로 시스템화하여 시작한 선구적 기업입니다. 온라인 쇼핑몰 운영 과정에서 기존 물류 파트너의 불편함과 비효율적인 가격 정책을 직접 체감하고, 자체 물류 시스템을 구축해 이커머스의 수직 계열화를 실현했습니다.';
  
  const paragraph2 = document.createElement('p');
  paragraph2.className = 'introduction-text';
  paragraph2.textContent = '25년간 쌓아온 경험과 노하우를 바탕으로, 이런그룹은 효율성 극대화와 전문성, 안정성을 고객에게 약속합니다. 단순한 물류를 넘어, 고객의 비즈니스 성공을 함께 만들어가는 신뢰받는 파트너, 이것이 바로 이런그룹의 이야기입니다.';
  
  aboutContent.appendChild(paragraph1);
  aboutContent.appendChild(paragraph2);
  
  container.appendChild(title);
  container.appendChild(aboutContent);
  
  section.appendChild(container);
  
  return section;
}

/**
 * 타임라인 섹션 생성 함수
 */
function createTimelineSection() {
  const timelineSection = document.createElement('section');
  timelineSection.className = 'timeline';
  
  // 타임라인 아이템 배열
  const timelineItems = [
    {
      year: '2000년',
      title: '시작의 순간',
      description: '미국에서 한국으로의 구매대행 시스템화 시작',
      position: 'left'
    },
    {
      year: '2007년',
      title: '자체 물류 시스템 구축',
      description: '기존 물류 파트너의 비효율성을 극복하기 위한 자체 물류 시스템 개발',
      position: 'right'
    },
    {
      year: '2010년',
      title: '물류 자동화 시작',
      description: '수출입, 통관, 배송까지 물류 전 과정 자동화 시스템 구축',
      position: 'left'
    },
    {
      year: '2015년',
      title: '글로벌 네트워크 확장',
      description: '미국 전역 주요 도시 물류 허브 구축 완료',
      position: 'right'
    },
    {
      year: '2020년',
      title: 'AI 물류 플랫폼 도입',
      description: '인공지능 기반 물류 최적화 시스템 개발 및 적용',
      position: 'left'
    },
    {
      year: '2025년',
      title: '미래를 향해',
      description: '25년 경험을 바탕으로 한 글로벌 물류의 새로운 표준 제시',
      position: 'right'
    }
  ];
  
  // 각 타임라인 아이템 생성
  timelineItems.forEach(item => {
    const container = document.createElement('div');
    container.className = `timeline-container ${item.position} animate`;
    
    const content = document.createElement('div');
    content.className = 'timeline-content';
    
    const title = document.createElement('h3');
    title.textContent = `${item.year}, ${item.title}`;
    
    const description = document.createElement('p');
    description.textContent = item.description;
    
    content.appendChild(title);
    content.appendChild(description);
    container.appendChild(content);
    
    timelineSection.appendChild(container);
  });
  
  return timelineSection;
}

/**
 * 통계 섹션 생성 함수
 */
function createStatsSection() {
  const section = document.createElement('section');
  section.className = 'stats-section';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = '오랜 경험이 만든 신뢰할 수 있는 파트너';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'section-subtitle';
  subtitle.textContent = '25년 이상의 물류 전문성';
  
  const statsContainer = document.createElement('div');
  statsContainer.className = 'stats-container';
  
  // 통계 아이템 배열
  const statItems = [
    {
      id: 'experience-years',
      count: 25,
      label: '물류 경험 연수',
      hasSup: true
    },
    {
      id: 'total-logistics',
      count: 450000,
      label: '총 물류 수량',
      hasSup: false
    },
    {
      id: null,
      count: 6,
      label: '미국 내 물류 허브',
      hasSup: true
    },
    {
      id: null,
      count: 30,
      label: '글로벌 협력사',
      hasSup: true
    }
  ];
  
  // 각 통계 아이템 생성
  statItems.forEach(item => {
    const statItem = document.createElement('div');
    statItem.className = 'stat-item';
    
    const statNumber = document.createElement('div');
    statNumber.className = 'stat-number';
    statNumber.setAttribute('data-count', item.count);
    
    if (item.id) {
      statNumber.id = item.id;
    }
    
    if (item.hasSup) {
      statNumber.innerHTML = `${item.count}<sup>+</sup>`;
    } else {
      statNumber.textContent = item.count.toLocaleString();
    }
    
    const statLabel = document.createElement('div');
    statLabel.className = 'stat-label';
    statLabel.textContent = item.label;
    
    statItem.appendChild(statNumber);
    statItem.appendChild(statLabel);
    
    statsContainer.appendChild(statItem);
  });
  
  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(statsContainer);
  
  section.appendChild(container);
  
  return section;
}

/**
 * 특징 섹션 생성 함수
 */
function createFeaturesSection() {
  const section = document.createElement('section');
  section.className = 'features-section';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = '현장 중심의 물류 전문가';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'section-subtitle';
  subtitle.textContent = '현재 필드에서 활발히 활동 중인 실전 전문가';
  
  const featuresGrid = document.createElement('div');
  featuresGrid.className = 'features-grid';
  
  // 특징 아이템 배열
  const features = [
    {
      icon: 'fas fa-warehouse',
      title: '자체 물류 센터 운영',
      description: '미국 내 주요 도시에 위치한 자체 물류 센터와 한국 내 전략적 위치에 구축된 물류 허브를 직접 운영합니다.'
    },
    {
      icon: 'fas fa-clock',
      title: '24시간 모니터링 시스템',
      description: '실시간 물류 관리를 위한 24시간 모니터링 시스템을 운영하여 언제든지 발생할 수 있는 문제에 즉각 대응합니다.'
    },
    {
      icon: 'fas fa-users',
      title: '현지 전문가 팀',
      description: '미국과 한국의 현지 전문가로 구성된 팀이 직접 현장을 관리하여 최상의 서비스를 제공합니다.'
    },
    {
      icon: 'fas fa-bolt',
      title: '신속한 대응 체계',
      description: '시시각각 변화하는 물류 환경에 대한 신속한 대응 체계를 갖추어 어떠한 상황에서도 안정적인 서비스를 제공합니다.'
    }
  ];
  
  // 각 특징 카드 생성
  features.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card';
    
    const iconContainer = document.createElement('div');
    iconContainer.className = 'feature-icon';
    
    const icon = document.createElement('i');
    icon.className = feature.icon;
    iconContainer.appendChild(icon);
    
    const title = document.createElement('h3');
    title.className = 'feature-title';
    title.textContent = feature.title;
    
    const description = document.createElement('p');
    description.className = 'feature-description';
    description.textContent = feature.description;
    
    featureCard.appendChild(iconContainer);
    featureCard.appendChild(title);
    featureCard.appendChild(description);
    
    featuresGrid.appendChild(featureCard);
  });
  
  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(featuresGrid);
  
  section.appendChild(container);
  
  return section;
}

/**
 * 글로벌 네트워크 섹션 생성 함수
 */
function createGlobalNetworkSection() {
  const section = document.createElement('section');
  section.className = 'global-network';
  
  const networkBg = document.createElement('div');
  networkBg.className = 'network-bg';
  
  const container = document.createElement('div');
  container.className = 'container network-content';
  
  const title = document.createElement('h2');
  title.className = 'section-title white-title';
  title.textContent = '양방향 글로벌 물류 네트워크';
  
  const description = document.createElement('p');
  description.className = 'network-description';
  description.textContent = '한국에서 미국으로, 미국에서 한국으로 - 완벽한 양방향 서비스';
  
  // 네트워크 설명 박스
  const descBox = document.createElement('div');
  descBox.style = 'margin: 2rem auto 1rem; text-align: center;';
  
  const descText = document.createElement('p');
  descText.style = 'font-size: 1.2rem; line-height: 1.8; color: white; max-width: 800px; margin: 0 auto; background-color: rgba(26, 54, 93, 0.8); padding: 1.5rem; border-radius: 12px; border-left: 5px solid var(--color-accent);';
  descText.textContent = '이런그룹은 한국과 미국 양국에 구축된 강력한 물류 네트워크를 활용하여 양방향 서비스를 제공합니다. 수출과 수입, 어느 방향이든 원활한 물류 흐름을 보장합니다.';
  
  descBox.appendChild(descText);
  
  // 네트워크 위치 컨테이너
  const networkLocations = document.createElement('div');
  networkLocations.className = 'network-locations';
  
  // 위치 목록
  const locations = [
    '시카고 본사',
    '로스앤젤레스',
    '뉴저지',
    '애틀랜타',
    '메릴랜드',
    '플로리다',
    '서울 본사',
    '부산 물류 센터'
  ];
  
  // 위치 아이템 생성
  locations.forEach(location => {
    const locationItem = document.createElement('div');
    locationItem.className = 'network-location';
    locationItem.style = 'background: rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 12px 24px; backdrop-filter: blur(5px); border: 2px solid var(--color-accent); font-weight: 600; transition: all 0.3s ease; box-shadow: 0 5px 15px rgba(0,0,0,0.2);';
    locationItem.textContent = location;
    
    networkLocations.appendChild(locationItem);
  });
  
  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(descBox);
  container.appendChild(networkLocations);
  
  section.appendChild(networkBg);
  section.appendChild(container);
  
  return section;
}

/**
 * 솔루션 섹션 생성 함수
 */
function createSolutionsSection() {
  const section = document.createElement('section');
  section.className = 'solutions-section';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = '수직 통합 구조의 경제적 이점';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'section-subtitle';
  subtitle.textContent = '수직화된 구조로 실현된 탁월한 가격 경쟁력';
  
  const solutionsGrid = document.createElement('div');
  solutionsGrid.className = 'solutions-grid';
  
  // 솔루션 아이템 배열
  const solutions = [
    {
      image: 'images/erun_network.png',
      title: '자체 운송 네트워크',
      description: '중개자 없이 직접 운영하는 운송 네트워크로 중간 마진을 제거하여 비용을 절감합니다.'
    },
    {
      image: 'images/erun_economy.png',
      title: '규모의 경제',
      description: '대량 물량 확보를 통한 규모의 경제를 실현하여 경쟁력 있는 가격을 제공합니다.'
    },
    {
      image: 'images/erun_allinone.png',
      title: '통합 시스템',
      description: '운영 효율성을 극대화하는 통합 시스템으로 평균 15-30% 비용 절감 효과를 제공합니다.'
    },
    {
      image: 'images/erun_trustsystem.png',
      title: '투명한 비용 구조',
      description: '예측 가능한 물류 비용을 제공하는 투명한 비용 구조로 안정적인 사업 계획이 가능합니다.'
    }
  ];
  
  // 각 솔루션 아이템 생성
  solutions.forEach(solution => {
    const solutionItem = document.createElement('div');
    solutionItem.className = 'solution-item';
    
    const solutionBg = document.createElement('div');
    solutionBg.className = 'solution-bg';
    solutionBg.style = `background-image: url('${solution.image}');`;
    
    const solutionContent = document.createElement('div');
    solutionContent.className = 'solution-content';
    
    const solutionTitle = document.createElement('h3');
    solutionTitle.className = 'solution-title';
    solutionTitle.textContent = solution.title;
    
    const solutionDescription = document.createElement('p');
    solutionDescription.className = 'solution-description';
    solutionDescription.textContent = solution.description;
    
    solutionContent.appendChild(solutionTitle);
    solutionContent.appendChild(solutionDescription);
    
    solutionItem.appendChild(solutionBg);
    solutionItem.appendChild(solutionContent);
    
    solutionsGrid.appendChild(solutionItem);
  });
  
  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(solutionsGrid);
  
  section.appendChild(container);
  
  return section;
}

/**
 * 자동화 섹션 생성 함수
 */
function createAutomationSection() {
  const section = document.createElement('section');
  section.className = 'section';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = '첨단 자동화 시스템';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'section-subtitle';
  subtitle.textContent = 'Advanced Automation Cases';
  
  // 첫 번째 자동화 케이스 (zigzag row)
  const zigzagRow1 = document.createElement('div');
  zigzagRow1.className = 'zigzag-row';
  
  const zigzagImage1 = document.createElement('div');
  zigzagImage1.className = 'zigzag-image';
  
  const img1 = document.createElement('img');
  img1.src = 'images/erun_automation.png';
  img1.alt = '픽업부터 배송까지 완전 자동화';
  img1.className = 'zigzag-img';
  
  zigzagImage1.appendChild(img1);
  
  const zigzagContent1 = document.createElement('div');
  zigzagContent1.className = 'zigzag-content';
  
  const storySection1 = document.createElement('div');
  storySection1.className = 'story-section delay-100';
  
  const storyTitle1 = document.createElement('h3');
  storyTitle1.textContent = '픽업부터 배송까지 완전 자동화';
  
  const storyPara1 = document.createElement('p');
  storyPara1.textContent = '자동 수거 스케줄링 시스템이 고객 요청을 받아 차량 위치, 물량, 경로를 기반으로 최적의 배차를 자동으로 진행합니다. SKU, 수량, 수취인 정보를 기반으로 송장을 자동 생성하고, 주문별로 HAWB → Master 자동 매칭 시스템이 작동합니다.';
  
  const storyPara2 = document.createElement('p');
  storyPara2.textContent = 'AMS 자동 전송 시스템은 픽업 확정 또는 송장 발행 시 HAWB, 수량, 제품명, 수입자 정보를 자동으로 CBP에 전송하여 수작업 없이 CBP 사전신고를 완료합니다.';
  
  storySection1.appendChild(storyTitle1);
  storySection1.appendChild(storyPara1);
  storySection1.appendChild(storyPara2);
  
  zigzagContent1.appendChild(storySection1);
  
  zigzagRow1.appendChild(zigzagImage1);
  zigzagRow1.appendChild(zigzagContent1);
  
  // 두 번째 자동화 케이스 (reverse zigzag row)
  const zigzagRow2 = document.createElement('div');
  zigzagRow2.className = 'zigzag-row reverse';
  
  const zigzagImage2 = document.createElement('div');
  zigzagImage2.className = 'zigzag-image';
  
  const img2 = document.createElement('img');
  img2.src = 'images/erun_type86.png';
  img2.alt = 'TYPE 86 통관 자동화';
  img2.className = 'zigzag-img';
  
  zigzagImage2.appendChild(img2);
  
  const zigzagContent2 = document.createElement('div');
  zigzagContent2.className = 'zigzag-content';
  
  const storySection2 = document.createElement('div');
  storySection2.className = 'story-section delay-200';
  
  const storyTitle2 = document.createElement('h3');
  storyTitle2.textContent = 'TYPE 86 통관 자동화';
  
  const storyPara3 = document.createElement('p');
  storyPara3.textContent = 'SKU 코드를 기반으로 HS CODE를 매칭하고 TYPE 86 대상 여부를 자동으로 판별합니다. FDA 대상 여부도 자동으로 분류하며, TYPE 86 불가 시 TYPE 11 또는 일반통관으로 자동 전환됩니다.';
  
  const storyPara4 = document.createElement('p');
  storyPara4.textContent = 'CBP Release 이후 24시간 안에 LMD 운송사 픽업이 이루어지며, 실시간 위치 추적, 통관 상태, 배송 완료 여부를 대시보드로 제공합니다. 분실/파손 시 자동 클레임 접수 기능으로 48시간 안에 보상이 완료됩니다.';
  
  storySection2.appendChild(storyTitle2);
  storySection2.appendChild(storyPara3);
  storySection2.appendChild(storyPara4);
  
  zigzagContent2.appendChild(storySection2);
  
  zigzagRow2.appendChild(zigzagImage2);
  zigzagRow2.appendChild(zigzagContent2);
  
  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(zigzagRow1);
  container.appendChild(zigzagRow2);
  
  section.appendChild(container);
  
  return section;
}

/**
 * LMD(Last Mile Delivery) 섹션 생성 함수
 */
function createLMDSection() {
  const section = document.createElement('section');
  section.className = 'section';
  section.style = 'background-color: var(--color-light-gray); margin-top: var(--spacing-3xl);';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = '완벽한 라스트 마일 딜리버리';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'section-subtitle';
  subtitle.textContent = '고객 만족을 위한 완벽한 LMD (Last Mile Delivery)';
  
  const differenceGrid = document.createElement('div');
  differenceGrid.className = 'difference-grid';
  
  // LMD 특징 아이템 배열
  const lmdFeatures = [
    {
      icon: 'fas fa-map-marked-alt',
      title: '미국 전역 커버리지',
      description: '미국 전역을 커버하는 라스트 마일 네트워크로 어디서든 빠르고 정확한 배송을 제공합니다.'
    },
    {
      icon: 'fas fa-clock',
      title: '정확한 배송 시간 예측',
      description: '정확한 배송 시간 예측 시스템으로 고객이 배송 상황을 미리 예상할 수 있습니다.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: '책임 있는 보상 제공',
      description: '배송 중 분실·파손 이슈에 실시간 대응하며, 예외 상황 발생 시 책임 있는 보상을 제공합니다.'
    }
  ];
  
  // 각 LMD 특징 카드 생성
  lmdFeatures.forEach(feature => {
    const card = document.createElement('div');
    card.className = 'difference-card';
    
    const iconDiv = document.createElement('div');
    iconDiv.className = 'difference-icon';
    
    const icon = document.createElement('i');
    icon.className = feature.icon;
    iconDiv.appendChild(icon);
    
    const title = document.createElement('h3');
    title.textContent = feature.title;
    
    const description = document.createElement('p');
    description.textContent = feature.description;
    
    card.appendChild(iconDiv);
    card.appendChild(title);
    card.appendChild(description);
    
    differenceGrid.appendChild(card);
  });
  
  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(differenceGrid);
  
  section.appendChild(container);
  
  return section;
}

/**
 * 올인원 솔루션 섹션 생성 함수
 */
function createAllInOneSection() {
  const section = document.createElement('section');
  section.className = 'all-in-one';
  section.style = 'margin-bottom: var(--spacing-3xl); margin-top: var(--spacing-3xl); padding-top: var(--spacing-3xl); background-color: #f5f5f5; border-radius: var(--border-radius-lg);';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = '올인원 물류 솔루션';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'section-subtitle';
  subtitle.textContent = 'All-in-One Logistics Solution – 완벽히 연결된 통합 물류 시스템';
  
  const solutionGrid = document.createElement('div');
  solutionGrid.className = 'solution-grid';
  solutionGrid.style = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-lg); margin-top: var(--spacing-xl);';
  
  // 솔루션 아이템 배열
  const solutionItems = [
    {
      icon: 'fas fa-truck-loading',
      title: 'Door-to-Door 픽업 & 전문 포장',
      description: '국내 전역 픽업 및 제품 특성에 맞춘 맞춤형 포장 서비스'
    },
    {
      icon: 'fas fa-file-export',
      title: '정확한 수출신고 & 항공 스페이스 확보',
      description: '자동화 시스템 기반의 수출신고 + 항공 스케줄 최적화로 안정적 출고'
    },
    {
      icon: 'fas fa-passport',
      title: '미국 특화 통관 서비스',
      description: 'TYPE 86, ECCF 등 이커머스 전용 통관 라인 운영'
    },
    {
      icon: 'fas fa-shipping-fast',
      title: '미국 전역 LMD',
      description: 'UPS, Amazon, 로컬 LMD 연동을 통한 전국 단위 배송망'
    }
  ];
  
  // 각 솔루션 아이템 생성
  solutionItems.forEach(item => {
    const solutionItem = document.createElement('div');
    solutionItem.className = 'solution-item';
    solutionItem.style = 'background-color: var(--color-primary); color: white; border-radius: var(--border-radius-md); padding: var(--spacing-lg); box-shadow: var(--shadow-md); transition: all 0.3s ease;';
    
    const iconDiv = document.createElement('div');
    iconDiv.className = 'solution-icon';
    iconDiv.style = 'color: var(--color-accent); font-size: 2rem; margin-bottom: var(--spacing-md);';
    
    const icon = document.createElement('i');
    icon.className = item.icon;
    iconDiv.appendChild(icon);
    
    const title = document.createElement('h3');
    title.textContent = item.title;
    title.style = 'color: var(--color-accent); font-size: 1.2rem; margin-bottom: var(--spacing-sm);';
    
    const description = document.createElement('p');
    description.textContent = item.description;
    description.style = 'color: rgba(255, 255, 255, 0.9); line-height: 1.6;';
    
    solutionItem.appendChild(iconDiv);
    solutionItem.appendChild(title);
    solutionItem.appendChild(description);
    
    solutionGrid.appendChild(solutionItem);
  });
  
  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(solutionGrid);
  
  section.appendChild(container);
  
  return section;
}

/**
 * 이커머스 섹션 생성 함수
 */
function createEcommerceSection() {
  const section = document.createElement('section');
  section.className = 'section';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = '이커머스 물류의 최강자';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'section-subtitle';
  subtitle.textContent = 'Ecommerce 물류의 최적 파트너';
  
  const featuresGrid = document.createElement('div');
  featuresGrid.className = 'features-grid';
  
  // 이커머스 특징 아이템 배열
  const ecommerceFeatures = [
    {
      icon: 'fas fa-map-marker-alt',
      title: '전략적 물류 센터',
      description: '빠른 배송을 위한 전략적 물류 센터 배치로 어디서든 신속한 배송이 가능합니다.'
    },
    {
      icon: 'fas fa-plug',
      title: '플랫폼 연동',
      description: '다양한 이커머스 플랫폼과의 완벽한 연동으로 원활한 운영을 지원합니다.'
    },
    {
      icon: 'fas fa-chart-line',
      title: '물량 변동 대응',
      description: '시즌별 물량 변동에 유연하게 대응하여 항상 안정적인 물류 서비스를 제공합니다.'
    },
    {
      icon: 'fas fa-undo-alt',
      title: '반품 처리 시스템',
      description: '세금없는 반품→검수→재배송까지 전 과정을 자동화된 시스템으로 지원합니다.'
    }
  ];
  
  // 각 이커머스 특징 카드 생성
  ecommerceFeatures.forEach(feature => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card';
    
    const iconDiv = document.createElement('div');
    iconDiv.className = 'feature-icon';
    
    const icon = document.createElement('i');
    icon.className = feature.icon;
    iconDiv.appendChild(icon);
    
    const title = document.createElement('h3');
    title.className = 'feature-title';
    title.textContent = feature.title;
    
    const description = document.createElement('p');
    description.className = 'feature-description';
    description.textContent = feature.description;
    
    featureCard.appendChild(iconDiv);
    featureCard.appendChild(title);
    featureCard.appendChild(description);
    
    featuresGrid.appendChild(featureCard);
  });
  
  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(featuresGrid);
  
  section.appendChild(container);
  
  return section;
}

/**
 * 온라인 시스템 개발 섹션 생성 함수
 */
function createOnlineSystemSection() {
  const section = document.createElement('section');
  section.className = 'section';
  section.style = 'background-color: var(--color-light-gray); padding: var(--spacing-2xl) 0;';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = '온라인 시스템 개발 전문 업체로의 새로운 탄생';
  
  const subtitle = document.createElement('p');
  subtitle.className = 'section-subtitle';
  subtitle.textContent = '통합된 브랜드 성장 파트너';
  
  const onlineSystemContent = document.createElement('div');
  onlineSystemContent.className = 'online-system-content';
  
  const systemFeaturesGrid = document.createElement('div');
  systemFeaturesGrid.className = 'system-features-grid';
  
  // 온라인 시스템 특징 아이템 배열
  const systemFeatures = [
    'BrandElevate는 마케팅, 웹 개발, 물류, 자동화를 통합한 All-in-One 브랜드 성장 파트너입니다.',
    '광고 수익률이 아닌 \'실제 마진\'을 기준으로 전략을 설계합니다.',
    '셀러 출신의 25년 실전 경험을 바탕으로, 성과 중심의 자동화 시스템을 직접 개발했습니다.',
    '광고, SEO, 고객경험, 배송까지 전 과정을 하나의 흐름으로 연결합니다.',
    '브랜드의 성장을 위해 실행 중심의 전략과 도구를 제공합니다.'
  ];
  
  // 각 온라인 시스템 특징 아이템 생성
  systemFeatures.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.className = 'system-feature-item';
    
    const featureCheck = document.createElement('div');
    featureCheck.className = 'feature-check';
    
    const checkIcon = document.createElement('i');
    checkIcon.className = 'fas fa-check-circle';
    featureCheck.appendChild(checkIcon);
    
    const featureText = document.createElement('div');
    featureText.className = 'feature-text';
    featureText.textContent = feature;
    
    featureItem.appendChild(featureCheck);
    featureItem.appendChild(featureText);
    
    systemFeaturesGrid.appendChild(featureItem);
  });
  
  onlineSystemContent.appendChild(systemFeaturesGrid);
  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(onlineSystemContent);
  
  // 온라인 시스템 개발 전문 업체 스타일 추가
  const style = document.createElement('style');
  style.textContent = `
    /* 온라인 시스템 개발 전문 업체 스타일 */
    .online-system-content {
      max-width: 900px;
      margin: 0 auto;
      padding: var(--spacing-xl) 0;
      background-color: white;
      border-radius: var(--border-radius-lg);
      box-shadow: var(--shadow-md);
      border-top: 4px solid var(--color-accent);
    }
    
    .system-features-grid {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg);
      padding: var(--spacing-xl);
    }
    
    .system-feature-item {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-md);
      transition: all 0.3s ease;
      padding: var(--spacing-md);
      border-radius: var(--border-radius-md);
      background-color: #f9f9f9;
      border-left: 3px solid var(--color-accent);
    }
    
    .system-feature-item:hover {
      transform: translateX(5px);
      background-color: #f5f5f5;
      box-shadow: var(--shadow-sm);
    }
    
    .feature-check {
      flex-shrink: 0;
      color: var(--color-accent);
      font-size: 1.5rem;
      line-height: 1.5;
    }
    
    .feature-text {
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--color-text);
    }
    
    @media (max-width: 768px) {
      .online-system-content {
        padding: var(--spacing-lg) 0;
      }
      
      .system-features-grid {
        padding: var(--spacing-lg);
        gap: var(--spacing-md);
      }
      
      .system-feature-item {
        padding: var(--spacing-sm);
      }
      
      .feature-text {
        font-size: 1rem;
      }
    }
  `;
  
  section.appendChild(container);
  section.appendChild(style);
  
  return section;
}

/**
 * CTA(Call to Action) 섹션 생성 함수
 */
function createCTASection() {
  const section = document.createElement('section');
  section.className = 'cta-section about-cta';
  section.id = 'contact';
  
  const container = document.createElement('div');
  container.className = 'container';
  
  const title = document.createElement('h2');
  title.textContent = '글로벌 물류의 새로운 파트너를 찾고 계신가요?';
  
  const description = document.createElement('p');
  description.textContent = '이런그룹의 전문적인 물류 솔루션으로 비즈니스 성장을 가속화하세요. 25년 경험의 물류 전문가가 귀사의 비즈니스에 최적화된 솔루션을 제공해 드립니다.';
  
  const button = document.createElement('a');
  button.href = '#';
  button.className = 'cta-button-large open-email-popup';
  button.textContent = '무료 상담 문의';
  
  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(button);
  
  section.appendChild(container);
  
  return section;
}

/**
 * 애니메이션 및 인터랙션 초기화 함수
 */
function initAnimations() {
  // 파티클 효과의 투명도 조정
  const particlesContainer = document.querySelector('.particles-container');
  if (particlesContainer) {
    particlesContainer.style.opacity = '0.4';
  }
  
  // Add 'animate' class to timeline containers immediately
  const timelineContainers = document.querySelectorAll('.timeline-container');
  timelineContainers.forEach(container => {
    setTimeout(() => {
      container.classList.add('animate');
    }, 500); // Slight delay to ensure DOM is fully ready
  });
  
  // Create IntersectionObserver for other elements
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