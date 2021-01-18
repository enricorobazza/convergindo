const planNavActive = document.querySelector("#plansNav svg.active").cloneNode(true);
const planNavNotActive = document.querySelector("#plansNav svg:not(.active)").cloneNode(true);
const plansNav = document.getElementById("plansNav");
const plan = document.getElementsByClassName("plan");

const plansContainer = document.getElementById("plansContainer");

const setPlan = (index) => {
  plansNav.innerHTML = "";

  if(index == 1){
    plansNav.appendChild(planNavNotActive);
    plansNav.appendChild(planNavActive);
  }

  else{
    plansNav.appendChild(planNavActive);
    plansNav.appendChild(planNavNotActive);
  }
}

plansContainer.addEventListener("scroll", (e) => {
  const scrollLeft = e.target.scrollLeft;

  const width = plan[0].offsetWidth;

  if(scrollLeft > width / 2) setPlan(1);
  else setPlan(0);
});

setPlan(0);