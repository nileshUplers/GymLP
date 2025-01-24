$(document).ready(function () {
    function toggleFillText() {
        $("code").toggleClass("fill-text");
        setTimeout(toggleFillText, 4000);
    }
    toggleFillText(); 
    $(".accordian-title").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).parent().removeClass("active");
            $(this).siblings(".accordian-content").slideUp(500);

        } else {
            $(".accordian-title").removeClass("active");
            $(this).addClass("active");
            $(this).parent().addClass("active");
            $(".accordian-content").slideUp(500);
            $(this).siblings(".accordian-content").slideDown(500);
        }
    });
});


/* Animations */
gsap.registerPlugin(ScrollTrigger);

let globalSlideX = 40;
let globalSlidey = 0;

/* Zoom */
gsap.set('.heading-wrap', { opacity: 0, duration: 5, scale: 0, ease: 'power1.out', overwrite: 'auto', });
ScrollTrigger.create({ trigger: ".hero-section", start: 'top 70%', end: 'bottom 20%',
    onEnter: () => gsap.to(".heading-wrap", { opacity: 1, scale: 1, stagger: 0.2, }),
});
gsap.set('.reach-wrap', { opacity: 0, duration: 5, scale: 0, ease: 'power1.out', overwrite: 'auto', });
ScrollTrigger.create({ trigger: ".reach-section", start: 'top 70%', end: 'bottom 20%',
    onEnter: () => gsap.to(".reach-wrap", { opacity: 1, scale: 1, stagger: 0.2, }),
});

/* Slide */
gsap.set('.services-section .left-col', { opacity: 0, duration: 3, x: -globalSlideX, ease: 'power1.out', overwrite: 'auto', });
ScrollTrigger.create({
    trigger: '.services-section',
    start: 'top 70%',
    end: 'bottom 20%',
    onEnter: () => gsap.to('.services-section .left-col', { opacity: 1, x: 0, stagger: 0.2, }),
});

gsap.set('.services-section .right-col', { opacity: 0, duration: 3, x: globalSlideX, ease: 'power1.out', overwrite: 'auto', });
ScrollTrigger.create({
    trigger: '.services-section',
    start: 'top 70%',
    end: 'bottom 20%',
    onEnter: () => gsap.to('.services-section .right-col', { opacity: 1, x: 0, stagger: 0.2, }),
});

gsap.set('.benefit-section .training-col', { opacity: 0, duration: 3, y: -globalSlidey, ease: 'none', overwrite: 'auto', });
ScrollTrigger.create({ trigger: '.benefit-section', start: 'top 70%', end: 'bottom 0%', markers: false,
    onEnter: () => gsap.to('.benefit-section .training-col', { opacity: 1, y: 0, stagger: 0.3,}),
});

gsap.set('.membership-cards .card', { opacity: 0, duration: 3, y: 0, ease: 'none', overwrite: 'auto', });
ScrollTrigger.create({ trigger: '.membership-section', start: 'top 70%', end: 'bottom 20%',
    onEnter: () => gsap.to('.membership-cards .card', { opacity: 1, y: 0, stagger: 0.3,}),
});

/* Accordian */
gsap.set('.yoga-wrap .right-col .accordian-wrap', { opacity: 0, duration: 3, x: globalSlideX, ease: 'power1.out', overwrite: 'auto', });
ScrollTrigger.create({
    trigger: '.yoga-section',
    start: 'top 70%',
    end: 'bottom 20%',
    onEnter: () => gsap.to('.yoga-wrap .right-col .accordian-wrap', { opacity: 1, x: 0, stagger: 0.2, })
});