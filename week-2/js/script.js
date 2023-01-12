//Request 1: Click to Change Text.

const bannerUpdate = document.querySelector('.banner');

bannerUpdate.addEventListener( 'click', () => {
    const title = document.querySelector('h1');
    title.textContent = 'Have a Good Time!';
});

//Request 2: Click to Show/Close Menu.

const menuBtn = document.querySelector('.fa-bars');
const showMenu = document.querySelector('.nav-container');
const cancelBtn = document.querySelector('.cancel-btn');

menuBtn.addEventListener( 'click', () => {
    showMenu.style.display = 'inline-block';
});

cancelBtn.addEventListener( 'click', () => {
    showMenu.style.display = 'none';
});


//Request 3: Click to Show More Content Boxes.

const button = document.querySelector('.btn');

button.addEventListener( 'click', () => {
    const contentBoxesToShow = document.querySelector('.row2');
    contentBoxesToShow.style.display = 'flex';
});

