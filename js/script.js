document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('container').style.transform = 'translateX(-50%)'; // 오른쪽으로 슬라이딩
});

let currentIndex = 0;
const nameText = `Lee Se Yoon Developer Website`.replace(/\n/g, '<br>');



const nameElement = document.getElementById('name');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const screen3 = document.getElementById('screen3');
const retroDesign = document.querySelector('.r');
const interactive = document.querySelector('.i');


// nameText를 innerHTML로 설정
nameElement.style.fontSize = '70px'; /* 원하는 크기로 조절하세요 */
nameElement.style.fontWeight = 'nomal'; /* 텍스트 굵기도 변경할 수 있습니다 */
nameElement.style.color = '#FFFFFF'; /* 텍스트 색상도 변경할 수 있습니다 */



window.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) { // 마우스 휠 아래로 스크롤
        if (currentIndex < nameText.length) {
            let charSpan = document.createElement('span');
            charSpan.textContent = nameText[currentIndex];
            charSpan.classList.add('hidden'); // 처음에는 숨기기
            nameElement.appendChild(charSpan);

            // 애니메이션 효과를 위해 약간의 딜레이를 주고 hidden 클래스를 제거
            setTimeout(() => {
                charSpan.classList.remove('hidden');
            }, 50);

            currentIndex++;
        }
    } else if (e.deltaY < 0) { // 마우스 휠 위로 스크롤
        if (currentIndex > 0) {
            currentIndex--;
            let lastChar = nameElement.lastChild;
            if (lastChar) {
                nameElement.removeChild(lastChar);
            }
        }
    }




    // 진행 상태 업데이트
    const progress = (currentIndex / nameText.length) * 100;
    progressBar.style.height = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;

    // 진행이 100%에 도달하면 screen3을 화면에 덮어씌우기
    if (progress === 100) {
        screen3.style.left = '50%';
        // 애니메이션 트리거
        retroDesign.style.animation = 'moveDown 1s forwards';
        interactive.style.animation = 'moveUp 1s forwards';
    } else {
        screen3.style.left = '100%';
        // 애니메이션을 초기 상태로 되돌림
        retroDesign.style.animation = 'none';
        interactive.style.animation = 'none';
    }
});


