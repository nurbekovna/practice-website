
function playAnimation1() {
    anime({
        targets: '.header-line',
        translateY: ['-50%', '0%'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.header-logo img',
        rotate: '1turn',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.nav a',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.cart-img',
        rotate: '1turn',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.phone',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.btn',
        translateX: [20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '#burger img',
        rotate: '1turn',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '#menu',
        translateY: ['-100%', '0%'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.header-down',
        translateY: ['50%', '0%'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.header-title',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.header-subtitle, .header-suptitle',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.header-button',
        translateX: [20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutExpo',
    });
}

document.addEventListener('DOMContentLoaded', function () {
    playAnimation1();
});

//АНИМАЦИЯ И ОБРАБОТКА ДЛЯ БРОНИ
document.addEventListener('DOMContentLoaded', function () {
    const blockHolder = document.querySelector('.block-holder');
    const leftTitle = document.querySelector('.left-title');
    const leftText = document.querySelector('.left-text');
    const rightButton = document.querySelector('.right-button');

    function playAnimationIfVisible() {
        const elementTop = blockHolder.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            playAnimation();
            window.removeEventListener('scroll', playAnimationIfVisible);
        }
    }

    window.addEventListener('scroll', playAnimationIfVisible);

    playAnimationIfVisible();
});

function playAnimation() {
    anime({
        targets: '.block-holder',
        translateY: ['-=50%', '0%'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.left-title, .left-text',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.right-button',
        translateX: [20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutExpo',
    });

}


document.addEventListener('DOMContentLoaded', function () {
    const blockHolder = document.querySelector('.history-holder');
    const leftTitle = document.querySelector('.history-title');
    const leftText = document.querySelector('.history-images img');

    function playAnimationIfVisible() {
        const elementTop = blockHolder.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            playAnimation2();
            window.removeEventListener('scroll', playAnimationIfVisible);
        }
    }

    window.addEventListener('scroll', playAnimationIfVisible);

    playAnimationIfVisible();
});

function playAnimation2() {
    anime({
        targets: '.history-holder',
        translateY: ['-50%', '0%'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.history-title, .history-desc, .number-item',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.history-images img',
        translateX: [20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutExpo',
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const blockHolder = document.querySelector('.menu');
    const leftTitle = document.querySelector('.menu-title');
    const leftText = document.querySelector('.menu-item');

    function playAnimationIfVisible() {
        const elementTop = blockHolder.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
            playAnimation4();
            window.removeEventListener('scroll', playAnimationIfVisible);
        }
    }

    window.addEventListener('scroll', playAnimationIfVisible);

    playAnimationIfVisible();
});

function playAnimation4() {
    anime({
        targets: '.menu',
        translateY: ['-50%', '0%'],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.menu-title',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutExpo',
    });

    anime({
        targets: '.menu-item',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 500,
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
    });
}
