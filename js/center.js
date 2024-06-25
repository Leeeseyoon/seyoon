document.addEventListener('DOMContentLoaded', () => {
    const centralLine = document.getElementById('central-line');
    let lastScrollTop = 0;
    let isScrolling;

    window.addEventListener('scroll', () => {
        // 현재 스크롤 위치를 가져옴
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let docHeight = document.documentElement.scrollHeight;
        let winHeight = window.innerHeight;

        // 스크롤 방향을 확인하여 내려가는 경우에만 처리
        if (scrollTop > lastScrollTop) {
            // 페이지의 맨 아래에 도달했는지 여부 확인
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                // 맨 아래에 도달하면 중앙선의 높이를 전체 화면으로 설정
                centralLine.style.height = '100vh';
            } else {
                // 스크롤 할 때 중앙선의 높이를 점진적으로 증가
                centralLine.style.height = `${Math.min(50, centralLine.clientHeight + 5)}vh`;

                // 이전 타임아웃을 지우고 새로운 타임아웃을 설정
                clearTimeout(isScrolling);
                isScrolling = setTimeout(() => {
                    // 스크롤이 멈추면 중앙선을 천천히 줄임
                    centralLine.style.height = '0';
                }, 500); // 0.5초 후에 중앙선을 줄이기 시작
            }
        }

        // 마지막 스크롤 위치 업데이트
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});