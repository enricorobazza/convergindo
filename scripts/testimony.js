testimonyNavLeft = document.getElementById("testimonyNavLeft");
testimonyNavRight = document.getElementById("testimonyNavRight");
testimony = document.getElementsByClassName("testimony");
testimonysHolder = document.getElementById("testimonysHolder");

const testimonyNavActive = document.querySelector("#testimonysNav svg.active").cloneNode(true);
const testimonyNavNotActive1 = document.querySelector("#testimonysNav svg:not(.active)").cloneNode(true);
const testimonyNavNotActive2 = document.querySelector("#testimonysNav svg:not(.active)").cloneNode(true);
// const testimonyNavNotActive3 = document.querySelector("#testimonysNav svg:not(.active)").cloneNode(true);
const testimonysNav = document.getElementById("testimonysNav");

let curTestimony = 0;

const hideElement = (elem) => {
  elem.style.opacity = 0;
  setTimeout(() => {
    elem.style.display = 'none';
  }, 200);
}

const showElement = (elem) => {
  elem.style.display = 'block';
  setTimeout(() => {
    elem.style.opacity = 1;
  }, 10)
}

const setTestimony = (dir) => {
  curTestimony += dir;

  if(curTestimony == testimony.length - 2) hideElement(testimonyNavRight) 
  else showElement(testimonyNavRight);

  if(curTestimony == 0) hideElement(testimonyNavLeft);
  else showElement(testimonyNavLeft);

  let i;
  for(i = 0; i < testimony.length - 1; i++) {
    testimony[i].classList.remove("active");
  }

  const testimonysSize = testimony[0].offsetWidth / testimonysHolder.offsetWidth;

  let scrollTo = testimony[curTestimony].offsetLeft;
  if(dir > 0 || testimonysSize > 0.8) scrollTo -= 50;
  else scrollTo -= 40;

  testimonysHolder.scrollTo({
    top: 0,
    left: scrollTo,
    behavior: 'smooth'
  })

  setTimeout(() => {
    testimony[curTestimony].classList.add("active");
  }, 300)

  testimonysNav.innerHTML = "";

  if(curTestimony > 2){
    testimonysNav.appendChild(testimonyNavNotActive1);
    testimonysNav.appendChild(testimonyNavNotActive2);
    // testimonysNav.appendChild(testimonyNavNotActive3);
    testimonysNav.appendChild(testimonyNavActive);
  }

  else if(curTestimony > 1){
    testimonysNav.appendChild(testimonyNavNotActive1);
    testimonysNav.appendChild(testimonyNavNotActive2);
    testimonysNav.appendChild(testimonyNavActive);
    // testimonysNav.appendChild(testimonyNavNotActive3);
  }

  else if(curTestimony > 0){
    testimonysNav.appendChild(testimonyNavNotActive1);
    testimonysNav.appendChild(testimonyNavActive);
    testimonysNav.appendChild(testimonyNavNotActive2);
    // testimonysNav.appendChild(testimonyNavNotActive3);
  }

  else{
    testimonysNav.appendChild(testimonyNavActive);
    testimonysNav.appendChild(testimonyNavNotActive1);
    testimonysNav.appendChild(testimonyNavNotActive2);
    // testimonysNav.appendChild(testimonyNavNotActive3);
  }

  // testimony[0].style.marginLeft = - testimony[curTestimony].offsetLeft;

}

testimonyNavLeft.addEventListener("click", (e) => {
  setTestimony(-1);
});

testimonyNavRight.addEventListener("click", (e) => {
  setTestimony(1);
});


testimonysNav.innerHTML = "";
testimonysNav.appendChild(testimonyNavActive);
testimonysNav.appendChild(testimonyNavNotActive1);
testimonysNav.appendChild(testimonyNavNotActive2);
// testimonysNav.appendChild(testimonyNavNotActive3);

window.addEventListener('resize', () => {
  let scrollTo = testimony[curTestimony].offsetLeft - 50;

  testimonysHolder.scrollTo({
    top: 0,
    left: scrollTo,
    // behavior: 'smooth'
  })
})
