<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>

        const aniDuration = 3;
        gsap.to('.box', {duration: aniDuration, x: 300, y: 300, rotation:360, ease:'elastic.out(1,0.3)', yoyo:true, repeat:2})

        const horizontal = document.querySelector('.horizontal');
        const vertical = document.querySelector('.vertical');
        const target = document.querySelector('.target');
        const tag = document.querySelector('.tag');

        addEventListener('load', function() {
            const targetRect = target.getBoundingClientRect();
            const targetHalfWidth = targetRect.width / 2;
            const targetHalfHeight = targetRect.height / 2;

            document.addEventListener('mousemove', function(e) {
                const x = e.clientX;
                const y = e.clientY;
                console.log(`${x} ${y}`);
                vertical.style.transform = `translateX(${x}px)`;
                horizontal.style.transform = `translateY(${y}px)`;
                target.style.transform = `translate(${x - targetHalfWidth}px,${y - targetHalfHeight}px)`;
                tag.style.transform = `translate(${x}px,${y}px)`;
                tag.innerHTML = `${x}px, ${y}px`
            });
            

        })
