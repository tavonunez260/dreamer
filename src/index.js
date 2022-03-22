const body = document.querySelector('body')

class NavBar {
  open = false;
  responsiveButton = document.querySelector('.navbar--menu-container')
  navbarItems = document.querySelector('.navbar__items')
  navbarLayout = document.querySelector('.navbar__layout')
  navbarElement = document.querySelectorAll('.navbar__element')
  navbarLink = document.querySelectorAll('.navbar__link')
  navbarLogoImgTop = document.querySelector('.navbar__logo_img--top')
  navbarLogoImgBottom = document.querySelector('.navbar__logo_img--bottom')
  header = document.querySelector('.header')
  navbarObserverOptions = {
    root: null,
    threshold: [0.95, 0.05],
  }
  constructor () {
    this.responsiveButton.addEventListener('click', this._deployResponsiveMenu.bind(this))
    this._scrollNavbar()
  }
  _deployResponsiveMenu = (e) => {
    if(!this.open) {
      this.navbarItems.classList.add('navbar__items--active')
      this.navbarItems.classList.remove('navbar__items--inactive')
      this._toggleOpen()
    } else {
      this.navbarItems.classList.remove('navbar__items--active')
      this.navbarItems.classList.add('navbar__items--inactive')
      this._toggleOpen()
    }
  }
  _navbarObserver = () => {
    return new IntersectionObserver(this._navbarObserverCallback, this.navbarObserverOptions);
  }
  _navbarObserverCallback = (entries, observer) => {
    const [entry] = entries;
    if (entry.intersectionRatio <= 0.95 && entry.isIntersecting) {
      this.navbarLayout.classList.add('scroll')
      this.navbarLayout.classList.remove('non-scroll')

      this.navbarItems.classList.add('navbar__items--scroll')
      this.navbarItems.classList.remove('navbar__items--non-scroll')

      this.navbarLink.forEach(link => link.classList.add('scroll'))
      this.navbarLink.forEach(link => link.classList.remove('non-scroll'))

      this.navbarElement.forEach(link => link.classList.add('scroll'))

      this.navbarLogoImgTop.classList.add('navbar__logo_img--hide')
      this.navbarLogoImgBottom.classList.add('navbar__logo_img--show')
    } else {
      this.navbarLayout.classList.remove('scroll')
      this.navbarLayout.classList.add('non-scroll')

      this.navbarItems.classList.remove('navbar__items--scroll')
      this.navbarItems.classList.add('navbar__items--non-scroll')

      this.navbarLink.forEach(link => link.classList.remove('scroll'))
      this.navbarLink.forEach(link => link.classList.add('non-scroll'))

      this.navbarElement.forEach(link => link.classList.remove('scroll'))

      this.navbarLogoImgTop.classList.remove('navbar__logo_img--hide')
      this.navbarLogoImgBottom.classList.remove('navbar__logo_img--show')
    }

    if (entry.intersectionRatio <= 0.01 && !entry.isIntersecting) {
      console.log('I am off the screen!')
    }
  }
  _toggleOpen = () => {
    this.open = !this.open
  }
  _scrollNavbar = () => {
    const navbarObserver = this._navbarObserver();
    navbarObserver.observe(this.header);
  }
}

const navBar = new NavBar()