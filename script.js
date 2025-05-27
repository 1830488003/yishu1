document.addEventListener('DOMContentLoaded', () => {
    const langZhButton = document.getElementById('lang-zh');
    const langEnButton = document.getElementById('lang-en');

    const translations = {
        zh: {
            home: '首页',
            biography: '艺术家介绍',
            techniques: '技法',
            gallery: '画廊',
            portfolio: '作品集',
            video: '视频',
            contacts: '联系方式',
            section1Title: '板块一',
            section1Desc: '这里是板块一的描述内容。',
            section2Title: '板块二',
            section2Desc: '这里是板块二的描述内容。',
            section3Title: '板块三',
            section3Desc: '这里是板块三的描述内容。',
            section4Title: '板块四',
            section4Desc: '这里是板块四的描述内容。',
            section5Title: '板块五',
            section5Desc: '这里是板块五的描述内容。',
            section6Title: '板块六',
            section6Desc: '这里是板块六的描述内容。',
            footerText: '&copy; 2025 艺术雕刻. 版权所有.',
            // 新增 biography.html 的翻译
            bioPageTitle: '艺术家介绍 - 艺术雕刻',
            bioHeading: '艺术家介绍',
            bioParagraph1: '这里是关于艺术家的详细介绍文字。Daniele Pozzi 是一位技艺精湛的雕刻大师，拥有多年的从业经验和无与伦比的创造力。',
            bioParagraph2: '他的作品遍布全球，深受收藏家和艺术爱好者的喜爱。每一件作品都蕴含着他对艺术的深刻理解和对生活的热爱。'
        },
        en: {
            home: 'Home',
            biography: 'Biography',
            techniques: 'Techniques',
            gallery: 'Gallery',
            portfolio: 'Portfolio',
            video: 'Video',
            contacts: 'Contacts',
            section1Title: 'Section One',
            section1Desc: 'This is the description for section one.',
            section2Title: 'Section Two',
            section2Desc: 'This is the description for section two.',
            section3Title: 'Section Three',
            section3Desc: 'This is the description for section three.',
            section4Title: 'Section Four',
            section4Desc: 'This is the description for section four.',
            section5Title: 'Section Five',
            section5Desc: 'This is the description for section five.',
            section6Title: 'Section Six',
            section6Desc: 'This is the description for section six.',
            footerText: '&copy; 2025 Art Carving. All rights reserved.',
            // Added translations for biography.html
            bioPageTitle: 'Biography - Art Carving',
            bioHeading: 'Biography',
            bioParagraph1: 'Here is a detailed introduction about the artist. Daniele Pozzi is a highly skilled master carver with years of experience and unparalleled creativity.',
            bioParagraph2: 'His works are found worldwide and are beloved by collectors and art enthusiasts alike. Each piece embodies his profound understanding of art and his passion for life.'
        }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        const elements = document.querySelectorAll('[data-lang-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
        // 更新标题语言 (优先使用页面内data-lang-key设置的标题)
        const pageTitleElement = document.querySelector('title[data-lang-key]');
        if (!pageTitleElement) { // 如果页面标题没有data-lang-key，则使用通用标题
            if (lang === 'zh') {
                document.title = '艺术雕刻';
            } else {
                document.title = 'Art Carving';
            }
        }
    }

    // Ensure buttons exist before adding event listeners
    if (langZhButton && langEnButton) {
        langZhButton.addEventListener('click', () => {
            setLanguage('zh');
            localStorage.setItem('preferredLang', 'zh');
        });

        langEnButton.addEventListener('click', () => {
            setLanguage('en');
            localStorage.setItem('preferredLang', 'en');
        });
    }

    // 页面加载时检查本地存储的语言偏好
    const preferredLang = localStorage.getItem('preferredLang');
    if (preferredLang) {
        setLanguage(preferredLang);
    } else {
        // 默认设置为中文
        setLanguage('zh');
    }
});
