const carouselSpeed = 700;

const bannerNavLeft = document.getElementById("bannerNavLeft");
const bannerNavRight = document.getElementById("bannerNavRight");
const banner = document.getElementById("banner");
const bannerContentRight = document.getElementById("bannerContentRight");
const bannerContentLeft = document.getElementById("bannerContentLeft");

const title = document.querySelector("#bannerContentLeft .title");
const boldTitle = document.querySelector("#bannerContentLeft .bold-title");

const banners = [
  {
    title: 'Aprenda a estratégia dos aprovados',
    boldTitle: 'em medicina na usp',
  },
  {
    title: 'Já olhou pro seu futuro hoje?',
    boldTitle: 'é hora de convergir.',
  }

]

let curBanner = 0;

const changeBanner = (dir) => {
  curBanner += dir;
  if(curBanner >= banners.length) curBanner = 0;
  if(curBanner < 0) curBanner = banners.length - 1;

  bannerContentLeft.style.transition = 'none';
  bannerContentLeft.style.opacity = 0;

  bannerContentLeft.style.transition = 'all ease 100ms';

  if(curBanner === 1){
    bannerContentRight.style.opacity = 0;
    banner.style.backgroundPosition = `100vw, 75%`;

    setTimeout(()=>{
      title.innerHTML = banners[curBanner].title;
      boldTitle.innerHTML = banners[curBanner].boldTitle;
      bannerContentLeft.style.opacity = 1;
      bannerContentRight.style.display = 'none';

    }, carouselSpeed)
  }

  else {
    console.log(banner.offsetWidth);
    banner.style.transition = "none";
    banner.style.backgroundPosition =  `-${banner.offsetHeight*1.77}px, 75%`;

    setTimeout(() => {
      banner.style.transition = `background-position ease ${carouselSpeed}ms`;
      banner.style.backgroundPosition = "50%, 75%";

      setTimeout(() => {
        title.innerHTML = banners[curBanner].title;
        boldTitle.innerHTML = banners[curBanner].boldTitle;
        bannerContentRight.style.display = 'block';
        bannerContentRight.style.opacity = 1;
        bannerContentLeft.style.opacity = 1;
      }, carouselSpeed)
    }, 50)
  }

  clearInterval(bannerInterval);

  bannerInterval = setInterval(()=>{
    changeBanner(1);
  }, 10000)

}

bannerNavLeft.addEventListener('click', () => {
  changeBanner(-1);
})

bannerNavRight.addEventListener('click', () => {
  changeBanner(1);
})

bannerInterval = setInterval(()=>{
  changeBanner(1);
}, 10000)