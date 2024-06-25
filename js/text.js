document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('#screen3 h1');
    headers.forEach((header, index) => {
        setTimeout(() => {
            header.style.opacity = 1;
            header.style.transform = 'translateX(0)';
        }, index * 500); // 0.5초 간격으로 애니메이션 시작
    });
});
