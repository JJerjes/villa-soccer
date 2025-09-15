const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('#nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('open');

    if (nav.classList.contains('open')) {
        main.style.paddingTop = '230px';
    } else {
        main.style.paddingTop = '80px';
    }
});