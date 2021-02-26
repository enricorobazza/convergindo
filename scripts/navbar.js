const navbarHamburguer = document.getElementById("navbarHamburguer");

const navbarRight = document.getElementById("navbarRight");

const blackoverlay = document.getElementById('blackoverlay');

const bannerContainer = document.getElementById("bannerContainer")

const btnClose = document.querySelector("#navbarRight .top .times");

const navbar = document.getElementById("navbar");

const openMenu = () => {
  navbarRight.style.display = 'flex';
  navbarRight.style.transition = 'none';
  navbarRight.style.right = "-100vw";
  blackoverlay.style.opacity = 0;
  blackoverlay.style.display = 'block';
  if(bannerContainer) bannerContainer.style.zIndex = 40; // index.html
  else navbar.classList.remove('purple'); // login.html
  
  navbarRight.style.transition = 'right ease 400ms';
  setTimeout(()=>{
    navbarRight.style.right = "0vw";
    blackoverlay.style.opacity = 1;
  }, 10)
}

const closeMenu = () => {
  navbarRight.style.right = "-100vw";
  blackoverlay.style.opacity = 0;
  setTimeout(() => {
    navbarRight.style.display = 'none';
    blackoverlay.style.display = 'none';
  }, 400)
  
  if(bannerContainer) bannerContainer.style.zIndex = 2; // index.html
  else navbar.classList.add('purple');    // login.html
}

navbarHamburguer.addEventListener('click', () => {
  openMenu();
})

blackoverlay.addEventListener('click', () => {
 closeMenu();
})

btnClose.addEventListener('click', () => {
  closeMenu();
})