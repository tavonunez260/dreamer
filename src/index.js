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
    if(!this.open) {
      this.navbarItems.classList.add('active')
      this.navbarItems.classList.remove('inactive')
      this._toggleOpen()
    } else {
      this.navbarItems.classList.remove('active')
      this.navbarItems.classList.add('inactive')
      this._toggleOpen()
    }
  }
  _toggleOpen() {
    this.open = !this.open
  }
}

const navBar = new NavBar()