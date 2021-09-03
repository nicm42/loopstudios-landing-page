const menu = document.querySelector('.header__menu') as HTMLButtonElement;
const nav = document.querySelector('.header__nav') as HTMLUListElement;
const buttonImage = document.querySelector(
  '.header__hamburger'
) as HTMLImageElement;
const links = document.querySelectorAll('.header__link') as HTMLLinkElement;

menu.addEventListener('click', () => {
  nav.classList.toggle('open');
  if (nav.classList.contains('open')) {
    buttonImage.src = 'public/icon-close.svg';
  } else {
    buttonImage.src = 'public/icon-hamburger.svg';
  }
});

Array.from(links).map((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});
