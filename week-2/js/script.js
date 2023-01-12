const bannerUpdate = document.querySelector('.banner');

bannerUpdate.addEventListener( 'click', () => {
    const title = document.querySelector('h1');
    title.textContent = 'Have a Good Time!';
});