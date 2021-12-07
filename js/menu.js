const MENU_BTN = document.querySelector('#menuBtn')
const MENU_NAV = document.querySelector('#menuNav')

// show and hide the menu on mobile
var menuBtn = () => {
  MENU_BTN.addEventListener('click', () => {
    MENU_BTN.classList.toggle('menu__btn--active')
    MENU_NAV.classList.toggle('menu__nav--expanded')
    BODY.classList.toggle('freeze')
  })
}
