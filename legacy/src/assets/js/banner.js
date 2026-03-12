// BANNER
if (document.getElementById('banner')) {
  // if peripheral page
  if (window.location.pathname.split('/')[1] !== '') {
    document.getElementById('banner').style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('pt3')
    document.getElementsByTagName('header')[0].classList.remove('header__top')
    if (window.screen.width < 500) {
      document.getElementsByTagName('header')[0].classList.add('pt1')
    }
  } else {
    // if main page
    document.getElementById('banner').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('pt3')
    document.getElementsByTagName('header')[0].classList.remove('header__top')
    if (window.screen.width < 500) {
      document.getElementsByTagName('header')[0].classList.add('pt2')
    }
  }
}
