const navbarHamburguer = document.getElementById("navbarHamburguer");

const navbarRight = document.getElementById("navbarRight");

const blackoverlay = document.getElementById('blackoverlay');

const bannerContainer = document.getElementById("bannerContainer")

const btnClose = document.querySelector("#navbarRight .top .times");

const openMenu = () => {
  navbarRight.style.display = 'flex';
  navbarRight.style.transition = 'none';
  navbarRight.style.right = "-100vw";
  blackoverlay.style.opacity = 0;
  blackoverlay.style.display = 'block';
  bannerContainer.style.zIndex = 40;
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
  
  bannerContainer.style.zIndex = 2;
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