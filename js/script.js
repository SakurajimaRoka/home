// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    // 随机语录
    const quotes = [
        "八奈见杏菜是世界上第一可爱的角色！",
        "老八的笑容由我来守护！",
        "喜欢八奈见杏菜需要理由吗？不需要！",
        "今天的努力，是为了明天能买到更多老八周边！",
        "八奈见杏菜的笑容就是我每天的动力源泉！",
        "老八的每一帧画面都值得珍藏！"
    ];
    
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = `"${quotes[randomIndex]}"`;
    }
    
    // 导航栏激活状态
    const currentPage = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage || 
           (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // 移动设备检测（防止在移动版页面重复跳转）
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    
    // 确保不会在移动版页面重定向回桌面版
    if (isMobileDevice() && window.location.pathname.endsWith('index.html')) {
        window.location.href = 'index_mobile.html';
    }
});
