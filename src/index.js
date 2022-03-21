const body = document.querySelector('body')

class NavBar {
  open = false;
  responsiveButton = document.querySelector('.navbar--menu-container')
  navbarItems = document.querySelector('.navbar__items')
  navbarLayout = document.querySelector('.navbar__layout')
  header = document.querySelector('.header')
  navbarObserverOptions = {
    root: null,
    threshold: [0.8],
  }
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
  _navbarObserver() {
    return new IntersectionObserver(this._navbarObserverCallback, this.navbarObserverOptions);
  }
  _navbarObserverCallback(entries, observer) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) {
      this.navbarLayout.classList.add('navbar__layout--sticky');
    }
    if (entry.isIntersecting) {
      this.navbarLayout.classList.remove('navbar__layout--sticky');
    }
  }
  _toggleOpen() {
    this.open = !this.open
  }
  _stickyNavbar() {
    const navbarObserver = this._navbarObserver();
    navbarObserver.observe(this.header);
  }
}

const navBar = new NavBar()