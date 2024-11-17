const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const header = document.querySelector('.header');


document.addEventListener('DOMContentLoaded', function () {
    burger.addEventListener("click", function (e) {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });


    function openMenu() {
        menu.classList.add('active');
        burger.classList.add('active');
        header.classList.add('active');

    }

    function closeMenu() {
        menu.classList.remove('active');
        burger.classList.remove('active');
        header.classList.remove('active');

    }


});
window.addEventListener('scroll', function() {
    const headerTop = document.querySelector('.header')


    if (window.scrollY > 0) {
        headerTop.classList.add('moved');

    } else {
        headerTop.classList.remove('moved');

    }
});


function toggleActiveState(item) {
    const icon = item.querySelector('.answers-freq-icon');
    const sub = item.querySelector('.answers-sub');

    if (icon.classList.contains('active') && sub.classList.contains('active')) {
        icon.classList.remove('active');
        sub.classList.remove('active');
    } else {
        document.querySelectorAll('.answers-freq-icon.active, .answers-sub.active').forEach(activeItem => {
            activeItem.classList.remove('active');
        });

        icon.classList.add('active');
        sub.classList.add('active');
    }
}

document.querySelectorAll('.answers-freq-item').forEach(item => {
    item.addEventListener('click', () => toggleActiveState(item));
    const icon = item.querySelector('.answers-freq-icon');
    icon.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleActiveState(item);
    });
});