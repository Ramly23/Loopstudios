const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close')
const header = document.querySelector('header');
const title = document.querySelector('#title');
const mobileLinks = document.querySelector('.mobile-links');

hamburger.addEventListener('click', function(){
    if(header.classList.contains('open')) {
        header.classList.remove('open');
    }
    else {
        header.classList.add('open');
        hamburger.classList.add('hidden');
        close.classList.remove('hidden');
        title.classList.add('hidden');
        header.style.background = "linear-gradient(rgb(0,0,0), rgb(0,0,0)), url(images/mobile/image-hero.jpg)";
        header.style.backgroundSize = "cover";
        mobileLinks.classList.remove('hidden');
    }
});

close.addEventListener('click', function(){
    if(header.classList.contains('open')) {
        header.classList.remove('open');
        hamburger.classList.remove('hidden');
        close.classList.add('hidden');
        title.classList.remove('hidden');
        header.style.background = "linear-gradient(rgba(4,9,30,0.5), rgba(4,9,30,0.5)), url(images/mobile/image-hero.jpg)";
        header.style.backgroundSize = "cover";
        mobileLinks.classList.add('hidden');
    }
    else {
        header.classList.add('open');
    }
});
