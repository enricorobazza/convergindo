const differentialsContainer = document.getElementById("differentialsContainer");
const differential = document.getElementsByClassName("differential");
const differentialNavActive = document.querySelector("#differentialsNav svg.active").cloneNode(true);
const differentialNavNotActive1 = document.querySelector("#differentialsNav svg:not(.active)").cloneNode(true);
const differentialNavNotActive2 = document.querySelector("#differentialsNav svg:not(.active)").cloneNode(true);
const differentialsNav = document.getElementById("differentialsNav");

let curSnapDifferential = 0;

const setCurSnapDifferential = (newValue) => {
  if(curSnapDifferential === newValue) return
  curSnapDifferential = newValue;

  differentialsNav.innerHTML = "";

  if(curSnapDifferential > 2){
    differentialsNav.appendChild(differentialNavNotActive1);
    differentialsNav.appendChild(differentialNavNotActive2);
    differentialsNav.appendChild(differentialNavActive);
  }

  else if(curSnapDifferential > 1){
    differentialsNav.appendChild(differentialNavNotActive1);
    differentialsNav.appendChild(differentialNavActive);
    differentialsNav.appendChild(differentialNavNotActive2);
  }

  else{
    differentialsNav.appendChild(differentialNavActive);
    differentialsNav.appendChild(differentialNavNotActive1);
    differentialsNav.appendChild(differentialNavNotActive2);
  }

}

differentialsContainer.addEventListener("scroll", (e) => {
  const scroll = e.target.scrollLeft;

  const width = differential[0].offsetWidth;

  if(scroll > 2 * width) setCurSnapDifferential(3);
  else if(scroll > width) setCurSnapDifferential(2);
  else setCurSnapDifferential(1);
})