const body = document.querySelector('body')

class NavBar {
  open = false;
  responsiveButton = document.querySelector('.navbar--menu-container')
  navbarItems = document.querySelector('.navbar__items')
  navbarLayout = document.querySelector('.navbar__layout')
  constructor() {
    this.responsiveButton.addEventListener('click', this._deployResponsiveMenu.bind(this))
  }
  _deployResponsiveMenu(e) {
    this.navbarItems.classList.toggle('navbar__items--active')
    this.navbarLayout.classList.toggle('navbar__layout--active')
  }
  _toggleOpen() {
    this.open = !this.open
  }
}

const navBar = new NavBar()