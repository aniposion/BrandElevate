// BrandElevate Main JavaScript v2.0.5 - Last updated: 2024-08-05
// 전역 언어 설정 (Global language settings)
let currentLanguage = 'ko'; // 기본 언어를 한국어(ko)로 설정

// 언어 데이터 저장 (Language data storage)
const languageData = {
  'ko': {
    // Header and navigation
    'nav_why_us': '성장의 이유',
    'nav_services': '비즈니스 성장 솔루션',
    'nav_process': '성공 로드맵',
    'nav_story': '우리의 시작',
    'nav_contact': '무료 컨설팅 받기',
    'nav_about' : 'ERUN 그룹',
    'nav_partner' :'파트너사',
    'get_started': '시작하기',
    'skip_to_content': '본문으로 건너뛰기',
    
    // Hero section
    'hero_title': '마케팅 + 물류 + 자동화, 이젠 따로 할 필요 없습니다',
    'hero_subtitle': '홈페이지 제작, 광고 집행, SEO, 물류 시스템, 자동화 운영까지\nBrandelevate가 모든 것을 연결해드립니다.',
    'hero_button': '내 브랜드 진단받기',
    
    // Why Different section
    'why_different_title': '다른 마케팅 에이전시와의 결정적 차이',
    'why_different_subtitle': '단순한 광고를 넘어 비즈니스 전체를 보는 25년의 실전 경험이 차이를 만듭니다.',
    'real_profit_title': '\'진짜 수익\' 최적화',
    'real_profit_desc': '높은 광고수익률(ROAS)에 만족하지 않고, 물류비를 감안한 실제 마진을 계산하여 순수익을 극대화하는 캠페인을 설계합니다.',
    'logistics_targeting_title': '물류 데이터 기반 타겟팅',
    'logistics_targeting_desc': '배송이 빠르고 반품률이 낮은 \'수익성 높은 지역\'을 공략합니다. 우리는 그 데이터를 가지고 있습니다.',
    'conversion_title': '구매 전환율 상승',
    'conversion_desc': '빠른 배송과 안정적인 풀필먼트는 고객의 구매 결정에 큰 영향을 줍니다. 광고부터 배송까지 완벽한 경험을 설계합니다.',
    
    // Services section
    'services_title': 'Our Services',
    'services_subtitle': '데이터 기반의 퍼포먼스 마케팅으로 당신의 비즈니스 성장을 만듭니다.',
    'seo_title': '검색엔진최적화 (SEO)',
    'seo_desc': '고급 SEO 전략으로 검색 순위를 높여 지속 가능한 유기적 성장을 만듭니다. 기술적 SEO 감사 및 개선, 키워드 리서치 및 콘텐츠 전략, 백링크 구축 및 권위 향상을 포함합니다.',
    'google_ads_title': '구글 광고 (Google Ads)',
    'google_ads_desc': 'ROI를 극대화하는 데이터 기반 캠페인으로 양질의 타겟 트래픽을 유도합니다. 검색, 디스플레이, 쇼핑 캠페인, 리마케팅 전략 수립, A/B 테스트 및 성과 최적화를 제공합니다.',
    'ai_marketing_title': 'AI 마케팅',
    'ai_marketing_desc': 'AI로 고객 행동을 분석하여 마케팅 메시지를 개인화하고 최적화합니다. 고객 세분화 및 예측 모델링, 개인화 메시지 자동화, AI 기반 광고 카피 생성을 포함합니다.',
    'webpage_dev_title': '웹페이지 개발',
    'webpage_dev_desc': '구매 전환율 높은 반응형 웹사이트를 구축하여 뛰어난 사용자 경험을 제공합니다. Shopify 스토어 구축 및 튜닝, 랜딩페이지 제작 및 최적화, 웹사이트 속도 및 성능 개선을 제공합니다.',
    'ai_automation_title': 'AI 자동화',
    'ai_automation_desc': '지능형 AI 솔루션으로 반복 업무를 자동화하여 비즈니스 효율을 높입니다. 마케팅 리포트 자동화, CS 응대 자동화, 업무 프로세스 자동화 컨설팅을 제공합니다.',
    'analytics_title': '성과 분석',
    'analytics_desc': '상세한 성과 보고서와 실행 가능한 데이터로 전략 최적화를 돕습니다. 통합 데이터 대시보드 구축, 광고-물류 데이터 연계 분석, 비즈니스 성장 컨설팅을 제공합니다.',
    'learn_more': '자세히 보기 →',
    
    // All-in-One section
    'all_in_one_title': 'Our Secret Weapon: All In One',
    'all_in_one_subtitle': '"쇼핑몰 오픈부터 물류, 그리고 광고까지." 이 모든 과정을 직접 실행하고 데이터를 통합하는 기술력이 바로 우리의 진짜 무기입니다.',
    'shopping_mall_title': '쇼핑몰 오픈',
    'shopping_mall_desc': 'Shopify 스토어 구축부터 최적화까지, 판매를 위한 완벽한 기반을 마련합니다.',
    'logistics_automation_title': '물류 자동화',
    'logistics_automation_desc': '주문, 배송, 통관까지 복잡한 물류 전 과정을 자동화하여 안정적인 운영을 지원합니다.',
    'performance_ads_title': '퍼포먼스 광고',
    'performance_ads_desc': '물류 데이터와 연동하여 실제 수익을 기준으로 광고 캠페인을 최적화합니다.',
    'ai_automation_2_title': 'AI 자동화',
    'ai_automation_2_desc': 'CS 응대, 리포팅 등 반복 업무를 자동화하여 비즈니스 효율을 극대화합니다.',
    
    // Process section
    'process_title': '데이터로 증명하는 4단계 프로세스',
    'process_subtitle': '우리는 감으로 일하지 않습니다. 모든 결정은 데이터에 기반하여 이루어집니다.',
    'step1_title': '비즈니스 & 물류 진단',
    'step1_desc': '광고 계정뿐만 아니라, 물류 비용, 재고, 배송 효율까지 비즈니스 전체를 진단합니다.',
    'step2_title': '통합 전략 수립',
    'step2_desc': '진단 결과를 바탕으로 광고, SEO, 물류 전략을 아우르는 맞춤형 성장 전략을 설계합니다.',
    'step3_title': '캠페인 실행 및 최적화',
    'step3_desc': '설계된 전략에 따라 광고 캠페인을 실행하고, 실시간 데이터 분석을 통해 끊임없이 최적화합니다.',
    'step4_title': '성과 측정 및 보고',
    'step4_desc': '단순한 광고 성과가 아닌, 비즈니스 수익 관점의 투명한 보고서를 정기적으로 제공합니다.',
    // Company Story section
    'company_story_title': '우리는 광고 전문가 이전에, 당신과 같은 \'셀러\'였습니다',
    'story1_title': '2000년, 시카고에서의 시작',
    'story1_desc1': 'BrandElevate은 온라인 비즈니스의 모든 것을 직접 부딪히며 시작했습니다. Polo Ralph Lauren 같은 브랜드를 한국에 판매하며, 웹사이트 구축, 광고 집행, 재고 관리, 고객 배송까지 이커머스의 모든 과정을 직접 겪었습니다.',
    'story1_desc2': '팔리지 않는 재고, 복잡한 통관, 예상치 못한 반품, 그리고 광고비를 태워도 오르지 않는 매출. 이 25년의 실전 경험이 바로 다른 광고 대행사는 가질 수 없는 우리의 가장 강력한 무기입니다.',
    'story2_title': '기술로 증명하는 실전 경험',
    'story2_desc1': '성공적인 이커머스는 광고와 물류, CS가 분리될 수 없다는 것을 깨닫고 \"쇼핑몰 오픈 → 배송/통관 자동화 → 마케팅 지원까지\" 모든 과정을 하나의 시스템으로 묶는 자동화 플랫폼을 직접 만들었습니다.',
    'story2_desc2': '브랜드엘리베이트는 단순한 마케팅이 아니라 비즈니스 전체를 바라보는 안목으로 실질적인 성과를 만들어냅니다.',
    'story_highlight_title': '이제 우리의 경험을 당신의 성공을 위해 나눕니다.',
    'story_highlight_desc': 'BrandElevate는 이론만 말하는 광고 대행사가 아닌, 당신의 비즈니스 전반을 이해하고 함께 성장하는 실행형 성장 파트너입니다.',
    'story_highlight_box': '당신은 제품에만 집중하세요. 나머지는 BrandElevate가 책임지겠습니다.',
    // CTA section
    'cta_title': '당신의 광고, 지금 제대로 가고 있나요?',
    'cta_subtitle': '광고비만 태우고 있다면 전문가의 진단이 필요합니다',
    'cta_button_down': '회사 소개',
    'cta_button_down2': '광고 제안서 다운 받기',
    'cta_button': '무료 컨설팅 받기',
    // Footer
    'footer_about': 'BrandElevate',
    'footer_desc_1': 'AI 마케팅과 자동화 솔루션으로 비즈니스 성장을 혁신합니다.',
    'footer_desc_2': '데이터 기반 전략으로 브랜드 인지도, 매출, 효율을 한번에 개선합니다.',
    'footer_desc_3': 'SEO, 타겟 광고부터 업무 자동화까지, 브랜드의 잠재력을 극대화하세요.',
    'quick_links': 'Quick Links',
    'contact_us': 'Contact Us',
    'copyright': '© 2025 BrandElevate.com. All rights reserved.',
    // Language selection
    'language': '언어',
    'lang_ko': '한국어',
    'lang_en': 'English',

    // Mail popup
    'popup_title':  '무료 컨설팅 받기',
    'popup_desc':   '아래 양식을 작성해주시면 신속하게 답변해드리겠습니다.',
    'popup_submit': '메시지 보내기',

    'popup_label_lastName' : '성',
    'popup_label_firstName': '이름',
    'popup_label_email'    : '이메일',
    'popup_label_phone'    : '연락처',
    'popup_label_subject'  : '제목',
    'popup_label_message'  : '내용',
    'popup_label_company'  : '회사명'
  },
  'en': {    
    // Header and navigation
    'nav_why_us': 'Why Us',
    'nav_services': 'Business Scale-Up Solutions',
    'nav_process': 'Success Roadmap',
    'nav_story': 'Our Story',
    'nav_contact': 'Free Consulting',
    'nav_about' : 'About us',
    'nav_partner' :'Partners',
    'get_started': 'Get Started',
    'skip_to_content': 'Skip to main content',
    
    // Hero section
    'hero_title': 'Marketing + Logistics + Automation, No Need to Do Them Separately',
    'hero_subtitle': 'From website creation, ad campaigns, SEO, logistics systems, to automated operations -\n Brandelevate connects everything for you.',
    'hero_button': 'Get Your Brand Diagnosis',
    
    // Why Different section    
    'why_different_title': 'The Decisive Difference from Other Marketing Agencies',
    'why_different_subtitle': '20 years of hands-on experience looking at the entire business beyond simple advertising makes the difference.',
    'real_profit_title': '\'Real Profit\' Optimization',
    'real_profit_desc': 'We don\'t settle for high advertising return on ad spend (ROAS), but design campaigns that maximize net profit by calculating actual margins considering logistics costs.',
    'logistics_targeting_title': 'Logistics Data-Based Targeting',
    'logistics_targeting_desc': 'We target \'high-profitability regions\' with fast delivery and low return rates. We have that data.',
    'conversion_title': 'Increased Purchase Conversion Rate',
    'conversion_desc': 'Fast delivery and stable fulfillment greatly influence customers\' purchase decisions. We design the perfect experience from advertising to delivery.',
    // Services section
    'services_title': 'Our Services',
    'services_subtitle': 'We create your business growth with data-driven performance marketing.',
    'seo_title': 'Search Engine Optimization (SEO)',
    'seo_desc': 'Create sustainable organic growth by improving search rankings with advanced SEO strategies. Includes technical SEO audits and improvements, keyword research and content strategy, backlink building and authority enhancement.',
    'google_ads_title': 'Google Ads',
    'google_ads_desc': 'Drive quality targeted traffic with data-driven campaigns that maximize ROI. Provides search, display, shopping campaigns, remarketing strategy development, A/B testing and performance optimization.',
    'ai_marketing_title': 'AI Marketing',
    'ai_marketing_desc': 'Personalize and optimize marketing messages by analyzing customer behavior with AI. Includes customer segmentation and predictive modeling, personalized message automation, AI-based ad copy generation.',
    'webpage_dev_title': 'Webpage Development',
    'webpage_dev_desc': 'Build responsive websites with high conversion rates to provide excellent user experience. Provides Shopify store building and tuning, landing page creation and optimization, website speed and performance improvements.',
    'ai_automation_title': 'AI Automation',
    'ai_automation_desc': 'Increase business efficiency by automating repetitive tasks with intelligent AI solutions. Provides marketing report automation, customer service automation, business process automation consulting.',
    'analytics_title': 'Performance Analytics',
    'analytics_desc': 'Help optimize strategies with detailed performance reports and actionable data. Provides integrated data dashboard construction, advertising-logistics data linkage analysis, business growth consulting.',
    'learn_more': 'Learn more →',
    // All-in-One section
    'all_in_one_title': 'Our Secret Weapon: All In One',
    'all_in_one_subtitle': '\"From opening shopping malls to logistics and advertising.\" The technology to directly execute all these processes and integrate data is our real weapon.',
    'shopping_mall_title': 'Shopping Mall Opening',
    'shopping_mall_desc': 'From Shopify store building to optimization, we prepare the perfect foundation for sales.',
    'logistics_automation_title': 'Logistics Automation',
    'logistics_automation_desc': 'Support stable operations by automating the entire complex logistics process from orders, delivery, to customs clearance.',
    'performance_ads_title': 'Performance Advertising',
    'performance_ads_desc': 'Optimize advertising campaigns based on actual profits by linking with logistics data.',
    'ai_automation_2_title': 'AI Automation',
    'ai_automation_2_desc': 'Maximize business efficiency by automating repetitive tasks such as customer service and reporting.',
    // Process section
    
    'process_title': '4-Step Process Proven by Data',
    'process_subtitle': 'We don\'t work by intuition. All decisions are made based on data.',
    'step1_title': 'Business & Logistics Diagnosis',
    'step1_desc': 'We diagnose the entire business including not only advertising accounts but also logistics costs, inventory, and delivery efficiency.',
    'step2_title': 'Integrated Strategy Development',
    'step2_desc': 'Based on diagnostic results, we design customized growth strategies covering advertising, SEO, and logistics strategies.',
    'step3_title': 'Campaign Execution and Optimization',
    'step3_desc': 'Execute advertising campaigns according to the designed strategy and continuously optimize through real-time data analysis.',
    'step4_title': 'Performance Measurement and Reporting',
    'step4_desc': 'Regularly provide transparent reports from a business profit perspective, not just simple advertising performance.',
    // Company Story section
    'company_story_title': 'Before being advertising experts, we were \'sellers\' like you',
    'story1_title': '2000, Starting in Chicago',
    'story1_desc1': 'BrandElevate started by directly experiencing everything about online business. Selling brands like Polo Ralph Lauren to Korea, we directly experienced all e-commerce processes from website building, advertising execution, inventory management, to customer delivery.',
    'story1_desc2': 'Unsold inventory, complex customs procedures, unexpected returns, and sales that didn\'t rise despite burning advertising costs. This 20 years of hands-on experience is our strongest weapon that other advertising agencies cannot have.',
    'story2_title': 'Hands-on Experience Proven by Technology',
    'story2_desc1': 'Realizing that successful e-commerce cannot separate advertising, logistics, and customer service, we directly created an automation platform that ties all processes from \"shopping mall opening → delivery/customs automation → marketing support\" into one system.',
    'story2_desc2': 'BrandElevate creates substantial results with insight that looks at the entire business, not just simple marketing.',
    'story_highlight_title': 'Now we share our experience for your success.',
    'story_highlight_desc': 'BrandElevate is not an advertising agency that only talks theory, but an execution-type growth partner that understands your overall business and grows together.',
    'story_highlight_box': 'You focus only on your products. BrandElevate will take responsibility for the rest.',
    // CTA section    
    'cta_title': 'Is your advertising on the right track?',
    'cta_subtitle': 'If you\'re only burning ad spend, you need an expert diagnosis.',
    'cta_button_down': 'About Us',
    'cta_button_down2': 'Download Ad Proposal',
    'cta_button': 'Get Free Consultation',
    // Footer
    'footer_about': 'BrandElevate',
    'footer_desc_1': 'Innovating business growth with AI marketing and automation solutions.',
    'footer_desc_2': 'Improving brand awareness, sales, and efficiency with data-driven strategies.',
    'footer_desc_3': 'Maximize your brand\'s potential, from SEO and targeted ads to workflow automation.',
    'quick_links': 'Quick Links',
    'contact_us': 'Contact Us',
    'copyright': '© 2025 BrandElevate.com. All rights reserved.',
    // Language selection
    
    'language': 'Language',
    'lang_ko': '한국어',
    'lang_en': 'English',

    /* mail popup */
    'popup_title':  'Get Free Consultation',
    'popup_desc':   'Please fill out the form below and we’ll respond promptly.',
    'popup_submit': 'Send Message',

    'popup_label_lastName' : 'Last Name',
    'popup_label_firstName': 'First Name',
    'popup_label_email'    : 'Email',
    'popup_label_phone'    : 'Phone',
    'popup_label_subject'  : 'Subject',
    'popup_label_message'  : 'Message',
    'popup_label_company'  : 'Company'
  }
};

document.addEventListener("DOMContentLoaded", function() {
  // 언어 선택기 초기화 (Initialize language selector)
  initLanguageSelector();
  
  // 기본 언어로 텍스트 설정 (Set text in default language)
  setLanguage(currentLanguage);
  
  // Check if particles.js container exists
  if (document.getElementById('particles-js')) {
    // Initialize particles.js with optimized settings
    initParticles();
    
    // Initialize enhanced gold dust effects
    initGoldDustEffects();
  }
  
  // Initialize scroll animations
  setTimeout(function() {
    initScrollAnimations();
  }, 500); // Add a small delay to ensure DOM is fully loaded
    
  // Initialize interactive features
  initInteractions();

  initEmailPopup(); 

});

/**
 * Initialize particles.js with optimized settings
 */
function initParticles() {
  try {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 120, // Reduced for better performance
          "density": {
            "enable": true,
            "value_area": 1000
          }
        },
        "color": {
          "value": ["#ffd700", "#ffed4e", "#d4af37", "#f0e68c"]
        },
        "shape": {
          "type": ["circle"],
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.4,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 0.5,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1.5,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "top",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "repulse": {
            "distance": 150,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": false // Disabled for better performance
    });
    console.log("Particles.js initialized successfully");
  } catch (error) {
    console.error("Error initializing particles.js:", error);
  }
}

/**
 * Initialize gold dust effects
 */
function initGoldDustEffects() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Add keyframes for animations
  addKeyframesStyles();
  
  // Create gold dust clouds for visual depth
  createGoldDustClouds(hero);
  
  // Create light flares for focus points
  createLightFlares(hero);
  
  // Initialize dust particle effect
  createGoldDustParticles(hero);
  
  // Add interactive light trail effect on non-mobile devices
  if (window.innerWidth > 768) {
    addLightTrailEffect(hero);
  }
}

/**
 * Add keyframes styles for animations
 */
function addKeyframesStyles() {
  const style = document.createElement('style');
  style.textContent = `
    /* Cloud floating animation */
    @keyframes cloudFloat {
      0% {
        transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
        opacity: 0.4;
      }
      50% {
        transform: translateY(-45px) translateX(15px) scale(1.1) rotate(3deg);
        opacity: 0.7;
      }
      100% {
        transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
        opacity: 0.4;
      }
    }
    
    /* Faster floating animation for foreground elements */
    @keyframes cloudFloatFast {
      0% {
        transform: translateY(0px) translateX(0px) scale(1);
        opacity: 0.5;
      }
      50% {
        transform: translateY(-30px) translateX(-10px) scale(1.1);
        opacity: 0.8;
      }
      100% {
        transform: translateY(0px) translateX(0px) scale(1);
        opacity: 0.5;
      }
    }
    
    /* Light flare pulsing animation */
    @keyframes flarePulse {
      0% {
        transform: scale(0.8);
        opacity: 0.3;
        filter: blur(5px);
      }
      50% {
        transform: scale(1.3);
        opacity: 0.7;
        filter: blur(8px);
      }
      100% {
        transform: scale(0.8);
        opacity: 0.3;
        filter: blur(5px);
      }
    }
    
    /* Gold dust particle animation */
    @keyframes goldDustRise {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }
      30% {
        opacity: 0.8;
      }
      80% {
        opacity: 0.4;
      }
      100% {
        transform: translateY(-100px) translateX(var(--tx));
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * Create gold dust clouds for visual depth
 * @param {HTMLElement} hero - The hero section element
 */
function createGoldDustClouds(hero) {
  // Determine number of clouds based on screen size
  const isDesktop = window.innerWidth >= 768;
  const backgroundClouds = isDesktop ? 6 : 3;
  const foregroundClouds = isDesktop ? 4 : 2;
  
  // Create background layer clouds
  for (let i = 0; i < backgroundClouds; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'gold-cloud layer-1';
    
    const size = Math.random() * 180 + 120;
    const x = Math.random() * 120 - 10;
    const y = 40 + Math.random() * 60;
    
    Object.assign(cloud.style, {
      position: 'absolute',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: '1',
      width: size + 'px',
      height: size * 0.6 + 'px',
      left: x + '%',
      bottom: y + '%',
      background: `radial-gradient(ellipse at center, 
        rgba(255, 215, 0, ${0.1 + Math.random() * 0.1}) 0%, 
        rgba(212, 175, 55, ${0.07 + Math.random() * 0.05}) 40%, 
        transparent 75%)`,
      filter: 'blur(8px)',
      transform: `rotate(${Math.random() * 360}deg)`,
      animation: `cloudFloat ${12 + Math.random() * 8}s ease-in-out infinite ${Math.random() * 5}s`
    });
    
    hero.appendChild(cloud);
  }
  
  // Create foreground layer clouds
  for (let i = 0; i < foregroundClouds; i++) {
    const cloud = document.createElement('div');
    cloud.className = 'gold-cloud layer-2';
    
    const size = Math.random() * 100 + 60;
    const x = Math.random() * 100;
    const y = 20 + Math.random() * 40;
    
    Object.assign(cloud.style, {
      position: 'absolute',
      borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
      pointerEvents: 'none',
      zIndex: '2',
      width: size + 'px',
      height: size * 0.7 + 'px',
      left: x + '%',
      bottom: y + '%',
      background: `radial-gradient(ellipse at center, 
        rgba(255, 215, 0, ${0.18 + Math.random() * 0.12}) 0%, 
        rgba(255, 235, 59, ${0.12 + Math.random() * 0.08}) 30%, 
        transparent 70%)`,
      filter: 'blur(3px)',
      transform: `rotate(${Math.random() * 360}deg)`,
      animation: `cloudFloatFast ${8 + Math.random() * 5}s ease-in-out infinite ${Math.random() * 3}s`
    });
    
    hero.appendChild(cloud);
  }
}

/**
 * Create light flares for focus points
 * @param {HTMLElement} hero - The hero section element
 */
function createLightFlares(hero) {
  for (let i = 0; i < 3; i++) {
    const flare = document.createElement('div');
    flare.className = 'light-flare';
    
    const size = Math.random() * 60 + 30;
    const x = 10 + Math.random() * 80;
    const y = 5 + Math.random() * 20;
    
    Object.assign(flare.style, {
      position: 'absolute',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: '2',
      width: size + 'px',
      height: size + 'px',
      left: x + '%',
      bottom: y + '%',
      background: `radial-gradient(circle, 
        rgba(255, 255, 220, 0.5) 0%, 
        rgba(255, 215, 0, 0.3) 30%, 
        rgba(255, 215, 0, 0.1) 60%,
        transparent 80%)`,
      filter: 'blur(5px)',
      animation: `flarePulse ${4 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 2}s`
    });
    
    hero.appendChild(flare);
  }
}

/**
 * Create gold dust particles
 * @param {HTMLElement} hero - The hero section element
 */
function createGoldDustParticles(hero) {
  const particleContainer = document.createElement('div');
  particleContainer.className = 'dust-particle-container';
  
  Object.assign(particleContainer.style, {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: '3'
  });
  
  hero.appendChild(particleContainer);
  
  // Determine performance settings based on device
  const isDesktop = window.innerWidth >= 768;
  const particlesPerBatch = isDesktop ? 3 : 2;
  const intervalFrequency = isDesktop ? 300 : 400; // ms
  
  // Create new particles periodically
  const particleInterval = setInterval(() => {
    // Create particles per interval
    for (let i = 0; i < particlesPerBatch; i++) {
      const particle = document.createElement('div');
      particle.className = 'gold-dust-particle';
      
      const size = Math.random() * 4 + 1;
      const x = Math.random() * 100;
      const txVal = -50 + Math.random() * 100; // Random x drift
      
      Object.assign(particle.style, {
        position: 'absolute',
        borderRadius: '50%',
        width: size + 'px',
        height: size + 'px',
        left: x + '%',
        bottom: '0',
        background: `radial-gradient(circle, 
          rgba(255, 215, 0, 0.95) 0%, 
          rgba(255, 215, 0, 0.7) 50%, 
          transparent 90%)`,
        boxShadow: '0 0 4px rgba(255, 215, 0, 0.9)'
      });
      
      particle.style.setProperty('--tx', txVal + 'px');
      
      // Random animation duration
      const duration = 3 + Math.random() * 3;
      particle.style.animation = `goldDustRise ${duration}s ease-out forwards`;
      
      particleContainer.appendChild(particle);
      
      // Remove particles after animation completes
      setTimeout(() => {
        if (particleContainer.contains(particle)) {
          particleContainer.removeChild(particle);
        }
      }, duration * 1000);
    }
  }, intervalFrequency);
  
  // Cleanup interval when navigating away
  window.addEventListener('beforeunload', () => {
    clearInterval(particleInterval);
  });
  
  // Adjust interval if window is resized
  window.addEventListener('resize', () => {
    clearInterval(particleInterval);
    // Restart with new settings
    createGoldDustParticles(hero);
  }, { once: true });
}

/**
 * Add interactive light trail effect
 * @param {HTMLElement} hero - The hero section element
 */
function addLightTrailEffect(hero) {
  let trailPoints = [];
  let isMoving = false;
  let animationFrameId;
  
  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Limit number of points added per movement for performance
    if (trailPoints.length < 30) {
      trailPoints.push({x, y, age: 0, size: 10 + Math.random() * 15});
    }
    isMoving = true;
  });
  
  hero.addEventListener('mouseleave', () => {
    isMoving = false;
  });
  
  // Render and update trail points
  function updateTrail() {
    const canvas = document.querySelector('#particles-js canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      
      // Update trail points
      for (let i = 0; i < trailPoints.length; i++) {
        const point = trailPoints[i];
        point.age++;
        
        if (point.age > 20) {
          trailPoints.splice(i, 1);
          i--;
        } else {
          // Draw glowing point
          const opacity = 1 - point.age / 20;
          const size = point.size * (1 - point.age / 20);
          
          const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size);
          gradient.addColorStop(0, `rgba(255, 255, 200, ${opacity * 0.8})`);
          gradient.addColorStop(0.5, `rgba(255, 215, 0, ${opacity * 0.5})`);
          gradient.addColorStop(1, `rgba(255, 215, 0, 0)`);
          
          ctx.save();
          ctx.globalCompositeOperation = 'lighter';
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      
      // Limit number of trail points for performance
      if (trailPoints.length > 30) {
        trailPoints = trailPoints.slice(-30);
      }
    }
    
    animationFrameId = requestAnimationFrame(updateTrail);
  }
  
  updateTrail();
  
  // Cleanup animation frame when navigating away
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(animationFrameId);
  });
}

/**
 * 언어 선택기 초기화 (Initialize language selector)
 */
function initLanguageSelector() {
  // 헤더에 언어 선택기 추가 (Add language selector to header)
  const header = document.querySelector('header');
  if (header) {
    const languageSelector = document.createElement('div');
    languageSelector.className = 'language-selector';
    languageSelector.innerHTML = `
      <button class="language-toggle" aria-label="Toggle language menu" aria-expanded="false">
        <span class="current-language">한국어</span>
        <span class="toggle-icon">▼</span>
      </button>
      <div class="language-dropdown">
        <button class="language-option" data-lang="ko">한국어</button>
        <button class="language-option" data-lang="en">English</button>
      </div>
    `;
    
    // 모바일 메뉴 토글 버튼 앞에 삽입 (Insert before mobile menu toggle button)
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    if (mobileMenuBtn) {
      header.insertBefore(languageSelector, mobileMenuBtn);
    } else {
      // 또는 헤더의 마지막 자식으로 추가 (Or append as last child of header)
      header.appendChild(languageSelector);
    }
    
    // 언어 토글 버튼에 클릭 이벤트 추가 (Add click event to language toggle button)
    const languageToggle = languageSelector.querySelector('.language-toggle');
    const languageDropdown = languageSelector.querySelector('.language-dropdown');
    
    languageToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // 토글 드롭다운 (Toggle dropdown)
      this.setAttribute('aria-expanded', !isExpanded);
      languageDropdown.classList.toggle('active');
    });
    
    // 언어 옵션 클릭 이벤트 (Language option click event)
    const languageOptions = languageSelector.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
      option.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        
        // 현재 언어 업데이트 및 UI 변경 (Update current language and UI)
        setLanguage(lang);
        
        // 드롭다운 닫기 (Close dropdown)
        languageToggle.setAttribute('aria-expanded', 'false');
        languageDropdown.classList.remove('active');
      });
    });
    
    // 언어 선택기 외부 클릭 시 드롭다운 닫기 (Close dropdown when clicking outside)
    document.addEventListener('click', function(event) {
      if (!languageSelector.contains(event.target)) {
        languageToggle.setAttribute('aria-expanded', 'false');
        languageDropdown.classList.remove('active');
      }
    });
  }
}

/**
 * 언어 설정 및 텍스트 변경 (Set language and update text)
 * @param {string} lang - 언어 코드 (Language code) ('ko' or 'en')
 */
function setLanguage(lang) {
  // 유효한 언어 코드 확인 (Check if it's a valid language code)
  if (!languageData[lang]) return;
  
  // 현재 언어 업데이트 (Update current language)
  currentLanguage = lang;
  
  // 로컬 스토리지에 언어 저장 (Save language preference to localStorage)
  try {
    localStorage.setItem('brandElevateLanguage', lang);
  } catch (e) {
    console.warn('localStorage is not available:', e);
  }
  
  // 현재 언어 텍스트 업데이트 (Update current language text)
  const currentLangDisplay = document.querySelector('.current-language');
  if (currentLangDisplay) {
    currentLangDisplay.textContent = lang === 'ko' ? '한국어' : 'English';
  }
  
  // 문서의 언어 속성 변경 (Update document language attribute)
  document.documentElement.setAttribute('lang', lang);
  
  // 페이지 내 모든 텍스트 요소 업데이트 (Update all text elements on the page)
  updatePageTexts();
}

/**
 * 페이지 내 모든 텍스트 업데이트 (Update all text elements on the page)
 */
function updatePageTexts() {
  const texts = languageData[currentLanguage];
  
  // 네비게이션 & 헤더 (Navigation & Header)

  updateElementText('.nav-links li:nth-child(1) a', texts.nav_services);
  updateElementText('.nav-links li:nth-child(2) a', texts.nav_story);
  updateElementText('.nav-links li:nth-child(3) a', texts.nav_about);
  updateElementText('.nav-links li:nth-child(4) a', texts.nav_partner);
  updateElementText('.nav-links li:nth-child(5) a', texts.nav_contact);

  updateElementText('.skip-to-content', texts.skip_to_content);

  // 히어로 섹션 (Hero Section)
  updateElementText('.hero h1', texts.hero_title);
  updateElementText('.hero p', texts.hero_subtitle);
  updateElementText('.hero-button', texts.hero_button);

  // Why We're Different 섹션 (Why We're Different Section)
  updateElementText('.why-different h2', texts.why_different_title);
  updateElementText('.why-different .section-subtitle', texts.why_different_subtitle);
  updateElementText('.difference-card:nth-child(1) h3', texts.real_profit_title);
  updateElementText('.difference-card:nth-child(1) p', texts.real_profit_desc);
  updateElementText('.difference-card:nth-child(2) h3', texts.logistics_targeting_title);
  updateElementText('.difference-card:nth-child(2) p', texts.logistics_targeting_desc);
  updateElementText('.difference-card:nth-child(3) h3', texts.conversion_title);
  updateElementText('.difference-card:nth-child(3) p', texts.conversion_desc);

  // 서비스 섹션 (Services Section)
  updateElementText('.services h2', texts.services_title);
  updateElementText('.services .section-subtitle', texts.services_subtitle);
  
  // 각 서비스 카드 (Each service card)
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length >= 6) {
    updateElementText('.service-card:nth-child(1) .service-title', texts.seo_title);
    updateElementText('.service-card:nth-child(1) .service-description', texts.seo_desc);
    updateElementText('.service-card:nth-child(2) .service-title', texts.google_ads_title);
    updateElementText('.service-card:nth-child(2) .service-description', texts.google_ads_desc);
    updateElementText('.service-card:nth-child(3) .service-title', texts.ai_marketing_title);
    updateElementText('.service-card:nth-child(3) .service-description', texts.ai_marketing_desc);
    updateElementText('.service-card:nth-child(4) .service-title', texts.webpage_dev_title);
    updateElementText('.service-card:nth-child(4) .service-description', texts.webpage_dev_desc);
    updateElementText('.service-card:nth-child(5) .service-title', texts.ai_automation_title);
    updateElementText('.service-card:nth-child(5) .service-description', texts.ai_automation_desc);
    updateElementText('.service-card:nth-child(6) .service-title', texts.analytics_title);
    updateElementText('.service-card:nth-child(6) .service-description', texts.analytics_desc);
  }

  // All-in-One 섹션 (All-in-One Section)
  updateElementText('.all-in-one h2', texts.all_in_one_title);
  updateElementText('.all-in-one .section-subtitle', texts.all_in_one_subtitle);
  updateElementText('.solution-item:nth-child(1) h3', texts.shopping_mall_title);
  updateElementText('.solution-item:nth-child(1) p', texts.shopping_mall_desc);
  updateElementText('.solution-item:nth-child(2) h3', texts.logistics_automation_title);
  updateElementText('.solution-item:nth-child(2) p', texts.logistics_automation_desc);
  updateElementText('.solution-item:nth-child(3) h3', texts.performance_ads_title);
  updateElementText('.solution-item:nth-child(3) p', texts.performance_ads_desc);
  updateElementText('.solution-item:nth-child(4) h3', texts.ai_automation_2_title);
  updateElementText('.solution-item:nth-child(4) p', texts.ai_automation_2_desc);

  // 프로세스 섹션 (Process Section)
  updateElementText('.process-section h2', texts.process_title);
  updateElementText('.process-section .section-subtitle', texts.process_subtitle);
  updateElementText('.process-step:nth-child(1) h3', texts.step1_title);
  updateElementText('.process-step:nth-child(1) p', texts.step1_desc);
  updateElementText('.process-step:nth-child(2) h3', texts.step2_title);
  updateElementText('.process-step:nth-child(2) p', texts.step2_desc);
  updateElementText('.process-step:nth-child(3) h3', texts.step3_title);
  updateElementText('.process-step:nth-child(3) p', texts.step3_desc);
  updateElementText('.process-step:nth-child(4) h3', texts.step4_title);
  updateElementText('.process-step:nth-child(4) p', texts.step4_desc);

  // 회사소개 섹션 (Company Story Section)
  updateElementText('.company-story > h2', texts.company_story_title);
  updateElementText('.zigzag-row:nth-of-type(1) .zigzag-content h3', texts.story1_title);
  updateElementText('.zigzag-row:nth-of-type(1) .zigzag-content p:nth-of-type(1)', texts.story1_desc1);
  updateElementText('.zigzag-row:nth-of-type(1) .zigzag-content p:nth-of-type(2)', texts.story1_desc2);
  updateElementText('.zigzag-row.reverse .zigzag-content h3', texts.story2_title);
  updateElementText('.zigzag-row.reverse .zigzag-content p:nth-of-type(1)', texts.story2_desc1);
  updateElementText('.zigzag-row.reverse .zigzag-content p:nth-of-type(2)', texts.story2_desc2);
  updateElementText('.story-highlight h3', texts.story_highlight_title);
  updateElementText('.story-highlight > p', texts.story_highlight_desc);
  updateElementText('.highlight-box p strong', texts.story_highlight_box);
  
  // CTA 섹션 (Call to Action Section)
  updateElementText('.cta-section h2', texts.cta_title);
  updateElementText('.cta-section p', texts.cta_subtitle);
  updateElementText('.cta-button-down', texts.cta_button_down);
  updateElementText('.cta-button-down2', texts.cta_button_down2);
  updateElementText('.cta-button-large', texts.cta_button);
  
  // 푸터 (Footer)
  updateElementText('.footer-section:nth-child(1) h3', texts.footer_about);
  updateElementText('.footer-description-list li:nth-child(1)', texts.footer_desc_1);
  updateElementText('.footer-description-list li:nth-child(2)', texts.footer_desc_2);
  updateElementText('.footer-description-list li:nth-child(3)', texts.footer_desc_3);
  
  updateElementText('.footer-section:nth-child(2) h4', texts.quick_links);
  
  // Footer Quick Links
  updateElementText('.footer-section:nth-child(2) li:nth-child(1) a', texts.nav_why_us);
  updateElementText('.footer-section:nth-child(2) li:nth-child(2) a', texts.nav_services);
  updateElementText('.footer-section:nth-child(2) li:nth-child(3) a', texts.nav_process);
  updateElementText('.footer-section:nth-child(2) li:nth-child(4) a', texts.nav_story);
  updateElementText('.footer-section:nth-child(2) li:nth-child(5) a', texts.nav_contact);

  updateElementText('.footer-section:nth-child(3) h4', texts.contact_us);
  updateElementText('.footer-bottom p', texts.copyright);

  // 언어 선택기 (Language Selector)
  updateElementText('.language-option[data-lang="ko"]', texts.lang_ko);
  updateElementText('.language-option[data-lang="en"]', texts.lang_en);

  updateElementText('.email-popup .popup-title',  texts.popup_title);
  updateElementText('.email-popup .popup-desc',   texts.popup_desc);
  updateElementText('#send-email-btn',            texts.popup_submit);


  updateElementText('label[for="lastName"]',   texts.popup_label_lastName);
  updateElementText('label[for="firstName"]',  texts.popup_label_firstName);
  updateElementText('label[for="email"]',      texts.popup_label_email);
  updateElementText('label[for="phone"]',      texts.popup_label_phone);
  updateElementText('label[for="subject"]',    texts.popup_label_subject);
  updateElementText('label[for="message"]',    texts.popup_label_message);
  updateElementText('label[for="company"]',    texts.popup_label_company);
/*
  const setPH = (id, val) => document.getElementById(id).placeholder = val;
  setPH('lastName',  texts.popup_label_lastName);
  setPH('firstName', texts.popup_label_firstName);
  setPH('email',     texts.popup_label_email);
  setPH('phone',     texts.popup_label_phone);
  setPH('subject',   texts.popup_label_subject);
  setPH('message',   texts.popup_label_message);
  setPH('message',   texts.popup_label_company);
  */
}


/**
 * 요소의 텍스트 업데이트 (Update element text)
 * @param {string} selector - 요소 선택자 (Element selector)
 * @param {string} text - 새로운 텍스트 (New text)
 */
function updateElementText(selector, text) {
  // 선택자가 문자열인지 확인 (Check if selector is a string)
  if (typeof selector !== 'string') {
    console.error('Selector must be a string:', selector);
    return;
  }
  
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

/**
 * 언어 설정 불러오기 (Load language setting)
 */
function loadLanguagePreference() {
  // 로컬 스토리지에서 저장된 언어 설정 불러오기 (Load saved language preference from localStorage)
  try {
    const savedLang = localStorage.getItem('brandElevateLanguage');
    if (savedLang && languageData[savedLang]) {
      currentLanguage = savedLang;
    }
  } catch (e) {
    console.warn('localStorage is not available:', e);
    // Use default language (Korean)
  }
}

/**
 * Initialize scroll animations for elements
 */
function initScrollAnimations() {
  // Get all elements that need animation
  const animatedElements = document.querySelectorAll(
    '.story-left, .story-section, .story-image, .story-highlight, .ceo-portrait, h1, h2'
  );
    
    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If element is in view
        if (entry.isIntersecting) {
          // Add animation class
          entry.target.classList.add('animate');
          // Once animated, stop observing this element
          observer.unobserve(entry.target);
        }
      });
    }, {
    // Element is considered in view when 20% visible
    threshold: 0.2,
    // Start animation slightly before element enters viewport
    rootMargin: '0px 0px -50px 0px'
  });

  // Also observe zigzag rows
  const zigzagRows = document.querySelectorAll('.zigzag-row');
  if (zigzagRows.length > 0) {
    zigzagRows.forEach(element => {
      observer.observe(element);
    });
  }

  // Start observing each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });

  // Apply immediate animation for already visible elements
  // This ensures elements that are already in viewport on page load get animated
  animatedElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    const isVisible = (
      rect.top <= window.innerHeight && 
      rect.bottom >= 0
    );
    
    if (isVisible) {
      // Add animation class with slight delay for better effect
      setTimeout(() => {
        element.classList.add('animate');
      }, 300);
    }
  });
  
  // Create global scroll effects
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    // Parallax effect for story background
    const storySection = document.querySelector('.company-story');
    if (storySection) {
      const storyRect = storySection.getBoundingClientRect();
      if (storyRect.top < window.innerHeight && storyRect.bottom > 0) {
        const parallaxOffset = (window.innerHeight - storyRect.top) * 0.1;
        const bg = document.querySelector('.story-bg');
        if (bg) {
          bg.style.transform = `translateY(${parallaxOffset}px)`;
        }
      }
    }
  });
}

/**
 * Initialize interactive features
 */
function initInteractions() {
  // 언어 설정 불러오기 (Load language preference)
  loadLanguagePreference();
  
  // Animation for gradient text
  const heroTitle = document.querySelector('.hero h1');
  if (heroTitle) {
    setInterval(() => {
      heroTitle.style.backgroundPosition = `${Math.random() * 100}% 50%`;
    }, 3000);
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
          
          // Close mobile menu when clicking a navigation link
          const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
          const navLinks = document.querySelector('.nav-links');
          if (mobileMenuBtn && mobileMenuBtn.classList.contains('active')) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
          }
        }
      }
    });
  });
  
  // Mobile navigation menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    // Set correct initial state
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    
    mobileMenuBtn.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Toggle menu state
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
      
      // Update accessibility attributes
      this.setAttribute('aria-expanded', !isExpanded);
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (navLinks.classList.contains('active') &&
          !navLinks.contains(event.target) &&
          !mobileMenuBtn.contains(event.target)) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/**
 * 이메일 팝업 및 EmailJS 전송 기능 초기화
 */
function initEmailPopup() {
  // --- EmailJS 설정 ---
  // 중요: 아래 값들을 자신의 EmailJS 계정 정보로 반드시 교체하세요.
  const serviceID = 'service_sy3t3st';
  const templateID = 'template_vd6aicd';
  const publicKey = 'otj91E1g0eVHidqoe';

  // EmailJS 초기화
  (function(){
      emailjs.init({
          publicKey: publicKey,
      });
  })();
  
  // --- DOM 요소 선택 ---
  const popupOverlay = document.getElementById('email-popup-overlay');
  const contactForm = document.getElementById('contact-form');
  const sendButton = document.getElementById('send-email-btn');
  const formStatus = document.getElementById('form-status');
  const closePopupButton = document.getElementById('close-popup-btn');
  const emailPopupTriggers = document.querySelectorAll('.open-email-popup');

  // --- 이벤트 리스너 ---
  
  // 팝업 열기
  emailPopupTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
          e.preventDefault();
          popupOverlay.classList.add('visible');
      });
  });

  // 팝업 닫기 함수
  const closePopup = () => {
      popupOverlay.classList.remove('visible');
  }

  // 닫기 버튼 또는 오버레이 클릭 시 팝업 닫기
  closePopupButton.addEventListener('click', closePopup);
  popupOverlay.addEventListener('click', (e) => {
      // 팝업 콘텐츠가 아닌 배경(오버레이)을 클릭했을 때만 닫힘
      if (e.target === popupOverlay) {
          closePopup();
      }
  });

  // 폼 제출 처리
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // 간단한 유효성 검사
      if (!this.firstName.value || !this.lastName.value || !this.email.value || !this.subject.value || !this.message.value) {
          formStatus.textContent = '모든 필수 항목을 입력해주세요.';
          formStatus.style.color = 'red';
          return;
      }

      // EmailJS로 메일 전송
      sendButton.disabled = true;
      sendButton.textContent = '전송 중...';
      formStatus.textContent = '';
      
      emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
              sendButton.disabled = false;
              sendButton.textContent = 'Send Message';
              formStatus.textContent = '메일이 성공적으로 전송되었습니다!';
              formStatus.style.color = 'green';
              
              contactForm.reset(); // 폼 초기화
              
              // 2초 후 팝업 닫기
              setTimeout(() => {
                  closePopup();
                  formStatus.textContent = ''; // 상태 메시지 초기화
              }, 2000);
              
          }, (err) => {
              sendButton.disabled = false;
              sendButton.textContent = 'Send Message';
              formStatus.textContent = '메일 전송에 실패했습니다. ' + JSON.stringify(err);
              formStatus.style.color = 'red';
          });
  });
}
