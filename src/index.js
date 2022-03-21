const body = document.querySelector('body')

class NavBar {
  open = false;
  responsiveButton = document.querySelector('.navbar--menu-container')
  navbarItems = document.querySelector('.navbar__items')
  navbarLayout = document.querySelector('.navbar__layout')
  navbarElement = document.querySelectorAll('.navbar__element')
  navbarLink = document.querySelectorAll('.navbar__link')
  navbarLogoImg = document.querySelector('.navbar__logo_img')
  header = document.querySelector('.header')
  navbarObserverOptions = {
    root: null,
    threshold: [0.95, 0.01],
  }
  constructor () {
    this.responsiveButton.addEventListener('click', this._deployResponsiveMenu.bind(this))
    this._scrollNavbar()
  }
  _deployResponsiveMenu = (e) => {
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
  _navbarObserver = () => {
    return new IntersectionObserver(this._navbarObserverCallback, this.navbarObserverOptions);
  }
  _navbarObserverCallback = (entries, observer) => {
    const [entry] = entries;
    if (entry.intersectionRatio <= 0.95 && entry.isIntersecting) {
      this.navbarLayout.classList.add('scroll')
      this.navbarLayout.classList.remove('non-scroll')
      this.navbarItems.classList.add('scroll')
      this.navbarItems.classList.remove('non-scroll')
      this.navbarLink.forEach(link => link.classList.add('scroll'))
      this.navbarLink.forEach(link => link.classList.remove('non-scroll'))
      this.navbarElement.forEach(link => link.classList.add('scroll'))
      this.navbarLogoImg.setAttribute('src', './img/logoDreamer.png')
    } else {
      this.navbarLayout.classList.remove('scroll')
      this.navbarLayout.classList.add('non-scroll')
      this.navbarItems.classList.remove('scroll')
      this.navbarItems.classList.add('non-scroll')
      this.navbarLink.forEach(link => link.classList.remove('scroll'))
      this.navbarLink.forEach(link => link.classList.add('non-scroll'))
      this.navbarElement.forEach(link => link.classList.remove('scroll'))
      this.navbarLogoImg.setAttribute('src', './img/logoDreamerLight.png')
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