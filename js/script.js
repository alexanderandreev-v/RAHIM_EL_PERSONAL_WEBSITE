const menu = document.getElementById('ic-menu');
const menuClose = document.getElementById('ic-close');
const menuWrapper = document.querySelector('.responsive-menu-wrapper');
const body = document.getElementById('page');

const btnLink_1 = document.getElementById('media-1'),
btnLink_2 = document.getElementById('media-2'),
btnLink_3 = document.getElementById('media-3'),
btnLink_4 = document.getElementById('media-4');

const hLink_1 = document.getElementById('media-1-heading'),
hLink_2 = document.getElementById('media-2-heading'),
hLink_3 = document.getElementById('media-3-heading'),
hLink_4 = document.getElementById('media-4-heading');

menu.addEventListener('click', ()=> {
    menu.classList.add('hide');
    menuClose.classList.add('show');
    menuWrapper.classList.add('show');
    body.classList.add('no-scroll');
});

menuClose.addEventListener('click', ()=> {
    menuClose.classList.remove('show');
    menuClose.classList.add('hide');
    menu.classList.remove('hide');
    menuWrapper.classList.remove('show');
    menuWrapper.classList.add('hide');
    body.classList.remove('no-scroll');
});

btnLink_1.addEventListener('mouseover', ()=> {
    hLink_1.classList.add('color-text-primary');
});

btnLink_1.addEventListener('mouseout', ()=> {
    hLink_1.classList.remove('color-text-primary');
});

btnLink_2.addEventListener('mouseover', ()=> {
    hLink_2.classList.add('color-text-primary');
});

btnLink_2.addEventListener('mouseout', ()=> {
    hLink_2.classList.remove('color-text-primary');
});

btnLink_3.addEventListener('mouseover', ()=> {
    hLink_3.classList.add('color-text-primary');
});

btnLink_3.addEventListener('mouseout', ()=> {
    hLink_3.classList.remove('color-text-primary');
});

btnLink_4.addEventListener('mouseover', ()=> {
    hLink_4.classList.add('color-text-primary');
});

btnLink_4.addEventListener('mouseout', ()=> {
    hLink_4.classList.remove('color-text-primary');
});

